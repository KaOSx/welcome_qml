#include <QGuiApplication>
#include <QQmlApplicationEngine>

#include <QTranslator>
#include <QLocale>

int main(int argc, char *argv[])
{
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);
    QGuiApplication app(argc, argv);

    QString locale = QLocale::system().name();
    QTranslator translator;

    translator.load(locale, ":/lang");
    app.installTranslator(&translator);

    QQmlApplicationEngine engine;
    engine.load(QUrl(QLatin1String("qrc:/main.qml")));
    if (engine.rootObjects().isEmpty())
        return -1;

    return app.exec();
}
