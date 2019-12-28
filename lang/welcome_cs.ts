<?xml version="1.0" ?><!DOCTYPE TS><TS language="cs" version="2.1">
<context>
    <name>Page1Form.ui</name>
    <message>
        <location filename="../Page1Form.ui.qml" line="44"/>
        <source>Install KaOS</source>
        <translation>Nainstalovat KaOS</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="92"/>
        <source>Guide</source>
        <translation>Průvodce</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="135"/>
        <source>Package List</source>
        <translation>Seznam balíčků</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="160"/>
        <source>Forum</source>
        <translation>Fórum</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="184"/>
        <source>Documentation</source>
        <translation>Dokumentace</translation>
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
        <translation>&lt;h3&gt;O systému KaOS&lt;/h3&gt;
                    &lt;p&gt;Systém KaOS staví na myšlence vytvořit velmi integrovanou a transparentní rolling distribuci pro moderní desktop. Zásadní vlastností je, že je vytvořen od nuly se zaměřením na &lt;b&gt;jedno DE (KDE), jeden toolkit (Qt), jednu architekturu (x86_64)&lt;/b&gt; a navíc se zaměřením na výběr nejvhodnějsích nástrůj a aplikací. Veškerá aktivita kolem KaOS je směrována na balíčkování nikoli na vývoj nových nástrůj či aplikací.&lt;/p&gt;

                    &lt;p&gt;V okamžiku, kdy opouštíme proprietární operační systémy ve prospěch těch, které staví na open source (Linux-based, BSD based, Solaris based), tak většinou očekáváme &lt;b&gt;svobodu a výběr&lt;/b&gt;. Ale i tak mohou tyto operační systémy či distribuce inklinovat k těm volbám, které považují za nejvíce pasující jejich zaměření. KaOS v tomto směru chce jít mnohem dál. Aby byla kvalita distribuce co nejlepší, tak musí být zaměření co nejužší a uživatel díky tomu dostal do ruky to nejlepší z výběru pro který se mezi distribucemi rozhodl. Zkrátka není možné přibalit do distribuce cokoli a současně vše a očekávat, že tak to bude fungovat perfektně pro veškerá desktopová prostředí a nástroje.&lt;/p&gt;
                    
                    &lt;p&gt;KaOS zvolil &lt;b&gt;Linuxové jádro&lt;/b&gt; jako základ (přesto je stále zvažováno použití jádra llumos a příním je možný přechod někdy v budoucnu). Poté byl zvolen co nejlepší a současně nejflexibilnější systém balíčkování softwaru a správce repozitářů a to &lt;b&gt;pacman/makepkg pro rolling distribuce&lt;/b&gt; jako KaOS. Jako dektopové prostředí bude vždy, bez ohledu zda zvoleno bude Linuxové nebo Ilumos jádro, použit KDE a Qt toolkit. Na základě těchto voleb se od dubna roku 2013 začíná s budování balíčků pro nezávislou distribuci.&lt;/p&gt;

                    &lt;p&gt;KaOS je distribuce vytvořená od základu, &lt;b&gt;každý balíček v každém repozitáři je sestaven pro KaOS&lt;/b&gt;. V červenci 2013 byl dosažen úvodní cíl 1500 balíčků.&lt;/p&gt;

                    &lt;p&gt;Hovoříme-li o relativně malém počtu všech dostupných balíčků, je potřeba se zmínit o jedné věci. A totiž, že díky zaměření na jeden toolk a jedno DE, není třeba nijak  &lt;b&gt;výrazně dělit balíčky&lt;/b&gt;, aby výsledek běžel na všech kombicích různých prostředí. Tam kde bývá nutné balíčky rozdělit na 15-20 kůli 3-4-5 různým prostředím, KaOS věc co nejvíce zjednodušuje a dělení se vyhýbá (například xorg aplikace, okolo 50 balíčků, jsou zkombinované do třech, mesa sestává ze dvou místo z 15).&lt;/p&gt;
                    
                    &lt;p&gt;To že KDE/Qt je hlavním zaměřením KaOS neznamená, že se ztratí ze zřetele důležitost  mít&lt;b&gt;ty nejlepší nástroje pro práci&lt;/b&gt;. Většinou KDE/Qt nabízí opravdu skvělé nástroje, ale je řada aplikací postavených na GTK, které je vhodné mí také (Inkscape, Ardour například), nebo co se týká prohlížení webu, aplikace postavené na Qt se nevyrovanjí současným konkurentům napsaným pro GTK. Takže řada GTK aplikací je v repozitářích k dispozici, ale jejich počet je limitován. Nicméně toto ISO je ukázkou čistě KDE/Qt, takže &lt;b&gt;žádné GTK neobsahuje&lt;/b&gt;, čili žádný Firefox, Chrome nebo LibreOffice, které jsou všechny závislé na GTK&lt;/p&gt;
                    
                    &lt;p&gt;Rozložení repozitárů je jednoduché a sestává ze tří skupin: jádro, hlavní a aplikace (Core, Main, Apps). Běžný úplný update systému vždy nainstaluje nejposlednější dostupnou verzi &lt;b&gt;bez nutnosti provádět jakoukoli přeinstalaci&lt;/b&gt; systému. &lt;i&gt;Jádro (Core)&lt;/i&gt; obsahuje základní balížky nutné pro boot systému, komunikaci BIOSu, připojuje většinu hardwaru a nastavuje zákldní parametry shellu. Například jde o balíčky jako kernel, systemd, toolchain pro vývoj a základní nástroje příkazové řádky. &lt;i&gt;Hlavní (main)&lt;/i&gt; repozitář obsahuje všechny nezbytné knihovny, extra ovladače a firmware pro běh desktopu a aplikací. &lt;i&gt;Repozitář aplikací (Apps)&lt;/i&gt; všechny balíčky dostupné pro uživatele, to zahrnuje KDE a další potřebné nástroje. &lt;i&gt;Repozitář vývoje (Build)&lt;/i&gt; je určen pro testování a obsahuje všechny nové verze balčíků, případně přírůstky nových balíčků, než jako otestované směřují do těch repozitářů kam patří.&lt;/p&gt;
                    
                    &lt;p&gt;&lt;b&gt;Cílovými uživateli&lt;/b&gt; jsou ti, kteří zkusili mnoho operačních systému/distribucí/desktopových prostředí a zjistitli, že raději preferují takové distribuce, které umí plně využít to nejlepší z jednoho DE a současně, že jim vyhovuje právě KDE. Hadrware, který budou používat je z roku 2005 a mladší, takže nebudou mít problém s během 64bitového softwaru. Navíc se nebojí používat KDE/Qt verze požadovaných aplikací a rádi se naučí nový nástroj, který zatím neznají. Měli by také mít pochopení pro to, že podobné aplikace budou v distribuce limitovány na maximální počet 5-6.&lt;/p&gt;
                    
                    &lt;p&gt;KDE je moderní desktopové prostředí, které využívá maximum z potenciálu různých grafických a zvukových karet. Což neznamená, že by KDE nemohlo běžet na málo výkonném hardwaru, ale obecně je lepší použít jiné prostředí pro tento typ hardwaru (jako například OpenBox). Minimálně je potřeba  &lt;b&gt;8 Gb disku, ale lepší je 25 Gb&lt;/b&gt; jako doporučené minimum. KaOS lze nainstalovat s 1.5Gb dostupné RAM, nicméně mnohem lepší běh bude s &lt;b&gt;2 Gb RAM&lt;/b&gt; a víc. Obsažené  balíčky jsou x86_64 a tím pádem je nutný &lt;b&gt;64bitový CPU&lt;/b&gt;. Tak jako u jiných rolling distribucí, jsou i zde aktualizace časté a mohou být velké, takže je dobré počítat s dostatečně rychlým internetovým připojením (vytáčená linka nebude dostatečná) a očekávaným datovým tokem okolo 2Gb měsíčně.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>guide</name>
    <message>
        <location filename="../guide/guide.qml" line="33"/>
        <source>Guide</source>
        <translation>Průvodce</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="81"/>
        <source>Intro</source>
        <translation>Úvod</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="84"/>
        <source>Keyboard</source>
        <translation>Klávesnice</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation>Rozdělení oddílů</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>Uživatelé</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>Shrnutí</translation>
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
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="33"/>
        <source>Welcome</source>
        <translation>Vítejte</translation>
    </message>
    <message>
        <location filename="../main.qml" line="42"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt;Děkujeme za vyzkoušení KaOS. Potřebujete soubor s heslem nebo seznam balíčků?&lt;br&gt;
                            Chcete se naučit více o projektu? Podívejte se, prosím, na odkazy níže.&lt;br&gt;&lt;br&gt;
                            Neváhejte sdělit svůj názor na KaOS v diskusním fóru.&lt;/div&gt;</translation>
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
        <translation>&lt;p&gt;Správná hesla pro použití v živém sezení:&lt;/p&gt;
                            &lt;p&gt;&lt;/p&gt;
                            &lt;table width=100% align=center bgcolor=#eaeaea&gt;
                                &lt;tr&gt;
                                    &lt;th&gt;Jméno:&lt;/th&gt;
                                    &lt;th&gt;Heslo:&lt;/th&gt;
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
                            &lt;p&gt;Užijte si to&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="99"/>
        <source>Main</source>
        <translation>Hlavní</translation>
    </message>
    <message>
        <location filename="../main.qml" line="102"/>
        <source>Passwords</source>
        <translation>Heslo</translation>
    </message>
    <message>
        <location filename="../main.qml" line="105"/>
        <source>About</source>
        <translation>O</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation>&lt;p&gt;V &lt;strong&gt;poznámkách k vydání&lt;/strong&gt; se dozvíte důležité informace o obsahu tohoto ISO&lt;/p&gt;
            &lt;p&gt;Pokud jste vybrali nesvobodné ovladače Nvidia během startu live CD, bude zobrazena stránka s licencí. Ujistěte se, že jste licenci přečetli a odsouhlasili, v opačném případě nebudou nesvobodné drivery instalovány a místo nich se použijí Nouveau. Stránku s licenci neuvidíte, pokud jste zvolili svobodné ovladače.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Toto je &lt;strong&gt;Nastavení klávesnice&lt;/strong&gt;. Rozvržení můžete otestovat psaním do určené oblasti.&lt;/p&gt;

            &lt;p&gt;Použijte vyskakovací menu, které vám dovolí upravit model klávesnice ještě detailněji.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Rozdělení disku&lt;/h3&gt;
            
            &lt;p&gt;Nejvíce náročnou části instalaci nového systému je správné rozdělení disku a volba vhodného systému souborů.&lt;/p&gt;

            &lt;p&gt;&lt;font color=&apos;#ff0000&apos;&gt;Před pokračování se ujistěte, že máte zazálohována veškerá důležitá data z disku.&lt;/font&gt;&lt;/p&gt;
            
            &lt;p&gt;Rozdělení oblasní na cílovém instalačním médiu (HDD, ssd, usb-klíčnka a podobně), můžete provést před instalací nebo pomocí instalačního programu v přípravné fázi instalace.&lt;/p&gt;
            
            &lt;p&gt;Najetím myší nad informační tlačítko jak u UEFI tak u BIOS systému, vám prozradí více o jejich individálních nastaveních.&lt;/p&gt;
            
            &lt;p&gt;Tento instalátor nabízí čtyři možnosti.&lt;/br&gt;
            První možnost provede zmenšení existujícího oddílu a nainstaluje KaOS vedle již existujícího OS. Jako systém souborů bude použit XFS. Zmenšení není možné u rozšířených oddílů nebo u uddílů obsahující XFS.&lt;/br&gt;
            Druhá možnost použije existující oddíl, smaže na něm veškerá data a zformátuje na XFS systém souborů.&lt;/br&gt;
            Třetí možnost vezme celý disk, smaže veškerá data a vytvoří jeden velký oddíl pro celý systém. Všechny předchozí oddíly budou smazány. Použitý systém souborů bude XFS.&lt;/p&gt;
            
            &lt;p&gt;Čtvrtá možnost vám umožní libovolné rozdělení disku na oddíly a formátování na jakýkoli systém souborů. Navíc máte možnost zvolit i typ tabulky oddílů (v případě, že chcete začít zcela načisto, nebo je instalační médium úplně prázdné bez definované tabulky oddílů). Jako výchozí je nabízena GPT, ms-dos je druhá volba (stále často používaná pro BIOS systémy). GPT může být rozdělena na neomezené množství oddílů (ms-dos je limitována na 4), GPT je nutná pro disky větší než 2Tb a je nejlepší volbou pro UEFI systémy. Pokud použijete GPT pro BIOS systém, ujistěte se, že na začátku disku je 8MB neformátovaný oddíl, který má nastavenu volbu bios_grub. V rámci této volby není možné mít extra /boot oddíl.&lt;/p&gt;
            
            &lt;p&gt;Po volbě tabulky oddílů je nezbytné oddíly vytvořit. Minimum je jeden pro / (root - takzvaný kořenový). Oddělit /home (domovské adresáře uživatelů) a swap (pro uspání/hibernaci) do separátních oddílů může být výhodné. Oddělení dalších adresářů do separátních oddílů je možné a je to závislé čistě na osobních preferencích. Naopak nemusí být vhodné dávat do extra oddílu adresář /usr (není to příliš podporováno ze strany systemd a musí být provedeny extra kroky, aby tato volba dobře fungovala).&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="117"/>
        <source>&lt;p&gt;Option to install alongside an existing partition, UEFI system, / (root) and swap used. After selecting which partition you want to shrink to create room for KaOS, you can drag in that partition to set the desired size.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Volba, která nainstaluje KaOS a současně ponechá na disku již přítomný systém. Bude použit UEFI, oddíl / (root) a oddíl swap. Nejprve vyberte, který oddíl chcete zmenšit. Potém můžete táhnutím vybrat požadovanou velikost. Zde také můžete zvolit, zda chcete systém instalovat na zašifrovaný oddíl.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="144"/>
        <source>&lt;p&gt;Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the &lt;i&gt;after&lt;/i&gt; bar.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Volba, kde bude přepsán existující oddíl. Použit bude UEFI systém, oddíl / (root) a swap. Nejprve vyberte oddíl, který bude přepsán systémem KaOS. Poté bude zobrazen &lt;i&gt;náhled&lt;/i&gt; výsledného stavu. Je zde také volba pro instalaci na zašifrovaný oddíl.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="171"/>
        <source>&lt;p&gt;Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Volba pro instalci na celý disk. Vše bude instalováno na jeden oddíl / (root) v případě BIOSu. U UEFI systému bude navíc přidán oddíl FAT32 EFI a oddíl swap, pokud bude velikost disku dostatečná. Dojde ke smazání všech dat na cílovém disku.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="198"/>
        <source>&lt;p&gt;Using the fourth option to delete an existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight &lt;code&gt;Free Space&lt;/code&gt; and select &lt;code&gt;Create&lt;/code&gt;.  You then get a window with options to set partition type, file system and mountpoint. When using an UEFI install, it is a must to have a vfat (fat32) formatted /boot partition available. Best set the size to 512Mb and have it at the beginning of the partition-table. Once root is set, the Next button will become active again.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Čtvrtá volba s možností smazat existující rozdělení disku. Vyberte &lt;code&gt;Nové rozdělení disku&lt;/code&gt; chcete-li instalovat na čistý disk nebo změnit tabulku oddílů z ms-dos na GPT a opačně.&lt;/br&gt;
            Označte &lt;code&gt;volné místo&lt;/code&gt; a vyberte &lt;code&gt;vytvořit&lt;/code&gt;.  Následně můžete v novém okně zvolit typ oddílu, typ souborového systému a přípojný bod. UEFI instalace vyžaduje aby disk obsahoval oddíl zformátovaný na vfat (fat32) a připojený na /boot. Ideální velikost tohoto oddílu je 512Mb a měl by být na začátku disku. Jakmile bude připojen kořenový oddíl: root, aktivuje se tlačítko Další.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="266"/>
        <source>&lt;p&gt;Using the fourth option to adjust existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight a desired partition, and select &lt;code&gt;Format&lt;/code&gt;. If this is going to be the root partition, it needs to be formatted. If old files are still present it will most likely result in a broken install. Next select a Mountpoint, root needs to be set, for UEFI install /boot needs to be set too. Repeat these steps for any other partition you want to use for this install. Once root is set, the Next button will become active again. Options are available to encrypt partitions, this includes swap.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Čtvrtá volba s možností upravit existující rozdělení disku. Vyberte &lt;code&gt;nová tabulka oddílů&lt;/code&gt;, pokud chcete instalovat na nový disk nebo změnit tabulku oddílů z ms-dos na GPT a obráceně.&lt;/br&gt;
            Označte požadovaný oddíl a vyberte  &lt;code&gt;formátovat&lt;/code&gt;. Pokud půjde o kořenový oddíl root, musí být zformátován. Pokud by na tomto oddílu zůstali staré soubory, tak bez formátování by se instalace nemusela podařit. Poté vyberte přípojný bod. Kořenový oddíl root musí být nastaven. Pro UEFI instalaci navíc oddíl pro /boot. Opakujte tyto kroky pro všechny ostatní oddíly, které chcete upravit nebo vytvořit. Tlačítko &quot;další&quot; se aktivuje, jakmile bude vytvořen kořenový oddíl root. Volby pro šifrování oddílů jsou zde k dispozici, i pro swap.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="304"/>
        <source>&lt;p&gt;The image below shows the needed setup for an UEFI partition. If your install already has this set, &lt;font color='#ff0000'&gt;DO NOT&lt;/font&gt; format it. With UEFI any existing bootloader can be used, formatting will delete any currently present files to boot Windows or any other OS.&lt;/br&gt;
            For BIOS systems select where you want to install the bootloader, this can either be done in the Master Boot Record of the selected disc, or can be installed in the /boot partition of the system (/boot can reside under root for that).&lt;/br&gt;
            No changes will happen when you click the Next button, you will get a chance to review all your chosen settings and go back if things are not exactly as you want them.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Obrázek níže ukazuje požadovaná nastavení pro UEFI oddíl. Pokud toto již máte nastaveno, &lt;font color=&apos;#ff0000&apos;&gt;NEPROVÁDĚJTE&lt;/font&gt; formátování tohoto oddílu. S UEFI je možné použít jakýkoli již existující bootloader ke startu KaOS. Pokud by se existující oddíl pro UEFI zformátoval, nebude pak možné nabootovat do již přítomných systémů jako například Windows a podobně.&lt;/br&gt;
            Při využití BIOSu vyberte, kam chcete bootloader instalovat: může jít o Master Boot Record cílového disku nebo o oddíl /boot (může jít o /boot pod kořenovým oddílem).&lt;/br&gt;
            Žádné změny nebudou provedeny po kliknutí na tlačítko &quot;další&quot;. Nejprve bude zobrazen náhled změn s možností návratu a dalších případných úprav.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>summary</name>
    <message>
        <location filename="../guide/summary.qml" line="52"/>
        <source>&lt;h3&gt;Summary&lt;/h3&gt;

            &lt;p&gt;All looking as it should? Then clicking Next will give you one last warning before the actual formatting and installation will start.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Souhrn&lt;/h3&gt;

            &lt;p&gt;Vypadá vše tak jak má? Kliknutím na Další se otevře poslední varování před skutečným fomátování a instalací.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/summary.qml" line="90"/>
        <source>&lt;p&gt;While the system is being installed, a slideshow is shown which will give you some basic info. You can follow what the installer is doing at different stages though. Expect this part to take between 5-10 minutes depending on your settings and speed of the target drive. At around 30%, the copying of the files is completed (which will take the longest), then the installer will create the users, remove Live system specific packages, install additional packages, remove any language packs &amp; drivers not needed for your specific hardware, setup either GRUB for BIOS systems or Systemd-boot for UEFI and copies the KaOS specific user settings.&lt;/p&gt;

            &lt;p&gt;Once the installation is finished, you have the option to close the installer and go back to live mode or reboot the system right away. A full log of the install is available as installation.log in the home directory of the Live user and this log is copied to /var/log/installation.log of the target system.&lt;/p&gt;

            &lt;p&gt;Hopefully this Guide has answered any questions you had about using this Installer. If anything is not clear enough then it would be really appreciated if you can get in touch to get the needed changes in.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Během samotného procesu instalace poběží slideshow s přehledem základních informací. Můžete i tak sledovat co během různých fází instalátor provádí. Tato část zabere zhruba 5-10 minut, dle zvolených nastavení a rychlosti cílového disku. V okamžiku dosažení přibližně 30% je kopírování již hotovo (což trvá nejdéle) a následuje vytvoření uživatelů, odstranění balíčků specifických pro live systém, instalace dodatečných balíčků a odstranění balíčků jazyků a ovladačů pro specifický hardware, které nejsou potřeba. Následně je nastaven GRUB v případě použití BIOSu či Systemd-boot v případě UEFI a kopírování uživatelských nastavení specifických pro KaOS.&lt;/p&gt;

            &lt;p&gt;Po ukončení instalace můžete instalátor zavřít a pokračovat v práci v živém systému nebo rovnou restatovat do čerstvě instalovaného systému. Kompletní protokol o proběhlé instalaci je dostupný v soboru installation.log v domovském adresáři uživatele živého systému a současně je tento soubor zkopírován do /var/log/installation.log nového systému.&lt;/p&gt;

            &lt;p&gt;Doufáme, že tento průvodce zodpověděl jakékoli vaše dotazy ohledně instalace. Pokud nebylo něco úplně jasné, velmi oceníme zpětnou vazbu.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Vytvoření uživatele&lt;/h3&gt;

            &lt;p&gt;Stránka pro vytvoření uživatele vám umožní nastavit uživatelské jméno jiné než vaše skutečné a preferovaný název systému.&lt;/p&gt;

            &lt;p&gt;Z bezpečnostních důvodů je vhodné zvolit jiné heslo pro administrátora systému (uživatele root).&lt;/p&gt;

            &lt;p&gt;V základu je automatické přihlášení zakázáno, označním se aktivuje automatické přihlášení bez hesla.&lt;/p&gt;</translation>
    </message>
</context>
</TS>