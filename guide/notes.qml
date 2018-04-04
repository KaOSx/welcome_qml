/***************************************************************************
 *   Copyright (C) 2018 Anke Boersma <demm@kaosx.us>       *
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
import QtQuick.Controls 2.2
import QtQuick.Window 2.2
import QtQuick.Layouts 1.3
import QtQuick.Controls.Material 2.1

Item {
    width: 960
    height: 640

    Flickable {
        id: flick
        anchors.fill: parent
        contentHeight: 3000
        
        ScrollBar.vertical: ScrollBar {
            width: 5
            policy: ScrollBar.AlwaysOn
        }

        TextArea {
            id: notes
            x: 14
            y: 0
            width: 920
            height: 3000
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap

            text: qsTr("<p>The <strong>Release Notes</strong> give you important information of what is included in this ISO</p>
            <p>If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won't see this page if you selected to use the free drivers.</p>")


            Image {
                id: image3
                x: 0
                y: 136
                width: 920
                height: 494
                fillMode: Image.PreserveAspectFit
                source: "images/cala3.png"
            }

            Image {
                id: image4
                x: 0
                y: 595
                width: 920
                height: 499
                fillMode: Image.PreserveAspectFit
                source: "images/cala4.png"
            }
        }
        
        TextArea {
            id: noteskeyboard
            x: 14
            y: 1200
            width: 920
            height: 3300
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap

            text: qsTr("<p>Next is the <strong>Keyboard Setup</strong>. You can test the layout by typing something in the designated area.</p>

            <p>Use the drop-down menu to fine tune to your exact desired keyboard model.</p>")


            Image {
                id: image5
                x: 0
                y: 95
                width: 920
                height: 494
                fillMode: Image.PreserveAspectFit
                source: "images/cala5.png"
            }

            Image {
                id: image6
                x: 13
                y: 589
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala6.png"
            }

            Image {
                id: image7
                x: 0
                y: 1059
                width: 920
                height: 494
                fillMode: Image.PreserveAspectFit
                source: "images/cala7.png"
            }
        }
    }
}
