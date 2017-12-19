#####################################
# ADTF_Interface.py                 #
# Interface to call functions of    #
# PSS of ADTF                       #
#####################################

# Class of ADTF to send commands to ADTF
import adtf

# necessary to show failures in console
#####################################
import sys

# This is the ADTF Log object
log = adtf.Log()

# This log object can be registered as the stderr, so you get interpretor errors in the adtf console
sys.stderr = log
#####################################

class ADTFInterface:
    def __init__(self):
        # This is the session object to control ADTF
        self.session = adtf.Session()
        self.console = adtf.Log()

    def PrintLog(self,Text):
        self.console.info(repr(Text))

    def SetLogfile(self,Path):
        self.console.set_logfile(Path)

    # Function to get runlevel of ADTF instance
    def GetRunlevel(self):
        self.PrintLog("Call GetRunlevel")
        return self.session.get_runlevel()

    # Load at chosen Configuration
    def LoadConfiguration(self,SystemXMLFile):
        self.PrintLog("Call LoadConfiguration")
        return self.session.init_configuration(SystemXMLFile)

    # Shutdown a loaded Configuration
    def ShutDownConfiguration(self):
        self.PrintLog("Call ShutDownConfiguration")
        return self.session.unload_configuration()

    # Change Recording Folder
    def SetRecordingFolder(self,Folder):
        self.PrintLog("Call SetRecordingFolder")
        self.session.set_recording_folder(Folder)

    # Start Configuration
    def StartConfiguration(self):
        self.PrintLog("Call StartConfiguration")
        return self.session.start()

    # Stop Configuration
    def StopConfiguration(self):
        self.PrintLog("Call StopConfiguration")
        return self.session.stop()
    
    # Start Recording with parameters RecorderID and Filename
    def StartRecording(self,RecorderID,Filename):
        self.PrintLog("Call StartRecording")
        return self.session.start_recording(RecorderID,Filename)

    # Stop Recording by editing Descriptions
    def StopRecording(self,RecorderID,Filename,ShortDescription,LongDescription):
        self.PrintLog("Call StopRecording")
        return self.session.stop_recording(RecorderID,Filename,ShortDescription,LongDescription)

    # Send Command to a Filter
    def FilterSendCommand(self,Filterinstancename,Command):
        self.PrintLog("Call FilterSendCommand with: " + str(Command))
        self.session.filter_send_command(Filterinstancename,Command)

