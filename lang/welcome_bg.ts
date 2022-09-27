<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="bg">
<context>
    <name>Page1Form.ui</name>
    <message>
        <location filename="../Page1Form.ui.qml" line="45"/>
        <source>Install KaOS</source>
        <translation>Инсталиране на KaOS</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="94"/>
        <source>Guide</source>
        <translation>Ръководство</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="187"/>
        <source>Donate</source>
        <translation>Дарение</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="138"/>
        <source>Forum</source>
        <translation>Форум</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="163"/>
        <source>Documentation</source>
        <translation>Документация</translation>
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
        <translation>&lt;h3&gt;Относно KaOS&lt;/h3&gt;
                    &lt;p&gt;Идеята зад KaOS е да се създадете цялостно интегрирана прозрачна rolling дистрибуция на съвременна работна среда,изградена от нулата с много специфичен фокус. Фокусът е върху &lt;b&gt; една десктоп среда (KDE), едининструмент за разработка (Qt), една архитектура (x86_64) &lt;/b&gt;, плюс фокус върху оценка иизбиране на най-подходящите инструменти и приложения. Цялата работа е насоченакъм управлението на инсталационните пакети, а не разработването на нови инструменти или приложения.&lt;/p&gt;

                    &lt;p&gt;Преминаването от несвободни операционни системи към системи с отворен код (базирани на Linux, BSD, Solaris)  в повечето случаи е свързано с &lt;b&gt;желанието за  свобода и избор&lt;/b&gt;. Но не трябва ли всяка  подобна операционна система или дистрибуция да направи избор на това, което според нея е най-подходящо? KaOS вижда липса на фокус в това отношение. За да се създаде възможно най-високо качество на дистрибуцията, трябва да се съсредоточи върху това да се гарантира, че потребителят ще получи най-доброто възможно за избора, който е направил. Не е възможно просто да се пакетира всичко, за да работи перфектно на всяка десктоп среда или инструмент за разработка.&lt;/p&gt;
                    
                    &lt;p&gt;KaOS е направил избора да използва &lt;b&gt; Linux ядрото &lt;/b&gt; като база (въпреки че ядрото на Illumos е под постоянно тестване и има стремеж в бъдеще да се премине към него). След този избор най -добрият наличен мениджър на пакети, най -гъвкавият начин за изграждане на пакети и поддръжката на хранилището е &lt;b&gt; Pacman/Makepkg за rolling дистрибуция &lt;/b&gt; като KaOS. Що се отнася до средата на работния плот, никога няма да има промяна, независимо дали е на базата на Linux или Illumos. KDE ще е работната среда, QT инструментът за разрзботка. Предвид тези избори, през април 2013 г. е създаден проект за изграждането на пакетите за тази независима дистрибуция.&lt;/p&gt;

                    &lt;p&gt;KaOS дистрибуция , изградена от нулата, &lt;b&gt;всеки пакет във всяко хранилище се изгражда от и за KaOS&lt;/b&gt;. До юли 2013 г. първоначалната цел от около 1500 пакета беше постигната.&lt;/p&gt;

                    &lt;p&gt;Когато обмисляте сравнително ниския брой общи налични пакети, моля, имайте предвид едно нещо. Тъй като се фокусира само върху един инструмент за разработка, една работна среда, &lt;b&gt; няма нужда от прекомерно разделяне на пакети &lt;/b&gt;, за да могат всички да работят в различните видове среди. Докато на други места, много пакети са разделени на 3-4-5, понякога 15-20 пакета, Kaos опростява нещата колкото е възможно повече и избягва разделянето (примери са приложения като Xorg, около 50 пакета се комбинират само в 3, MESA се състои от 2, вместо 15).&lt;/p&gt;
                    
                    &lt;p&gt;Изборът на KDE/QT не означава, че KaOS губи от поглед важността на това да разполага с &lt;b&gt;най-добрия наличен инструмент за работа&lt;/b&gt;. В повечето случаи се смята, че KDE/Qt предоставя по-добър инструмент, но има няколко приложения, при които опцията GTK е единствената налична от този вид (Inkscape, Ardour, за да назовем само две), или в случай на уеббраузъри например, опциите Qt не са на висотата на своите GTK аналози. В тези случаи са налични GTK приложения, но броят им ще остане ограничен. Този ISO обаче е демонстрация на възможностите на Qt/KDE, така че &lt;b&gt;ISO е без GTK&lt;/b&gt;, което значи, че липсват Firefox, Chrome или LibreOffice, тъй като те зависят от GTK&lt;/p&gt;
                    
                    &lt;p&gt;Оформлението на хранилището е просто и се състои от три групи: Core (ядро), Main (основно) и Apps (приложения). Редовното цялостно обновяване на системата винаги ще ви осигури най-новите налични версии, &lt;b&gt;без необходимост от рестартиране на&lt;/b&gt; системата. &lt;i&gt;Core&lt;/i&gt; съдържа базовите пакети, необходими за стартиране на системата, комуникация с BIOS за свързване на повечето хардуерни устройства и задаване на основни опции на обвивката. Примерни пакети са ядрото, systemd, веригата от инструменти за изграждане и основните инструменти на командния ред. &lt;i&gt;Main&lt;/i&gt; хранилището се състои от всички необходими библиотеки, допълнителни драйвери и фърмуер, необходими за функционирането на работния плот и приложенията. &lt;i&gt;Apps&lt;/i&gt; се състои от всички пакети, прегледани и използвани от потребителите, включително KDE и всички необходими инструменти. &lt;i&gt; Build &lt;/i&gt; е мястото, където всички пакети започват, независимо дали става въпрос за възстановяване, актуализиране или ново допълнение, всичко отива за изграждане, след като премине през правилното тестване и преместване в съответното им хранилище.&lt;/p&gt;
                    
                    &lt;p&gt;&lt;b&gt;Диструбуцията е предназначена &lt;/b&gt; за тези, които са изпробвали много операционни системи/дистрибуции/десктоп среди и са установили, че предпочитат дистрибуция, която използва всичките си налични ресурси за работа върху една графична среда, за да направи най-доброто, което може да бъде направено. Потребители, които са решили, че най-доброто за тях е KDE и използваният от тях хардуер е от около 2005 г. или по-късен, така че няма проблеми с работата на 64-битов софтуер. Потребители, които не се страхуват да използват KDE/Qt версии на нужните им приложения, обичат да виждат най-доброто налично, избрано за техните нужди, дори ако това означава да се научат някои нови начини за работа с неизползвано преди това приложение. Съществува разбиране, че изборът на подобни приложения ще бъде ограничен до 5-6.&lt;/p&gt;
                    
                    &lt;p&gt;KDE е модерна среда за настолни компютри, която може да използва повечето от възможностите на всяка графична или звукова карта. Това не означава, че KDE не може да работи на хардуер от много нисък клас, но като цяло за такива системи има по-добри възможности (например OpenBox). Минималното необходимо &lt;b&gt;място на диска е 8 Gb, но 25 Gb&lt;/b&gt;е препоръчително. KaOS ще се инсталира с 1,5Gb налична RAM памет, въпреки че много по-доброто изживяване ще се получи с &lt;b&gt;2 Gb RAM&lt;/b&gt;. Тъй като са налични само приложения за  x86_64 архитектура, необходимо е &lt;b&gt;64 bit CPU&lt;/b&gt;. Както при всяка rolling дистрибуция, актуализациите са чести и могат да бъдат големи, така че се препоръчва разумно бърза интернет връзка (dial-up ще бъде много бавен) и налични месечни данни от над 2 Gb.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>guide</name>
    <message>
        <location filename="../guide/guide.qml" line="33"/>
        <source>Guide</source>
        <translation>Ръководство</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="81"/>
        <source>Intro</source>
        <translation>Въведение</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="84"/>
        <source>Keyboard</source>
        <translation>Клавиатура</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation>Разделяне на дисково пространство</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>Потребители</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>Обобщение</translation>
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
        <translation>&lt;h3&gt;Ръководство за инсталиране&lt;/h3&gt;

            &lt;p&gt;След като видяхте, как работи KaOS в live режим, вече сте готови за инсталиране. Преди да започнете е добре да разберете някои детайли.&lt;/p&gt;

            &lt;p&gt;Както при всякa rolling distribuciq, редовното актуализиране е задължително, ако изостанете твърде много и се опитате да актуализирате, вероятно ще възникнат проблеми. Препоръчително е да се актуализира ежеседмично, но не по-рядко от веднъж месечно.&lt;/br&gt;
            Ако това не е възможно за вас, може би е по-добре да помислите за използване на статична дистрибуция с шест или деветмесечен цикъл на издаване. Ако са необходими инструкции за актуализация на KaOS, &lt;a href=&apos;https://kaosx.us/news/&apos;&gt;kaosx.us/news/&lt;/a&gt;винаги ще ви предупреждава (това ше се покаже също и в Octopi, графичната програма за управление на инсталационни пакети). Добре е да се запознаете и с програмата за командния ред &lt;a href=&apos;https://kaosx.us/docs/pacman/&apos;&gt;pacman&lt;/a&gt;. Всяка дистрибуция понякога трябва да въвежда големи промени, а при rolling дистрибуциите трябва да се разчита на мениджъра на пакети, който да взаимодейства с потребителите, за да се гарантира, че тези актуализации се извършват правилно. Тъй като rolling дистрибуция по своята същност означава, че няма преинсталиране на определени интервали от време (статичната дистрибуция използва такова преинсталиране, за да въведе големи промени). Нито един графичен интерфейс за pacman не е толкова мощен, колкото самият pacman в тези ситуации.&lt;/p&gt;

            &lt;p&gt;Calamares, инсталаторът KaOS е прост и лесен за използване, но на този етап му липсва една функция. Все още не се поддържат RAID настройки на дискове.&lt;/p&gt;

            &lt;h3&gt;Стартиране на инсталатора&lt;/h3&gt;

            &lt;p&gt;Първата страница ви дава информация за инсталатора, опция за проверка на известните в момента проблеми и опция за избор на езика, който ще се използва при инсталацията.&lt;/p&gt;
            
            &lt;p&gt;Уверете се, че системата ви отговаря на минималните изисквания. Липсата на интернет връзка по време на инсталацията не е проблем и няма да попречи на инсталацията да бъде извършена.&lt;/p&gt;
            
            &lt;p&gt;Ако разполагате с по-малко от показаното дисково пространство или налична оперативна памет, инсталацията почти сигурно ще бъде неуспешна. Що се отнася до дисковото пространство, препоръчва се минимум 20 Gb.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="35"/>
        <source>Welcome</source>
        <translation>Добре дошли</translation>
    </message>
    <message>
        <location filename="../main.qml" line="44"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt;Благодарим ви, че използвате KaOS. Нуждаете се от файл с пароли или спъсък с пакети?&lt;br&gt;
                            Искате да научите повече за проекта? Посетете адреса по-долу.&lt;br&gt;&lt;br&gt;
                            Не се колебайте да споделите своето мнение за KaOS във форума.&lt;/div&gt;</translation>
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
        <translation>&lt;p&gt;Правилни пароли за използване в Live сесията:&lt;/p&gt;
                            &lt;p&gt;&lt;/p&gt;
                            &lt;table width=100% align=center bgcolor=#eaeaea&gt;
                                &lt;tr&gt;
                                    &lt;th&gt;Потребителско име:&lt;/th&gt;
                                    &lt;th&gt;Парола:&lt;/th&gt;
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
                            &lt;p&gt;Надяваме се, че работата с KaOS ще ви донесе удоволствие&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="108"/>
        <source>Main</source>
        <translation>Основна</translation>
    </message>
    <message>
        <location filename="../main.qml" line="111"/>
        <source>Passwords</source>
        <translation>Пароли</translation>
    </message>
    <message>
        <location filename="../main.qml" line="114"/>
        <source>About</source>
        <translation>Относно</translation>
    </message>
    <message>
        <location filename="../main.qml" line="117"/>
        <source>Package List</source>
        <translation>Списък на пакетите</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;strong&gt;Бележките към изданието&lt;/strong&gt; ви дават важна информация, какво е включено в това ISO&lt;/p&gt;
            &lt;p&gt;Ако сте избрали несвободни драйвери на Nvidia по време на стартирането на Live сесията, ще ви бъде представена страница за лицензa.  Уверете се, че сте прочели и приели лиценза, в противен случай инсталацията ви няма да включва несвободния драйвер, а ще се върне към Nouveau. Няма да видите тази страница, ако сте избрали да използвате свободни драйвери.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Следва &lt;strong&gt;Настройки на клавиатурата&lt;/strong&gt;. Можете да тествате подредбата, като въведете нещо в определената област.&lt;/p&gt;

            &lt;p&gt;Използвайте падащото меню, за да настроите точно желания модел клавиатура.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Разделяне на дисковото пространство&lt;/h3&gt;
            
            &lt;p&gt;Използването на правилната настройка на дяловете, най-подходящата файлова система и таблица на дяловете е най-голямото предизвикателство за всеки, който започва да инсталира операционна система.&lt;/p&gt;

            &lt;p&gt;&lt;font color=&apos;#ff0000&apos;&gt;Уверете се, че сте направили резервно копие на всички данни, които може да ви трябват от диска, преди да продължите.&lt;/font&gt;&lt;/p&gt;
            
            &lt;p&gt;Ако вашият целеви инсталационен носител (например твърд диск, SSD, USB флашка) не е форматиран и разделен или не е настроен по ваш вкус, можете да направите това от инсталатора или да го подготвите, преди да стартирате инсталатора.&lt;/p&gt;
            
            &lt;p&gt;При системите UEFI и BIOS, като поставите мишката върху съответните бутони за информация, ще получите повече информация за различните опции за всяка от тях.&lt;/p&gt;
            
            &lt;p&gt;Инсталаторът ви дава четири възможности за използване.&lt;/br&gt;
            Първата опция ще ви позволи да намалите съществуващ дял и да инсталирате KaOS заедно с всяка друга операционна система, която вече е налична в системата ви, като използвате файловата система XFS. Намаляването не е възможно за дялове, разположени в разширена таблица на дяловете или използващи файлова система XFS.&lt;/br&gt;
            Втората опция ви позволява да използвате съществуващ дял и ще замени всички файлове и/или операционна система на този дял с инсталация на KaOS, като използва файловата система XFS.&lt;/br&gt;
            Третият вариант ще използва целия диск и ще създаде един дял, в който всичко ще бъде инсталирано под root, всички други дялове ще бъдат премахнати, а използваната файлова система ще бъде XFS..&lt;/p&gt;
            
            &lt;p&gt;Четвъртата опция ви дава свободата да зададете всяка опция, всяка файлова система и таблица на дяловете. Ако искате напълно да почистите диска и да започнете отначало или ако този диск все още няма таблица на дяловете (нова медия, инсталация на virtualbox), трябва да вземете решение каква таблица на дяловете да използвате. По подразбиране в инсталатора е GPT, ms-dos е по-старата опция (все още по-често използвана за системи с BIOS). Предимството на GPT е, че може да използва неограничен брой първични дялове (ms-dos е ограничен до четири), необходим е за дискове с капацитет над 2 TB и е най-добър за системи UEFI. Ако решите да използвате GPT в система с BIOS, уверете се, че сте го настроили правилно, с необходимия 8 MB дял от неформатирано пространство в началото на диска и с присвоен флаг bios_grub на този неформатиран дял.  Тази конфигурация не може да има отделен дял /boot.&lt;/p&gt;
            
            &lt;p&gt;След като зададете таблицата с дялове, трябва да разделите устройството на дялове. Минимално необходим е поне един дял за / (root). Използването на отделен дял за /home има някои предимства, а за sleep/hibernate трябва да имате swap дял. Всякакви други дялове са строго личен избор, въпреки че създаването на /usr не се поддържа много добре от systemd (ще трябва да използвате допълнителни стъпки, за да работи правилно).&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="117"/>
        <source>&lt;p&gt;Option to install alongside an existing partition, UEFI system, / (root) and swap used. After selecting which partition you want to shrink to create room for KaOS, you can drag in that partition to set the desired size.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Възможност за инсталиране заедно със съществуващ дял, система UEFI, / (root) и swap. След като изберете кой дял искате да намалите, за да създадете място за KaOS, можете да плъзнете в този дял, за да зададете желания размер.  Тук е показана и опцията за криптиране на системата със зададена парола.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="144"/>
        <source>&lt;p&gt;Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the &lt;i&gt;after&lt;/i&gt; bar.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Възможност за замяна на съществуващ дял, система UEFI, / (root) и използван swap. След като изберете дяла, който искате да замените, визуализацията ще покаже графиката&lt;i&gt;след&lt;/i&gt;.  Тук се показва и опцията за криптиране на системата със зададена парола.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="171"/>
        <source>&lt;p&gt;Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.&lt;/p&gt;</source>
        <translation>Възможност за използване на целия диск, като всичко се инсталира под / (root), ако е в система с BIOS, или се създава дял FAT32 EFI, ако системата е с UEFI, като се задава и swap, ако размерът на диска позволява.  Това ще премахне всички данни и инсталирани системи от избрания диск</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="198"/>
        <source>&lt;p&gt;Using the fourth option to delete an existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight &lt;code&gt;Free Space&lt;/code&gt; and select &lt;code&gt;Create&lt;/code&gt;.  You then get a window with options to set partition type, file system and mountpoint. When using an UEFI install, it is a must to have a vfat (fat32) formatted /boot partition available. Best set the size to 512Mb and have it at the beginning of the partition-table. Once root is set, the Next button will become active again.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Използване на четвъртата опция за изтриване на съществуващo разпределение. Изберете &lt;code&gt;Нова таблица на дяловете&lt;/code&gt; за нов диск или за превключване между ms-dos и GPT.&lt;/br&gt;
            Селектирайте &lt;code&gt;Свободно пространство&lt;/code&gt; и изберете &lt;code&gt;Създаване&lt;/code&gt;.  След това получавате прозорец с опции за задаване на тип дял, файлова система и точка на монтиране. Когато използвате инсталиране на UEFI, задължително е да разполагате с VFAT (FAT32) форматиран дял, монтиран в /boot. Най-добре задайте размера на 512MB в началото на таблицата на дялoвете. След като root е зададен,  бутонът Напред ще стане отново активен.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="266"/>
        <source>&lt;p&gt;Using the fourth option to adjust existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight a desired partition, and select &lt;code&gt;Format&lt;/code&gt;. If this is going to be the root partition, it needs to be formatted. If old files are still present it will most likely result in a broken install. Next select a Mountpoint, root needs to be set, for UEFI install /boot needs to be set too. Repeat these steps for any other partition you want to use for this install. Once root is set, the Next button will become active again. Options are available to encrypt partitions, this includes swap.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Използване на четвъртата опция за нагласяне на съществуващo разпределение. Изберете &lt;code&gt;Нова таблица на дяловете&lt;/code&gt;за нов диск или за превключване между ms-dos и GPT.&lt;/br&gt;
            Селектирайте избрания дял и изберете &lt;code&gt;Форматиране&lt;/code&gt;. Ако това ще бъде основният дял, той трябва да бъде форматиран. Ако все още има стари файлове, това най-вероятно ще доведе до повредена инсталация. След това изберете точка за монтиране, трябва да се зададе root, а при UEFI инсталация трябва да се зададе и /boot. Повторете тези стъпки за всеки друг дял, който искате да използвате за тази инсталация. След като зададете root, бутонът Напред ще стане отново активен. Налични са опции за криптиране на дяловете, като това включва и swap.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="304"/>
        <source>&lt;p&gt;The image below shows the needed setup for an UEFI partition. If your install already has this set, &lt;font color='#ff0000'&gt;DO NOT&lt;/font&gt; format it. With UEFI any existing bootloader can be used, formatting will delete any currently present files to boot Windows or any other OS.&lt;/br&gt;
            For BIOS systems select where you want to install the bootloader, this can either be done in the Master Boot Record of the selected disc, or can be installed in the /boot partition of the system (/boot can reside under root for that).&lt;/br&gt;
            No changes will happen when you click the Next button, you will get a chance to review all your chosen settings and go back if things are not exactly as you want them.&lt;/p&gt;</source>
        <translation>&lt;p&gt;В изображението по-долу е показана необходимата настройка за дял на UEFI. Ако вашата инсталация вече има тази настройка, &lt;font color=&apos;#ff0000&apos;&gt;НЕ&lt;/font&gt; я форматирайте. С UEFI може да се използва вече съществуващи програми за начално зареждане. Форматирането ще изтрие всички налични в момента файлове за зареждане на Windows или друга операционна система.&lt;/br&gt;
            За BIOS системи изберете къде искате да инсталирате програмата за начално зареждане, като това може да стане или в Master Boot Record на избрания диск, или да бъде инсталиран в /boot дяла на системата (за целта /boot може да се намира под root).&lt;/br&gt;
            Когато щракнете върху бутона Напред, няма да настъпят промени, а ще имате възможност да прегледате всички избрани от вас настройки и да се върнете назад, ако нещата не са точно такива, каквито искате.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>summary</name>
    <message>
        <location filename="../guide/summary.qml" line="52"/>
        <source>&lt;h3&gt;Summary&lt;/h3&gt;

            &lt;p&gt;All looking as it should? Then clicking Next will give you one last warning before the actual formatting and installation will start.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Обобщение&lt;/h3&gt;

            &lt;p&gt;Всичко изглежда както трябва? Тогава щракнете върху &quot;Напред&quot; и ще получите последно предупреждение, преди да започне действителното форматиране и инсталиране.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/summary.qml" line="90"/>
        <source>&lt;p&gt;While the system is being installed, a slideshow is shown which will give you some basic info. You can follow what the installer is doing at different stages though. Expect this part to take between 5-10 minutes depending on your settings and speed of the target drive. At around 30%, the copying of the files is completed (which will take the longest), then the installer will create the users, remove Live system specific packages, install additional packages, remove any language packs &amp; drivers not needed for your specific hardware, setup either GRUB for BIOS systems or Systemd-boot for UEFI and copies the KaOS specific user settings.&lt;/p&gt;

            &lt;p&gt;Once the installation is finished, you have the option to close the installer and go back to live mode or reboot the system right away. A full log of the install is available as installation.log in the home directory of the Live user and this log is copied to /var/log/installation.log of the target system.&lt;/p&gt;

            &lt;p&gt;Hopefully this Guide has answered any questions you had about using this Installer. If anything is not clear enough then it would be really appreciated if you can get in touch to get the needed changes in.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Докато системата се инсталира, се показва слайдшоу, което ви дава основна информация. Можете обаче да проследите какво прави инсталаторът на различните етапи. Очаквайте тази част да отнеме между 5 и 10 минути в зависимост от настройките ви и скоростта на целевия диск. При около 30% от времето приключва копирането на файловете (което ще отнеме най-много време), след което инсталаторът ще създаде потребителите, ще премахне специфичните за системата Live пакети, ще инсталира допълнителни пакети, ще премахне всички езикови пакети и драйвери, които не са необходими за вашия специфичен хардуер, ще настрои GRUB за BIOS системи или Systemd-boot за UEFI и ще копира специфичните за KaOS потребителски настройки.&lt;/p&gt;

            &lt;p&gt;След като инсталацията приключи, имате възможност да затворите инсталатора и да се върнете в режим на работа или да рестартирате системата веднага. Пълен дневник на инсталацията е наличен като installation.log в домашната директория на потребителя в режим Live и този дневник се копира в /var/log/installation.log на целевата система.&lt;/p&gt;

            &lt;p&gt;Надяваме се, че това ръководство е отговорило на всички въпроси, които сте имали относно използването на този инсталатор. Ако нещо не е достатъчно ясно, ще ви бъдем много благодарни, ако се свържете с нас, за да направим необходимите промени..&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Създаване на потребител&lt;/h3&gt;

            &lt;p&gt;Страницата за създаване на потребител ви дава възможност да зададете потребителско име, различно от действителното ви име, и да зададете предпочитано име за системата.&lt;/p&gt;

            &lt;p&gt;От съображения за сигурност е препоръчително да използвате различна парола за администраторския (или root) акаунт.&lt;/p&gt;

            &lt;p&gt;По подразбиране е зададено, че автоматичното влизане е забранено. Маркирайте опцията, за да разрешите влизането без парола.&lt;/p&gt;</translation>
    </message>
</context>
</TS>