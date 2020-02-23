<?xml version="1.0" ?><!DOCTYPE TS><TS language="fr" version="2.1">
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
        <translation>Faire un don</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="138"/>
        <source>Forum</source>
        <translation>Forum</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="163"/>
        <source>Documentation</source>
        <translation>Documentation</translation>
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
        <translation>&lt;h3&gt;À propos de KaOS&lt;/h3&gt;
                    &lt;p&gt;L’idée derrière KaOS est de créer une distribution entièrement rolling et transparente pour un bureau moderne, conçue à partir de zéro et focalisée sur des éléments précis : &lt;b&gt;un bureau (KDE), un toolkit (Qt), une architecture (x84_64)&lt;/b&gt; ainsi qu’un soin apporté pour évaluer et sélectionner les meilleurs outils et applications. Tout le travail est concentré sur l’empaquetage, pas sur le développement de nouveaux outils et applications.&lt;/p&gt;

                    &lt;p&gt;Passer d’un système d’exploitation propriétaire à des options Open Source (basées sur Linux, BSD ou Solaris), &lt;b&gt;’est rechercher la liberté et le choix&lt;/b&gt; dans la plupart des cas. Cependant, de tels systèmes d’exploitation ou distributions ne devraient-elles pas réaliser certains choix sur les solutions qu’elles estiment les meilleures ? KaOS y voit un manque d’attention à cet égard. Afin de créer une distribution ayant une grande exigence de qualité, il convient de se concentrer sur un choix fixé pour s’assurer que l’utilisateur puisse bénéficier du meilleur possible, quel que soit le choix qui a été fait.Il est tout bonnement impossible d’embarquer toutes les applications possibles dans tous les environnements de bureau ou interfaces graphiques.&lt;/p&gt;
                    
                    &lt;p&gt;KaOS a fait le choix d’utiliser &lt;b&gt;le noyau Linux&lt;/b&gt; comme base (bien que le noyau Illumos soit en constante évalutation et basculer dessus est un souhait). Ensuite, le gestionnaire de paquets le meilleur disponible, ayant le mode le plus flexible pour construire des paquets, maintenir des dépôts, est &lt;b&gt;pacman/makepkg pour une distribution rolling release&lt;/b&gt; comme KaOS. Comme environnement de bureau, il n’y aura jamais de changement, que ce soit basé sur Linux ou Illumos, KDE Plasma restera choisi, avec Qt comme toolkit. Avec tous ces choix en place, la construction des paquets pour cette distribution indépendante a débuté en avril 2013.&lt;/p&gt;

                    &lt;p&gt;KaOS est conçue de zéro, &lt;b&gt;tous les paquets de tous les dépôts sont créés par et pour KaOS&lt;/b&gt;. En juillet 2013, l’objectif initial de 1500 paquets a été atteint.&lt;/p&gt;

                    &lt;p&gt;En considérant le nombre relativement faible de paquets disponibles, gardez une chose à l’esprit. Puisque le focus est mis sur un toolkit, un environnement de bureau, &lt;b&gt;les paquets n’ont pas besoin d’être découpés excessivement&lt;/b&gt; pour faire fonctionner le tout dans toutes sortes d’environnements différents. Ailleurs, beaucoup de paquets sont découpés en 3 à 5 morceaux, parfois 15-20 paquets. KaOS simplifie les choses autant que possible et évite le fractionnement (comme exemple, on peut citer les applications xorg, combinant 50 paquets en seulement 3, mesa constitué de 2 paquets au lieu de 15).&lt;/p&gt;
                    
                    &lt;p&gt;Faire le choix de KDE/Qt ne signifie en aucun cas que KaOS perde de vue l’importance d’avoir &lt;b&gt;le meilleur outil à disposition&lt;/b&gt;. La plupart du temps, on considère que KDE/Qt fournit l’outil de meilleure qualité, mais il existe des applications pour lesquelles Gtk est la seule alternative possible (Inkscape, Ardour pour en citer deux), ou bien dans le cas des navigateurs Internet, par exemple, pour lesquels les options Qt ne sont pas du niveau de leurs équivalents en Gtk. Pour ces cas particuliers, les application Gtk sont disponibles, même si leur nombre reste limité. Cette ISO se voulant une vitrine de la puissance de Qt/KDE, &lt;b&gt;elle n’embarque pas GTK&lt;/b&gt;, donc ni Firefox, ni Chrome ni LibreOffice, pour citer quelques exemples, quelques-uns, car ces applications dépendent de GTK.&lt;/p&gt;
                    
                    &lt;p&gt;Le schéma des dépôts est simple et consiste en trois groupes : Core, Main et apps. Une mise à jour complète et régulière du système vous fournira les derniers paquets disponibles, &lt;b&gt;sans avoir besoin de réinstaller le système&lt;/b&gt;. &lt;i&gt;Core&lt;/i&gt; fournit les paquets de base nécessaires au démarrage du système, au lien entre le BIOS et la plupart des matériels, ainsi que les options de base du terminal. Par exemple, on y trouve le noyau, systemd, toolchain (pour la compilation) et les outils de base pour la ligne de commande. &lt;i&gt;Main&lt;/i&gt; contient toutes les librairires nécessaires, les drivers supplémentaires et autre firmware pour faire fonctionner le bureau et les applications. &lt;i&gt;Apps&lt;/i&gt; contient toutes les paquets visibles et utilisés par les utilisateurs, KDE et toutes ses dépendances comprises. &lt;i&gt;Build&lt;/i&gt; est le dépôt où tous les paquets sont livrés en premier, qu’ils soient recompilés, mis à jour, ou nouveaux. ce n’est qu’une fois passées leur périodes de test qu’il sont déplacés dans leurs dépôts respectifs.&lt;/p&gt;
                    
                    &lt;p&gt;&lt;b&gt;Les utilisateurs ciblés&lt;/b&gt; sont ceux qui ont testé de nombreux systèmes d’exploitation/distributions/environnements de bureaux, et qui cherchent une distribution utilisant toutes ses ressources dans un seul environnement de bureau. D’après leurs tests, ils estiment que KDE KDE est le meilleur d’entre eux. Leur matériel utilisé est plus récent que 2005 et n&apos;a donc aucun problème pour exécuter des logiciels 64 bits. Enfin, l&apos;utilisateur ciblé ne craint pas d&apos;utiliser les versions KDE/Qt de logiciels dont il a besoin, même si cela signifie apprendre à les utiliser. Bien entendu, les applications dédiées à la même chose seront limitées à 5-6.&lt;/p&gt;
                    
                    &lt;p&gt;KDE est un environnement de bureau moderne qui gère la plupart des capacités des cartes graphiques et cartes son. Cela ne signifie pas KDE ne peut fonctionner sur du matériel de premier choix, mais en général, il existe de meilleures solutions disponibles pour de tels systèmes (OpenBox par exemple). Le strict minimum nécessaire pour &lt;b&gt;l’espace disque dur est de 8 Go, mais 25 Go est recommandé&lt;/b&gt; pour une utilisation confortable. KaOS peut s’installer avec 1,5Go de RAM disponible, mais &lt;b&gt;2Go de RAM&lt;/b&gt;rendent l’expérience plus facile. Puisque seuls les paquets x86_64 sont disponibles, un &lt;b&gt;processeur compatible 64 bits&lt;/b&gt; est nécessaire. Comme avec n’importe quelle distribution de type rolling release, les mises à jour sont fréquentes et peuvent être importantes, aussi un abonnement Internet relativement rapide (oubliez le modem !) capable de gérer 2Go de trafic par mois est recommandé.&lt;/p&gt;</translation>
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
        <translation>Clavier</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation>Partitionnement</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>Utilisateurs</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>Résumé</translation>
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
        <translation>&lt;h3&gt;Guide d’installation&lt;/h3&gt;

            &lt;p&gt;Après avoir vu le fonctionnement de KaOS en mode live, vous pouvez vous préparer à l’installer. Avant cela, il est souhaitable de comprendre certaines choses.&lt;/p&gt;

            &lt;p&gt;Comme pour toute Rolling Release, il vaut mieux mettre à jour régulièrement. Le faire trop peu souvent va probablement causer des problèmes. Il est recommandé de mettre à jour une fois par semaine, en tout cas, pas moins d’une fois par mois.&lt;/br&gt;
            Si cela n’est pas possible pour vous, il vaudrait mieux envisager une distribution statique avec un cycle de versions de six ou neuf mois. Si des instructions sont nécessaires lors d’une mise à jour de KaOS, elles seront toujours précisées sur &lt;a href=&quot;https://kaosx.us/news/&quot;&gt;kaosx.us/news/&lt;/a&gt; (ainsi que sur Octopi, le gestionnaire de paquets). L’idéal est de vous familiariser avec le &lt;a href=&apos;https://kaosx.us/docs/pacman/&apos;&gt;gestionnaire de paquets en ligne de commande, pacman&lt;/a&gt;. Toute distribution doit mettre en œuvre des changements majeurs à certains moments, et une distribution Rolling doit s’appuyer sur le gestionnaire de paquets pour interagir avec les utilisateurs afin de s’assurer que ces mises à jour sont correctement effectuées, puisque Rolling implique qu’il n’est pas nécessaire de réinstaller à des intervalles fixés (une distribution statique peut nécessiter une réinstallation lors de changements majeurs). Aucune interface graphique à pacman n’est aussi puissante que pacman lui-même dans de telles situations.&lt;/p&gt;

            &lt;p&gt;Calamares, l’installateur de KaOS est simple d’utilisation, mais il manque d’une fonctionnalité à ce stade. Les configurations de disque RAID ne sont pas encore supportées.&lt;/p&gt;

            &lt;h3&gt;Démarrer l’installateur&lt;/h3&gt;

            &lt;p&gt;La première page vous donne des informations sur l’installateur, une option pour vérifier les problèmes connus et une option pour sélectionner la langue qui sera utilisée pour l’installation.&lt;/p&gt;
            
            &lt;p&gt;Assurez-vous que votre système répond aux exigences minimales. Le fait de ne pas avoir de connexion Internet pendant l’installation n’est pas un facteur bloquant et n’empêchera pas l’installation de continuer.&lt;/p&gt;
            
            &lt;p&gt;Avoir moins d’espace de disque qu’indiqué ou de RAM disponible fera échouer l’installation de façon quasi certaine. En ce qui concerne l&apos;espace disque, un minimum de 20 Go est recommandé.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="35"/>
        <source>Welcome</source>
        <translation>Bienvenue</translation>
    </message>
    <message>
        <location filename="../main.qml" line="44"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt;Merci d’essayer KaOS. Vous recherchez un fichier de mots de passe ou d’une liste de paquets ?&lt;br&gt;
Vous voulez en savoir plus sur le projet ? Veuillez cliquer sur les liens ci-dessous.&lt;br&gt;&lt;br&gt;
N’hésitez pas à partager votre avis sur KaOS dans le forum.&lt;/div&gt;</translation>
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
        <translation>&lt;p&gt;Mots de passe corrects de la session live :&lt;/p&gt;
                            &lt;p&gt;&lt;/p&gt;
                            &lt;table width=100% align=center bgcolor=#eaeaea&gt;
                                &lt;tr&gt;
                                    &lt;th&gt;Nom d’utilisateur :&lt;/th&gt;
                                    &lt;th&gt;Mot de passe :&lt;/th&gt;
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
                            &lt;p&gt;Amusez-vous bien !&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="108"/>
        <source>Main</source>
        <translation>Principal</translation>
    </message>
    <message>
        <location filename="../main.qml" line="111"/>
        <source>Passwords</source>
        <translation>Mots de passe</translation>
    </message>
    <message>
        <location filename="../main.qml" line="114"/>
        <source>About</source>
        <translation>À propos</translation>
    </message>
    <message>
        <location filename="../main.qml" line="117"/>
        <source>Package List</source>
        <translation>Liste des paquets</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Les &lt;strong&gt;notes de version&lt;/strong&gt; vous donnent des informations importantes sur ce que contient cette ISO.&lt;/p&gt;
            &lt;p&gt;Si vous avez sélectionné Nvidia non libre lors du démarrage de la session Live, une page de licence s’affichera. Assurez-vous de lire et d’accepter la licence, sinon votre installation n’inclura pas le pilote non libre, et utilisera Nouveau à la place. Vous ne verrez pas cette page si vous avez choisi d’utiliser les pilotes libres.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation>&lt;p&gt;L’étape suivante est &lt;strong&gt;La configuration du clavier&lt;/strong&gt;. Vous pouvez tester la configuration choisie en saisissant des caractères dans le champ désigné.&lt;/p&gt;

            &lt;p&gt;Utilisez le menu déroulant pour affiner le modèle de clavier exact que vous désirez.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Partitionnement&lt;/h3&gt;
            
            &lt;p&gt;Utiliser les options de partitionnement correctes, le système de fichiers et la table de partition les plus appropriés constituent la partie la plus difficile à l’installation d’un système d’exploitation pour les nouveaux utilisateurs.&lt;/p&gt;

            &lt;p&gt;&lt;font color=&apos;#ff0000&apos;&gt;Assurez-vous de sauvegarder toutes les données utiles de votre disque avant de continuer.&lt;/font&gt;&lt;/p&gt;
            
            &lt;p&gt;Si votre support d’installation cible (HDD, SSD, clé USB par exemple) n’est pas formaté et partitionné ou n’est pas configuré comme vous le souhaitez, vous pouvez le faire depuis le programme d’installation ou le préparer avant de démarrer le programme d’installation.&lt;/p&gt;
            
            &lt;p&gt;À la fois pour les systèmes UEFI et BIOS, passez la souris sur les boutons d’informations respectifs pour obtenir plus d’informations sur les différentes options pour chacun.&lt;/p&gt;
            
            &lt;p&gt;Cet installateur vous propose quatre options possibles.&lt;/br&gt;
            La première option vous permettra de réduire une partition existante et d’installer KaOS aux côtés des autres systèmes d&apos;exploitation déjà disponibles sur votre système, en utilisant le système de fichiers XFS. La réduction n’est pas possible pour les partitions situées sur une table de partitions étendue ou utilisant le système de fichiers XFS.&lt;/br&gt;
            La deuxième option vous permet d’utiliser une partition existante et remplacer tous les fichiers et/ou le système d’exploitation qu’elle contient par KaOS, en utilisant le système de fichiers XFS.&lt;/br&gt;
            La troisième option utilise le disque entier et crée une partition root unique formatée en XFS où sera installé le système.&lt;/p&gt;
            
            &lt;p&gt;La quatrième option vous donne la liberté de définir n’importe quelle option, n’importe quel système de fichiers et table de partition. Si vous voulez nettoyer complètement le lecteur et recommencer ou si ce lecteur n’a pas encore de table de partition (nouveau média, installation de virtualbox), vous devez décider quelle partition utiliser. La table de partitions par défaut dans le programme est GPT, ms-dos est une option plus ancienne (encore plus communément utilisée pour les systèmes BIOS). GPT a l’avantage de pouvoir utiliser un nombre de partitions primaires virtuelles illimité (ms-dos est limité à quatre), il est nécessaire pour les disques de plus de 2 To et est meilleur pour les systèmes UEFI. Si vous choisissez d’utiliser GPT sur un système BIOS, assurez-vous de le configurer correctement, avec une partition requise de 8 Mo d’espace non formaté au début du lecteur avec un flag bios_grub. Cette configuration ne peut pas avoir une partition séparée pour /boot.&lt;/p&gt;
            
            &lt;p&gt;Une fois talbe de partitions créée, vous devez partitionner le disque, le minimum requis étant une partition pour / (root). Il y a certains avantages à utiliser une partition séparée pour /home, et vous aimeriez avoir une partition swap pour la mise en veille/mise en veille prolongée. Toute autre partition est un choix strictement personnel, bien que la configuration de /usr ne soit pas très bien supportée dans systemd (vous devrez utiliser des étapes supplémentaires pour que cela correctement)..&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="117"/>
        <source>&lt;p&gt;Option to install alongside an existing partition, UEFI system, / (root) and swap used. After selecting which partition you want to shrink to create room for KaOS, you can drag in that partition to set the desired size.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Option installer à côté d’une partition existante avec un système UEFI, / (racine) et swap seront utilisés. Après avoir sélectionné la partition que vous souhaitez réduire pour créer de l’espace pour KaOS, vous pouvez faire glisser cette partition pour définir la taille souhaitée. L’image montre l’option pour crypter le système avec un jeu de mots de passe.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="144"/>
        <source>&lt;p&gt;Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the &lt;i&gt;after&lt;/i&gt; bar.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Option Remplacer une partition existante, système UEFI, / (racine) et swap utilisé. Une fois que vous avez sélectionné la partition que vous souhaitez remplacer, l’aperçu affiche la barre &lt;i&gt;après&lt;/i&gt;. L’image montre l’option pour crypter le système avec un jeu de mots de passe.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="171"/>
        <source>&lt;p&gt;Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Option Utiliser le disque entier, le tout installé sur / (racine) avec une partition FAT32 EFI également créée aussi bien sur BIOS que sur UEFI, et une SWAP assignée si la taille du disque le permet. Cela supprimera toutes les données et systèmes installés du disque sélectionné.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="198"/>
        <source>&lt;p&gt;Using the fourth option to delete an existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight &lt;code&gt;Free Space&lt;/code&gt; and select &lt;code&gt;Create&lt;/code&gt;.  You then get a window with options to set partition type, file system and mountpoint. When using an UEFI install, it is a must to have a vfat (fat32) formatted /boot partition available. Best set the size to 512Mb and have it at the beginning of the partition-table. Once root is set, the Next button will become active again.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Utiliser la quatrième option pour supprimer un partitionnement existant. Sélectionnez &lt;code&gt;Nouvelle table de partitions&lt;/code&gt; si c’est un nouveau disque ou pour passer de ms-dos à GPT ou vice versa.&lt;/br&gt;
            Cliquez sur &lt;code&gt;Espace libre&lt;/code&gt; et sélectionnez &lt;code&gt;Créer&lt;/code&gt;. Vous obtenez ensuite une fenêtre avec des options pour définir le type de partition, le système de fichiers et le point de montage. Lorsque vous utilisez une installation UEFI, il est indispensable d’avoir une partition /boot formatée vfat (fat32) disponible. Mieux vaut définir la taille à 512 Mo et l&apos;avoir au début de la table de partitions. Une fois la racine définie, le bouton Suivant redevient actif.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="266"/>
        <source>&lt;p&gt;Using the fourth option to adjust existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight a desired partition, and select &lt;code&gt;Format&lt;/code&gt;. If this is going to be the root partition, it needs to be formatted. If old files are still present it will most likely result in a broken install. Next select a Mountpoint, root needs to be set, for UEFI install /boot needs to be set too. Repeat these steps for any other partition you want to use for this install. Once root is set, the Next button will become active again. Options are available to encrypt partitions, this includes swap.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Utiliser la quatrième option pour modifier un partitionnement existant. Sélectionnez &lt;code&gt;Nouvelle table de partitions&lt;/code&gt; si c’est un nouveau disque ou pour passer de ms-dos à GPT ou vice versa.&lt;/br&gt;
            Cliquez sur la partition désirée et sélectionnez &lt;code&gt;Formater&lt;/code&gt;. Si la partition est destinée à être la partition racine, elle doit être formatée. Si des vieux fichiers étaient encore présents, cela provoquerait certainement une installation cassée. Ensuite, sélectionnez un point de montage, la racine doit être configurée, et pour UEFI, /boot a besoin d’être configuré également. Répéter ces étapes pour toutes les partitions que vous souhaitez utiliser pour cette installation. Une fois la racine définie, le bouton Suivant redevient actif. Des options sont disponibles pour crypter les partitions, y compris SWAP.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="304"/>
        <source>&lt;p&gt;The image below shows the needed setup for an UEFI partition. If your install already has this set, &lt;font color='#ff0000'&gt;DO NOT&lt;/font&gt; format it. With UEFI any existing bootloader can be used, formatting will delete any currently present files to boot Windows or any other OS.&lt;/br&gt;
            For BIOS systems select where you want to install the bootloader, this can either be done in the Master Boot Record of the selected disc, or can be installed in the /boot partition of the system (/boot can reside under root for that).&lt;/br&gt;
            No changes will happen when you click the Next button, you will get a chance to review all your chosen settings and go back if things are not exactly as you want them.&lt;/p&gt;</source>
        <translation>&lt;p&gt;L’image ci-dessous montre la configuration nécessaire pour une partition UEFI. Si votre installation est déjà configurée comme il faut, &lt;font color=&apos;#ff0000&apos;&gt;NE&lt;/font&gt; formatez pas. Avec UEFI n’importe quel chargeur de démarrage existant peut être utilisé, le formatage supprimera tous les fichiers actuellement présents pour démarrer Windows ou tout autre système d’exploitation.&lt;/br&gt;
            Pour les systèmes BIOS, sélectionnez l’emplacement où vous voulez installer le chargeur de démarrage, cela peut être situe soit dans le MBR du disque sélectionné, soit dans la partition /boot du système (/boot peut très bien être inclus dans la partition racine).&lt;/br&gt;
            Aucun changement ne se produira lorsque vous cliquerez sur le bouton Suivant, vous aurez la possibilité de revoir tous les paramètres choisis et de revenir en arrière si les choses ne sont pas exactement comme vous le souhaitez.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>summary</name>
    <message>
        <location filename="../guide/summary.qml" line="52"/>
        <source>&lt;h3&gt;Summary&lt;/h3&gt;

            &lt;p&gt;All looking as it should? Then clicking Next will give you one last warning before the actual formatting and installation will start.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Résumé&lt;/h3&gt;

            &lt;p&gt;Tout vous semble comme vous le souhaitez ? Dans ce cas, cliquez sur Suivant, vous recevrez un dernier avertissement avant que le formatage e l’installation ne commencent.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/summary.qml" line="90"/>
        <source>&lt;p&gt;While the system is being installed, a slideshow is shown which will give you some basic info. You can follow what the installer is doing at different stages though. Expect this part to take between 5-10 minutes depending on your settings and speed of the target drive. At around 30%, the copying of the files is completed (which will take the longest), then the installer will create the users, remove Live system specific packages, install additional packages, remove any language packs &amp; drivers not needed for your specific hardware, setup either GRUB for BIOS systems or Systemd-boot for UEFI and copies the KaOS specific user settings.&lt;/p&gt;

            &lt;p&gt;Once the installation is finished, you have the option to close the installer and go back to live mode or reboot the system right away. A full log of the install is available as installation.log in the home directory of the Live user and this log is copied to /var/log/installation.log of the target system.&lt;/p&gt;

            &lt;p&gt;Hopefully this Guide has answered any questions you had about using this Installer. If anything is not clear enough then it would be really appreciated if you can get in touch to get the needed changes in.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Pendant l’installation du système, un diaporama s’affiche pour vous donner quelques informations de base. Vous pouvez suivre ce que fait l’installateur à différentes étapes. Attendez-vous à ce que cette partie prenne entre 5 et 10 minutes en fonction de vos paramètres et de la vitesse du disque de destination. À environ 30%, la copie des fichiers est terminée (ce qui prend le plus de temps), puis l’installateur crée les utilisateurs, supprime les paquets spécifiques au Live, installe des paquets supplémentaires, supprime les packs de langue et les pilotes non requis pour votre matériel, configure soit GRUB, pour les systèmes BIOS, soit Systemd-boot pour UEFI, et copie les paramètres utilisateur spécifiques à KaOS.&lt;/p&gt;

            &lt;p&gt;Une fois l’installation terminée, vous avez la possibilité de fermer le programme d&apos;installation et de revenir au mode Live ou de redémarrer le système immédiatement. Un journal complet d’installation est disponible en tant que fichier installation.log dans le répertoire personnel de l’utilisateur Live et ce fichier est copié dans /var/log/installation.log du système cible.&lt;/p&gt;

            &lt;p&gt;Nous espérons que ce guide a répondu à toutes vos questions sur l’utilisation de cet installateur. Si quelque chose n’est pas assez clair alors n’hésitez pas prendre contact avec nous pour demander des explications.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Création de l’utilisateur&lt;/h3&gt;

            &lt;p&gt;La page de création de l’utilisateur vous permet de configurer un nom d’utilisateur différent de votre nom actuel et choisir le nom pour le système.&lt;/p&gt;

            &lt;p&gt;Pour des raisons de sécurité, il est conseillé d’utiliser un mot de passe différent pour le compte administrateur (root).&lt;/p&gt;

            &lt;p&gt;Par défaut, l’autoconnexion est désactivée, cochez la case pour activer la connexion sans mot de passe.&lt;/p&gt;</translation>
    </message>
</context>
</TS>