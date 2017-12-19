#####################################
# Measurement.py                    #
# Class for Measurement to support  #
# functions of Measurement          #
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

class Measurement:
    def __init__(self,ADTF,Filename,ShortDescription,LongDescription):
        self.__Filename = Filename
        self.__ShortDescription = ShortDescription + " "
        self.__LongDescription = LongDescription + "\n"
        ADTF.PrintLog("Measurement created")
        ADTF.PrintLog("Short: " + str(self.__ShortDescription))
        ADTF.PrintLog("Long : " + str(self.__LongDescription))

    def AddComment(self,ADTF,CommentShortDescription,CommentLongDescription):
        ADTF.PrintLog("Adding Comments")
        if (CommentShortDescription != None):
            self.__ShortDescription = self.__ShortDescription + str(CommentShortDescription) + " "
        self.__LongDescription = self.__LongDescription + str(CommentLongDescription) + "\n"
        ADTF.PrintLog("Short: " + str(self.__ShortDescription))
        ADTF.PrintLog("Long : " + str(self.__LongDescription))

    def GetInformation(self):
        return (self.__Filename,self.__ShortDescription,self.__LongDescription)
