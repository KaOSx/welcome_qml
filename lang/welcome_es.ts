<?xml version="1.0" ?><!DOCTYPE TS><TS language="es" version="2.1">
<context>
    <name>Page1Form.ui</name>
    <message>
        <location filename="../Page1Form.ui.qml" line="45"/>
        <source>Install KaOS</source>
        <translation>Instalar KaOS</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="94"/>
        <source>Guide</source>
        <translation>Guia</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="187"/>
        <source>Donate</source>
        <translation>Donaciones</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="138"/>
        <source>Forum</source>
        <translation>Foro</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="163"/>
        <source>Documentation</source>
        <translation>Documentación</translation>
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
        <translation>&lt;h3&gt;Acerca de KaOS&lt;/h3&gt;
                    &lt;p&gt;La idea detrás de KaOS es crear una distribución rolling release estrechamente integrada y transparente para el escritorio moderno, construida desde cero con un enfoque muy específico. Orientada a solo &lt;b&gt;un DE (KDE), solo un toolkit (Qt), solo una arquitectura (x86_64)&lt;/b&gt;, sumado a un enfoque en la evaluación y selección de las mas adecuadas herramientas y aplicaciones. Todo el trabajo está orientado al empaquetado, no al desarrollo de nuevas herramientas o aplicaciones.&lt;/p&gt;

                    &lt;p&gt;Moving away from proprietary Operating Systems to open source options (Linux-based, BSD based,Solaris based) is about &lt;b&gt;wanting freedom and choice&lt;/b&gt; in almost all cases. But should any such Operating System or Distribution not make some choices of what it believes is the best fit? KaOS sees a lack of focus in that respect. To create the highest quality Distribution possible, there needs to be a focus to make sure the user gets the best possible for whatever choice they made. It simply is not possible to package any and all to work perfect for every Desktop Environment or Toolkit.&lt;/p&gt;
                    
                    &lt;p&gt;El cambio desde Sistemas Operativos propietarios a opciones de código abierto (basados en Linux, BSD o Solaris) es, en la mayoría de los casos, un cambio en busca de &lt;b&gt;libertad y posibilidad de elecciones&lt;/b&gt;. ¿Pero no debería cualquier Sistema Operativo o Distribución hacer algunas elecciones en base a lo que cree que es la mejor opción? KaOS ve una falta de atención en ese aspecto. Para crear una Distribución de la calidad más alta posible es necesario asegurarse de que el usuario obtenga lo mejor posible para cualquier elección que haga. Es simplemente imposible empaquetar todo para que funcione perfectamente con cada Entorno de Escritorio o Toolkit.&lt;/p&gt;

                    &lt;p&gt;KaOS es una distribución construida desde cero, &lt;b&gt;cada paquete en cada repositorio está compilado por y para KaOS&lt;/b&gt;. En Julio de 2013 se alcanzó el objetivo inicial de los 1500 paquetes.&lt;/b&gt;

                    &lt;p&gt;Cuando considere la relativamente baja cantidad de paquetes disponibles, por favor tenga una cosa en mente: Desde que todo está enfocado a sólo un toolkit y un DE, &lt;b&gt;no es necesaria una excesiva división de paquetes&lt;/b&gt; para tratar de hacer que todo funcione para cada entorno de escritorio. En otros lugares muchos paquetes se dividen en 3, 4 o 5, ciertas veces en 15 a 20 paquetes. KaOS simplifica las cosas tanto como sea posible y evita la división (ejemplo de eso son las aplicaciones de xorg, en que alrededor de 50 paquetes se combinan en sólo 3, mesa consta de 2 en lugar de 15).&lt;/p&gt;
                    
                    &lt;p&gt;Elegir KDE/QT no significa que KaOS pierda de vista la importancia de tener &lt;b&gt;la mejor herramienta disponible para el trabajo&lt;/b&gt;. La mayoría de las veces creemos que KDE/QT provee la mejor herramienta, pero hay algunas aplicaciones cuya opción en GTK es la única disponible en su tipo (Inkscape, Ardour, por nombrar solo dos), o en el caso de los navegadores de internet por ejemplo, las opciones QT no están a la altura de sus contrapartes GTK. Para esos casos, las aplicaciones GTK estarán disponibles, aunque su número será limitado. Esta ISO es una muestra del poder de Qt/KDE, por lo que es una ISO libre de GTK, eso significa que no están Firefox, Chrome o LibreOffice por nombrar unas pocas, dado que ellas dependen de GTK.&lt;/p&gt;
                    
                    &lt;p&gt;El diseño de los repositorios es simple, y consiste en tres grupos, Core, Main y Apps. Una actualización completa del sistema siempre le brindará lo último disponible, sin necesidad de reinstalar el sistema. &lt;i&gt;Core&lt;/i&gt; tiene los paquetes base necesarios para que un sistema arranque, se comunique con la BIOS para conectar con la mayoría del hardware y ajusta opciones básicas de la shell. Ejemplos de estos paquetes son el kernel, systemd, toolchain para compilar y herramientas básicas de la linea de comandos. El repositorio &lt;i&gt;Main&gt;/i&gt; consiste en todas la bibliotecas necesarias, drivers extras y firmware necesarios para el funcionamiento del Escritorio y las Aplicaciones. &lt;i&gt;Apps&lt;/i&gt; consiste en todos los paquetes que son vistos y usados por los usuarios, incluyendo KDE (Frameworks, Plasma y Aplicaiones) y cualquiera de las herramientas necesarias. &lt;i&gt;Build&lt;/i&gt; es donde comienzan todos los paquetes, ya sea una recompilación, actualización o un nuevo agregado a los repos, todos van a build, una vez que atravesaron las pruebas apropiadas, son movidos a sus respectivos repositorios.&lt;/p&gt;
                    
                    &lt;p&gt;Los usuarios a quienes está destinado KaOS&lt;/b&gt; son aquellos que ya han probado varios sistemas operativos, distribuciones o entornos de escritorio y han llegado a la conclusión de que prefieren una distribución que optimice todos los recursos disponibles para trabajar en solo un solo entorno de escritorio, y que, tras su búsqueda, creen que el escritorio idóneo para ellos es KDE. Usuarios cuyo hardware es de alrededor del año 2005 o posterior, y que por lo tanto no tendrían problema en ejecutar software de 64 bits. Además, a dicho usuario, dado que desea poder disponer de la selección de programas más adecuada para sus necesidades, no le intimida tener que usar aplicaciones KDE/Qt, aunque ello conlleve aprender nuevas formas de trabajar con una aplicación que antes desconocía. Y entiende que la selección de aplicaciones similares estará limitada a unas 5 o 6 opciones.&lt;/p&gt;
                    
                    &lt;p&gt;KDE es un entorno de escritorio que permite gestionar casi todas las opciones de tarjetas de video y de sonido, lo que no significa que KDE no pueda funcionar en un hardware anticuado o de muy baja gama, pero para sistemas con bajas prestaciones son preferibles otros escritorios (como OpenBox, por ejemplo). &lt;b&gt;El espacio mínimo necesario en el disco duro para la instalación es de 8 Gb, pero se recomiendan 25 Gb&lt;/b&gt;. Para instalar KaOS son suficientes 1.5 Gb de RAM, aunque la experiencia de usuario mejorará notablemente a partir de &lt;b&gt;2 Gb de RAM&lt;/b&gt;. Dado que solamente hay paquetes disponibles para x86_64, es necesario una &lt;b&gt;cpu de 64 bits&lt;/b&gt;. Como en cualquier distribución rolling release, las actualizaciones son frecuentes y pueden llegar a ser bastante grandes, por eso lo más aconsejable es disponer de una conexión a internet rápida (con dial-up sería muy complicado), y con capacidad para un tráfico de datos mensuales de más de 2 Gb.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>guide</name>
    <message>
        <location filename="../guide/guide.qml" line="33"/>
        <source>Guide</source>
        <translation>Guía</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="81"/>
        <source>Intro</source>
        <translation>Introducción</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="84"/>
        <source>Keyboard</source>
        <translation>Teclado</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation>Particionado</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>Usuarios</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>Resumen</translation>
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
        <translation>&lt;h3&gt;Guía de Instalación&lt;/h3&gt;

            &lt;p&gt;Ahora que ha visto algo cómo funciona KaOS en el modo live, puede que esté listo para instalar. Antes de hacerlo, es mejor entender unas pocas cosas.&lt;/p&gt;

            &lt;p&gt;Como con cualquier rolling release, es necesario actualizar regularmente, si se atrasa mucho y luego trata de actualizar, pueden aparecer problemas. Lo recomendado es actualizar una vez a la semana, o como mucho una vez al mes.&lt;/br&gt;
            Si eso no es factible para Ud., es mejor que considere usar una distribución estática, con un ciclo de lanzamiento de seis o nueve meses. Si es necesaria alguna instrucción para alguna actualización de KaOS, &lt;a href=&apos;https://kaosx.us/news/&apos;&gt;kaosx.us/news/&lt;/a&gt; will always warn you about them (which will be shown in Octopi, the package manager too). It is best to familiarize yourself with the command line &lt;a href=&apos;https://kaosx.us/docs/pacman/&apos;&gt;package manager pacman&lt;/a&gt;. Any distribution has to implement major changes at times, a rolling distribution has to rely on the package manager to interact with the users to make sure such updates are done correctly. Since rolling inherently means, no re-install at set intervals (a static distribution can use such needed re-install to introduce major changes). No GUI for pacman is as powerful as pacman itself in those situations.&lt;/p&gt;

            &lt;p&gt;Calamares, the installer of KaOS is straightforward and easy to use, but lacks one feature at this stage. RAID disk setups is not supported yet.&lt;/p&gt;

            &lt;h3&gt;Starting the Installer&lt;/h3&gt;

            &lt;p&gt;The first page gives you some information of the installer, option to check the currently known issues and an option to select what language will be used for the install.&lt;/p&gt;
            
            &lt;p&gt;Ensure that your system meets the minimal requirements. Not having an internet connection during the install is no deal breaker and won&apos;t stop the install from going through.&lt;/p&gt;
            
            &lt;p&gt;Having less than the shown disc space or available RAM will almost certainly fail the install. As for disc space, a minimum of 20 Gb is recommended.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="35"/>
        <source>Welcome</source>
        <translation>Bienvenido</translation>
    </message>
    <message>
        <location filename="../main.qml" line="44"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt;Gracias por probar KaOS. ¿Necesita el archivo de contraseña o la lista de paquetes?&lt;br&gt;
                            ¿Quiere aprender más sobre el proyecto? Por favor vea los enlaces más abajo.&lt;br&gt;&lt;br&gt;
                              No dude en dejar su opinión sobre KaOS en el Foro.&lt;/div&gt;</translation>
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
        <translation>&lt;p&gt;Contraseñas correctas para usar en la sisión live:&lt;/p&gt;
                            &lt;p&gt;&lt;/p&gt;
                            &lt;table width=100% align=center bgcolor=#eaeaea&gt;
                                &lt;tr&gt;
                                    &lt;th&gt;Nombre de Usuario:&lt;/th&gt;
                                    &lt;th&gt;Contraseña:&lt;/th&gt;
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
                            &lt;p&gt;Esperamos que lo disfrute&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="108"/>
        <source>Main</source>
        <translation>Principal</translation>
    </message>
    <message>
        <location filename="../main.qml" line="111"/>
        <source>Passwords</source>
        <translation>Contraseñas</translation>
    </message>
    <message>
        <location filename="../main.qml" line="114"/>
        <source>About</source>
        <translation>Acerca</translation>
    </message>
    <message>
        <location filename="../main.qml" line="117"/>
        <source>Package List</source>
        <translation>Lista de Paquetes</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Las &lt;strong&gt;Notas de Lanzamiento&lt;/strong&gt; le brinda información importante de lo que está incluido en esta ISO&lt;/p&gt;
            &lt;p&gt;Si seleccionó non-free Nvidia durante el inicio de la sesión Live, se le presentará una página con la licencia. Asegúrese de leer y aceptar la licencia, de lo contrario su instalación no incluirá el driver non-free, y en su lugar volverá a Nouveau. No verá esa página si seleccionó usar los drivers libres.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Lo siguienteses &lt;strong&gt;Configuración del Teclado&lt;/strong&gt;. Puede comprobar la distribución tipeando algo en el área designada.&lt;/p&gt;

&lt;p&gt;Use el menú desplegable para hacer un ajuste exacto a su modelo de teclado.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Particionado&lt;/h3&gt;
            
            &lt;p&gt;Utilizando la configuración correcta de la partición, el sistema de archivos y la tabla de partición más adecuados es la parte más difícil para cualquier novato en la instalación de un Sistema Operativo.
            &lt;p&gt;&lt;font color=&apos;#ff0000&apos;&gt;Asegúrese de hacer una copia de seguridad de los datos que pueda necesitar de su unidad antes de continuar.&lt;/font&gt;&lt;/p&gt;
            
            &lt;p&gt;Si su medio de instalación de destino (HDD, ssd, usb-stick como ejemplos), no está formateado ni particionado o no está configurado a su gusto, puede hacerlo desde el instalador o prepararlo antes de iniciarlo.&lt;/p&gt;
            
            &lt;p&gt;Tanto para los sistemas UEFI como para los BIOS, al pasar el cursor sobre los respectivos botones de información, obtendrá más información sobre las diferentes opciones para cada uno.&lt;/p&gt;
            
            &lt;p&gt;Este instalador le ofrece cuatro opciones para su uso.&lt;/br&gt;
            La primera opción le permitirá reducir una partición existente e instalar KaOS junto con cualquier otro sistema operativo que ya esté disponible en su sistema, utilizando el sistema de archivos XFS. No es posible reducir las particiones que residen en una tabla de partición extendida o que utilizan el sistema de archivos XFS.&lt;/br&gt;
            La segunda opción le permite usar una partición existente y reemplazará todos los archivos y/o sistemas operativos en esa partición con una instalación de KaOS, utilizando el sistema de archivos XFS.&lt;/br&gt;
            La tercera opción utilizará todo el disco y creará una partición donde todos se instalarán bajo la raíz, todas las demás particiones se eliminarán y el sistema de archivos utilizado será XFS.&lt;/p&gt;
            
            &lt;p&gt;La cuarta opción le brinda la libertad de configurar cualquier opción, cualquier sistema de archivos y tabla de particiones. Si desea limpiar completamente la unidad y comenzar de nuevo o si esta unidad aún no tiene una tabla de particiones (nuevo medio, instalación de virtualbox), debe decidir qué partición utilizar. El valor predeterminado en el instalador es GPT, ms-dos es la opción más antigua (aún más comúnmente utilizada para sistemas BIOS). La ventaja de GPT es que puede usar particiones primarias ilimitadas virtuales (ms-dos está limitado a cuatro), se necesita para unidades de más de 2 Tb y es mejor para sistemas UEFI. Si elige usar GPT en un sistema BIOS, asegúrese de configurarlo correctamente, con la partición necesaria de 8 MB de espacio sin formato al comienzo de la unidad y teniendo el indicador bios_grub asignado a esa partición sin formato. Esta configuración no puede tener una partición / boot separada.&lt;/p&gt;
            
            &lt;p&gt;Una vez que se configura la tabla de particiones, debe particionar la unidad, como mínimo, una partición para / (raíz). Hay algunas ventajas de usar una partición separada para / home, y le gustaría tener una partición de intercambio para dormir / hibernar. Cualquier otra partición es una elección estrictamente personal, aunque la configuración de / usr no está muy bien soportada en systemd (tendrá que usar pasos adicionales para que esto funcione correctamente).&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="117"/>
        <source>&lt;p&gt;Option to install alongside an existing partition, UEFI system, / (root) and swap used. After selecting which partition you want to shrink to create room for KaOS, you can drag in that partition to set the desired size.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Opción para instalar junto con una partición existente, sistema UEFI, / (root) y swap utilizado. Después de seleccionar la partición que desea reducir para crear espacio para KaOS, puede arrastrar esa partición para establecer el tamaño deseado. También se muestra aquí la opción de cifrar el sistema con la contraseña establecida.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="144"/>
        <source>&lt;p&gt;Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the &lt;i&gt;after&lt;/i&gt; bar.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Opción para reemplazar una partición existente, sistema UEFI, / (raíz) y swap utilizado. Una vez que seleccione la partición que desea reemplazar, la vista previa mostrará la barra &lt;i&gt;posterior&lt;/i&gt;. También se muestra aquí la opción de cifrar el sistema con la contraseña establecida.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="171"/>
        <source>&lt;p&gt;Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Opción para usar la unidad completa, todo instalado bajo / (raíz) si en un sistema BIOS y la partición EFI FAT32 también se creó si el sistema es UEFI, con intercambio asignado si el tamaño del disco lo permite. Esto eliminará todos los datos y sistemas instalados de la unidad seleccionada.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="198"/>
        <source>&lt;p&gt;Using the fourth option to delete an existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight &lt;code&gt;Free Space&lt;/code&gt; and select &lt;code&gt;Create&lt;/code&gt;.  You then get a window with options to set partition type, file system and mountpoint. When using an UEFI install, it is a must to have a vfat (fat32) formatted /boot partition available. Best set the size to 512Mb and have it at the beginning of the partition-table. Once root is set, the Next button will become active again.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Usando la cuarta opción para eliminar una disposición existente. Seleccionar &lt;code&gt;Nueva Tabla de Particiones&lt;/code&gt; fo una nueva unidad o para cambiar de ms-dos a GPT o viceversa.&lt;/br&gt;
            Destacar &lt;code&gt;Espacio libre&lt;/code&gt; and select &lt;code&gt;Crear&lt;/code&gt;.  A continuación, sale una ventana con opciones para configurar el tipo de partición, el sistema de archivos y el punto de montaje. Cuando se utiliza una instalación de UEFI, es necesario tener una partición formateada / boot vfat (fat32) disponible. Mejor establezca el tamaño a 512Mb y téngalo al comienzo de la tabla de particiones. Una vez que se establece la raíz, el botón Siguiente se activará de nuevo.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="266"/>
        <source>&lt;p&gt;Using the fourth option to adjust existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight a desired partition, and select &lt;code&gt;Format&lt;/code&gt;. If this is going to be the root partition, it needs to be formatted. If old files are still present it will most likely result in a broken install. Next select a Mountpoint, root needs to be set, for UEFI install /boot needs to be set too. Repeat these steps for any other partition you want to use for this install. Once root is set, the Next button will become active again. Options are available to encrypt partitions, this includes swap.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Usando la cuarta opción para ajustar la disposición existente. Seleccione &lt;code&gt;Nueva tabla de Particiones&lt;/code&gt; para una nueva unidad o para cambiar de ms-dos a GPT o viceversa.&lt;/br&gt;
            Destaque una partición deseada y seleccione &lt;code&gt;Formatear&lt;/code&gt;. Si esta va a ser la partición raíz, necesita ser formateada. Si los archivos antiguos todavía están presentes, lo más probable es que resulte en una instalación rota. A continuación, seleccione un Punto de Montaje, la raíz debe configurarse, para la instalación de UEFI / el arranque también debe configurarse. Repita estos pasos para cualquier otra partición que desee utilizar para esta instalación. Una vez que se establece la raíz, el botón Siguiente se activará de nuevo. Las opciones están disponibles para cifrar particiones, esto incluye swap.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="304"/>
        <source>&lt;p&gt;The image below shows the needed setup for an UEFI partition. If your install already has this set, &lt;font color='#ff0000'&gt;DO NOT&lt;/font&gt; format it. With UEFI any existing bootloader can be used, formatting will delete any currently present files to boot Windows or any other OS.&lt;/br&gt;
            For BIOS systems select where you want to install the bootloader, this can either be done in the Master Boot Record of the selected disc, or can be installed in the /boot partition of the system (/boot can reside under root for that).&lt;/br&gt;
            No changes will happen when you click the Next button, you will get a chance to review all your chosen settings and go back if things are not exactly as you want them.&lt;/p&gt;</source>
        <translation>&lt;p&gt;La siguiente imagen muestra la configuración necesaria para una partición UEFI. Si su instalación ya tiene este conjunto, &lt;font color=&apos;#ff0000&apos;&gt; NO&lt;/font&gt; lo formatee. Con UEFI se puede usar cualquier gestor de arranque existente, el formato eliminará los archivos actuales para iniciar Windows o cualquier otro sistema operativo.&lt;/br&gt;
            Para los sistemas BIOS, seleccione dónde desea instalar el cargador de arranque, esto se puede hacer en el Registro de arranque maestro del disco seleccionado, o se puede instalar en la partición / boot del sistema (/ boot puede residir en la raíz).&lt;/br&gt;
            No se realizarán cambios cuando haga clic en el botón Siguiente, tendrá la oportunidad de revisar todas las configuraciones elegidas y volver si las cosas no son exactamente como las desea.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>summary</name>
    <message>
        <location filename="../guide/summary.qml" line="52"/>
        <source>&lt;h3&gt;Summary&lt;/h3&gt;

            &lt;p&gt;All looking as it should? Then clicking Next will give you one last warning before the actual formatting and installation will start.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Resumen&lt;/h3&gt;

            &lt;p&gt;¿Todo está como debería? Luego, al hacer clic en Siguiente, aparecerá una última advertencia antes de que comience el formateo y la instalación.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/summary.qml" line="90"/>
        <source>&lt;p&gt;While the system is being installed, a slideshow is shown which will give you some basic info. You can follow what the installer is doing at different stages though. Expect this part to take between 5-10 minutes depending on your settings and speed of the target drive. At around 30%, the copying of the files is completed (which will take the longest), then the installer will create the users, remove Live system specific packages, install additional packages, remove any language packs &amp; drivers not needed for your specific hardware, setup either GRUB for BIOS systems or Systemd-boot for UEFI and copies the KaOS specific user settings.&lt;/p&gt;

            &lt;p&gt;Once the installation is finished, you have the option to close the installer and go back to live mode or reboot the system right away. A full log of the install is available as installation.log in the home directory of the Live user and this log is copied to /var/log/installation.log of the target system.&lt;/p&gt;

            &lt;p&gt;Hopefully this Guide has answered any questions you had about using this Installer. If anything is not clear enough then it would be really appreciated if you can get in touch to get the needed changes in.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mientras se instala el sistema, se muestra una presentación de diapositivas que le dará información básica. Sin embargo, puedes seguir lo que el instalador está haciendo en las diferentes etapas. Espere que esta parte demore entre 5-10 minutos, según la configuración y la velocidad de la unidad de destino. En alrededor del 30%, sec completará la copia de los archivos (que es lo que  llevará más tiempo), luego el instalador creará los usuarios, eliminará los paquetes específicos del sistema Live, instalará paquetes adicionales, eliminará cualquier paquete de idioma y controladores que no sean necesarios para su hardware específico , configurará ya sea GRUB para sistemas BIOS o Systemd-boot para UEFI y copiará las configuraciones de usuario específicas de KaOS.&lt;/p&gt;

            &lt;p&gt;Una vez que finaliza la instalación, tiene la opción de cerrar el instalador y volver al modo Live  o reiniciar el sistema de inmediato. Un registro completo de la instalación está disponible como installation.log en el directorio de inicio del usuario de Live y este registro se copia en /var/log/installation.log del sistema de destino.&lt;/p&gt;

            &lt;p&gt;Esperemos que esta guía haya respondido alguna pregunta que haya tenido sobre el uso de este instalador. Si algo no está lo suficientemente claro, sería realmente apreciado si puede ponerse en contacto para obtener los cambios necesarios.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Creación de usuario&lt;/h3&gt;

            &lt;p&gt;La página de creación de usuarios le da la opción de establecer un nombre de usuario diferente de su nombre real y establecer un nombre preferido para el sistema.&lt;/p&gt;

            &lt;p&gt;Por razones de seguridad, es recomendable utilizar una contraseña diferente para la cuenta del administrador (o root).&lt;/p&gt;

            &lt;p&gt;Se establece deshabilitado como predeterminado el inicio de sesión automático , agregue un marcador para habilitar el inicio de sesión sin contraseña.&lt;/p&gt;</translation>
    </message>
</context>
</TS>