<?xml version="1.0" ?><!DOCTYPE TS><TS language="da" version="2.1">
<context>
    <name>Page1Form.ui</name>
    <message>
        <location filename="../Page1Form.ui.qml" line="45"/>
        <source>Install KaOS</source>
        <translation>Installer KaOS</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="94"/>
        <source>Guide</source>
        <translation>Guide</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="187"/>
        <source>Donate</source>
        <translation>Doner</translation>
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
        <translation>&lt;h3&gt;Om KaOS&lt;/h3&gt;
                    &lt;p&gt;Ideen bag KaOS er at skabe en tæt integreret rullende og gennemsigtig distribution til det moderne skrivebord, bygget fra bunden med et meget specifikt fokus. Fokus på &lt;b&gt;en DE (KDE), en værktøjskasse (Qt), en arkitektur (x86_64)&lt;/b&gt; plus fokus på at evaluere og vælge de mest egnede værktøjer og programmer. Alt arbejde er rettet mod pakning, ikke at udvikle nye værktøjer eller programmer.&lt;/p&gt;

                    &lt;p&gt; At bevæge sig væk fra proprietære operativsystemer til open source-muligheder (Linux-baserede, BSD-baserede, Solaris-baserede) handler om&lt;b&gt;at ville have frihed og valg&lt;/b&gt; i næsten alle tilfælde. Men skal et sådant operativ system eller en sådan distribution ikke træffe nogle valg af, hvad den mener er bedst egnet? KaOS ser en mangel på fokus i den henseende. For at skabe den bedst mulige distribution af kvalitet, skal der være fokus på at sikre, at brugeren får det bedst mulige for ethvert valg, de har taget. Det er simpelthen ikke muligt at få alt til at fungere perfekt til ethvert skrivebordsmiljø eller værktøjskasse.&lt;/p&gt;
                    
                    &lt;p&gt;KaOS har taget valget om at bruge &lt;b&gt;Linux kernen&lt;/b&gt; som en base (selvom Illumos -kernen er under konstant evaluering, og en fremtidig switch er et ønske). Efter dette valg er den bedst tilgængelige pakkehåndterer, den mest fleksible måde at bygge pakker, vedligeholdelse af arkivet &lt;b&gt;pacman/makepkg til en rullende distribution&lt;/b&gt; som KaOS. Hvad angår skrivebordsmiljøet, vil der aldrig være en ændring, uanset om det er Linux eller Illumos baseret, KDE vil være valget, Qt Toolkit. Med disse valg på plads, blev der i april 2013 startet med at lave pakker til denne uafhængige distribution.&lt;/p&gt;

                    &lt;p&gt;KaOS er en distribution bygget fra bunden af, &lt;b&gt;hvor hver pakke i hvert arkiv er bygget af og til  KaOS&lt;/b&gt;. I juli 2013 blev det oprindelige mål om cirka 1500 pakker nået.&lt;/p&gt;

                    &lt;p&gt;Når du overvejer det relativt lave antal samlede pakker, skal du huske på en ting. Da der er fokus på en værktøjskasse, et DE &lt;b&gt;er der ikke behov for overdreven opdeling af pakker&lt;/b&gt; for at få alt til at fungere til alle slags forskellige miljøer. I andre distributioner, er masser af pakker opdelt i 3-4-5, til tider 15-20 pakker, KaOS forenkler tingene så meget som muligt og undgår splittelse (eksempler er xorg-apps, omkring 50 pakker kombineret på bare 3, mesa består af 2, i stedet for 15).&lt;/p&gt;
                    
                    &lt;p&gt;At træffe valget til KDE/QT betyder ikke, at KaOS mister synet på vigtigheden af ​​at have det &lt;b&gt;bedst mulige værktøj til rådighed i udførelsen af jobbet
Det meste af tiden tror man, at KDE/Qt giver det&lt;/b&gt;. Det meste af tiden tror man, at KDE/Qt giver det mest overlegne værktøj, men der er et par programmer, hvor GTK er den eneste tilgængelige af den slags (Inkscape, Ardor for at nævne to), eller i tilfælde af webbrowsere til for eksempel Firefox lever Qt ikke op til deres GTK modstykker. I disse tilfælde er GTK programmer tilgængelige, selvom deres antal vil forblive begrænset. Denne ISO er dog et udstillingsvindue for kraften i Qt/KDE, så &lt;b&gt;ISO er GTK fri&lt;/b&gt;, hvilket betyder ingen Firefox, Chrome eller LibreOffice for at nævne nogle få, da de afhænger af GTK&lt;/p&gt;
                    
                    &lt;p&gt;Arkiv layoutet er enkelt og består af tre grupper, Core, Main og Apps. En regelmæssig komplet systemopdatering vil altid give dig det nyeste tilgængelige, &lt;b&gt;uden at det er nødvendigt at geninstallere&lt;/b&gt; systemet. &lt;i&gt;Core&lt;/i&gt; har de base pakker, der er nødvendige for, at et system kan starte op, kommunikere med BIOS, forbinde langt de fleste hardware og angive grundlæggende shell muligheder. Eksempel på pakker er kernen, systemd, værktøjskasse til bygning og grundlæggende kommandolinjeværktøjer. &lt;i&gt;Main&lt;/i&gt; består af alle de nødvendige biblioteker, ekstra drivere og firmware, der er nødvendige for at få skrivebordet og programmer til at fungere. &lt;i&gt;Apps&lt;/i&gt; består af alle pakker, der ses og bruges af brugerne, herunder KDE og eventuelle nødvendige værktøjer. &lt;i&gt;Build&lt;/i&gt; er, hvor alle pakker startede, uanset om det er en genopbygning, opdatering eller ny tilføjelse, alt går til at bygge, når de er gennemgået den korrekte test, før de flyttes til deres respektive arkiv.&lt;/p&gt;
                    
                    &lt;p&gt;&lt;b&gt;Målbrugerne&lt;/b&gt; er dem, der har prøvet mange operativ systemer/distributioner/skrivebordsmiljøer og har fundet ud af, at de foretrækker en distribution, der bruger alle dens tilgængelige ressourcer til at arbejde på en DE for at gøre det bedst muligt, og ved, at efter deres søgninger, det bedste for dem er KDE. Deres brugte hardware er fra omkring 2005 eller senere, så der er ingen problemer med at køre 64 bit software. Og målgruppen er ikke bange for at bruge KDE/Qt versioner af deres nødvendige programmer, kan lide at se de bedst tilgængelige udvalgte til deres behov, selvom det betyder at lære nogle nye måder at arbejde med et før ubrugt program. Der er en forståelsesudvælgelse for lignende programmer vil være begrænset til 5-6.&lt;/p&gt;
                    
                    &lt;p&gt;KDE er et moderne skrivebordsmiljø, der kan gøre brug af de fleste grafik eller lydkortfunktioner. Dette betyder ikke, at KDE ikke kan fås til at køre på meget low-end hardware, men generelt er der bedre muligheder til rådighed for sådanne systemer (f.eks. OpenBox). Det meget minimale behov for &lt;b&gt;harddiskplads er 8 Gb, men 25 Gb&lt;/b&gt; anbefales som minimalt. KaOS installeres med 1,5 GB RAM til rådighed, selvom en meget bedre oplevelse starter med &lt;b&gt;2 Gb of RAM&lt;/b&gt;. Da der kun er x86_64 pakker til rådighed, er &lt;b&gt;der brug for en 64 bit cpu&lt;/b&gt;. Som med enhver rullende distribution er opdateringer hyppige og kan være store, så en rimelig hurtig internetforbindelse (opkald bliver meget besværlig) og tilgængelige månedlige data på over 2 Gb anbefales.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>guide</name>
    <message>
        <location filename="../guide/guide.qml" line="33"/>
        <source>Guide</source>
        <translation>Guide</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="81"/>
        <source>Intro</source>
        <translation>Intro</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="84"/>
        <source>Keyboard</source>
        <translation>Tastatur</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation>Partitionering</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>Brugere</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>Opsummering</translation>
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
        <translation>&lt;h3&gt;Installationsguide&lt;/h3&gt;

            &lt;p&gt;Nu hvor du har set noget af, hvordan KaOS fungerer i live tilstand, er du muligvis klar til at installere. Inden du gør det, er det bedst at forstå et par ting.&lt;/p&gt;

            &lt;p&gt;Som med enhver rullende udgivelse er opdatering regelmæssigt et must, falder du for langt bagud, og forsøger på at opdatere vil det sandsynligvis forårsage problemer. Det anbefales at opdatere ugentligt, ikke mindre end en gang om måneden.&lt;/br&gt;
            Hvis det ikke er muligt for dig, er det måske bedre at overveje at bruge en statisk distribution med en seks eller ni måneders frigivelsescyklus. Hvis der er brug for instruktioner til en opdatering til KaOS, &lt;a href=&apos;https://kaosx.us/news/&apos;&gt;Vil kaosx.us/news/&lt;/a&gt; vil altid advare dig om dem (som også vil blive vist i Octopi, pakkehåndteren). Det er bedst at sætte sig ind i/ eller kommandolinjens pakkehåndtering &lt;a href=&apos;https://kaosx.us/docs/pacman/&apos;&gt;pacman&lt;/a&gt;. Enhver distribution skal til tider gennemføre store ændringer, en rullende distribution skal stole på, at pakkehåndtereren interagerer med brugerne for at sikre, at sådanne opdateringer udføres korrekt. Da rullende iboende betyder, at ingen geninstallation med bestemte intervaller (en statisk distribution kan bruge den nødvendige geninstallation til at indføre større ændringer). Ingen GUI til pacman er så kraftfuld som pacman selv i disse situationer.&lt;/p&gt;

            &lt;p&gt;Calamares, installatøren til ​​KaOS er ligetil og let at bruge, men mangler en funktion på dette tidspunkt. RAID diskopsætninger understøttes ikke endnu.&lt;/p&gt;

            &lt;h3&gt;Start af installationsprogrammet&lt;/h3&gt;

            &lt;p&gt;Den første side giver dig nogle oplysninger om installationsprogrammet, mulighed for at kontrollere de aktuelt kendte problemer og en mulighed for at vælge, hvilket sprog der skal bruges til installationen.&lt;/p&gt;
            
            &lt;p&gt;Sørg for, at dit system opfylder de minimale krav. Ikke at have en internetforbindelse under installationen er ingen deal breaker og forhindrer ikke installationen i at gå igennem.&lt;/p&gt;
            
            &lt;p&gt;At have mindre end den viste diskplads eller ledig RAM Vil næsten helt sikkert få installationen til at mislykkes . Med hensyn til diskplads anbefales et minimum på 20 Gb.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="35"/>
        <source>Welcome</source>
        <translation>Velkommen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="44"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt;Tak fordi du prøvede KaOS. Har du brug for kode filen eller pakkelisten?&lt;br&gt;
                            Vil du lære mere om projektet? Se venligst nedenstående links.&lt;br&gt;&lt;br&gt;
                            Tøv ikke med at give din mening om KaOS i forummet.&lt;/div&gt;</translation>
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
        <translation>&lt;p&gt;Korrekte adgangskoder til brug i live sessionen:&lt;/p&gt;
                            &lt;p&gt;&lt;/p&gt;
                            &lt;table width=100% align=center bgcolor=#eaeaea&gt;
                                &lt;tr&gt;
                                    &lt;th&gt;Bruger navn:&lt;/th&gt;
                                    &lt;th&gt;Kodeord:&lt;/th&gt;
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
                            &lt;p&gt;Håber du nyder det&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="108"/>
        <source>Main</source>
        <translation>Main</translation>
    </message>
    <message>
        <location filename="../main.qml" line="111"/>
        <source>Passwords</source>
        <translation>Adgangskoder</translation>
    </message>
    <message>
        <location filename="../main.qml" line="114"/>
        <source>About</source>
        <translation>Om</translation>
    </message>
    <message>
        <location filename="../main.qml" line="117"/>
        <source>Package List</source>
        <translation>Pakkeliste</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Udgivelse &lt;strong&gt;noterne&lt;/strong&gt; giver dig vigtige oplysninger om, hvad der er inkluderet i denne ISO&lt;/p&gt;
            &lt;p&gt;Hvis du valgte non-free Nvidia under opstart af Live-sessionen, vil du blive præsenteret for en licensside. Sørg for at læse og acceptere licensen, ellers inkluderer din installation ikke den non-free driver og falder tilbage til Nouveau i stedet for. Du kan ikke se denne side, hvis du valgte at bruge de frie drivere.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Næste er &lt;strong&gt;Tastatur opsætning&lt;/strong&gt;. Du kan teste layoutet ved at skrive noget i det angivne område.&lt;/p&gt;

            &lt;p&gt;Brug rullemenuen til at finjustere din præcist ønskede tastatur model/ eller præcis den tastatur model du ønsker.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Partitionering&lt;/h3&gt;
            
            &lt;p&gt;Ved hjælp af den korrekte partitionsopsætning er det mest egnede filsystem og partitionstabel den mest udfordrende del for alle, der er nye til at installere et operativsystem.&lt;/p&gt;

            &lt;p&gt;&lt;font color=&apos;#ff0000&apos;&gt;Sørg for at tage backup af alle de data, du muligvis har brug for fra dit drev, før du fortsætter.&lt;/font&gt;&lt;/p&gt;
            
            &lt;p&gt;Hvis dit måleinstallationsmedium (HDD, ssd, usb-stick som eksempler) ikke er formateret og partitioneret eller ikke er konfigureret efter din smag, kan du gøre det inde i installationsprogrammet eller forberede det, før du starter installationsprogrammet.&lt;/p&gt;
            
            &lt;p&gt;For både UEFI og BIOS systemer giver museoverføring over de respektive infoknapper dig nogle flere oplysninger om de forskellige muligheder for hver.&lt;/p&gt;
            
            &lt;p&gt;Dette installationsprogram giver dig fire muligheder.&lt;/br&gt;
            Den første mulighed giver dig mulighed for at krympe en eksisterende partition og installere KaOS sammen med andre operativ systemer, der allerede er tilgængelige på dit system, ved hjælp af XFS filsystemet. Skrumpning er ikke mulig for partitioner,  på etn udvidet partitionstabel eller bruger XFS filsystemet.&lt;/br&gt;
            Den anden mulighed lader dig bruge en eksisterende partition, og den erstatter alle filer og/eller OS på denne partition med en KaOS installation ved hjælp af XFS filsystemet.&lt;/br&gt;
            Den tredje mulighed vil bruge hele disken og oprette en partition, hvor alt vil blive installeret under root, alle andre partitioner vil blive fjernet, og det anvendte filsystem vil være XFS.&lt;/p&gt;
            
            &lt;p&gt;Den fjerde mulighed giver dig friheden til at indstille enhver mulighed, ethvert filsystem og partitionstabel. Hvis du vil rense drevet fuldstændigt og starte forfra, eller hvis dette drev slet ikke har nogen partitionstabel endnu (nye medier, installation af virtualbox), skal du tage en beslutning om, hvilken partitionstabel der skal bruges. Standard i installationsprogrammet er GPT, ms-dos er den ældre mulighed (stadig mere almindeligt brugt til BIOS-systemer). Fordel ved GPT, den kan bruge virtuelle ubegrænsede primære partitioner (ms-dos er begrænset til fire), er nødvendig for drev større end 2 Tb og er bedst til UEFI-systemer. Hvis du vælger at bruge GPT på et BIOS-system, skal du sørge for at konfigurere det korrekt med den nødvendige 8 MB partition af uformateret plads i starten af ​​drevet og have bios_grub flag tildelt den uformaterede partition. Denne opsætning kan ikke have en separat /boot partition.&lt;/p&gt;
            
            &lt;p&gt;Når partitionstabellen er indstillet, skal du partitionere drevet, mest nødvendigt, er en partition for / (root). Der er nogle fordele ved at bruge en separat partition til /home, og du vil måske have en Swap partition til en sove/dvale funktion. Alle andre partitioner er strengt personlige valg, selvom opsætning af /usr ikke er særlig godt understøttet i systemd (du skal bruge ekstra trin for at få det til at fungere korrekt).&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="117"/>
        <source>&lt;p&gt;Option to install alongside an existing partition, UEFI system, / (root) and swap used. After selecting which partition you want to shrink to create room for KaOS, you can drag in that partition to set the desired size.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mulighed for at installere sammen med en eksisterende partition, UEFI system, / (root) og brugt swap. Efter at have valgt hvilken partition du vil krympe for at skabe plads til KaOS, kan du trække i denne partition for at indstille den ønskede størrelse. Her vises også muligheden for at kryptere systemet med et kodeord.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="144"/>
        <source>&lt;p&gt;Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the &lt;i&gt;after&lt;/i&gt; bar.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mulighed for at erstatte en eksisterende partition, UEFI system, / (root) og brugt swap. Når du har valgt den partition, du vil udskifte, vises  &lt;i&gt;efter&lt;/i&gt; bar.  Her vises også muligheden for at kryptere systemet med et kodeord.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="171"/>
        <source>&lt;p&gt;Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mulighed for at bruge hele drevet, alt installeret under / (root), hvis det er på et BIOS system og FAT32 EFI partition også oprettet, hvis systemet er UEFI, med swap tildelt, hvis diskstørrelse tillader det. Dette fjerner alle data og installerede systemer fra det valgte drev.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="198"/>
        <source>&lt;p&gt;Using the fourth option to delete an existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight &lt;code&gt;Free Space&lt;/code&gt; and select &lt;code&gt;Create&lt;/code&gt;.  You then get a window with options to set partition type, file system and mountpoint. When using an UEFI install, it is a must to have a vfat (fat32) formatted /boot partition available. Best set the size to 512Mb and have it at the beginning of the partition-table. Once root is set, the Next button will become active again.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Brug af den fjerde mulighed til at slette et eksisterende layout. Vælg &lt;code&gt;Ny partitionstabel&lt;/code&gt; for et nyt drev eller for at skifte fra ms-dos til GPT eller omvendt.&lt;/br&gt;
            Fremhæv &lt;code&gt;ledig plads,&lt;/code&gt; og vælg&lt;code&gt;Opret&lt;/code&gt;.  Du får derefter et vindue med muligheder for at indstille partitionstype, filsystem og monteringspunkt. Når du bruger en UEFI installation, er det et must at have en vfat (fat32) formateret /boot partition tilgængelig. Indstil bedst størrelsen til 512Mb og få den i begyndelsen af ​​partitionstabellen. Når root er indstillet, bliver knappen Næste aktiv igen.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="266"/>
        <source>&lt;p&gt;Using the fourth option to adjust existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight a desired partition, and select &lt;code&gt;Format&lt;/code&gt;. If this is going to be the root partition, it needs to be formatted. If old files are still present it will most likely result in a broken install. Next select a Mountpoint, root needs to be set, for UEFI install /boot needs to be set too. Repeat these steps for any other partition you want to use for this install. Once root is set, the Next button will become active again. Options are available to encrypt partitions, this includes swap.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Brug af den fjerde mulighed til at justere eksisterende layout. Vælg &lt;code&gt;Ny partitionstabel&lt;/code&gt; for et nyt drev eller for at skifte fra ms-dos til GPT eller omvendt.&lt;/br&gt;
            Fremhæv en ønsket partition, og vælg &lt;code&gt;Format&lt;/code&gt;. Hvis dette skal være root partitionen, skal den formateres. Hvis gamle filer stadig er til stede, vil det højst sandsynligt resultere i en ødelagt installation. Vælg derefter et monteringspunkt, root skal indstilles, for UEFI installation /boot skal også indstilles. Gentag disse trin for enhver anden partition, du vil bruge til denne installation. Når root er indstillet, bliver næste knap aktiv igen. Der er muligheder for at kryptere partitioner, dette inkluderer swap.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="304"/>
        <source>&lt;p&gt;The image below shows the needed setup for an UEFI partition. If your install already has this set, &lt;font color='#ff0000'&gt;DO NOT&lt;/font&gt; format it. With UEFI any existing bootloader can be used, formatting will delete any currently present files to boot Windows or any other OS.&lt;/br&gt;
            For BIOS systems select where you want to install the bootloader, this can either be done in the Master Boot Record of the selected disc, or can be installed in the /boot partition of the system (/boot can reside under root for that).&lt;/br&gt;
            No changes will happen when you click the Next button, you will get a chance to review all your chosen settings and go back if things are not exactly as you want them.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Billedet herunder viser den nødvendige opsætning til en UEFI -partition. Hvis din installation allerede har dette sat, &lt;font color=&apos;#ff0000&apos;&gt;MÅ DU IKKE&lt;/font&gt; formatere det. Med UEFI kan enhver eksisterende bootloader bruges, formatering sletter alle aktuelle filer til opstart af Windows eller ethvert andet operativsystem.&lt;/br&gt;
            For BIOS systemer skal du vælge, hvor du vil installere bootloaderen, dette kan enten gøres i Master Boot Record på den valgte disk, eller det kan installeres i /boot -partitionen af ​​systemet ( /boot kan ligge under root for det).&lt;/br&gt;
            Der sker ingen ændringer, når du klikker på knappen Næste, du får mulighed for at gennemgå alle dine valgte indstillinger og gå tilbage, hvis tingene ikke er præcis, som du vil have dem.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>summary</name>
    <message>
        <location filename="../guide/summary.qml" line="52"/>
        <source>&lt;h3&gt;Summary&lt;/h3&gt;

            &lt;p&gt;All looking as it should? Then clicking Next will give you one last warning before the actual formatting and installation will start.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Opsummering&lt;/h3&gt;

            &lt;p&gt;Ser alt ud som det skal? Klik derefter på Næste for at give dig en sidste advarsel, før den faktiske formatering og installationen starter.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/summary.qml" line="90"/>
        <source>&lt;p&gt;While the system is being installed, a slideshow is shown which will give you some basic info. You can follow what the installer is doing at different stages though. Expect this part to take between 5-10 minutes depending on your settings and speed of the target drive. At around 30%, the copying of the files is completed (which will take the longest), then the installer will create the users, remove Live system specific packages, install additional packages, remove any language packs &amp; drivers not needed for your specific hardware, setup either GRUB for BIOS systems or Systemd-boot for UEFI and copies the KaOS specific user settings.&lt;/p&gt;

            &lt;p&gt;Once the installation is finished, you have the option to close the installer and go back to live mode or reboot the system right away. A full log of the install is available as installation.log in the home directory of the Live user and this log is copied to /var/log/installation.log of the target system.&lt;/p&gt;

            &lt;p&gt;Hopefully this Guide has answered any questions you had about using this Installer. If anything is not clear enough then it would be really appreciated if you can get in touch to get the needed changes in.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mens systemet installeres, vises et diasshow, der giver dig nogle grundlæggende oplysninger. Du kan følge med i, hvad installationsprogrammet gør på forskellige stadier. Forvent, at denne del vil tage mellem 5-10 minutter afhængigt af dine indstillinger og hastigheden på harddisken. På omkring 30%er kopieringen af ​​filerne afsluttet (hvilket vil tage længst tid), derefter vil installationsprogrammet oprette brugerne, fjerne Live systemspecifikke pakker, installere yderligere pakker, fjerne eventuelle sprogpakker og drivere, der ikke er nødvendige for din specifikke hardware , konfigurer enten GRUB til BIOS-systemer eller Systemd-boot til UEFI og kopierer de KaOS-specifikke brugerindstillinger.&lt;/p&gt;

            &lt;p&gt;Når installationen er færdig, har du mulighed for at lukke installationsprogrammet og gå tilbage til live tilstand eller genstarte systemet med det samme. En fuld log over installationen er tilgængelig som installation.log i Live brugerens hjemmemappe, og denne log kopieres til /var/log/installation.log i målsystemet.&lt;/p&gt;

            &lt;p&gt;Forhåbentlig har denne vejledning besvaret alle spørgsmål, du havde om brugen af ​​dette installationsprogram. Hvis noget ikke er klart nok, ville det virkelig blive værdsat, hvis du vil kontakte os for at få de nødvendige ændringer ind.&lt;/p&gt;</translation>
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
        <translation>Brugeroprettelse&lt;/h3&gt;

            &lt;p&gt;Brugeroprettelsessiden giver dig mulighed for at angive et andet brugernavn end dit faktiske navn og angive et foretrukket navn for systemet.&lt;/p&gt;
&lt;h3&gt;
            &lt;p&gt;Af sikkerhedsmæssige årsager er det tilrådeligt at bruge en anden adgangskode til administrator (eller root) kontoen.&lt;/p&gt;

            &lt;p&gt;Standardindstillingen til automatisk log ind er deaktiveret, tilføj en markør for at aktivere login uden adgangskode hvis du ønsker det.&lt;/p&gt;</translation>
    </message>
</context>
</TS>