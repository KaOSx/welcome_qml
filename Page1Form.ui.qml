
/***************************************************************************
 *   Copyright (C) 2017-2020 Anke Boersma <demm@kaosx.us>       *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.          *
 ***************************************************************************/
import QtQuick 2.7
import QtQuick.Controls 2.0
import QtQuick.Layouts 1.3
import QtQuick.Controls.Material 2.1

Item {
    id: item1
    property alias button1: button1
    //property alias button2: button2
    property alias button3: button3
    property alias button4: button4
    property alias button5: button5
    property alias button6: button6
    property alias item1: item1
    width: 700

    RowLayout {
        width: 550
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.topMargin: 256
        anchors.top: parent.top

        Button {
            id: button1
            width: 150
            text: qsTr("Install KaOS")
            font.capitalization: Font.MixedCase
            Layout.fillWidth: true
            rightPadding: 28
            leftPadding: 28
            checkable: true
            highlighted: true
            Material.elevation: 1
            Material.roundedScale: Material.NotRounded

            Image {
                id: image1
                y: 13
                width: 28
                height: 28
                fillMode: Image.PreserveAspectFit
                anchors.verticalCenter: parent.verticalCenter
                anchors.left: parent.left
                anchors.leftMargin: 15
                source: "images/partition-disk.svg"
            }
        }


        /*Button {
            id: button2
            width: 150
            text: qsTr("About")
            opacity: 1
            Layout.fillWidth: true
            rightPadding: 35
            leftPadding: 35
            highlighted: false
            Material.elevation: 1

            Image {
                id: image2
                y: -49
                width: 22
                height: 22
                fillMode: Image.PreserveAspectFit
                anchors.verticalCenter: parent.verticalCenter
                anchors.left: parent.left
                anchors.leftMargin: 15
                source: "images/information.svgz"
            }
        }*/
        Button {
            id: button3
            width: 150
            text: qsTr("Guide")
            font.capitalization: Font.MixedCase
            opacity: 1
            Layout.fillWidth: true
            rightPadding: 35
            leftPadding: 35
            highlighted: true
            Material.elevation: 1
            Material.roundedScale: Material.NotRounded

            Image {
                id: image3
                y: 6
                width: 22
                height: 22
                fillMode: Image.PreserveAspectFit
                anchors.verticalCenter: parent.verticalCenter
                anchors.left: parent.left
                anchors.leftMargin: 15
                source: "images/help.svg"
            }
        }
    }

    Image {
        id: image
        x: 270
        y: 25
        width: 100
        height: 100
        anchors.horizontalCenter: rowLayout.horizontalCenter
        source: "images/logo.png"
    }

    RowLayout {
        id: rowLayout
        x: 101
        y: 301
        width: 550
        height: 48
        anchors.horizontalCenter: parent.horizontalCenter

        Button {
            id: button5
            width: 150
            text: qsTr("Forum")
            font.capitalization: Font.MixedCase
            opacity: 1
            rightPadding: 28
            leftPadding: 28
            Layout.fillWidth: true
            highlighted: false
            Material.elevation: 1
            Material.roundedScale: Material.NotRounded

            Image {
                id: image5
                y: 10
                width: 22
                height: 22
                anchors.verticalCenter: parent.verticalCenter
                anchors.left: parent.left
                anchors.leftMargin: 15
                fillMode: Image.PreserveAspectFit
                source: "images/folder-publicshare.svg"
            }
        }

        Button {
            id: button6
            width: 150
            text: qsTr("Documentation")
            font.capitalization: Font.MixedCase
            opacity: 1
            rightPadding: 28
            leftPadding: 28
            highlighted: false
            Layout.fillWidth: true
            Material.elevation: 1
            Material.roundedScale: Material.NotRounded

            Image {
                id: image6
                y: 10
                width: 22
                height: 22
                anchors.verticalCenter: parent.verticalCenter
                anchors.left: parent.left
                anchors.leftMargin: 15
                source: "images/document.svg"
            }
        }
        
        Button {
            id: button4
            width: 150
            text: qsTr("Donate")
            font.capitalization: Font.MixedCase
            opacity: 1
            rightPadding: 28
            leftPadding: 28
            Layout.fillWidth: true
            checkable: false
            highlighted: false
            Material.elevation: 1
            Material.roundedScale: Material.NotRounded

            Image {
                id: image4
                y: 10
                width: 22
                height: 22
                anchors.verticalCenter: parent.verticalCenter
                anchors.left: parent.left
                anchors.leftMargin: 15
                fillMode: Image.PreserveAspectFit
                source: "images/donate.svg"
            }
        }
    }
}
