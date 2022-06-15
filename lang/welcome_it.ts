<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="it">
<context>
    <name>Page1Form.ui</name>
    <message>
        <location filename="../Page1Form.ui.qml" line="45"/>
        <source>Install KaOS</source>
        <translation>Installa KaOS</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="94"/>
        <source>Guide</source>
        <translation>Manuale</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="187"/>
        <source>Donate</source>
        <translation>Donate</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="138"/>
        <source>Forum</source>
        <translation>Forum</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="163"/>
        <source>Documentation</source>
        <translation>Documentazione</translation>
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
        <translation>&lt;h3&gt;A proposito di KaOS&lt;/h3&gt;
&lt;p&gt;L&apos;idea alla base di KaOS è di creare una distribuzione rolling, solida e ben integrata per poter offrire un ambiente moderno, costruito con cura da zero, con un&apos;idea ben precisa in mente.
 &lt;b&gt;Focus su un DE (KDE), un toolkit (Qt) e un&apos;architettura (x86_64).&lt;/b&gt;
e in più abbiamo valutato e selezionato gli strumenti e le applicazioni più adatte. Tutto il lavoro è destinato allla creazione dei pacchetti, non allo sviluppo di nuovi strumenti o applicazioni..&lt;/p&gt;

                    &lt;p&gt;Passando da sistemi operativi proprietari a opzioni open source (basate su Linux. BSD o Solaris) è una questione
&lt;b&gt;di libertà e possibilità di scelta&lt;/b&gt; nella maggioranza dei casi. Ma un sistema operativo o una distribuzione open source deve per forza evitare di fare delle scelte su ciò che ritiene più adatto? KaOS vede in questo una mancanza di attenzione. Per creare una distribuzione della più alta qualità è necessario che ci sia un focus per assicurarsi che l&apos;utente ottenga il meglio da qualsiasi scelta faccia. È semplicemente impossibile includere tutti i pacchetti in modo che ognuno sia integrato perfettamente in tutti i Desktop Environment o i Toolkit.&lt;/p&gt;
                    
                    &lt;p&gt;KaOS ha scelto di usare il &lt;b&gt;kernel Linux&lt;/b&gt; come base (tanche se il kernel Illumos è continuamente preso in considerazione, ed è auspicabile un futuro passaggio ad esso). In base a questa scelta, il miglior package manager disponibile, il modo più flessibile di fare package building, e di mantenere i repository per una distribuzione rolling come KaOs è &lt;b&gt;pacman/makepkg&lt;/b&gt;. Per quanto riguarda il Desktop Environment, non ci sarà mai un cambiamento, che il kernel sia Linux o Illumos, e KDE sarà sempre la scelta, mentre il Toolkit sarà sempre Qt. Forti di queste scelte, nell&apos;aprile del 2013 è cominciato il package building per questa distribuzione indipendente.&lt;/p&gt;

                    &lt;p&gt;KaOS è una distribuzione costruita da zero, &lt;b&gt;ogni pacchetto di ogni repository è stato costruito da e per KaOS&lt;/b&gt;. L&apos;obiettivo iniziale di 1500 pacchetti è stato raggiunto a luglio 2013.&lt;/p&gt;

                    &lt;p&gt;Quando ci si sofferma sul numero relativamente basso di pacchetti totali disponibili, bisogna tenere a mente una cosa.Poiché  ci si concentra su un toolkit e un DE,&lt;b&gt; non c&apos;è bisogno di un frazionamento eccessivo dei pacchetti &lt;/b&gt; da provare e rendere funzionanti nei vari ambienti. In altre situazioni molti pacchetti sono divisi in 3-4-5, a volte perfino 15-20 pacchetti; KaOS semplifica le cose il più possibile per evitare il frazionamento  (ad esempio le app xorg, circa 50 pacchetti in origine, è costituito da 3 pacchetti, mesa di 2 invece che di 15).&lt;/p&gt;
                    
                    &lt;p&gt;Scegliere KDE/QT non significa che KaOS perda di vista l&apos;importanza di avere &lt;b&gt;gli strumenti migliori per un compito&lt;/b&gt;. La maggior parte delle volte si reputa che KDE/Qt offra strumenti superiori, ma ci sono alcune applicazioni in cui l&apos;opzione GTK è l&apos;unica possibile (Inkscape, Ardour per nominarne due), o per esempio nel caso dei browser web l&apos;opzione Qt non sta al passo con le controparti GTK. In queste situazioni, le applicazioni GTK sono disponibili, anche se il loro numero rimarrà limitato. In ogni caso, l&apos;ISO è una dimostrazione delle possibilità di Qt/KDE quindi &lt;b&gt;l&apos;ISO è GTK free&lt;/b&gt;, quindi non sono disponibili Firefox, Chrome o LibreOffice ad esempio, poiché dipendono da GTK&lt;/p&gt;
                    
                    &lt;p&gt;La struttura del repository è semplice e consiste di tre gruppi: Core, Main e Apps. Un aggiornamento di sistema ordinario e completo offrirà sempre le ultime novità,, &lt;b&gt;senza la necessità di reinstallare&lt;/b&gt; il sistema. &lt;i&gt;Core&lt;/i&gt; contiene i pacchetti di base necessari all&apos;accensione, alla comunicazione con il BIOS, al collegamento dell&apos;hardware di base e all&apos;impostazione di base della shell. Tra i pacchetti inclusi ci sono ad esempio il kernel, systemd, toolchain per il building e strumenti da riga di comando di base. &lt;i&gt;Main&lt;/i&gt; contiene tutte le librerie necessarie, i driver extra e i firmware necessari per far funzionare il desktop e le applicazioni. &lt;i&gt;Apps&lt;/i&gt; contiene tutti i pacchetti visti e usati dall&apos;utente, inclusi KDE e gli strumenti necessari. &lt;i&gt;Build&lt;/i&gt; è dove partono tutti i pacchetti, che siano una rebuild, un aggiornamento o un&apos;aggiunta, tutto parte da lì. Una volta superati i test opportuni, i pacchetti sono spostati ai repository rispettivi.&lt;/p&gt;
                    
                    &lt;p&gt;&lt;b&gt;L&apos;utente target&lt;/b&gt; è quello che ha provato diversi Sistemi operativi/Distributioni/Desktop Environment è ha capito di preferire una distribuzione che usa tutte le sue risorse per lavorare ad un DE per farlo rendere al meglio; inoltre, a seguito delle ricerche, ha scoperto che il migliroe in questo caso è KDE. L&apos;hardware usato è almeno del 2005, in modo che non ci siano problemi con i software a 64 bit.. Il pubblico di riferimento non ha problemi ad usare le versioni KDE/Qt delle applicazioni di cui ha bisogno, gradisce veder selezionate le migliori alternative per i propri bisogni, anche se questo significa imparare nuovi modi di lavorare o lavorare con nuove applicazioni. La scelta tra applicazioni simili è ridotta comprensibilmente a 5-6 alternative.&lt;/p&gt;
                    
                    &lt;p&gt;KDE è un Desktop Environment moderno che permette di sfruttare al meglio le capacità di qualsiasi scheda grafica o audio. Questo non significa che KDE non può girare su hardware scarso, ma in generale ci sono alternative più adatte per questi sistemi (OpenBox per esempio). Il minimo necessario è 8 GB di spazio&lt;b&gt;libero su disco, ma 25 Gb&lt;/b&gt; raccomandato come limite inferiore; KaOS può essere installato con 1.5 GB di RAM disponibile, anche se si gode di un&apos;esperienza molto migliore con almeno &lt;b&gt;2 GB of RAM&lt;/b&gt;. Poiché sono disponibili solo pacchetti x86_64, è necessaria &lt;b&gt;una cpu che supporta registri a 64 bit&lt;/b&gt; Come per ogni altra distribuzione rolling, gli aggiornamenti sono frequenti e possono anche essere corposi, quindi è necessaria una connessione internet ragionevolmente veloce (il dial-up può risultare difficoltoso) ed è raccomandata una disponibilità mensile di almeno 2 GB.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>guide</name>
    <message>
        <location filename="../guide/guide.qml" line="33"/>
        <source>Guide</source>
        <translation>Guida</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="81"/>
        <source>Intro</source>
        <translation>Introduzione</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="84"/>
        <source>Keyboard</source>
        <translation>Tastiera</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation>Partizionamento</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>Utenti</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>Sommario</translation>
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
        <translation>&lt;h3&gt;Guida all&apos;installazione&lt;/h3&gt;

            &lt;p&gt;Ora che avete visto come funziona KaOS in modalità live, siete pronti per l&apos;installazione. Prima di farlo, è bene sapere alcune cose.&lt;/p&gt;

            &lt;p&gt;Come per ogni release rolling, è necessario un aggiornamento regolare; se si rimane troppo indietro e si cerca di aggiornare, è probabile che si verifichino dei problemi. Si consiglia di aggiornare settimanalmente, non meno di una volta al mese.&lt;/br&gt;
            Se questo non è possibile, sarebbe meglio considerare l&apos;uso di una distribuzione statica, con un ciclo di rilascio di sei o nove mesi. Se sono necessarie istruzioni per un aggiornamento di KaOS, &lt;a href=&apos;https://kaosx.us/news/&apos;&gt;kaosx.us/news/&lt;/a&gt; vi avvertirà sempre di tali istruzioni (che saranno mostrate anche in Octopi, il gestore dei pacchetti). È bene familiarizzare con il gestore di pacchetti a riga di comando &lt;a href=&apos;https://kaosx.us/docs/pacman/&apos;&gt;pacman&lt;/a&gt;. Ogni distribuzione deve implementare cambiamenti importanti a volte, una distribuzione rolling deve affidarsi al gestore di pacchetti per interagire con gli utenti e assicurarsi che tali aggiornamenti siano fatti correttamente. Poiché rolling significa essenzialmente che non si deve reinstallare a intervalli prestabiliti (una distribuzione statica può richiedere tale reinstallazione necessaria per introdurre cambiamenti importanti). Nessuna interfaccia grafica per pacman è potente quanto pacman stesso in queste situazioni.&lt;/p&gt;

            &lt;p&gt;Calamares, l&apos;installatore di KaOS è semplice e facile da usare. Tuttavia in questa fase manca di una caratteristica: la configurazione dei dischi RAID non è ancora supportata.&lt;/p&gt;

            &lt;h3&gt;Avvio del programma di installazione&lt;/h3&gt;

            &lt;p&gt;La prima pagina fornisce alcune informazioni sul programma di installazione, un&apos;opzione per controllare i problemi attualmente noti e un&apos;opzione per selezionare la lingua da utilizzare per l&apos;installazione.&lt;/p&gt;
            
            &lt;p&gt;Assicuratevi che il vostro sistema soddisfi i requisiti minimi. La mancanza di una connessione a internet durante l&apos;installazione non è un problema e non impedisce che l&apos;installazione sia completata.&lt;/p&gt;
            
            &lt;p&gt;Se lo spazio su disco o la RAM disponibile sono inferiori a quelli indicati, l&apos;installazione quasi certamente fallirà. Per quanto riguarda lo spazio su disco, si raccomanda un minimo di 20 Gb.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="35"/>
        <source>Welcome</source>
        <translation>Benvenuto</translation>
    </message>
    <message>
        <location filename="../main.qml" line="44"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt;Grazie per provare KaOS. Cerchi le password o la lista dei pacchetti?&lt;br&gt;
                            Vuoi conoscere di più riguardo al progetto? Segui i link sottostanti.&lt;br&gt;&lt;br&gt;
                             Non esitare a lasciare la tua opinione su KaOS nel Forum.&lt;/div&gt;</translation>
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
        <translation>&lt;p&gt;Le password da usare nella sessione live:&lt;/p&gt;
                              &lt;p&gt;&lt;/p&gt;
                              &lt;table width=100% align=center bgcolor=#eaeaea&gt;
                                   &lt;tr&gt;
                                      &lt;th&gt;Nome utente:&lt;/th&gt;
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
                                  &lt;p&gt;Speriamo ti piaccia&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="108"/>
        <source>Main</source>
        <translation>Principale</translation>
    </message>
    <message>
        <location filename="../main.qml" line="111"/>
        <source>Passwords</source>
        <translation>Passwords</translation>
    </message>
    <message>
        <location filename="../main.qml" line="114"/>
        <source>About</source>
        <translation>A proposito di</translation>
    </message>
    <message>
        <location filename="../main.qml" line="117"/>
        <source>Package List</source>
        <translation>Lista dei pacchetti</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Le &lt;strong&gt;Release Notes&lt;/strong&gt; ti forniranno informazioni importanti su cosa include questa ISO.&lt;/p&gt;
 &lt;p&gt;Se hai selezionato non-free Nvidia all&apos;avvio della sessione Live, ti sarà mostrata una pagina con la Licenza. Assicurati di leggerla e accettarla, altrimenti la tua installazione non includerà i driver non-free e conterrà invece Nouveau. Non vedrai la pagina in questione se hai scelto l&apos;uso dei driver free.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Le prossime sono le &lt;strong&gt;Impostazioni della tastiera&lt;/strong&gt;. Puoi testare il layout scrivendo qualcosa nell&apos;area apposita.&lt;/p&gt;

&lt;p&gt;Usa il menu a tendina per aggiustare il modello esatto della tastiera.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Partizionamento&lt;/h3&gt;
            
            &lt;p&gt;L&apos;uso della corretta configurazione delle partizioni, del filesystem più adatto e della tabella delle partizioni è la parte più impegnativa per chiunque sia alle prime armi con l&apos;installazione di un sistema operativo.&lt;/p&gt;

            &lt;p&gt;&lt;font color=&apos;#ff0000&apos;&gt;Assicurarsi di eseguire un backup di tutti i vostri dati importanti dall&apos;unità prima di procedere.&lt;/font&gt;&lt;/p&gt;
            
            &lt;p&gt;Se il supporto di installazione di destinazione (HDD, ssd, chiavetta USB, per esempio) non è formattato e partizionato, o non è configurato secondo le vostre necessità, è possibile farlo dall&apos;interno del programma di installazione, oppure prepararlo prima di avviare il programma di installazione.&lt;/p&gt;
            
            &lt;p&gt;Sia per i sistemi UEFI che per quelli BIOS, passando il mouse sui rispettivi pulsanti informativi si ottengono ulteriori informazioni sulle diverse opzioni.&lt;/p&gt;
            
            &lt;p&gt;Questo programma di installazione offre quattro opzioni da utilizzare.&lt;/br&gt;
            La prima opzione consente di ridurre una partizione esistente e di installare KaOS a fianco di qualsiasi altro sistema operativo già presente, utilizzando il filesystem XFS. Il restringimento non è possibile per le partizioni che risiedono su una tabella di partizione estesa o che utilizzano il filesystem XFS.&lt;/br&gt;
            La seconda opzione consente di utilizzare una partizione esistente e di sostituire tutti i file e/o il sistema operativo su tale partizione con un&apos;installazione di KaOS, utilizzando il filesystem XFS.&lt;/br&gt;
            La terza opzione utilizza l&apos;intero disco e crea una partizione in cui tutto sarà installato sotto root, tutte le altre partizioni saranno rimosse e il filesystem utilizzato sarà XFS.&lt;/p&gt;
            
            &lt;p&gt;La quarta opzione offre la libertà di impostare qualsiasi scelta, qualsiasi filesystem e tabella delle partizioni. Se si desidera ripulire completamente l&apos;unità e ricominciare da capo o se l&apos;unità non ha ancora una tabella di partizione (nuovo supporto, installazione di virtualbox), è necessario decidere quale tabella di partizione utilizzare. Quella predefinita nel programma di installazione è GPT, mentre ms-dos è l&apos;opzione più vecchia (ancora più comunemente usata per i sistemi BIOS). Il vantaggio di GPT è che può usare partizioni primarie virtuali illimitate (ms-dos è limitato a quattro), è necessario per unità più grandi di 2 Tb ed è migliore per i sistemi UEFI. Se si sceglie di usare GPT su un sistema BIOS, assicurarsi di configurarlo correttamente, con la necessaria partizione di 8 MB di spazio non formattato all&apos;inizio dell&apos;unità e con il flag bios_grub assegnato a tale partizione non formattata. Questa configurazione non può avere una partizione /boot separata.&lt;/p&gt;
            
            &lt;p&gt;Una volta impostata la tabella delle partizioni, è necessario partizionare il disco. Il minimo necessario consiste in una partizione per / (root). Ci sono alcuni vantaggi nell&apos;usare una partizione separata per /home e si potrebbe avere una partizione di swap per sleep/hibernate. Qualsiasi altra partizione è una scelta strettamente personale, anche se l&apos;impostazione di /usr non è molto ben supportata da systemd (si dovranno usare dei passaggi extra per farla funzionare correttamente).&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="117"/>
        <source>&lt;p&gt;Option to install alongside an existing partition, UEFI system, / (root) and swap used. After selecting which partition you want to shrink to create room for KaOS, you can drag in that partition to set the desired size.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>Opzioni per installare affiancando una partizione esistente, sistema UEFI, / (radice) e lo swap usato. Dopo aver selezionato quale partizione vuoi ridimensionare per creare lo spazio per KaOS, trascina il bordo della partizione per impostare la dimensione desiderata. Qui è anche mostrata l&apos;opzione per crittografare il sistema e impostarne una password. </translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="144"/>
        <source>&lt;p&gt;Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the &lt;i&gt;after&lt;/i&gt; bar.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Opzioni per sostituire una partizione esistente, un sistema UEFI, 7 (radice) e lo swap usato. Una volta selezionata la partizione che vuoi sostituire, la preview mostrerà la barra &lt;i&gt;dopo&lt;/i&gt;. Qui è anche mostrata l&apos;opzione per crittografare il sistema e impostare una password.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="171"/>
        <source>&lt;p&gt;Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Opzione per usare l&apos;intero disco, completamente installato sotto / (radice) se su un sistema BIOS oppure con anche una partizione FAT32 EFI se il sistema è UEFI, con assegnazione dello swap se le dimensioni del disco lo permettono. Quest&apos;opzione rimuoverà tutti i dati e i sistemi installati sul disco selezionato.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="198"/>
        <source>&lt;p&gt;Using the fourth option to delete an existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight &lt;code&gt;Free Space&lt;/code&gt; and select &lt;code&gt;Create&lt;/code&gt;.  You then get a window with options to set partition type, file system and mountpoint. When using an UEFI install, it is a must to have a vfat (fat32) formatted /boot partition available. Best set the size to 512Mb and have it at the beginning of the partition-table. Once root is set, the Next button will become active again.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Usa la quarta opzione per cancellare il layout esistente. Seleziona &lt;code&gt;Nuova tabella delle partizioni&lt;/code&gt; per un nuovo disco o per passare da ms-dos a GPT o viceversa.&lt;/br&gt;
Evidenzia &lt;code&gt;Spazio libero&lt;/code&gt; e seleziona &lt;code&gt;Crea&lt;/code&gt;. Vedrai una finestra con le opzioni per l&apos;impostazione del tipo di partizione, di file system e punto di montaggio. Per installazioni UEFI, deve essere disponibile una partizione /boot formattata in vfat (fat32). La situazione ottimale è una partizione di 512Mb all&apos;inizio della tabella delle partizioni. Una volta che root è impostata, il pulsante Next sarà nuovamente attivo. &lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="266"/>
        <source>&lt;p&gt;Using the fourth option to adjust existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight a desired partition, and select &lt;code&gt;Format&lt;/code&gt;. If this is going to be the root partition, it needs to be formatted. If old files are still present it will most likely result in a broken install. Next select a Mountpoint, root needs to be set, for UEFI install /boot needs to be set too. Repeat these steps for any other partition you want to use for this install. Once root is set, the Next button will become active again. Options are available to encrypt partitions, this includes swap.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Usa la quarta opzione per sistemare il layout esistente. Seleziona &lt;code&gt;Nuova tabella delle partizioni&lt;/code&gt; per un nuovo disco o per passare da ms-dos a GPT o viceversa.&lt;/br&gt;
Evidenzia la partizione desiderata, e seleziona &lt;code&gt;Formatta&lt;/code&gt;. Se questa sarà la partizione radice, deve essere formattata. Se sono presenti vecchi file molto probabilmente l&apos;installazione risulterà corrotta. Poi seleziona un punto di montaggio, la radice deve essere impostata, per installazioni UEFI anche /boot deve essere impostata. Ripeti questi passaggi anche per le altre partizioni che vuoi usare per questa installazione. Una volta che root è impostata, il pulsante Next sarà nuovamente attivo. Sono disponibili opzioni per crittografare le partizioni, incluse quelle di swap.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="304"/>
        <source>&lt;p&gt;The image below shows the needed setup for an UEFI partition. If your install already has this set, &lt;font color='#ff0000'&gt;DO NOT&lt;/font&gt; format it. With UEFI any existing bootloader can be used, formatting will delete any currently present files to boot Windows or any other OS.&lt;/br&gt;
            For BIOS systems select where you want to install the bootloader, this can either be done in the Master Boot Record of the selected disc, or can be installed in the /boot partition of the system (/boot can reside under root for that).&lt;/br&gt;
            No changes will happen when you click the Next button, you will get a chance to review all your chosen settings and go back if things are not exactly as you want them.&lt;/p&gt;</source>
        <translation>&lt;p&gt;L&apos;immagine sotto mostra il setup necessario per una partizione UEFI. Se la tua installazione l&apos;ha già impostata, &lt;font color=&apos;#ff0000&apos;&gt;NON&lt;/font&gt; formattarla. Con UEFI si può usare qualsiasi bootloader esistente, la formattazione cancellerebbe qualsiasi file presente per il boot di Windows o altri sistemi operativi. &lt;/br&gt;
Per sistemi BIOS seleziona dove vuoi installare il bootloader,si può installare sia nel Master Boot Record del disco selezionato che in una partizione di boot del sistema (boot può anche stare sotto root in questo caso).&lt;/br&gt;
Nessun cambiamento sarà applicato quando premi il pulsante Next, ma avrai la possibilità di ricontrollare tutte le impostazioni scelte e tornare indietro se le cose non saranno come desideri.</translation>
    </message>
</context>
<context>
    <name>summary</name>
    <message>
        <location filename="../guide/summary.qml" line="52"/>
        <source>&lt;h3&gt;Summary&lt;/h3&gt;

            &lt;p&gt;All looking as it should? Then clicking Next will give you one last warning before the actual formatting and installation will start.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Panoramica&lt;/h3&gt;

&lt;p&gt;Tutto appare come dovrebbe? Allora premendo Next avrai un ultimo avviso prima che la formattazione vera e propria e l&apos;installazione partano. &lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/summary.qml" line="90"/>
        <source>&lt;p&gt;While the system is being installed, a slideshow is shown which will give you some basic info. You can follow what the installer is doing at different stages though. Expect this part to take between 5-10 minutes depending on your settings and speed of the target drive. At around 30%, the copying of the files is completed (which will take the longest), then the installer will create the users, remove Live system specific packages, install additional packages, remove any language packs &amp; drivers not needed for your specific hardware, setup either GRUB for BIOS systems or Systemd-boot for UEFI and copies the KaOS specific user settings.&lt;/p&gt;

            &lt;p&gt;Once the installation is finished, you have the option to close the installer and go back to live mode or reboot the system right away. A full log of the install is available as installation.log in the home directory of the Live user and this log is copied to /var/log/installation.log of the target system.&lt;/p&gt;

            &lt;p&gt;Hopefully this Guide has answered any questions you had about using this Installer. If anything is not clear enough then it would be really appreciated if you can get in touch to get the needed changes in.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mentre procede l&apos;installazione del sistema, viene mostrata una presentazione che ti darà qualche informazione di base. Puoi comunque seguire quello che sta facendo l&apos;installer ad ogni step. Questa parte impiegherà circa 5-10 minuti in base alle tue impostazioni e alla velocità del disco di destinazione. Intorno al 30% finisce la copia dei file (la parte più lunga), poi l&apos;installer creerà gli utenti, rimuoverà i pacchetti specifici della versione Live, installerà pacchetti aggiuntivi, rimuoverà pacchetti di lingua e  driver non necessari per il tuo hardware, configurerà GRUB per sistemi BIOS o Systemd-boot per UEFI e copierà le impostazioni utente specifiche di KaOS.&lt;/p&gt;

&lt;p&gt;Una volta terminata l&apos;installazione, avrai la possibilità di chiudere l&apos;installer e tornare alla distribuzione live o riavviare immediatamente il sistema. Un log completo dell&apos;installazione è disponibile nel file installation.log nella cartella home dell&apos;utente Live ed è copiato in /var/log/installation.log del sistema di destinazione.&lt;/p&gt;

&lt;p&gt;Speriamo che questa guida abba risposto a tutte le domande che avevi su questo installer. Se qualcosa non fosse chiaro abbastanza, ti preghiamo di contattarci per modificarlo in modo opportuno.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Creazione utente&lt;/h3&gt;

&lt;p&gt;La pagina di creazione dell&apos;utente fornisce le opzioni per impostare un nome utente diverso dal tuo vero nome e il nome desiderato per il sistema.&lt;/p&gt;

&lt;p&gt;Per ragioni di sicurezza, è consigliabile usare una password diversa per l&apos;account di amministrazione (root)&lt;/p&gt;

&lt;p&gt;Di default l&apos;autologin è disattivato, spunta la casella per attivare il login senza password.&lt;/p&gt;</translation>
    </message>
</context>
</TS>