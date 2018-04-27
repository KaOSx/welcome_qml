<?xml version="1.0" ?><!DOCTYPE TS><TS language="ca" version="2.1">
<context>
    <name>Page1Form.ui</name>
    <message>
        <location filename="../Page1Form.ui.qml" line="44"/>
        <source>Install KaOS</source>
        <translation>Instal·lació del KaOS</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="92"/>
        <source>Guide</source>
        <translation>Guia</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="135"/>
        <source>Package List</source>
        <translation>Llista de paquets</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="160"/>
        <source>Forum</source>
        <translation>Fòrum</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="184"/>
        <source>Documentation</source>
        <translation>Documentació</translation>
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
        <translation>&lt;h3&gt;Quant al KaOS&lt;/h3&gt;
                    &lt;p&gt;La idea darrere del KaOS és crear una distribució contínua estretament integrada i transparent per als ordinadors d&apos;escriptori moderns, feta des de zero amb una focalització molt concreta. Focalitzada en &lt;b&gt;un entorn d&apos;escriptori (KDE), un conjunt d&apos;eines (Qt), una arquitectura (x86_64)&lt;/b&gt;, a més de la cura per avaluar i seleccionar les eines i les aplicacions més adients. Tota la feina està encaminada a l&apos;empaquetament, no al desenvolupament d&apos;eines o d&apos;aplicacions noves.&lt;/p&gt;

                    &lt;p&gt;Deixar de banda sistemes operatius de propietat a favor de les opcions de codi obert (basades en Linux, BSD o Solaris) és &lt;b&gt;voler llibertat i tria&lt;/b&gt; en gairebé tots els casos. Però un sistema operatiu o distribució d&apos;aquests no hauria de fer una tria del que es considera el més adequat? El KaOS hi veu una manca de focalització. Per crear la distribució amb la més alta qualitat possible, hi ha d&apos;haver un focus per assegurar que l&apos;usuari obté el millor possible per a qualsevol tria que es faci. Simplement no és possible empaquetar qualsevol cosa i que tot funcioni perfectament per a cada entorn d&apos;escriptori o conjunt d&apos;eines.&lt;/p&gt;
                    
                    &lt;p&gt;El KaOS ha pres la decisió d&apos;usar el &lt;b&gt;nucli de Linux&lt;/b&gt; com a base (tot i que el nucli de l&apos;Illumos és sota avaluació constant, i hi ha un desig d&apos;un canvi futur). Després d&apos;aquesta tria, el millor gestor de paquets disponible, la manera més flexible de construcció de paquets, manteniment de repositoris és el &lt;b&gt;Pacman / Makepkg per a una distribució contínua&lt;/b&gt; com ara el KaOS. Pel que fa a l&apos;entorn d&apos;escriptori, no hi haurà mai un canvi, tant si és amb una base de Linux o d&apos;Illumos, KDE serà la tria i Qt, el conjunt d&apos;eines. Amb aquestes decisions preses, es va començar la construcció de paquets per a aquesta distribució l&apos;abril de 2013.&lt;/p&gt;

                    &lt;p&gt;El KaOS és una distribució construïda des de zero, &lt;b&gt;cada paquet de cada repositori és construït per i per al KaOS&lt;/b&gt;. El juliol de 2013 es va arribar a l&apos;objectiu inicial de 1500 paquets.&lt;/p&gt;

                    &lt;p&gt;Quan es considera el nombre relativament baix de la totalitat de paquets disponibles, si us plau, recordeu una cosa: ja que hi ha un focus en un conjunt d&apos;eines i un entorn d&apos;escriptori, &lt;b&gt;no hi ha la necessitat excessiva de divisió de paquets&lt;/b&gt; per provar que tot funciona amb tots els tipus d&apos;entorns diferents. Mentre que en altres llocs, molts paquets es divideixen en 3, 4, o 5, i a vegades en 15 o 20, el KaOS simplifica les coses tant com és possible i evita les divisions (per exemple: les aplicacions de xorg, uns 50 paquets combinats en només 3; mesa consisteix en 2, en comptes de 15).&lt;/p&gt;
                    
                    &lt;p&gt;La tria de KDE / QT no vol dir que el KaOS perdi de vista la importància de tenir &lt;b&gt;la millor eina disponible per a una tasca&lt;/b&gt;. La majoria de vegades es creu que KDE / Qt proporciona una eina superior, però hi ha algunes aplicacions en què l&apos;opció de GTK és l&apos;única disponible del tipus (Inkscape o Ardour, per dir-ne dues), o en el cas dels navegadors web, per exemple, les opcions de Qt no arriben a les que hi ha en GTK. Per a aquestes instàncies, les aplicacions de GTK estan disponibles, tot i que el nombre se&apos;n mantindrà limitat. Tot i això, aquesta imatge ISO és una mostra del poder de Qt / KDE, de manera que és una &lt;b&gt;ISO sense GTK&lt;/b&gt;, la qual cosa vol dir que no hi ha Firefox, Chrome o LibreOffice, per dir-ne alguns, ja que depenen de GTK.&lt;/p&gt;
                    
                    &lt;p&gt;La disposició del repositori és simple i consisteix en tres grups, Core, Main i Apps. Una actualització regular completa del sistema sempre us donarà l&apos;últim que hi ha disponible, &lt;b&gt;sense la necessitat de cap reinstal·lació&lt;/b&gt; del sistema. &lt;i&gt;Core&lt;/i&gt; té els paquets de base necessaris perquè el sistema arrenqui, es comuniqui amb el BIOS, connecti la majoria del maquinari i estableixi les opcions bàsiques de l&apos;intèrpret d&apos;ordres. Per exemple, els paquets del nucli, systemd, toolchain per a les eines de construcció i línies d&apos;ordre bàsiques. El repositori &lt;i&gt;Main&lt;/i&gt; consisteix en totes les biblioteques necessàries, controladors extres i microprogramri necessari per fer funcionar l&apos;escriptori i les aplicacions. &lt;i&gt;Apps&lt;/i&gt; consisteix en tots els paquets que veu i que usa l&apos;usuari, inclou el KDE i qualsevol altra eina necessària. El &lt;i&gt;Build&lt;/i&gt; és on comencen tots els paquets, tant si és una reconstrucció, una actualització o una addició nova, tot va a parar a Build; un cop se n&apos;han fet les proves adients, es desplacen al repositori respectiu.&lt;/p&gt;
                    
                    &lt;p&gt;&lt;b&gt;Els usuaris destinataris&lt;/b&gt; són els que han provat uns quants sistemes operatius, distribucions o entorns d&apos;escriptoris i han trobat que prefereixen una distribució que usi tots els seus recursos disponibles per treballar en un entorn d&apos;escriptori per treure&apos;n el màxim i que, després de la cerca, consideren que el millor per a ells és el KDE. El maquinari que usen és del 2005 o posterior; per tant, no tenen problemes a l&apos;hora d&apos;executar programari de 64 bits. No els fa por usar versions de KDE / Qt de les aplicacions que necessiten, els agrada veure el millor disponible seleccionat per a les seves necessitats, fins i tot si això vol dir aprendre maneres noves de treballar amb una aplicació que no s&apos;havia fet servir abans. Hi ha una selecció comprensiva d&apos;aplicacions similars, però que es limitarà a 5 o 6.&lt;/p&gt;
                    
                    &lt;p&gt;El KDE és un entorn d&apos;escriptori modern que pot usar la majoria de capacitats de qualsevol targeta gràfica i de so. Això no significa que el KDE no es pugui executar en maquinari senzill o antic, tot i que generalment hi ha altres opcions millors disponibles per a aquests sistemes (OpenBox, per exemple). El mínim absolut necessari per a &lt;b&gt;l&apos;espai del disc dur és 8 Gb, però 25 Gb&lt;/b&gt; són recomanables com mínim. El KaOS s&apos;instal·larà amb 1.5 Gb de RAM disponible, tot i que una millor experiència començarà amb &lt;b&gt;2 Gb de RAM&lt;/b&gt;. Ja que només hi ha disponibles paquets de x86_64, cal &lt;b&gt; un processador compatible amb 64 bits&lt;/b&gt;. Com amb qualsevol distribució contínua, les actualitzacions són freqüents i poden ser grosses; per tant, és recomanable tenir una connexió d&apos;Internet ràpida (el marcatge telefònic serà molt feixuc) i una connexió de dades de més de 2 Gb al mes.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>guide</name>
    <message>
        <location filename="../guide/guide.qml" line="33"/>
        <source>Guide</source>
        <translation>Guia</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="81"/>
        <source>Intro</source>
        <translation>Introducció</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="84"/>
        <source>Keyboard</source>
        <translation>Teclat</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation>Particions</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>Usuaris</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>Resum</translation>
    </message>
</context>
<context>
    <name>intro</name>
    <message>
        <location filename="../guide/intro.qml" line="52"/>
        <source>&lt;h3&gt;Installation Guide&lt;/h3&gt;

            &lt;p&gt;Now that you have seen some of how KaOS works in live mode, you might be ready to install. Before doing so, it is best to understand a few things.&lt;/p&gt;

            &lt;p&gt;As with any rolling release, updating regularly is a must, fall too far behind, and trying to update then will likely cause issues. Recommended is to update weekly, no less than once a month.&lt;/br&gt;
            If that is something not feasible for you, it might be better to consider using a static distribution, with a six or nine month release cycle. If any instructions are needed for an update to KaOS, &lt;a href='http://kaosx.us/news/'&gt;kaosx.us/news/&lt;/a&gt; will always warn you about them (which will be shown in Octopi, the package manager too). It is best to familiarize yourself with the command line &lt;a href='https://kaosx.us/docs/pacman/'&gt;package manager pacman&lt;/a&gt;. Any distribution has to implement major changes at times, a rolling distribution has to rely on the package manager to interact with the users to make sure such updates are done correctly. Since rolling inherently means, no re-install at set intervals (a static distribution can use such needed re-install to introduce major changes). No GUI for pacman is as powerful as pacman itself in those situations.&lt;/p&gt;

            &lt;p&gt;Calamares, the installer of KaOS is straightforward and easy to use, but lacks one feature at this stage. RAID disk setups is not supported yet.&lt;/p&gt;

            &lt;h3&gt;Starting the Installer&lt;/h3&gt;

            &lt;p&gt;The first page gives you some information of the installer, option to check the currently known issues and an option to select what language will be used for the install.&lt;/p&gt;
            
            &lt;p&gt;Ensure that your system meets the minimal requirements. Not having an internet connection during the install is no deal breaker and won't stop the install from going trough.&lt;/p&gt;
            
            &lt;p&gt;Having less than the shown disc space or available RAM will almost certainly fail the install. As for disc space, a minimum of 20 Gb is recommended.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Guia d&apos;instal·lació&lt;/h3&gt;

            &lt;p&gt;Ara que heu vist com funciona el KaOS en mode autònom, podeu estar preparats per instal·lar-lo. Abans de fer-ho, però, és millor entendre algunes coses.&lt;/p&gt;

            &lt;p&gt;Com amb qualsevol versió contínua, és obligatori actualitzar el sistema regularment. Si el sistema es queda massa enrere, intentar actualitzar-lo podria comportar problemes. És recomanable actualitzar-lo un cop per setmana, no menys d&apos;un cop al mes.&lt;/br&gt;
            Si no ho podeu fer d&apos;aquesta manera, potser seria millor que consideréssiu usar una distribució estàtica, amb un cicle de versions noves de cada sis o nou mesos. Si calen instruccions per a alguna actualització del KaOS, &lt;a href=&apos;http://kaosx.us/news/&apos;&gt;kaosx.us/news/&lt;/a&gt; sempre us n&apos;avisarà (també es mostraran a l&apos;Octopi, el gestor de paquets). És millor que us familiaritzeu amb el gestor de paquets de la línia d&apos;ordres, el &lt;a href=&apos;https://kaosx.us/docs/pacman/&apos;&gt;pacman&lt;/a&gt;. Qualsevol distribució ha d&apos;implementar a vegades canvis importants, una distribució contínua ha de confiar en el gestor de paquets perquè interaccioni amb els usuaris per assegurar que aquestes actualitzacions es facin correctament. Una versió contínua significa que no cal reinstal·lar el sistema a intervals establerts (una distribució estàtica pot necessitar aquesta reinstal·lació per introduir canvis importants). No hi ha cap interfície gràfica per al pacman que sigui tan potent com el mateix pacman en aquestes situacions.&lt;/p&gt;

            &lt;p&gt;El Calamares, l&apos;instal·lador del KaOS, és directe i fàcil d&apos;usar, però en aquests moments li manca una característica. La configuració de discs RAID encara no té suport.&lt;/p&gt;

            &lt;h3&gt;Iniciar l&apos;instal·lador&lt;/h3&gt;

            &lt;p&gt;La primera pàgina us dona informació sobre l&apos;instal·lador, l&apos;opció de mirar els problemes actuals coneguts i l&apos;opció de seleccionar la llengua que s&apos;usarà per a la instal·lació.&lt;/p&gt;
            
            &lt;p&gt;Assegureu-vos que el sistema compleix els requisits mínims. No tenir una connexió a Internet durant la instal·lació no és imprescindible i no n&apos;aturarà el procés.&lt;/p&gt;
            
            &lt;p&gt;Tenir menys espai de disc del que es mostra o RAM disponible farà que gairebé segurament falli la instal·lació. Pel que fa a l&apos;espai de disc, és recomanable un mínim de 20 Gb.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="33"/>
        <source>Welcome</source>
        <translation>Benvingut</translation>
    </message>
    <message>
        <location filename="../main.qml" line="42"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt;Gràcies per provar el KaOS. Us cal el fitxer de contrasenya o una llista de paquets?&lt;br&gt;
                            Voleu saber més coses del projecte? Consulteu els enllaços que hi ha a continuació.&lt;br&gt;&lt;br&gt;
                            No dubteu a donar-nos l&apos;opinió sobre el KaOS al Fòrum.&lt;/div&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="56"/>
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
        <translation>&lt;p&gt;Contrasenyes correctes per usar a la sessió autònoma:&lt;/p&gt;
                            &lt;p&gt;&lt;/p&gt;
                            &lt;table width=100% align=center bgcolor=#eaeaea&gt;
                                &lt;tr&gt;
                                    &lt;th&gt;Nom d&apos;usuari:&lt;/th&gt;
                                    &lt;th&gt;Contrasenya:&lt;/th&gt;
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
                            &lt;p&gt;Que en gaudiu molt!&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="99"/>
        <source>Main</source>
        <translation>Principal</translation>
    </message>
    <message>
        <location filename="../main.qml" line="102"/>
        <source>Passwords</source>
        <translation>Contrasenyes</translation>
    </message>
    <message>
        <location filename="../main.qml" line="105"/>
        <source>About</source>
        <translation>Quant a</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Les &lt;strong&gt;notes de la versió&lt;/strong&gt; us ofereixen informació important sobre el que s&apos;inclou a la imatge ISO&lt;/p&gt;
            &lt;p&gt;Si heu seleccionat Nvidia no lliure durant l&apos;inici de la sessió autònoma, se us mostrarà una pàgina de llicència. Assegureu-vos de llegir-la i acceptar-la, si no, la instal·lació no inclourà el controlador no lliure i s&apos;usarà per defecte el controlador alternatiu Nouveau. No veureu aquesta pàgina si seleccioneu usar els controladors lliures.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation>&lt;p&gt;El següent és la &lt;strong&gt;configuració del teclat&lt;/strong&gt;. Podeu provar-ne la disposició escrivint alguna cosa a l&apos;àrea designada.&lt;/p&gt;

            &lt;p&gt;Useu el menú desplegable per precisar el model de teclat exacte.&lt;/p&gt;</translation>
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
            The first option will allow you to shrink an existing partition and install KaOS alongside any other OS already available on your system, using the XFS filesystem. Shrinking is not possible for partitions residing on an extended partion table or using the XFS filesystem.&lt;/br&gt;
            The second option lets you use an existing partition and it will replace all files and/or OS on that partition with a KaOS install, using the XFS filesystem.&lt;/br&gt;
            The third option will use the entire disk and will create one partition where all will be installed under root, all other partitions will be removed and the filesystem used will XFS.&lt;/p&gt;
            
            &lt;p&gt;The fourth option gives you the freedom to set any option, any filesystem and partition table. If you want to completely clean the drive and start over or if this drive has no partition table at all yet (new media, virtualbox install), you have to make a decision what partitiontable to use. Default in the installer is GPT, ms-dos is the older option (still more commomly used for BIOS systems). Advantage of GPT, it can use virtual unlimited primary partitions (ms-dos is limited to four), is needed for drives larger than 2 Tb and is best for UEFI systems. If you choose to use GPT on a BIOS system, make sure to set it up correctly, with the needed 8 MB partition of unformatted space at the beginning of the drive and having the bios_grub flag assigned to that unformatted partition.  This setup cannot have a seperate /boot partition.&lt;/p&gt;
            
            &lt;p&gt;Once the partitiontable is set, you need to partition the drive, minimum needed, one partition for / (root). There are some advantages to using a separate partition for /home, and you might like to have a swap partition for sleep/hibernate. Any other partitions is strictly personal choice, though setting up /usr is not very well supported in systemd (you&apos;ll have to use extra steps to make that work correctly).&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="117"/>
        <source>&lt;p&gt;Option to install alongside an existing partition, UEFI system, / (root) and swap used. After selecting which partition you want to shrink to create room for KaOS, you can drag in that partition to set the desired size.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Opció per fer la instal·lació al costat d&apos;una partició existent; usa UEFI, / (arrel) i intercanvi. Després de seleccionar quina partició voleu encongir per fer lloc per al KaOS, podeu arrossegar-hi la partició per establir-ne la mida desitjada. També es mostra aquí l&apos;opció d&apos;encriptar el sistema amb una contrasenya.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="144"/>
        <source>&lt;p&gt;Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the &lt;i&gt;after&lt;/i&gt; bar.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Opció per reemplaçar una partició existent; usa UEFI, / (arrel) i intercanvi. Un cop seleccionada la partició que vulgueu reemplaçar, la previsualització mostrarà la barra de &lt;i&gt;després&lt;/i&gt;. També es mostra aquí l&apos;opció d&apos;encriptar el sistema amb una contrasenya.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="171"/>
        <source>&lt;p&gt;Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Opció per usar tot el disc dur; tot s&apos;instal·la dins de / (arrel), si és tracta d&apos;un sistema BIOS, o bé es crea una partició FAT32 EFI si es tracta d&apos;un sistema és UEFI, amb l&apos;intercanvi assignat si la mida del disc ho permet. Això eliminarà totes les dades i els sistemes instal·lats del disc dur seleccionat.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="198"/>
        <source>&lt;p&gt;Using the fourth option to delete an existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight &lt;code&gt;Free Space&lt;/code&gt; and select &lt;code&gt;Create&lt;/code&gt;.  You then get a window with options to set partition type, file system and mountpoint. When using an UEFI install, it is a must to have a vfat (fat32) formatted /boot partition available. Best set the size to 512Mb and have it at the beginning of the partition-table. Once root is set, the Next button will become active again.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="266"/>
        <source>&lt;p&gt;Using the fourth option to adjust existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight a desired partition, and select &lt;code&gt;Format&lt;/code&gt;. If this is going to be the root partition, it needs to be formatted. If old files are still present it will most likely result in a broken install. Next select a Mountpoint, root needs to be set, for UEFI install /boot needs to be set too. Repeat these steps for any other partition you want to use for this install. Once root is set, the Next button will become active again. Options are available to encrypt partitions, this includes swap.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="304"/>
        <source>&lt;p&gt;The image below shows the needed setup for an UEFI partition. If your install already has this set, &lt;font color='#ff0000'&gt;DO NOT&lt;/font&gt; format it. With UEFI any existing bootloader can be used, formatting will delete any currently present files to boot Windows or any other OS.&lt;/br&gt;
            For BIOS systems select where you want to install the bootloader, this can either be done in the Master Boot Record of the selected disc, or can be installed in the /boot partition of the system (/boot can reside under root for that).&lt;/br&gt;
            No changes will happen when you click the Next button, you will get a chance to review all your chosen settings and go back if things are not exactly as you want them.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>summary</name>
    <message>
        <location filename="../guide/summary.qml" line="52"/>
        <source>&lt;h3&gt;Summary&lt;/h3&gt;

            &lt;p&gt;All looking as it should? Then clicking Next will give you one last warning before the actual formatting and installation will start.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Resum&lt;/h3&gt;

            &lt;p&gt;Tot és com hauria de ser? Doncs cliqueu a Següent i se us avisarà un darrer cop abans de formatar i començar la instal·lació.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/summary.qml" line="90"/>
        <source>&lt;p&gt;While the system is being installed, a slideshow is shown which will give you some basic info. You can follow what the installer is doing at different stages though. Expect this part to take between 5-10 minutes depending on your settings and speed of the target drive. At around 30%, the copying of the files is completed (which will take the longest), then the installer will create the users, remove Live system specific packages, install additional packages, remove any language packs &amp; drivers not needed for your specific hardware, setup either GRUB for BIOS systems or Systemd-boot for UEFI and copies the KaOS specific user settings.&lt;/p&gt;

            &lt;p&gt;Once the installation is finished, you have the option to close the installer and go back to live mode or reboot the system right away. A full log of the install is available as installation.log in the home directory of the Live user and this log is copied to /var/log/installation.log of the target system.&lt;/p&gt;

            &lt;p&gt;Hopefully this Guide has answered any questions you had about using this Installer. If anything is not clear enough then it would be really appreciated if you can get in touch to get the needed changes in.&lt;/p&gt;</source>
        <translation type="unfinished"/>
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
        <translation>&lt;h3&gt;Creació de l&apos;usuari&lt;/h3&gt;

            &lt;p&gt;La pàgina de creació de l&apos;usuari us ofereix l&apos;opció d&apos;establir un nom d&apos;usuari diferent del vostre nom real i establir el nom que preferiu per al sistema.&lt;/p&gt;

            &lt;p&gt;Per motius de seguretat, és recomanable usar una contrasenya diferent per al compte d&apos;administració (o arrel).&lt;/p&gt;

            &lt;p&gt;Per defecte, l&apos;entrada és amb contrasenya. Si voleu una entrada al sistema sense petició de contrasenya, marqueu-ne l&apos;opció.&lt;/p&gt;</translation>
    </message>
</context>
</TS>