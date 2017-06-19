import QtQuick 2.7
import QtQuick.Controls 2.0
import QtQuick.Layouts 1.3
import org.kde.plasma.core 2.0 as PlasmaCore

ApplicationWindow {
    visible: true
    minimumWidth: 640
    maximumWidth: 640
    minimumHeight: 420
    maximumHeight: 420
    title: qsTr("Welcome")

    SwipeView {
        id: swipeView
        anchors.fill: parent
        currentIndex: tabBar.currentIndex

        PlasmaCore.DataSource {
            id: executer
            engine: "executable"
            onNewData: {executer.disconnectSource(sourceName);}
        }

        Page1 {
            Label {
                text: qsTr("Thanks for trying KaOS. In need of the password file or package list?
Want to learn more about the project? Please find the links below.

Don't hesitate to give your opinion about KaOS in the Forum.")
                anchors.centerIn: parent
                horizontalAlignment: Text.AlignHCenter
            }
        }

        Page {
            Label {
                //text: qsTr("Correct passwords for use in the live session:\nroot: root / root\nuser: live / live\nHope you enjoy :)")
                text: qsTr("Correct passwords for use in the live session:
_________________________
Username:   Password:
_________________________
root               root
live                live

Hope you enjoy :)")
                anchors.centerIn: parent
            }
        }
    }

    footer: TabBar {
        id: tabBar
        currentIndex: swipeView.currentIndex
        TabButton {
            text: qsTr("Main")
        }
        TabButton {
            text: qsTr("Passwords")
        }
    }
}
