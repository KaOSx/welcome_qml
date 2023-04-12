/***************************************************************************
 *   Copyright (C) 2017 - 2023 Anke Boersma <demm@kaosx.us>       *
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
import org.kde.plasma.plasma5support 2.0 as PlasmaCore

Page1Form {
    PlasmaCore.DataSource {
        id: executer
        engine: "executable"
        connectedSources: sources
        onSourceAdded: {
            disconnectSource(source);
            connectSource(source);
        }
        onSourceRemoved: {
            disconnectSource(source);
        }

    }

    button1.onClicked: {
        executer.connectSource("/usr/bin/launch-calamares.sh");
        //executer.connectSource("/data/anke/dev/github/build-guide-Desktop-Debug/guide");
    }
    
    property variant window;
    button3.onClicked: {
        var component = Qt.createComponent("guide/guide.qml");
        window = component.createObject(button3);
        window.show();
    }
    //button4.onClicked: {
    //    executer.connectSource("pacman -Q > /tmp/list.txt &&
    //        nl -nrz -w1 /tmp/list.txt > /tmp/package_list.txt  &&
    //        qmlscene-qt5 /usr/lib/qt5/qml/welcome/package.qml");
        //pageloader.source = "/usr/lib/qt5/qml/welcome/package.qml"
    //}
    button5.onClicked: {
        Qt.openUrlExternally("https://forum.kaosx.us/");
    }
    button6.onClicked: {
        Qt.openUrlExternally("https://kaosx.us/docs");
    }
    button4.onClicked: {
        Qt.openUrlExternally("https://kaosx.us/about/donors/");
    }
}
