#####################################
# UDP_Server.py                     #
# Server to communicate with        #
# Onlineanalyserfilter              #
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

import socket 

# necessary to show Log Infos in console
import ADTF_Interface

class UDP_Server:
    # Constructor of UDP Server
    def __init__(self,ADTF,Port):
        ADTF.PrintLog("Call Constructor UDP_Server")
        self.__Server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.__Server.bind(("localhost",Port))
        self.__Server.setblocking(0)

    # Destructor of UDP Server
    def __del__(self):
        self.__Server.close()

    # Receive Messages
    def Receive(self,ADTF):
        # receive last data from Analyser
        ADTF.PrintLog("Call Receive Message from Analyser")
        Data = ""
        # packages get read out seperately --> read out until nothing is received
        while True:
            try:
                Data = self.__Server.recv(65536)
            except socket.error, e:
                # if Data is still empty, no data were received
                if Data == "":
                    ADTF.PrintLog("No new data received")
                    return None
                else:
                    ADTF.PrintLog("Current data is: " + str(Data))
                    return Data
