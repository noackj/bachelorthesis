#####################################
# TCP_Server.py                     #
# Server to communicate with TDA    #
# receives and sends messages       #
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
import socket

# necessary to show Log Infos in console
import ADTF_Interface

# Determine interpretation of Data
uint32_struct = struct.Struct(">I")
byte_struct = struct.Struct("B")
ushort_struct = struct.Struct(">H")
message_struct = struct.Struct(">BBBH")

class TCP_Server:    
    # Constructor of TCP Server
    def __init__(self,ADTF,IPAddress,Port):
        ADTF.PrintLog("Call Constructor TCP_Server")
        self.__Server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.__Server.bind((IPAddress, Port))
        self.__Server.listen(1)
        self.__CommunicationSocket, self.__Address = self.__Server.accept()
        ADTF.PrintLog("Communication Socket set up")
        self.__MonitoringData = None
            
    # Destructor of TCP Server
    def __del__(self):
        self.__CommunicationSocket.close()
        self.__Server.close()

    # Receive Messages
    def Receive(self,ADTF,blocking=1):
        # blocking=1 --> blocking server; blocking=0 --> nonblocking server
        self.__CommunicationSocket.setblocking(blocking)
        ADTF.PrintLog("Receive Message with blocking = " + str(blocking))
        MessageID = 0
        TaskID = 0
        Message = ""
        try:
            Message = self.__CommunicationSocket.recv(65536)
        except socket.error, e:
            # no data received
            return (MessageID, TaskID, Message)
        ADTF.PrintLog("Received Message: " + str(Message))
        AmountOfPackages,Offsets = self.__GetAmountOfPackages(Message)            
        ADTF.PrintLog("Amount of Packages: " + str(AmountOfPackages))
        Messages = []
        for i in range(AmountOfPackages):
                Messages.append(Message[(Offsets[i]):(Offsets[i+1])])
        ADTF.PrintLog("Nachrichten in Array:")
        ADTF.PrintLog(Messages)

        MessageID = []
        TaskID = []
        for i in range(AmountOfPackages):
            # Parse Message(s) --> Save General Information
            MessageID.append(byte_struct.unpack_from(Messages[i], 3)[0])
            MessageSize = ushort_struct.unpack_from(Messages[i], 4)[0]
            # Message Value stays String
            MessageValue = Messages[i][(6): (6 + MessageSize)]
            # Message Value gets split --> Array of Parameters
            MessageValueSplit = MessageValue[0:].split('\x00')
            # TaskID is in first section
            TaskID.append(byte_struct.unpack_from(MessageValueSplit[0])[0])
        ADTF.PrintLog("Message IDs: " + str(MessageID))
        ADTF.PrintLog("Task IDs: " + str(TaskID))
        #return (MessageID[0], TaskID[0], Messages[0])
        return (MessageID, TaskID, Messages)

    def SetMonitoringData(self,ADTF,Data):
        # Save values of Monitoring Data until they get sent
        ADTF.PrintLog("Set Monitoring Data")
        self.__MonitoringData = Data

    # Send Messages
    def Send(self,ADTF,Message):
        if Message != None:
            ADTF.PrintLog("Send Message: " + str(Message))
            try:
                self.__CommunicationSocket.send(Message)
            except IOError, e:
                ADTF.PrintLog("Error when sending via TCP. Connection lost. No data send")
        else:
            ADTF.PrintLog("No Data to send")

    def SendMonitoringData(self,ADTF):
        ADTF.PrintLog("Call SendMonitoringData")
        if self.__MonitoringData != None:
            ADTF.PrintLog("Send Monitoring Data: " + str(self.__MonitoringData))
            try:
                self.__CommunicationSocket.send(self.__MonitoringData)
            except IOError, e:
                ("Error when sending data")
        else:
            ADTF.PrintLog("No Monitoring Data to send")

    def __GetAmountOfPackages(self,Message):
        AmountOfPackages = 1
        # length of first package
        CumulativeSize = ushort_struct.unpack_from(Message, 4)[0] + 6
        Offsets = [0,CumulativeSize]
        while len(Message) != CumulativeSize:
            try:
                Size = ushort_struct.unpack_from(Message, CumulativeSize+4)[0] + 6
            except struct.error, e:
                break
            CumulativeSize = CumulativeSize + Size
            Offsets.append(CumulativeSize)
            AmountOfPackages = AmountOfPackages + 1
        return (AmountOfPackages,Offsets)
