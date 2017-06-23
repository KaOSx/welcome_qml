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

