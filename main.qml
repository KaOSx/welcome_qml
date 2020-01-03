/***************************************************************************
 *   Copyright (C) 2017 - 2020 Anke Boersma <demm@kaosx.us>       *
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
import QtQuick.Controls 2.14
import QtQuick.Layouts 1.3
import QtQuick.Window 2.0
import QtQuick.Dialogs 1.2
import org.kde.plasma.core 2.0 as PlasmaCore

ApplicationWindow {
    visible: true
    minimumWidth: 700
    maximumWidth: 700
    minimumHeight: 420
    maximumHeight: 420
    font.capitalization: Font.MixedCase
    x: Screen.width / 2 - width / 2
    y: Screen.height / 2 - height / 2
    title: qsTr("Welcome")

    SwipeView {
        id: swipeView
        anchors.fill: parent
        currentIndex: tabBar.currentIndex

        Page1 {
            Label {
                text: qsTr("<div>Thanks for trying KaOS. In need of the password file or package list?<br>
                            Want to learn more about the project? Please find the links below.<br><br>
                            Don't hesitate to give your opinion about KaOS in the Forum.</div>")
                anchors.centerIn: parent
                horizontalAlignment: Text.AlignHCenter
                width: 690
                wrapMode: Text.WordWrap
            }
        }

        Page {
            Label {
                textFormat: Text.RichText
                //: Do not translate root/root and live/live
                text: qsTr("<p>Correct passwords for use in the live session:</p>
                            <p></p>
                            <table width=100% align=center bgcolor=#eaeaea>
                                <tr>
                                    <th>Username:</th>
                                    <th>Password:</th>
                                </tr>
                                <tr>
                                    <td align=center>root</td>
                                    <td align=center>root</td>
                                </tr>
                                <tr>
                                    <td align=center>live</td>
                                    <td align=center>live</td>
                                </tr>
                            </table>
                            <p>Hope you enjoy</p>")
                anchors.centerIn: parent
                horizontalAlignment: Text.AlignHCenter
                Image {
                    id: image
                    anchors.centerIn: parent
                    anchors.verticalCenterOffset : 100
                    width: 22
                    height: 22
                    source: "images/face-smile-grin.svg"
                }
            }
        }
        
        Page {
            Loader {
                id: about
                source: "about.qml"
            }
            
        }
        Page {
            Loader {
                id: packages
                source: "packages.qml"
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
        TabButton {
            text: qsTr("About")
        }
        TabButton {
            text: qsTr("Package List")
        }
    }
}
