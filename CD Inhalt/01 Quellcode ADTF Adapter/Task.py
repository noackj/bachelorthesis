#####################################
# Task.py                           #
# Class parses messages, creates    #
# new Tasks and executes them       #
#####################################

# necessary to show failures in console
#####################################
# Class of ADTF to send commands to ADTF
import adtf
import sys

# This is the ADTF Log object
log = adtf.Log()

# This log object can be registered as the stderr, so you get interpretor errors in the adtf console
sys.stderr = log
#####################################

import struct
import Measurement

# necessary to show Log Infos in console
import ADTF_Interface

# Determine interpretation of Data
uint32_struct = struct.Struct(">I")
byte_struct = struct.Struct("B")
ushort_struct = struct.Struct(">H")
message_struct = struct.Struct(">BHBH")

class Task:
    def __init__(self,ADTF,MessageID,TaskID,Message):
        self.__ADTF = ADTF
        self.__MessageID = MessageID
        self.__TaskID = TaskID
        self.__Parameter1 = None
        self.__Parameter2 = None
        self.__Parameter3 = None
        self.__Result = None
        # Parse Message --> Save General Information
        self.__Protocolversion = byte_struct.unpack_from(Message)[0]
        self.__OrderNumber = ushort_struct.unpack_from(Message, 1)[0]
        self.__MessageID = byte_struct.unpack_from(Message, 3)[0]
        self.__MessageSize = ushort_struct.unpack_from(Message, 4)[0]
        # Message Value stays String
        self.__MessageValue = Message[(6): (6 + self.__MessageSize)]
        # Message Value gets split --> Array of Parameters
        self.__MessageValueSplit = self.__MessageValue[0:].split('\x00')
        
        self.__ADTF.PrintLog("Protokollversion: " + str(self.__Protocolversion))
        self.__ADTF.PrintLog("Order Number: " + str(self.__OrderNumber))
        self.__ADTF.PrintLog("Message ID: " + str(self.__MessageID))
        self.__ADTF.PrintLog("Message Size: " + str(self.__MessageSize))
        self.__ADTF.PrintLog("Task ID: " + str(self.__TaskID))

    def ExecuteTask(self,MeasurementADTF=None):
        # decide operation for Message
        if self.__MessageID == 1:
            if self.__TaskID == 1:
                # Alive Request
                MessageIDAnswer = 2
                MessageValueAnswer = byte_struct.pack(0) + '\x00'
                return self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer)
            elif self.__TaskID == 2:
                # Configuration still running request
                Runlevel = self.__ADTF.GetRunlevel()
                MessageIDAnswer = 2
                if Runlevel == 5:
                    MessageValueAnswer = byte_struct.pack(0) + '\x00'
                    return self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer)
                else:
                    MessageValueAnswer = byte_struct.pack(1) + '\x00' + "Configuration is not running anymore"
                    return self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer)
            elif self.__TaskID == 3:
                # OnlineAnalysis possible
                self.__Parameter1 = self.__MessageValueSplit[1]
                MessageIDAnswer = 2
                MessageValueAnswer = byte_struct.pack(0) + '\x00'
                return (self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer),self.__Parameter1)
        elif self.__MessageID == 2:
            if self.__TaskID == 1:
                # Load Config
                self.__Parameter1 = self.__MessageValueSplit[1]
                self.__Parameter2 = self.__MessageValueSplit[2]
                self.__Result = self.__ADTF.LoadConfiguration(self.__Parameter1)
                # SetRecordingFolder does not return a value
                self.__ADTF.SetRecordingFolder(self.__Parameter2)
                # Add Result, if both were successful, Result should hold value 0
                self.__Result = self.__Result + self.__ADTF.StartConfiguration()
                if self.__Result == 0:
                    # successful, generate Message
                    self.__ADTF.PrintLog("Configuration loaded")
                    MessageIDAnswer = 2
                    MessageValueAnswer = byte_struct.pack(0) + '\x00'
                    return (self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer),self.__Parameter2)
                else:
                    # execution failed, generate Message
                    self.__ADTF.PrintLog("failed to load configuration")
                    MessageIDAnswer = 2
                    MessageValueAnswer = byte_struct.pack(1) + '\x00' + "Unable to open configuration" + '\x00'
                    self.__ADTF.PrintLog(MessageValueAnswer)
                    return (self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer),None)
            elif self.__TaskID == 2:
                # Shutdown Config
                self.__ADTF.StopConfiguration()
                self.__Result = self.__ADTF.ShutDownConfiguration()
                if self.__Result == 0:
                    # successful, generate Message
                    self.__ADTF.PrintLog("Configuration unloaded")
                    MessageIDAnswer = 2
                    MessageValueAnswer = byte_struct.pack(0) + '\x00'
                    return self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer)
                else:
                    # execution failed, generate Message
                    self.__ADTF.PrintLog("failed to unload configuration")
                    MessageIDAnswer = 2
                    MessageValueAnswer = byte_struct.pack(1) + '\x00' + "Unable to close configuration" + '\x00'
                    return self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer)
            elif self.__TaskID == 3:
                # Add Comment
                self.__ADTF.PrintLog("Adding Comment")
                self.__Parameter1 = self.__MessageValueSplit[1]
                MeasurementADTF.AddComment(self.__ADTF,None,self.__Parameter1)
                MessageIDAnswer = 2
                MessageValueAnswer = byte_struct.pack(0) + '\x00'
                return self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer)
            elif self.__TaskID == 4:
                # Start Recording
                self.__Parameter1 = self.__MessageValueSplit[1]
                self.__Parameter2 = self.__MessageValueSplit[2]
                self.__Parameter3 = self.__MessageValueSplit[3]
                self.__Result = self.__ADTF.StartRecording(0,self.__Parameter1)
                if self.__Result == 0:
                    # successful, generate Message
                    self.__ADTF.PrintLog("Recording started")
                    MessageIDAnswer = 2
                    MessageValueAnswer = byte_struct.pack(0) + '\x00'
                    MeasurementADTF = Measurement.Measurement(self.__ADTF,self.__Parameter1,self.__Parameter2,self.__Parameter3)
                    return (self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer),MeasurementADTF)
                else:
                    # execution failed, generate Message
                    self.__ADTF.PrintLog("unable to start recording")
                    MessageIDAnswer = 2
                    MessageValueAnswer = byte_struct.pack(1) + '\x00' + "Unable to start recording" + '\x00'
                    return (self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer),MeasurementADTF)
            elif self.__TaskID == 5:
                # Stop Recording
                self.__Parameter1 = self.__MessageValueSplit[1]
                self.__Parameter2 = self.__MessageValueSplit[2]
                self.__Parameter3 = self.__MessageValueSplit[3]
                MeasurementADTF.AddComment(self.__ADTF,self.__Parameter2,self.__Parameter3)
                Filename, ShortDescription, LongDescription = MeasurementADTF.GetInformation()
                self.__Result = self.__ADTF.StopRecording(0,Filename,ShortDescription,LongDescription)
                if self.__Result == 0:
                    # successful, generate Message
                    self.__ADTF.PrintLog("Recording stopped")
                    MessageIDAnswer = 2
                    MessageValueAnswer = byte_struct.pack(0) + '\x00'
                    return self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer)
                else:
                    # execution failed, generate Message
                    self.__ADTF.PrintLog("unable to stop recording")
                    MessageIDAnswer = 2
                    MessageValueAnswer = byte_struct.pack(1) + '\x00' + "Unable to stop recording" + '\x00'
                    return (self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer),MeasurementADTF)
            elif self.__TaskID == 6:
                # Stop Adapter
                MessageIDAnswer = 2
                MessageValueAnswer = byte_struct.pack(0) + '\x00'
                return self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer)
                
        elif self.__MessageID == 3:
            # Onlineanalysis
            self.__Parameter1 = self.__MessageValueSplit[1]
            MessageIDAnswer = 2
            MessageValueAnswer = byte_struct.pack(0) + '\x00'
            return (self.__CreateAnswer(MessageIDAnswer,MessageValueAnswer),self.__Parameter1)
        
    def GetTaskID(self):
        return self.__TaskID

    def GetProtocolversion(self):
        return self.__Protocolversion

    def GetOrderNumber(self):
        return self.__OrderNumber

    def __CreateAnswer(self,MessageIDAnswer,MessageValueAnswer):
        self.__ADTF.PrintLog("Create Answer for Task")
        self.__ADTF.PrintLog(MessageValueAnswer)
        Message = message_struct.pack(self.__Protocolversion,self.__OrderNumber,MessageIDAnswer,len(MessageValueAnswer))+MessageValueAnswer
        return Message
