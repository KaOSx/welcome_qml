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
        contentHeight: 4500
        
        ScrollBar.vertical: ScrollBar {
            width: 5
            policy: ScrollBar.AlwaysOn
        }

        TextArea {
            id: partition
            x: 14
            y: 0
            width: 920
            height: 2300
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap

            text: qsTr("<h3>Partitioning</h3>
            
            <p>Using the correct partition setup, most suitable filesystem and partition-table is the most challenging part for anyone new to installing an Operating System.</p>

            <p><font color='#ff0000'>Make sure to back­up any data you might need from your drive before proceeding.</font></p>
            
            <p>If your target install medium (HDD, ssd, usb-stick as examples), is not formatted and partitioned or not set up to your liking, you can do so from within the Installer, or prepare it before starting the installer.</p>
            
            <p>For both UEFI and BIOS systems, hovering over the respective info buttons will give you some more information for the different options for each.</p>
            
            <p>This installer gives you four options to use. The first option will use the entire disk and will create one partition where all will be installed under root, all other partitions will be removed and the filesystem used will XFS.</br>
            The second option will allow you to shrink an existing partition and install KaOS alongside any other OS already available on your system, using the XFS filesystem. Shrinking is not possible for partitions residing on an extended partion table or using the XFS filesystem.</br>
            The third option lets you use an existing partition and it will replace all files and/or OS on that partition with a KaOS install, using the XFS filesystem.</p>
            
            <p>The fourth option gives you the freedom to set any option, any filesystem and partition table. If you want to completely clean the drive and start over or if this drive has no partition table at all yet (new media, virtualbox install), you have to make a decision what partitiontable to use. Default in the installer is GPT, ms-dos is the older option (still more commomly used for BIOS systems). Advantage of GPT, it can use virtual unlimited primary partitions (ms-dos is limited to four), is needed for drives larger than 2 Tb and is best for UEFI systems. If you choose to use GPT on a BIOS system, make sure to set it up correctly, with the needed 8 MB partition of unformatted space at the beginning of the drive and having the bios_grub flag assigned to that unformatted partition.  This setup cannot have a seperate /boot partition.</p>
            
            <p>Once the partitiontable is set, you need to partition the drive, minimum needed, one partition for / (root). There are some advantages to using a separate partition for /home, and you might like to have a swap partition for sleep/hibernate. Any other partitions is strictly personal choice, though setting up /usr is not very well supported in systemd (you'll have to use extra steps to make that work correctly).</p>")
            clip: false
            visible: true


            Image {
                id: image8
                x: 0
                y: 746
                width: 920
                height: 494
                fillMode: Image.PreserveAspectFit
                source: "images/cala8.png"
            }

            Image {
                id: image9
                x: 13
                y: 1259
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala9.png"
            }
            Image {
                id: image10
                x: 13
                y: 1759
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala10.png"
            }
        }
        
        TextArea {
            id: alongside
            x: 14
            y: 2300
            width: 920
            height: 1800
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap
            
            text: qsTr("<p>Option to install alongside an existing partition, UEFI system, / (root) and swap used. After selecting which partition you want to shrink to create room for KaOS, you can drag in that partition to set the desired size.  Also shown here is the option to encrypt the system with password set.</p>")
            
            Image {
                id: image11
                x: 13
                y: 150
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala11.png"
            }
            
        }
        
        TextArea {
            id: replace
            x: 14
            y: 3000
            width: 920
            height: 1800
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap
            
            text: qsTr("<p>Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the <i>after</i> bar.  Also shown here is the option to encrypt the system with password set.</p>")
            
            Image {
                id: image13
                x: 13
                y: 150
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala13.png"
            }
            
        }
    }
}
