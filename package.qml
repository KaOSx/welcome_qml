import QtQuick 2.6
import QtQuick.Dialogs 1.2
import QtQuick.Controls 1.5


Rectangle {
    width: 400
    height: 750

    function showFile(fileUrl) {
        var request = new XMLHttpRequest();
        request.open("GET", fileUrl, false);
        request.send(null);
        return request.responseText;
    }

    TextArea {
        width: parent.width
        height: parent.height
        id: msg
        text: showFile("/tmp/package_list.txt")
    }
}
/*
ApplicationWindow {
    visible: true
    width: 400
    height: 750
    title: qsTr("Welcome")

    function showFile(fileUrl) {
        var request = new XMLHttpRequest();
        request.open("GET", fileUrl, false);
        request.send(null);
        return request.responseText;
    }

    TextArea {
        width: parent.width
        height: parent.height
        id: msg
        text: showFile("/tmp/package_list.txt")
    }

    Row {
        anchors.right: parent.right
        anchors.rightMargin: 25
        anchors.bottomMargin: 2
        anchors.bottom: parent.bottom

        Button {
            id: button1
            width: 150
            text: qsTr("OK")
            onClicked: Qt.quit()
        }
    }
}*/
