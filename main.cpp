#include <QGuiApplication>
#include <QQmlApplicationEngine>

#include <QTranslator>
#include <QLocale>
#include <QQuickStyle>
#include <QProcess>
#include <QDebug>

int main(int argc, char *argv[])
{
    QCoreApplication::setAttribute(Qt::AA_ShareOpenGLContexts);
    QGuiApplication app(argc, argv);

    QQuickStyle::setStyle("Material");

    QTranslator appTranslator;

    QProcess p;
    p.startDetached("bash", QStringList()<< "/usr/bin/packages.sh");

    appTranslator.load(":/lang/welcome_" +
                       QLocale::system().name());
    app.installTranslator(&appTranslator);

    QQmlApplicationEngine engine;
    engine.load(QUrl(QLatin1String("qrc:/main.qml")));
    if (engine.rootObjects().isEmpty())
        return -1;

    return app.exec();
}
