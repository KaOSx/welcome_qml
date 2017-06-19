import QtQuick 2.7
import QtQuick.Controls 2.0
import QtQuick.Layouts 1.3
import org.kde.plasma.core 2.0 as PlasmaCore

Page1Form {
    PlasmaCore.DataSource {
        id: executer
        engine: "executable"
        onNewData: {executer.disconnectSource(sourceName);}
    }

    button1.onClicked: {
        executer.connectSource("/usr/bin/launch-calamares.sh");
    }
    button2.onClicked: {
        Qt.openUrlExternally("file:///home/live/Desktop/info/about.pdf");
    }
    button3.onClicked: {
        Qt.openUrlExternally("file:///home/live/Desktop/info/guide.pdf");
    }
    button4.onClicked: {
        executer.connectSource("pacman -Q > ~/list.txt && nl -nrz -w1 ~/list.txt > ~/list2.txt && kdialog --textbox ~/list2.txt 500 600")
    }
    button5.onClicked: {
        Qt.openUrlExternally("https://forum.kaosx.us/");
    }
    button6.onClicked: {
        Qt.openUrlExternally("https://kaosx.us/docs");
    }
}
