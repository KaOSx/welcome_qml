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
import QtQuick.Controls 2.0
import QtQuick.Layouts 1.3
import QtQuick.Window 2.0
import QtQuick.Dialogs 1.2

ApplicationWindow {
    visible: true
    minimumWidth: 960
    maximumWidth: 960
    minimumHeight: 640
    maximumHeight: 640
    x: Screen.width / 1.5 - width / 2
    y: Screen.height / 2 - height / 2
    title: qsTr("Guide")

    SwipeView {
        id: swipeView
        anchors.fill: parent
        currentIndex: tabBar.currentIndex

        Page {
            Loader {
                id: intro
                source: "intro.qml"
            }
        }

        Page {
            Loader {
                id: notes
                source: "notes.qml"
            }
        }
        
        Page {
            Loader {
                id: part1
                source: "partition.qml"
            }
        }
        
        Page {
            Loader {
                id: about
                source: "user.qml"
            }
            
        }
        Page {
            Loader {
                id: summary
                source: "summary.qml"
            }
            
        }
    }

    header: TabBar {
        id: tabBar
        currentIndex: swipeView.currentIndex
        TabButton {
            text: qsTr("Intro")
        }
        TabButton {
            text: qsTr("Keybaord")
        }
        TabButton {
            text: qsTr("Partitioning")
        }
        TabButton {
            text: qsTr("Users")
        }
        TabButton {
            text: qsTr("Summary")
        }
    }
}
