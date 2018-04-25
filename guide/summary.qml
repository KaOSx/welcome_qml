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
        contentHeight: 1800
        
        ScrollBar.vertical: ScrollBar {
            width: 5
            policy: ScrollBar.AlwaysOn
        }

        TextArea {
            id: summary
            x: 14
            y: 0
            width: 920
            height: 1800
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap

            text: qsTr("<h3>Summary</h3>

            <p>All looking as it should? Then clicking Next will give you one last warning before the actual formatting and installation will start.</p>")

            Image {
                id: image26
                x: 8
                y: 100
                width: 920
                height: 494
                fillMode: Image.PreserveAspectFit
                source: "images/cala26.png"
            }
            
            Image {
                id: image27
                x: 8
                y: 613
                width: 920
                height: 499
                fillMode: Image.PreserveAspectFit
                source: "images/cala27.png"
            }
        }
        
        TextArea {
            id: summary2
            x: 14
            y: 1263
            width: 920
            height: 1800
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap
            
            text: qsTr("<p>While the system is being installed, a slideshow is shown which will give you some basic info. You can follow what the installer is doing at different stages though. Expect this part to take between 5-10 minutes depending on your settings and speed of the target drive. At around 30%, the copying of the files is completed (which will take the longest), then the installer will create the users, remove Live system specific packages, install additional packages, remove any language packs & drivers not needed for your specific hardware, setup either GRUB for BIOS systems or Systemd-boot for UEFI and copies the KaOS specific user settings.</p>

            <p>Once the installation is finished, you have the option to close the installer and go back to live mode or reboot the system right away. A full log of the install is available as installation.log in the home directory of the Live user and this log is copied to /var/log/installation.log of the target system.</p>

            <p>Hopefully this Guide has answered any questions you had about using this Installer. If anything is not clear enough then it would be really appreciated if you can get in touch to get the needed changes in.</p>")
        }
    }
}
