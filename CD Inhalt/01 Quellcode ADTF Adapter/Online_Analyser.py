#####################################
# Online_Analyser.py                 #
# Class parses received Messages    #
# and generates commands for Filter #
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
import Task

# Determine interpretation of Data
byte_struct = struct.Struct("B")
ushort_struct = struct.Struct(">H")
message_struct = struct.Struct(">BHBH")

class Online_Analyser:
    # Initialisation followed by validation of dbc-file
    def __init__(self,ADTF,Command,Options):
        ADTF.PrintLog("Constructor OnlineAnalyser")
        self.__Mode = 0
        # self.UDPServer = UDPServer
        self.__Filtername = "Berner-Mattners_Fahrerarbeitsplatz_Filter"
        self.__Command = Command
        self.__Options = Options
        self.__OnlineAnalysisTask = None
        self.__AnalysisFinished = None
        ADTF.FilterSendCommand(self.__Filtername,self.__GenerateFiltercommand())

    def SetMode(self,ADTF,Task,Command,Options):
        self.__OnlineAnalysisTask = Task
        self.__Mode = self.__OnlineAnalysisTask.GetTaskID()
        self.__Command = Command
        self.__Options = Options
        ADTF.PrintLog("Changed Mode to: " + str(self.__Mode) + " " + str(self.__Command) + " " + str(self.__Options))

    def ResetAnalyser(self,ADTF):
        self.__Mode = 0
        self.__Command = ""
        self.__Options = ""
        self.__OnlineAnalysisTask = None
        self.__AnalysisFinished = None

    def StartAnalysis(self,ADTF):
        ADTF.PrintLog("StartAnalysis")
        ADTF.FilterSendCommand(self.__Filtername,self.__GenerateFiltercommand())
        # read out all received data, because they are not relevant anymore
        # self.UDPServer.Receive(ADTF)
        self.__AnalysisFinished = False

    def GetMode(self):
        return self.__Mode

    def ReceiveDataFromFilter(self,ADTF,ReceivedData):
        ADTF.PrintLog("Call ReceiveDataFromFilter for mode :" + str(self.__Mode))
        # ReceivedData = self.UDPServer.Receive(ADTF)
        if ReceivedData == None:
            return None,self.__AnalysisFinished
        # always 2 because answers always to specified Task
        MessageIDAnswer = 2
        if self.__Mode == 1:
            # analyse receivedData and generate MessageValue to return to TDA
            # send data after first value (int State ID), Offset is 2 because of 1 Byte for StateID and 1 Byte for ';'
            MessageValueAnswer = byte_struct.pack(0) + '\x00' + ReceivedData[2:] + '\x00'
            return (self.__CreateAnswerForTDA(ADTF,MessageIDAnswer,MessageValueAnswer),self.__AnalysisFinished)
        elif self.__Mode == 2:
            # if message is returned from filter in this mode, the condition is fulfilled --> mode can be set to 0
            MessageValueAnswer = byte_struct.pack(0) + '\x00'
            self.__Mode = 0
            self.__AnalysisFinished = True
            return (self.__CreateAnswerForTDA(ADTF,MessageIDAnswer,MessageValueAnswer),self.__AnalysisFinished)
        elif self.__Mode == 3:
            if ushort_struct.unpack_from(ReceivedData, 2)[0] == 1:
                # proof fulfilled
                MessageValueAnswer = byte_struct.pack(0) + '\x00' + ReceivedData[2:] + '\x00'
                self.__Mode = 0
                self.__AnalysisFinished = True
            else:
                MessageValueAnswer = byte_struct.pack(0) + '\x00' + ReceivedData[2:] + '\x00'                
            return (self.__CreateAnswerForTDA(ADTF,MessageIDAnswer,MessageValueAnswer),self.__AnalysisFinished)

    def __GenerateFiltercommand(self):
        Filtercommand = "<cmd name=\"" + self.__Command + "\" " + self.__Options + "/>"
        return Filtercommand
    
    def __CreateAnswerForTDA(self,ADTF,MessageIDAnswer,MessageValueAnswer):
        ADTF.PrintLog("Create Answer for Analysis")
        Message = message_struct.pack(self.__OnlineAnalysisTask.GetProtocolversion(),self.__OnlineAnalysisTask.GetOrderNumber(),MessageIDAnswer,len(MessageValueAnswer))+MessageValueAnswer
        return Message
