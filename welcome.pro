QT += qml quick quickcontrols2

CONFIG += c++11

SOURCES += main.cpp

RESOURCES += qml.qrc

QMAKE_LFLAGS += -fuse-ld=gold

# Additional import path used to resolve QML modules in Qt Creator's code model
QML_IMPORT_PATH =

# Additional import path used to resolve QML modules just for Qt Quick Designer
QML_DESIGNER_IMPORT_PATH =

# The following define makes your compiler emit warnings if you use
# any feature of Qt which as been marked deprecated (the exact warnings
# depend on your compiler). Please consult the documentation of the
# deprecated API in order to know how to port your code away from it.
DEFINES += QT_DEPRECATED_WARNINGS

# You can also make your code fail to compile if you use deprecated APIs.
# In order to do so, uncomment the following line.
# You can also select to disable deprecated APIs only up to a certain version of Qt.
#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0

TRANSLATIONS  += lang/welcome.ts \
              lang/welcome_nl_NL.ts \
              lang/welcome_ast.ts \
              lang/welcome_ca.ts \
              lang/welcome_cs.ts \
              lang/welcome_de.ts \
              lang/welcome_es.ts \
              lang/welcome_es_AR.ts \
              lang/welcome_fa_IR.ts \
              lang/welcome_fr.ts \
              lang/welcome_hr_HR.ts \
              lang/welcome_hi_IN.ts \
              lang/welcome_hu.ts \
              lang/welcome_id_ID.ts \
              lang/welcome_it.ts \
              lang/welcome_pl.ts \
              lang/welcome_pt_BR.ts \
              lang/welcome_uk.ts \

# Default rules for deployment.
#qnx: target.path = /tmp/$${TARGET}/bin
#else: unix:!android: target.path = /opt/$${TARGET}/bin
#!isEmpty(target.path): INSTALLS += target
target.path = /usr/bin
sources.files = $$SOURCES $$RESOURCES *.pro
sources.path = .

desktop.path = /usr/share/applications
desktop.files += welcome.desktop

icon.files += welcome.svg
icon.path += /usr/share/pixmaps

qml.path = /usr/lib/qt5/qml/welcome
qml.files += package.qml

INSTALLS += target desktop icon qml

DISTFILES +=

HEADERS +=
