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
        contentHeight: 9800
        
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
            
            <p>This installer gives you four options to use.</br>
            The first option will allow you to shrink an existing partition and install KaOS alongside any other OS already available on your system, using the XFS filesystem. Shrinking is not possible for partitions residing on an extended partion table or using the XFS filesystem.</br>
            The second option lets you use an existing partition and it will replace all files and/or OS on that partition with a KaOS install, using the XFS filesystem.</br>
            The third option will use the entire disk and will create one partition where all will be installed under root, all other partitions will be removed and the filesystem used will XFS.</p>
            
            <p>The fourth option gives you the freedom to set any option, any filesystem and partition table. If you want to completely clean the drive and start over or if this drive has no partition table at all yet (new media, virtualbox install), you have to make a decision what partitiontable to use. Default in the installer is GPT, ms-dos is the older option (still more commomly used for BIOS systems). Advantage of GPT, it can use virtual unlimited primary partitions (ms-dos is limited to four), is needed for drives larger than 2 Tb and is best for UEFI systems. If you choose to use GPT on a BIOS system, make sure to set it up correctly, with the needed 8 MB partition of unformatted space at the beginning of the drive and having the bios_grub flag assigned to that unformatted partition.  This setup cannot have a seperate /boot partition.</p>
            
            <p>Once the partitiontable is set, you need to partition the drive, minimum needed, one partition for / (root). There are some advantages to using a separate partition for /home, and you might like to have a swap partition for sleep/hibernate. Any other partitions is strictly personal choice, though setting up /usr is not very well supported in systemd (you'll have to use extra steps to make that work correctly).</p>")
            clip: false
            visible: true


            Image {
                id: image8
                x: 0
                y: 793
                width: 920
                height: 494
                fillMode: Image.PreserveAspectFit
                source: "images/cala8.png"
            }

            Image {
                id: image9
                x: 0
                y: 1310
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala9.png"
            }
            Image {
                id: image10
                x: 0
                y: 1807
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala10.png"
            }
        }
        
        TextArea {
            id: alongside
            x: 0
            y: 2365
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
            x: 0
            y: 3062
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
        
        TextArea {
            id: erase
            x: 0
            y: 3862
            width: 920
            height: 1800
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap
            
            text: qsTr("<p>Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.</p>")
            
            Image {
                id: image14
                x: 13
                y: 150
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala14.png"
            }
            
        }
        
        TextArea {
            id: manual_delete
            x: 0
            y: 4562
            width: 920
            height: 2700
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap
            
            text: qsTr("<p>Using the fourth option to delete an existing layout. Select <code>New Partition Table</code> for a new drive or to switch from ms-dos to GPT or vice versa.</br>
            Highlight <code>Free Space</code> and select <code>Create</code>.  You then get a window with options to set partition type, file system and mountpoint. When using an UEFI install, it is a must to have a vfat (fat32) formatted /boot partition available. Best set the size to 512Mb and have it at the beginning of the partition-table. Once root is set, the Next button will become active again.</p>")
            
            Image {
                id: image15
                x: 13
                y: 200
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala15.png"
            }
            
            Image {
                id: image16
                x: 13
                y: 770
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala16.png"
            }
            
            Image {
                id: image18
                x: 13
                y: 1270
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala18.png"
            }
            
            Image {
                id: image20
                x: 13
                y: 1770
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala20.png"
            }
            
            Image {
                id: image21
                x: 13
                y: 2270
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala21.png"
            }
            
        }
        
        TextArea {
            id: manual_adjust
            x: 0
            y: 7362
            width: 920
            height: 1400
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap
            
            text: qsTr("<p>Using the fourth option to adjust existing layout. Select <code>New Partition Table</code> for a new drive or to switch from ms-dos to GPT or vice versa.</br>
            Highlight a desired partition, and select <code>Format</code>. If this is going to be the root partition, it needs to be formatted. If old files are still present it will most likely result in a broken install. Next select a Mountpoint, root needs to be set, for UEFI install /boot needs to be set too. Repeat these steps for any other partition you want to use for this install. Once root is set, the Next button will become active again. Options are available to encrypt partitions, this includes swap.</p>")
            
            Image {
                id: image23
                x: 13
                y: 210
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala23.png"
            }
            
            Image {
                id: image22
                x: 13
                y: 770
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala22.png"
            }
            
        }
        
        TextArea {
            id: manual_uefi
            x: 0
            y: 8962
            width: 920
            height: 1800
            font.pointSize: 14
            textFormat: Text.RichText
            onLinkActivated: Qt.openUrlExternally(link)
            antialiasing: true
            activeFocusOnPress: false
            wrapMode: Text.WordWrap
            
            text: qsTr("<p>The image below shows the needed setup for an UEFI partition. If your install already has this set, <font color='#ff0000'>DO NOT</font> format it. With UEFI any existing bootloader can be used, formatting will delete any currently present files to boot Windows or any other OS.</br>
            For BIOS systems select where you want to install the bootloader, this can either be done in the Master Boot Record of the selected disc, or can be installed in the /boot partition of the system (/boot can reside under root for that).</br>
            No changes will happen when you click the Next button, you will get a chance to review all your chosen settings and go back if things are not exactly as you want them.</p>")
            
            Image {
                id: image19
                x: 13
                y: 210
                width: 895
                height: 464
                fillMode: Image.PreserveAspectFit
                source: "images/cala19.png"
            }
        }
    }
}
