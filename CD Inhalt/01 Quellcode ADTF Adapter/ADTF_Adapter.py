#####################################
# ADTF_Adapter.py                   #
# Main Script that builds Adapter   #
# of ADTF for TDA                   #
#####################################

import sys
import os
import time
import thread
import threading

# necessary to find other Python Classes
#os.chdir(r"D:\TestDriveAssistant\Quellcode\Messrechner\ADTF Adapter Python\ADTF with Idle")
os.chdir(r"D:\TestDriveAssistant\Quellcode\Messrechner\ADTF Adapter Python\ADTF")
sys.path.append(os.getcwd())

# necessary to show failures in console
#####################################
# Class of ADTF to send commands to ADTF
import adtf

# This is the ADTF Log object
log = adtf.Log()

# This log object can be registered as the stderr, so you get interpretor errors in the adtf console
sys.stderr = log
#####################################

# project classes
import ADTF_Interface
import TCP_Server
import UDP_Server
import Task
import Measurement
import Online_Analyser

# Function AliveCounter() sets global variable when timer is expired
def AliveCounter():
    ADTF.PrintLog("Connection to TDA lost")
    global TDAisAlive
    TDAisAlive = False

# Function waits 0.2 seconds, reads value from global Variable and sends Data of global Variable
def SendMonitoringData(CommunicationInterface):
    ADTF.PrintLog("SendMonitoringData Thread started")
    global StopMonitoringThread
    global StopAdapter
    while True:
        ADTF.PrintLog("SendMonitoringData")
        time.sleep(0.2)
        if StopMonitoringThread == True:
            break
        if StopAdapter == True:
            break
        # Variable of main Thread can be changed
        CommunicationInterface.SendMonitoringData(ADTF)
    StopMonitoringThread = False

TDAisAlive = None
AliveTimeSlot = 60
ADTF = ADTF_Interface.ADTFInterface()
ADTF.SetLogfile("Logggg")
ADTF.PrintLog("Start ADTF Adapter")
Port = 55555
IPAddress = "localhost"

# Build Communication Inferface to TDA
CommunicationInterface = TCP_Server.TCP_Server(ADTF,"IPAddress",Port)
TDAisAlive = True
AliveTest = threading.Timer(AliveTimeSlot, AliveCounter, [])
AliveTest.start()
# Value to show that Monitoring is active
MonitoringThread = None
# Build Interface for Onlineanalyser
AnalyserInterface = UDP_Server.UDP_Server(ADTF,3333)

Measurement = None
OnlineAnalyser = None
MessageMonitoringData = None
AnalysisAnswer = None
Blocking = 1
NonBlocking = 0
StopAdapter = False
StopMonitoringThread = False
while (StopAdapter == False):
    # gets changed by Function AliveCounter()
    if TDAisAlive == True:
        # Receive Messages
        MessageID, TaskID, Message = CommunicationInterface.Receive(ADTF,NonBlocking)
        if MessageID == 0:
            # ADTF.PrintLog("No Message received")
            MessageAnswer = None
        else:
            # Message received
            # Reset Alive Counter
            AliveTest.cancel()
            AliveTest = threading.Timer(AliveTimeSlot, AliveCounter, [])
            AliveTest.start()
            AmountOfMessages = len(MessageID)
            ADTF.PrintLog(str(AmountOfMessages) + " Message(s) received")
            for i in range(AmountOfMessages):
                if MessageID[i] == 1:
                    if TaskID[i] == 1:
                        # Alive Request
                        Task1 = Task.Task(ADTF, MessageID[i], TaskID[i], Message[i])
                        MessageAnswer = Task1.ExecuteTask()
                    elif TaskID[i] == 2:
                        # Configuration still running Request
                        Task1 = Task.Task(ADTF, MessageID[i], TaskID[i], Message[i])
                        MessageAnswer = Task1.ExecuteTask()
                    elif TaskID[i] == 3:
                        # Onlineanalysis possible
                        Task1 = Task.Task(ADTF, MessageID[i], TaskID[i], Message[i])
                        MessageAnswer,Options = Task1.ExecuteTask()
                        Command = "validateDBC"
                        OnlineAnalyser = Online_Analyser.Online_Analyser(ADTF,Command,Options)
                    else:
                        ADTF.PrintLog("Wrong Task ID")
                elif MessageID[i] == 2:
                    if TaskID[i] == 1:
                        # Load Config
                        Task1 = Task.Task(ADTF, MessageID[i], TaskID[i], Message[i])
                        MessageAnswer,RecordPath = Task1.ExecuteTask()
                    elif TaskID[i] == 2:
                        # Shutdown Config
                        Task1 = Task.Task(ADTF, MessageID[i], TaskID[i], Message[i])
                        MessageAnswer = Task1.ExecuteTask()
                    elif TaskID[i] == 3:
                        # Add Comment
                        Task1 = Task.Task(ADTF, MessageID[i], TaskID[i], Message[i])
                        MessageAnswer = Task1.ExecuteTask(Measurement)
                    elif TaskID[i] == 4:
                        # Start Recording
                        Task1 = Task.Task(ADTF, MessageID[i], TaskID[i], Message[i])
                        MessageAnswer,Measurement = Task1.ExecuteTask(Measurement)
                    elif TaskID[i] == 5:
                        # Stop Recording
                        Task1 = Task.Task(ADTF, MessageID[i], TaskID[i], Message[i])
                        MessageAnswer = Task1.ExecuteTask(Measurement)
                        del Measurement
                        # define Measurement to detect that no measurement exists
                        Measurement = None
                    elif TaskID[i] == 6:
                        # Stop ADTF Adapter
                        Task1 = Task.Task(ADTF, MessageID[i], TaskID[i], Message[i])
                        MessageAnswer = Task1.ExecuteTask()
                        StopAdapter = True
                    else:
                        ADTF.PrintLog("Wrong Task ID")
                elif MessageID[i] == 3:
                    # Start Onlineanalysis
                    if (OnlineAnalyser == None):
                        ADTF.PrintLog("Analysis not initialised")
                    else:
                        Task1 = Task.Task(ADTF, MessageID[i], TaskID[i], Message[i])
                        MessageAnswer,Options = Task1.ExecuteTask()
                        AnalysisFinished = False
                        if TaskID[i] == 1:
                            # Monitoring
                            Command = "activateMonitoring"
                            OnlineAnalyser.SetMode(ADTF,Task1,Command,Options)
                            OnlineAnalyser.StartAnalysis(ADTF)
                            ####
                            AnalyserInterface.Receive(ADTF)
                            ####
                            if MonitoringThread == None:
                                # start thread for periodical sending of data
                                ADTF.PrintLog("Initialize MonitoringThread")
                                MonitoringThread = thread.start_new_thread(SendMonitoringData,(CommunicationInterface,))
                        elif TaskID[i] == 2:
                            # Setup Proof
                            Command = "setupFilter"
                            OnlineAnalyser.SetMode(ADTF,Task1,Command,Options)
                            OnlineAnalyser.StartAnalysis(ADTF)
                            ####
                            AnalyserInterface.Receive(ADTF)
                            ####
                        elif TaskID[i] == 3:
                            # Proof and Monitoring
                            Command = "setupMonitoringFilter"
                            OnlineAnalyser.SetMode(ADTF,Task1,Command,Options)
                            OnlineAnalyser.StartAnalysis(ADTF)
                            ####
                            AnalyserInterface.Receive(ADTF)
                            ####
                            if MonitoringThread == None:
                                ADTF.PrintLog("Initialize MonitoringThread")
                                MonitoringThread = thread.start_new_thread(SendMonitoringData,(CommunicationInterface,))
                        elif TaskID[i] == 4:
                            pass
                        else:
                            ADTF.PrintLog("Wrong Task ID")
                else:
                    ADTF.PrintLog("Wrong MessageID")
                # send answer for Task
                if not (MessageAnswer == None):
                    CommunicationInterface.Send(ADTF,MessageAnswer)
        # Handler for OnlineAnalyser
        if OnlineAnalyser != None:
            # OnlineAnalysis initialised
            if OnlineAnalyser.GetMode() == 0:
                # no active analysis running
                pass
            elif OnlineAnalyser.GetMode() == 1:
                # Monitoring
                MessageMonitoringData,AnalysisFinished = OnlineAnalyser.ReceiveDataFromFilter(ADTF,AnalyserInterface.Receive(ADTF))
                if MessageMonitoringData != None:
                    # set data to transmit with next monitoring thread
                    CommunicationInterface.SetMonitoringData(ADTF,MessageMonitoringData)
                if AnalysisFinished == True:
                    #MonitoringThread.exit()
                    StopMonitoringThread = True
                    MonitoringThread = None
            elif OnlineAnalyser.GetMode() == 2:
                # Setup Proof
                AnalysisAnswer,AnalysisFinished = OnlineAnalyser.ReceiveDataFromFilter(ADTF,AnalyserInterface.Receive(ADTF))
                if AnalysisFinished == True:
                    OnlineAnalyser.ResetAnalyser(ADTF)
            elif OnlineAnalyser.GetMode() == 3:
                # Proof and Monitoring
                MessageMonitoringData,AnalysisFinished = OnlineAnalyser.ReceiveDataFromFilter(ADTF,AnalyserInterface.Receive(ADTF))
                if MessageMonitoringData != None:
                    # set data to transmit with next monitoring thread
                    CommunicationInterface.SetMonitoringData(ADTF,MessageMonitoringData)
                if AnalysisFinished == True:
                    #MonitoringThread.exit()
                    StopMonitoringThread = True
                    MonitoringThread = None
                    OnlineAnalyser.ResetAnalyser(ADTF)
            # send answer for Analysis
            if (AnalysisAnswer != None):
                CommunicationInterface.Send(ADTF,AnalysisAnswer)
                AnalysisAnswer = None
    else:
        # TDA is not alive anymore
        ADTF.PrintLog("Stop modules")
        # if Measurement is running stop it and save collected data
        if (Measurement != None):
            Measurement.AddComment(ADTF,"","Measurement stopped automatically because connection to TDA was lost")
            Filename, ShortDescription, LongDescription = Measurement.GetInformation()
            ADTF.StopRecording(0,Filename,ShortDescription,LongDescription)
            del Measurement
        if (OnlineAnalyser != None):
            del OnlineAnalyser
        StopAdapter = True
### last send before ADTF gets stopped
##if not (MessageAnswer == None):
##    CommunicationInterface.Send(ADTF,MessageAnswer)
        
# wait until last SendMonitoringData is executed
ADTF.PrintLog("StopAdapter = " + str(StopAdapter))
ADTF.PrintLog("Wait until last send is done")
time.sleep(1)
ADTF.PrintLog("Stop Interfaces")
# Delete Communication Interface to TDA
del CommunicationInterface
del AnalyserInterface
if MonitoringThread != None:
    #MonitoringThread.exit()
    StopMonitoringThread = True
ADTF.PrintLog("ADTF Adapter stopped")
