<?xml version="1.0" ?><!DOCTYPE TS><TS language="de" version="2.1">
<context>
    <name>Page1Form.ui</name>
    <message>
        <location filename="../Page1Form.ui.qml" line="45"/>
        <source>Install KaOS</source>
        <translation>Installiere KaOS</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="94"/>
        <source>Guide</source>
        <translation>Anleitung</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="187"/>
        <source>Donate</source>
        <translation>Spenden</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="138"/>
        <source>Forum</source>
        <translation>Forum</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="163"/>
        <source>Documentation</source>
        <translation>Dokumentation</translation>
    </message>
</context>
<context>
    <name>about</name>
    <message>
        <location filename="../about.qml" line="43"/>
        <source>&lt;h3&gt;About KaOS&lt;/h3&gt;
                    &lt;p&gt;The idea behind KaOS is to create a tightly integrated rolling and transparent distribution for the modern desktop, build from scratch with a very specific focus. Focus on &lt;b&gt;one DE (KDE), one toolkit (Qt), one architecture (x86_64)&lt;/b&gt; plus a focus on evaluating and selecting the most suitable tools and applications. All work is geared toward packaging, not developing new tools or applications.&lt;/p&gt;

                    &lt;p&gt;Moving away from proprietary Operating Systems to open source options (Linux-based, BSD based,Solaris based) is about &lt;b&gt;wanting freedom and choice&lt;/b&gt; in almost all cases. But should any such Operating System or Distribution not make some choices of what it believes is the best fit? KaOS sees a lack of focus in that respect. To create the highest quality Distribution possible, there needs to be a focus to make sure the user gets the best possible for whatever choice they made. It simply is not possible to package any and all to work perfect for every Desktop Environment or Toolkit.&lt;/p&gt;
                    
                    &lt;p&gt;KaOS has made the choice to use the &lt;b&gt;Linux kernel&lt;/b&gt; as a base (though the Illumos kernel is under constant evaluation, and a future switch is a wish). After that choice, the best available package manager, most flexible way of package building, repository maintenance is &lt;b&gt;pacman/makepkg for a rolling distribution&lt;/b&gt; like KaOS. As for the Desktop Environment, there will never be a change, whether it is Linux or Illumos based, KDE will be the choice, Qt the Toolkit. With those choices in place, April 2013 package building for this independent distribution was started.&lt;/p&gt;

                    &lt;p&gt;KaOS is a build from scratch distribution, &lt;b&gt;every package in every repository is build by and for KaOS&lt;/b&gt;. By July 2013 the initial goal of about 1500 packages was reached.&lt;/p&gt;

                    &lt;p&gt;When considering the relatively low number of total available packages, please keep one thing in mind. Since there is a focus on one toolkit, one DE, there is &lt;b&gt;no need for excessive splitting of packages&lt;/b&gt; to try and make all work for all kinds of different environments. Were in other places, lots of packages are split into 3-4-5, at times 15-20 packages, KaOS simplifies things as much as possible and avoids splitting (examples are xorg apps, around 50 packages are combined in just 3, mesa consists of 2, instead of 15).&lt;/p&gt;
                    
                    &lt;p&gt;Making the choice for KDE/QT does not mean KaOS loses sight of the importance of having the &lt;b&gt;best tool available for the job&lt;/b&gt;. Most of the time it is believed KDE/Qt provides the superior tool, but there are a few applications were the GTK option is the only available of that kind (Inkscape, Ardour to name two), or in the case of web-browsers for example, the Qt options do not stack up to their GTK counterparts. For those instances, GTK applications are available, though their number will stay limited. This ISO though is a showcase of the power of Qt/KDE so the &lt;b&gt;ISO is GTK free&lt;/b&gt;, meaning no Firefox, Chrome or LibreOffice to name a few, since they do depend on GTK&lt;/p&gt;
                    
                    &lt;p&gt;The repository layout is simple, and consists of three groups, Core, Main and Apps. A regular complete system update will always give you the latest available, &lt;b&gt;without the need for any re-install&lt;/b&gt; of the system. &lt;i&gt;Core&lt;/i&gt; has the base packages needed for a system to boot-up, communicate with the BIOS connect most hardware and set basic shell options. Example packages are the kernel, systemd, toolchain for building and basic command-line tools. &lt;i&gt;Main&lt;/i&gt; repository consists of all the needed libraries, extra drivers and firmware needed to make the Desktop and Applications function. &lt;i&gt;Apps&lt;/i&gt; consists of all packages seen and used by the users, including KDE and any needed tools. &lt;i&gt;Build&lt;/i&gt; is were all packages start, whether it is a rebuild, update or new addition, all goes to build, once gone through the proper testing, than they are moved to their respective repository.&lt;/p&gt;
                    
                    &lt;p&gt;&lt;b&gt;The target users&lt;/b&gt; are those who have tried many Operating Systems/Distributions/Desktop Environments and have found they prefer a Distribution that uses all its available resources to work on one DE to make that the best it can be, and know that after their searches, the best for them is KDE. Their used hardware is from about 2005 or later, so there are no issues with running 64 bit software. And the target audience is not afraid to use KDE/Qt versions of their needed applications, likes to see the best available selected for their needs, even if that means learning some new ways of working with a before unused application. There is an understanding selection for similar applications will be limited to 5-6.&lt;/p&gt;
                    
                    &lt;p&gt;KDE is a modern Desktop Environment which can make use of most of any graphics or sound card capabilities. This does not mean KDE can’t be made to run on very low-end hardware, but in general there are better options available for such systems (OpenBox for example). The very minimal needed for &lt;b&gt;hard-drive space is 8 Gb, but 25 Gb&lt;/b&gt; is recommended as minimal. KaOS will install with 1.5Gb of RAM available, though a much better experience will start with &lt;b&gt;2 Gb of RAM&lt;/b&gt;. Since only x86_64 packages are available, a &lt;b&gt;64 bit capable cpu&lt;/b&gt; is needed. As with any rolling distribution, updates are frequent and can be large, so a reasonable fast internet connection (dial-up will become very cumbersome) and available monthly data of over 2 Gb are recommended.&lt;/p&gt;</source>
        <translation>Über KaOS
&lt;p&gt;Die Idee hinter KaOS ist es, eine fest integrierte, laufend aktualisierte und transparente Distribution für den modernen Heimcomputer zu schaffen, die von Grund auf neu entwickelt wurde und einen ganz besonderen Fokus aufweist. Fokus auf &lt;b&gt;ein DE (KDE), ein Toolkit (Qt), eine Architektur (x86_64) sowie ein Fokus auf die Evaluierung und &lt;/b&gt;Auswahl der am besten geeigneten Tools und Anwendungen. Alle Arbeiten sind auf die Paketierung ausgerichtet, statt auf die Entwicklung neuer Werkzeuge und Anwendungen.&lt;/p&gt;

&lt;p&gt;Bei der Umstellung von proprietären Betriebssystemen auf Open-Source-Optionen (Linux-basiert, BSD-basiert, Solaris-basiert) geht es in fast allen Fällen um &lt;b&gt;Freiheit und persönliche Vorlieben.&lt;/b&gt;Jedoch sollte ein solches Betriebssystem oder eine solche Distribution eine Auswahl dessen treffen, was ihrer Meinung nach am besten zusammen passt. KaOS sieht hier einen Mangel an Fokus bisher. Um die höchstmögliche Qualität der Distribution zu erreichen, muss ein Fokus darauf gelegt werden, dass der Benutzer die bestmögliche Summe aller Teile erhält. Es ist einfach nicht möglich alles zu zusammenzustopfen, um ideal für jede Desktop-Umgebung und jedes Toolkit zu funktionieren.&lt;/p&gt;

&lt;p&gt;KaOS hat die Wahl getroffen, den &lt;b&gt;Linux-Kernel&lt;/b&gt; als Basis zu verwenden (obwohl der Illumos-Kernel ständig evaluiert wird und ein zukünftiger Wechsel wünschenswert ist). Nach dieser Wahl ist der passendste verfügbare Paketmanager pacman/makepkg, wenn die flexibelste Art der Paketerstellung und die Repository-Wartung für eine rollende Distribution&lt;/b&gt; wie KaOS  berücksichtigt wird. Was die Desktop-Umgebung betrifft, so wird es nie eine Änderung geben, egal ob sie auf Linux oder Illumos basiert. KDE ist die Wahl diesbezüglich und Qt das Toolkit. Mit diesen Entscheidungen wurde im April 2013 mit dem Aufbau der Paketstruktur für diese unabhängige Distribution begonnen.&lt;/p&gt;

&lt;p&gt;KaOS ist eine Build from Scratch-Distribution, &lt;b&gt;jedes Paket in jedem Repository wird von und für KaOS erstellt&lt;/b&gt;. Bis Juli 2013 wurde das ursprüngliche Ziel von rund 1500 Paketen erreicht.&lt;/p&gt;

&lt;p&gt;Bitte beachten Sie bei der relativ geringen Anzahl der insgesamt verfügbaren Pakete eines. Da der Fokus auf einem Toolkit, einem DE, liegt, ist es &lt;b&gt;nicht notwendig, die Pakete übermäßig zu splitten,&lt;/b&gt;um zu versuchen alles für alle Arten von verschiedenen Umgebungen nutzbar zu machen. An anderen Stellen sind viele Pakete in 3-4-5, manchmal sogar in 15-20 Pakete aufgeteilt, KaOS vereinfacht die Dinge so weit wie möglich und vermeidet dieses Aufsplitten. (Beispiele sind hier die xorg apps da sie statt in fünfzig, in nur drei Paketen zusammengefasst sind und mesa, dieses besteht aus zwei anstatt fünfzehn).&lt;/p&gt;

&lt;p&gt;Die Entscheidung für KDE/QT bedeutet nicht, dass KaOS die Bedeutung des &lt;b&gt;besten verfügbaren Werkzeugs&lt;/b&gt; aus den Augen verliert. Meistens wird davon ausgegangen, dass KDE/Qt das überlegene Werkzeug bietet und es gibt einige Anwendungen, bei denen die GTK-Option die einzige dieser Art ist (Inkscape und Ardour, um zwei zu nennen). Und auch im Falle von den Web-Browsern zum Beispiel, sind die Qt-Optionen noch nicht so stabil wie ihre GTK-Pendants. Für diese Fälle stehen GTK-Anwendungen zur Verfügung, deren Anzahl jedoch begrenzt bleibt. Diese ISO ist jedoch ein Schaufenster der Leistungsfähigkeit von Qt/KDE, so dass die &lt;b&gt;ISO GTK-frei ist&lt;/b&gt;, d.h. kein Firefox, Chrome oder LibreOffice vorinstalliert ist um  ein paar zu nennen, da diese mit GTK+ in direkter Abhängigkeit stehen.&lt;/p&gt;

&lt;p&gt;Das Repository-Layout ist einfach und besteht aus drei Gruppen, Core, Main und Apps. Ein regelmäßiges Komplettsystem-Update gibt Ihnen immer den aktuellsten Stand, &lt;b&gt;ohne dass Sie das System neu installieren müssen&lt;/b&gt;. &lt;i&gt;Core&lt;/i&gt; hat die Basispakete, die ein System benötigt, um zu booten, mit dem BIOS zu kommunizieren und grundlegende Shell-Optionen einzustellen. Beispielpakete sind der Kernel, systemd, toolchain für die Erstellung und grundlegende Kommandozeilen-Tools. Das &lt;i&gt;Main&lt;/i&gt;-Repository besteht aus allen benötigten Bibliotheken, zusätzlichen Treibern und Firmware, die für die Funktion des Desktops und der Anwendungen benötigt werden. &lt;i&gt;Apps&lt;/i&gt; besteht aus allen Paketen, die von den Benutzern gesehen und verwendet werden, einschließlich KDE und allen benötigten Tools. &lt;i&gt;Build&lt;/i&gt; ist, wo alle Pakete beginnen, egal ob es sich um einen Rebuild, ein Update oder einen neuen Zusatz handelt, alle gehen zum Build, sobald sie die richtigen Tests durchlaufen haben, dann werden sie in ihr jeweiliges Repository verschoben.&lt;/p&gt;

&lt;p&gt;&lt;b&gt;Die Zielgruppe&lt;/b&gt; sind diejenigen, die viele Betriebssysteme/Distributionen/Desktop-Umgebungen ausprobiert haben und festgestellt haben, dass sie eine Distribution bevorzugen, die alle verfügbaren Ressourcen nutzt an einer Desktop-Umgebung zu arbeiten, um das Beste daraus zu machen, und wissen, dass ihre bevozugte Wahl KDE ist. Die verwendete Hardware stammt aus dem Jahr 2005 oder später, so dass es keine Probleme mit 64-Bit-Software gibt. Und die Zielgruppe scheut sich nicht, die KDE/Qt-Versionen ihrer Programmtypen zu verwenden, möchte die hochwertigsten die verfügbar sind vorausgewählt sehen, auch wenn das bedeutet, dass sie einige neue Arbeitsmethoden neu einstudieren. Es gibt eine sinnvolle Vorauswahl für miteinander ähnlichen Anwendungen und diese wird stets auf 5-6 beschränkt sein.&lt;/p&gt;

&lt;p&gt;KDE ist eine moderne Desktop-Umgebung, die die meisten Grafik- und Soundkartenfunktionen nutzen kann. Dies bedeutet nicht, dass KDE nicht auf sehr schwacher Hardware laufen kann und im Allgemeinen gibt es andere Optionen für solche Systeme (z.B. OpenBox). Der minimale Platzbedarf auf der &lt;b&gt;Festplatte beträgt 8 Gb und 25 Gb&lt;/b&gt; werden als Minimum empfohlen. KaOS wird mit 1.5Gb RAM installiert, obwohl eine viel flüssigere Erfahrung mit &lt;b&gt;2Gb RAM&lt;/b&gt; beginnt. Da nur x86_64-Pakete verfügbar sind, wird eine &lt;b&gt;64-Bit-fähige CPU&lt;/b&gt; benötigt. Wie bei jeder rollenden Distribution sind Updates häufig und können groß sein, so dass eine schnelle Internetverbindung (Einwahl wird sehr umständlich) und ein monatlich verfügbares Datenvolumen von über 2 Gb empfohlen werden.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>guide</name>
    <message>
        <location filename="../guide/guide.qml" line="33"/>
        <source>Guide</source>
        <translation>Anleitung</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="81"/>
        <source>Intro</source>
        <translation>Einführung</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="84"/>
        <source>Keyboard</source>
        <translation>Tastatur</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation>Partitionierung</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>Anwender</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>Zusammenfassung</translation>
    </message>
</context>
<context>
    <name>intro</name>
    <message>
        <location filename="../guide/intro.qml" line="52"/>
        <source>&lt;h3&gt;Installation Guide&lt;/h3&gt;

            &lt;p&gt;Now that you have seen some of how KaOS works in live mode, you might be ready to install. Before doing so, it is best to understand a few things.&lt;/p&gt;

            &lt;p&gt;As with any rolling release, updating regularly is a must, fall too far behind, and trying to update then will likely cause issues. Recommended is to update weekly, no less than once a month.&lt;/br&gt;
            If that is something not feasible for you, it might be better to consider using a static distribution, with a six or nine month release cycle. If any instructions are needed for an update to KaOS, &lt;a href='https://kaosx.us/news/'&gt;kaosx.us/news/&lt;/a&gt; will always warn you about them (which will be shown in Octopi, the package manager too). It is best to familiarize yourself with the command line &lt;a href='https://kaosx.us/docs/pacman/'&gt;package manager pacman&lt;/a&gt;. Any distribution has to implement major changes at times, a rolling distribution has to rely on the package manager to interact with the users to make sure such updates are done correctly. Since rolling inherently means, no re-install at set intervals (a static distribution can use such needed re-install to introduce major changes). No GUI for pacman is as powerful as pacman itself in those situations.&lt;/p&gt;

            &lt;p&gt;Calamares, the installer of KaOS is straightforward and easy to use, but lacks one feature at this stage. RAID disk setups is not supported yet.&lt;/p&gt;

            &lt;h3&gt;Starting the Installer&lt;/h3&gt;

            &lt;p&gt;The first page gives you some information of the installer, option to check the currently known issues and an option to select what language will be used for the install.&lt;/p&gt;
            
            &lt;p&gt;Ensure that your system meets the minimal requirements. Not having an internet connection during the install is no deal breaker and won't stop the install from going through.&lt;/p&gt;
            
            &lt;p&gt;Having less than the shown disc space or available RAM will almost certainly fail the install. As for disc space, a minimum of 20 Gb is recommended.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Installationsanleitung&lt;/h3&gt;

&lt;p&gt;Nachdem Sie nun ein wenig gesehen haben, wie KaOS im Live-Modus funktioniert, sind Sie vielleicht bereit für die Installation. Bevor Sie dies tun, ist es ratsam, ein paar Dinge zu beachten.&lt;/p&gt;

            &lt;p&gt;Wie bei jedem Rolling Release ist es ein Muss, regelmäßig zu aktualisieren. Zu weit zurückzufallen und dann zu versuchen, zu aktualisieren, wird wahrscheinlich Probleme verursachen. Es wird empfohlen, wöchentlich zu aktualisieren, mindestens einmal im Monat.&lt;/br&gt;
            Wenn das für Sie nicht machbar ist, ist es vielleicht besser, eine statische Distribution mit einem sechs- oder neunmonatigen Releasezyklus zu verwenden. Wenn irgendwelche Anweisungen für ein Update von KaOS benötigt werden, wird &lt;a href=&apos;https://kaosx.us/news/&apos;&gt;kaosx.us/news/&lt;/a&gt; Sie immer davor warnen (was auch in Octopi, dem Paketmanager, angezeigt wird). Am besten machen Sie sich mit dem &lt;a href=&apos;https://kaosx.us/docs/pacman/&apos;&gt;Kommandozeilen-Paketmanager pacman&lt;/a&gt; vertraut. Jede Distribution muss zeitweise größere Änderungen implementieren, eine Rolling Distribution ist auf den Paketmanager angewiesen, der mit den Benutzern interagiert, um sicherzustellen, dass solche Aktualisierungen korrekt durchgeführt werden. Da Rolling von Natur aus bedeutet, dass keine Neuinstallation in festgelegten Intervallen durchgeführt wird (eine statische Distribution kann eine solche notwendige Neuinstallation nutzen, um größere Änderungen einzuführen). Keine GUI für pacman ist in solchen Situationen so mächtig wie pacman selbst.&lt;/p&gt;

            &lt;p&gt;Calamares, der Installer von KaOS ist einfach und unkompliziert zu bedienen, aber es fehlt noch ein Feature in diesem Stadium. RAID-Disk-Setups werden noch nicht unterstützt.&lt;/p&gt;

            &lt;h3&gt;Den Installer starten&lt;/h3&gt;

            &lt;p&gt;Auf der ersten Seite finden Sie einige Informationen über das Installationsprogramm, eine Option zur Überprüfung der aktuell bekannten Probleme und eine Option zur Auswahl der Sprache, die für die Installation verwendet werden soll.&lt;/p&gt;

            &lt;p&gt;Stellen Sie sicher, dass Ihr System die Mindestanforderungen erfüllt. Wenn Sie während der Installation keine Internetverbindung haben, ist dies kein Hindernis und wird die Installation nicht verhindern.&lt;/p&gt;

            &lt;p&gt;Wenn Sie weniger als den angezeigten Speicherplatz auf der Festplatte oder den verfügbaren RAM-Speicher haben, wird die Installation mit großer Wahrscheinlichkeit fehlschlagen. Was den Speicherplatz angeht, wird ein Minimum von 20 Gb empfohlen.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="35"/>
        <source>Welcome</source>
        <translation>Willkommen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="44"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt;Danke für das Testen von KaOS. Benötigen Sie das Passwort oder die Paketliste?&lt;br&gt;
Wollen Sie mehr über das Projekt lernen? Sie finden die Links unterhalb.&lt;br&gt;&lt;br&gt;

Zögern Sie nicht Ihre Meinung in das KaOS-Forum zu posten.&lt;/div&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="58"/>
        <source>&lt;p&gt;Correct passwords for use in the live session:&lt;/p&gt;
                            &lt;p&gt;&lt;/p&gt;
                            &lt;table width=100% align=center bgcolor=#eaeaea&gt;
                                &lt;tr&gt;
                                    &lt;th&gt;Username:&lt;/th&gt;
                                    &lt;th&gt;Password:&lt;/th&gt;
                                &lt;/tr&gt;
                                &lt;tr&gt;
                                    &lt;td align=center&gt;root&lt;/td&gt;
                                    &lt;td align=center&gt;root&lt;/td&gt;
                                &lt;/tr&gt;
                                &lt;tr&gt;
                                    &lt;td align=center&gt;live&lt;/td&gt;
                                    &lt;td align=center&gt;live&lt;/td&gt;
                                &lt;/tr&gt;
                            &lt;/table&gt;
                            &lt;p&gt;Hope you enjoy&lt;/p&gt;</source>
        <extracomment>Do not translate root/root and live/live</extracomment>
        <translation>&lt;p&gt;Korrekte Passwörter für die Nutzung der Live-Session:&lt;/p&gt;
                            &lt;p&gt;&lt;/p&gt;
                            &lt;table width=100% align=center bgcolor=#eaeaea&gt;
                                &lt;tr&gt;
                                    &lt;th&gt;Benutzername&lt;/th&gt;
                                    &lt;th&gt;Passwort:&lt;/th&gt;
                                &lt;/tr&gt;
                                &lt;tr&gt;
                                    &lt;td align=center&gt;root&lt;/td&gt;
                                    &lt;td align=center&gt;root&lt;/td&gt;
                                &lt;/tr&gt;
                                &lt;tr&gt;
                                    &lt;td align=center&gt;live&lt;/td&gt;
                                    &lt;td align=center&gt;live&lt;/td&gt;
                                &lt;/tr&gt;
                            &lt;/table&gt;
                            &lt;p&gt;Wir wünschen Ihnen viel Spass&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="108"/>
        <source>Main</source>
        <translation>Hauptmenü</translation>
    </message>
    <message>
        <location filename="../main.qml" line="111"/>
        <source>Passwords</source>
        <translation>Passwörter</translation>
    </message>
    <message>
        <location filename="../main.qml" line="114"/>
        <source>About</source>
        <translation>Was ist KaOS?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="117"/>
        <source>Package List</source>
        <translation>Paketliste</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation>Die Veröffentlichungshinweise geben dir einen Hinweis darauf, was dich auf dieser ISO erwartet.
Wenn du die patentrechtlich geschützten NVidiatreiber verwendest, wirst du auf eine speziell dafür vorbereitete Seite weitergeleitet, die dich eine Lizenzvereinbarung bestätigen lässt. Falls du dies nicht tust, wird der freie Nouveau Treiber verwendet. Falls du diese sowieso ausgewählt hast, siehst du die Lizenzseite auch nicht. </translation>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Das nächste ist &lt;strong&gt;die Tastatureinstellung&lt;/strong&gt;. Du kannst die Tastaturbelegung testen, indem du hier etwas in das freie Feld schreibst.&lt;/p&gt;

            &lt;p&gt;Verwende optional das ausklappbare Menü, um dein genaues Model auszuwählen.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>partition</name>
    <message>
        <location filename="../guide/partition.qml" line="52"/>
        <source>&lt;h3&gt;Partitioning&lt;/h3&gt;
            
            &lt;p&gt;Using the correct partition setup, most suitable filesystem and partition-table is the most challenging part for anyone new to installing an Operating System.&lt;/p&gt;

            &lt;p&gt;&lt;font color='#ff0000'&gt;Make sure to back­up any data you might need from your drive before proceeding.&lt;/font&gt;&lt;/p&gt;
            
            &lt;p&gt;If your target install medium (HDD, ssd, usb-stick as examples), is not formatted and partitioned or not set up to your liking, you can do so from within the Installer, or prepare it before starting the installer.&lt;/p&gt;
            
            &lt;p&gt;For both UEFI and BIOS systems, hovering over the respective info buttons will give you some more information for the different options for each.&lt;/p&gt;
            
            &lt;p&gt;This installer gives you four options to use.&lt;/br&gt;
            The first option will allow you to shrink an existing partition and install KaOS alongside any other OS already available on your system, using the XFS filesystem. Shrinking is not possible for partitions residing on an extended partition table or using the XFS filesystem.&lt;/br&gt;
            The second option lets you use an existing partition and it will replace all files and/or OS on that partition with a KaOS install, using the XFS filesystem.&lt;/br&gt;
            The third option will use the entire disk and will create one partition where all will be installed under root, all other partitions will be removed and the filesystem used will XFS.&lt;/p&gt;
            
            &lt;p&gt;The fourth option gives you the freedom to set any option, any filesystem and partition table. If you want to completely clean the drive and start over or if this drive has no partition table at all yet (new media, virtualbox install), you have to make a decision what partitiontable to use. Default in the installer is GPT, ms-dos is the older option (still more commonly used for BIOS systems). Advantage of GPT, it can use virtual unlimited primary partitions (ms-dos is limited to four), is needed for drives larger than 2 Tb and is best for UEFI systems. If you choose to use GPT on a BIOS system, make sure to set it up correctly, with the needed 8 MB partition of unformatted space at the beginning of the drive and having the bios_grub flag assigned to that unformatted partition.  This setup cannot have a seperate /boot partition.&lt;/p&gt;
            
            &lt;p&gt;Once the partitiontable is set, you need to partition the drive, minimum needed, one partition for / (root). There are some advantages to using a separate partition for /home, and you might like to have a swap partition for sleep/hibernate. Any other partitions is strictly personal choice, though setting up /usr is not very well supported in systemd (you&apos;ll have to use extra steps to make that work correctly).&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Partitionierung&lt;/h3&gt;

            &lt;p&gt;Die richtige Einrichtung der Partition, des passenden Dateisystems und der Partitionstabelle ist die größte Herausforderung für jeden, der ein neues Betriebssystem installiert.&lt;/p&gt;

            &lt;p&gt;&lt;font color=&apos;#ff0000&apos;&gt;Stellen Sie sicher, dass Sie alle Daten, die Sie von Ihrem Laufwerk benötigen, sichern, bevor Sie fortfahren.&lt;/font&gt;&lt;/p&gt;

            &lt;p&gt;Wenn Ihr Zielinstallationsmedium (Festplatte, SSD, USB-Stick als Beispiele) nicht formatiert und partitioniert oder nicht nach Ihren Wünschen eingerichtet ist, können Sie dies aus dem Installationsprogramm heraus tun oder es vorbereiten, bevor Sie das Installationsprogramm starten.&lt;/p&gt;

            &lt;p&gt;Sowohl für UEFI- als auch für BIOS-Systeme erhalten Sie, wenn Sie mit der Maus über die jeweiligen Info-Buttons fahren, weitere Informationen zu den verschiedenen Optionen für jedes System.&lt;/p&gt;

            &lt;p&gt;Dieser Installer stellt Ihnen vier Optionen zur Verfügung.&lt;/br&gt;
            Die erste Option erlaubt es Ihnen, eine vorhandene Partition zu verkleinern und KaOS neben jedem anderen bereits auf Ihrem System vorhandenen Betriebssystem zu installieren, wobei das XFS-Dateisystem verwendet wird. Das Verkleinern ist nicht möglich für Partitionen, die sich auf einer erweiterten Partitionstabelle befinden oder das XFS-Dateisystem verwenden.&lt;/br&gt;
            Die zweite Option erlaubt es Ihnen, eine vorhandene Partition zu verwenden und ersetzt alle Dateien und/oder das Betriebssystem auf dieser Partition durch eine KaOS-Installation unter Verwendung des XFS-Dateisystems.&lt;/br&gt;
            Die dritte Option verwendet die gesamte Festplatte und erstellt eine Partition, auf der alle unter root installiert werden. Alle anderen Partitionen werden entfernt und das verwendete Dateisystem wird XFS verwendet.&lt;/p&gt;

            &lt;p&gt;Die vierte Option gibt Ihnen die Freiheit, jede Option, jedes Dateisystem und jede Partitionstabelle einzustellen. Wenn Sie das Laufwerk komplett bereinigen und neu starten wollen oder wenn dieses Laufwerk noch keine Partitionstabelle hat (neue Medien, Virtualbox-Installation), müssen Sie sich entscheiden, welche Partitionstabelle Sie verwenden wollen. Die Voreinstellung im Installer ist GPT, ms-dos ist die ältere Option (wird noch häufiger für BIOS-Systeme verwendet). Der Vorteil von GPT ist, dass es praktisch unbegrenzte primäre Partitionen verwenden kann (ms-dos ist auf vier begrenzt), wird für Laufwerke größer als 2 Tb benötigt und ist am besten für UEFI-Systeme geeignet. Wenn Sie GPT auf einem BIOS-System verwenden möchten, stellen Sie sicher, dass es korrekt eingerichtet ist, mit der benötigten 8 MB-Partition mit unformatiertem Speicherplatz am Anfang des Laufwerks und mit dem bios_grub-Flag, das dieser unformatierten Partition zugewiesen ist.  Dieses Setup kann keine separate /boot-Partition haben.&lt;/p&gt;

            &lt;p&gt;Sobald die Partitionstabelle eingerichtet ist, müssen Sie das Laufwerk partitionieren - mindestens eine Partition für / (root). Es gibt einige Vorteile, eine separate Partition für /home zu verwenden und Sie möchten vielleicht eine Swap-Partition für Schlafmodus/Ruhezustand haben. Jede andere Partition ist eine rein persönliche Wahl, obwohl das Einrichten von /usr in systemd nicht sehr gut unterstützt wird (Sie müssen zusätzliche Schritte durchführen, damit das korrekt funktioniert).&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="117"/>
        <source>&lt;p&gt;Option to install alongside an existing partition, UEFI system, / (root) and swap used. After selecting which partition you want to shrink to create room for KaOS, you can drag in that partition to set the desired size.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Option zur Installation neben einer bestehenden Partition, UEFI-System, / (root) und Swap verwendet. Nachdem Sie ausgewählt haben, welche Partition Sie verkleinern möchten, um Platz für KaOS zu schaffen, können Sie diese Partition hineinziehen, um die gewünschte Größe einzustellen.  Hier wird auch die Option angezeigt, das System mit einem gesetzten Passwort zu verschlüsseln.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="144"/>
        <source>&lt;p&gt;Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the &lt;i&gt;after&lt;/i&gt; bar.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Option zum Ersetzen einer bestehenden Partition, UEFI-System, / (root) und Swap verwendet. Sobald Sie die zu ersetzende Partition ausgewählt haben, wird in der Vorschau der Balken &lt;i&gt;danach&lt;/i&gt; angezeigt. Hier wird auch die Option angezeigt, das System mit einem gesetzten Passwort zu verschlüsseln.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="171"/>
        <source>&lt;p&gt;Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Option zur Verwendung des gesamten Laufwerks, alles wird unter / (root) installiert, falls auf einem BIOS-System und eine FAT32 EFI-Partition wird ebenfalls erstellt, wenn das System UEFI ist, mit zugewiesenem Swap, falls die Festplattengröße dies erlaubt. Dadurch werden alle Daten und installierten Systeme vom ausgewählten Laufwerk entfernt.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="198"/>
        <source>&lt;p&gt;Using the fourth option to delete an existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight &lt;code&gt;Free Space&lt;/code&gt; and select &lt;code&gt;Create&lt;/code&gt;.  You then get a window with options to set partition type, file system and mountpoint. When using an UEFI install, it is a must to have a vfat (fat32) formatted /boot partition available. Best set the size to 512Mb and have it at the beginning of the partition-table. Once root is set, the Next button will become active again.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mit der vierten Option können Sie ein bestehendes Layout löschen. Wählen Sie &lt;code&gt;Neue Partitionstabelle&lt;/code&gt; für ein neues Laufwerk oder um von MSDOS auf GPT oder umgekehrt zu wechseln.&lt;/br&gt;
            Aktivieren Sie &lt;code&gt;Freier Speicherplatz&lt;/code&gt; und wählen Sie &lt;code&gt;Erstellen&lt;/code&gt;. Sie erhalten dann ein Fenster mit Optionen zum Festlegen von Partitionstyp, Dateisystem und Einhängepunkt. Wenn Sie eine UEFI-Installation verwenden, ist es ein Muss, eine vfat (fat32) formatierte /boot-Partition zur Verfügung zu haben. Am besten stellen Sie die Größe auf 512Mb ein und platzieren Sie diese am Anfang der Partitionstabelle. Sobald Root gesetzt ist, wird die Schaltfläche Weiter wieder aktiv.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="266"/>
        <source>&lt;p&gt;Using the fourth option to adjust existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight a desired partition, and select &lt;code&gt;Format&lt;/code&gt;. If this is going to be the root partition, it needs to be formatted. If old files are still present it will most likely result in a broken install. Next select a Mountpoint, root needs to be set, for UEFI install /boot needs to be set too. Repeat these steps for any other partition you want to use for this install. Once root is set, the Next button will become active again. Options are available to encrypt partitions, this includes swap.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mit der vierten Option können Sie das bestehende Layout anpassen. Wählen Sie &lt;code&gt;Neue Partitionstabelle&lt;/code&gt; für ein neues Laufwerk oder zum Umschalten von ms-dos auf GPT bzw. umgekehrt.&lt;/br&gt;
            Markieren Sie eine gewünschte Partition und wählen Sie &lt;code&gt;Formatieren&lt;/code&gt;. Wenn dies die Root-Partition sein soll, muss sie formatiert werden. Wenn alte Dateien noch vorhanden sind, wird es höchstwahrscheinlich zu einer fehlerhaften Installation führen. Als nächstes wählen Sie einen Einhängepunkt. Root muss gesetzt werden, für UEFI install muss auch /boot gesetzt werden. Wiederholen Sie diese Schritte für jede andere Partition, die Sie für diese Installation verwenden möchten. Sobald root gesetzt ist, wird die Schaltfläche Weiter wieder aktiv. Es gibt Optionen zum Verschlüsseln von Partitionen, dies beinhaltet auch Swap.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="304"/>
        <source>&lt;p&gt;The image below shows the needed setup for an UEFI partition. If your install already has this set, &lt;font color='#ff0000'&gt;DO NOT&lt;/font&gt; format it. With UEFI any existing bootloader can be used, formatting will delete any currently present files to boot Windows or any other OS.&lt;/br&gt;
            For BIOS systems select where you want to install the bootloader, this can either be done in the Master Boot Record of the selected disc, or can be installed in the /boot partition of the system (/boot can reside under root for that).&lt;/br&gt;
            No changes will happen when you click the Next button, you will get a chance to review all your chosen settings and go back if things are not exactly as you want them.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Das folgende Bild zeigt die notwendige Einrichtung einer UEFI-Partition. Wenn Ihre Installation bereits über dieses Set verfügt, sollten Sie es &lt;font color=&apos;#ff0000&apos;&gt;NICHT&lt;/font&gt; formatieren. Mit UEFI kann jeder existierende Bootloader verwendet werden, die Formatierung löscht alle aktuell vorhandenen Dateien, um Windows oder jedes andere Betriebssystem zu starten.&lt;/br&gt;
            Bei BIOS-Systemen wählen Sie aus, wo der Bootloader installiert werden soll. Dies kann entweder im Master Boot Record des ausgewählten Laufwerks erfolgen oder in der /boot-Partition des Systems installiert werden (/boot kann dafür unter root liegen).&lt;/br&gt;
            Es werden keine Änderungen vorgenommen, wenn Sie auf die Schaltfläche Weiter klicken. Sie erhalten die Möglichkeit, alle Ihre gewählten Einstellungen zu überprüfen und zurückzugehen, wenn die Dinge nicht genau so sind, wie Sie sie wollen.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>summary</name>
    <message>
        <location filename="../guide/summary.qml" line="52"/>
        <source>&lt;h3&gt;Summary&lt;/h3&gt;

            &lt;p&gt;All looking as it should? Then clicking Next will give you one last warning before the actual formatting and installation will start.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Zusammenfassung&lt;/h3&gt;

            &lt;p&gt;Sieht alles so aus, wie es aussehen soll? Wenn Sie nun auf Weiter klicken, erhalten Sie eine letzte Warnung, bevor die eigentliche Formatierung und Installation beginnt.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/summary.qml" line="90"/>
        <source>&lt;p&gt;While the system is being installed, a slideshow is shown which will give you some basic info. You can follow what the installer is doing at different stages though. Expect this part to take between 5-10 minutes depending on your settings and speed of the target drive. At around 30%, the copying of the files is completed (which will take the longest), then the installer will create the users, remove Live system specific packages, install additional packages, remove any language packs &amp; drivers not needed for your specific hardware, setup either GRUB for BIOS systems or Systemd-boot for UEFI and copies the KaOS specific user settings.&lt;/p&gt;

            &lt;p&gt;Once the installation is finished, you have the option to close the installer and go back to live mode or reboot the system right away. A full log of the install is available as installation.log in the home directory of the Live user and this log is copied to /var/log/installation.log of the target system.&lt;/p&gt;

            &lt;p&gt;Hopefully this Guide has answered any questions you had about using this Installer. If anything is not clear enough then it would be really appreciated if you can get in touch to get the needed changes in.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Während der Installation des Systems wird eine Präsentation gezeigt, die Ihnen einige grundlegende Informationen gibt. Sie können jedoch in verschiedenen Phasen verfolgen, was der Installer tut. Rechnen Sie damit, dass dieser Teil zwischen 5-10 Minuten dauert, abhängig von Ihren Einstellungen und der Geschwindigkeit des Ziellaufwerks. Bei ca. 30% ist das Kopieren der Dateien abgeschlossen (was am längsten dauert), dann erstellt der Installer die Benutzer, entfernt die systemspezifischen Pakete von Live, installiert zusätzliche Pakete, entfernt alle Sprachpakete und Treiber, die nicht für Ihre spezifische Hardware benötigt werden, richtet entweder GRUB für BIOS-Systeme oder Systemd-boot für UEFI ein und kopiert die KaOS-spezifischen Benutzereinstellungen.&lt;/p&gt;

            &lt;p&gt;Nach Abschluss der Installation haben Sie die Möglichkeit, den Installer zu schließen und in den Live-Modus zurückzukehren oder das System sofort neu zu starten. Ein vollständiges Protokoll der Installation ist als installation.log im Home-Verzeichnis des Live-Benutzers verfügbar und dieses Protokoll wird nach /var/log/installation.log des Zielsystems kopiert.&lt;/p&gt;

            &lt;p&gt;Hoffentlich hat dieses Handbuch alle Fragen beantwortet, die Sie zur Verwendung dieses Installers hatten. Wenn etwas nicht klar genug ist, dann wäre es wirklich nett, wenn Sie sich mit uns in Verbindung setzen könnten, um die notwendigen Änderungen vorzunehmen.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>user</name>
    <message>
        <location filename="../guide/user.qml" line="52"/>
        <source>&lt;h3&gt;User Creation&lt;/h3&gt;

            &lt;p&gt;The user creation page gives you the option to set a user name different from your actual name and set a preferred name for the system.&lt;/p&gt;

            &lt;p&gt;For security reasons, it is advisable to use a different password for the administrator (or root) account.&lt;/p&gt;

            &lt;p&gt;Default is set to autologin disabled, add a marker to enable passwordless login.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Benutzer anlegen&lt;/h3&gt;

            &lt;p&gt;Die Seite zum Anlegen von Benutzern gibt Ihnen die Möglichkeit, einen von Ihrem tatsächlichen Namen abweichenden Benutzernamen und einen bevorzugten Namen für das System festzulegen.&lt;/p&gt;

            &lt;p&gt;Aus Sicherheitsgründen ist es ratsam, ein anderes Passwort für das Administrator- (oder Root-) Konto zu verwenden.&lt;/p&gt;

            &lt;p&gt;Standardmäßig ist Autologin deaktiviert, setzen Sie eine Markierung, um die kennwortlose Anmeldung zu aktivieren.&lt;/p&gt;</translation>
    </message>
</context>
</TS>