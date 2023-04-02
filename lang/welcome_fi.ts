<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="fi">
<context>
    <name>Page1Form.ui</name>
    <message>
        <location filename="../Page1Form.ui.qml" line="45"/>
        <source>Install KaOS</source>
        <translation>Asenna KaOS</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="94"/>
        <source>Guide</source>
        <translation>Opas</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="187"/>
        <source>Donate</source>
        <translation>Lahjoita</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="138"/>
        <source>Forum</source>
        <translation>Foorumi</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="163"/>
        <source>Documentation</source>
        <translation>Ohjeet</translation>
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
        <translation>&lt;h3&gt;KaOS hyvä tietää&lt;/h3&gt;
                    &lt;p&gt;KaOS:n ideana on luoda tiiviisti integroitu rullaava ja läpinäkyvä jakelu nykyaikaiselle tietokoneille. Keskittyä &lt;b&gt;(KDE)-ympäristöön, työkalualusta (Qt), arkkitehtuuri (x86_64)&lt;/b&gt;, sekä tähdätä parhaimpien työkalujen ja sovellusten arviointiin ja valintaan. Kaikki työ on suunnattu paketointiin, ei uusien työkalujen tai sovellusten kehittämiseen.&lt;/p&gt;

                    &lt;p&gt;Siirtyminen patentoiduista käyttöjärjestelmistä avoimen lähdekoodin vaihtoehtoihin (Linux, BSD ja Solaris) on &lt;b&gt;halu vapautta ja valinnanvapautta&lt;/b&gt; lähes kaikissa tapauksissa. Kuitenkin käyttöjärjestelmän tai jakelun tulisi tehdä joitakin valintoja siitä, mikä sen mielestä on paras? KaOS näkee keskittymisen tarpeen tässä asiassa. Laadukkaan jakelun luomiseksi on keskityttävä varmistamaan, että käyttäjä saa parhaan mahdollisen. Ei ole mahdollista pakata kaikkea toimimaan täydellisesti jokaiseen työpöytään tai työkalualustaan.&lt;/p&gt;
                    
                    &lt;p&gt;KaOS on valinnut pohjaksi&lt;b&gt;Linux Kernelin&lt;/b&gt; (vaikka Illumos Kernel on jatkuvassa arvioinnissa). Paras saatavilla oleva paketinhallinta, joustavin tapa tehdä paketointia ja arkiston ylläpitoa on&lt;b&gt;pacman/makepkg rullaavalle järjestelmälle&lt;/b&gt; kuten KaOS. Työpöytä ei tule muuttumaan, olipa se Linux- tai Illumos-pohjainen. KDE ja Qt Toolkit on meidän valinta. Näiden valintojen jälkeen aloitimme huhtikuussa 2013 tämän itsenäisen jakelun rakentamisen.&lt;/p&gt;

                    &lt;p&gt;KaOS on rakennettu tyhjästä alusta asti, &lt;b&gt;jokainen paketti jokaisessa arkistossa on KaOS:n rakentama ja sitä varten&lt;/b&gt;. Heinäkuussa 2013 saavutimme alkuperäisen tavoitteen, noin 1500 pakettia.&lt;/p&gt;

                    &lt;p&gt;Kun miettii saatavilla olevien pakettien suhteellisen pientä määrää, muista yksi asia. Koska keskitymme yhteen työkaluun ja yhteen työpöytään &lt;b&gt;paketteja ei tarvitse jakaa liikaa&lt;/b&gt; jotta kaikki toimii erilaisissa ympäristöissä. Muissa jakeluissa on paketteja jaettu 3-4-5, toisinaan 15-20 pakettiin. KaOS yksinkertaistaa asioita mahdollisimman paljon ja välttää jakamista (esim. xorg-sovellukset, noin 50 pakettia yhdistetään meillä vain kolmeen, mesa koostuu 2:sta 15:n sijaan).&lt;/p&gt;
                    
                    &lt;p&gt;KDE/QT-valinta ei tarkoita, että KaOS unohtaisi &lt;b&gt;parhaan työkalun tärkeyden&lt;/b&gt;. Usein uskotaan, että KDE/Qt tarjoaa ylivoimaisen työkalun, mutta olemassa on muutamia sovelluksia, joissa GTK-vaihtoehto on ainoa saatavilla oleva kuten (Inkscape ja Ardor). Selamessa esim. Qt-vaihtoehdot eivät pinoudu kuten GTK-vastineet. Näissä tapauksissa GTK-sovellukset ovat saatavilla, vaikka niiden määrä pysyy rajoitettuna. Tämä Qt/KDE ISO-levykuva on &lt;b&gt;gtk-vapaa&lt;/b&gt;, eli Firefox, Chrome tai LibreOffice ei asenneta mediasta suoraan, koska ne ovat riippuvaisia GTK:sta.&lt;/p&gt;
                    
                    &lt;p&gt;Arkisto koostuu kolmesta ryhmästä, Core, Main ja Apps. Täydellinen järjestelmäpäivitys tarjoaa aina uusimman saatavilla olevan järjestelmän ilman, että&lt;b&gt;järjestelmää tarvitsee asentaa uudelleen.&lt;/b&gt; &lt;i&gt;Core&lt;/i&gt; sisältää peruspaketit, joita järjestelmä tarvitsee käynnistymään, kommunikoimaan BIOSin kanssa, yhdistämään useimmat laitteet ja asettamaan perus shell-asetukset. Esimerkkinä kernel, systemd, toolchain ja lähtökohtaiset komentorivin työkalut.  &lt;i&gt;Main&lt;/i&gt; koostuu kaikista tarvittavista kirjastoista, ylimääräisistä ohjaimista ja laiteohjelmistosta, joita tarvitaan työpöydän ja sovellusten toimintaan. &lt;i&gt;Apps&lt;/i&gt; koostuu kaikista käyttäjille näkyvistä ja käyttämistä paketeista, mukaan lukien KDE ja kaikki tarvittavat työkalut.&lt;i&gt;Build&lt;/i&gt; on kaikkien pakettien alku, olipa kyseessä käännettävä, päivitys tai uusi lisäys, kaikki menee käännettäväksi. Kun ne ovat käyneet läpi asianmukaisen testauksen niin ne siirretään vastaavaan arkistoon.&lt;/p&gt;
                    
                    &lt;p&gt;&lt;b&gt;Kohderyhmänä&lt;/b&gt; ovat ne, jotka ovat kokeilleet monia jakeluita/työpöytiä ja ovat havainneet pitävänsä jakelusta, joka käyttää resursinssa tehokkaasti yhden työpöydän eteen tehdäkseen siitä parhaan mahdollisen. Käyttäjät, jotka tietävät, että heidän kokemuksensa mukaan heille parasta on KDE. Heidän käyttämät tietokoneet ovat noin 2005 tai uudempia, jolloin 64-bit ohjelmistojen käytössä ei ole ongelmia. Ihmiset joka käyttävät KDE/Qt-versioita tarvitsemistaan sovelluksissa, haluaa nähdä parhaat saatavilla olevat sovellukset, vaikka se tarkoittaa uusien tapojen oppimista entuudestaan tuntemattoman sovelluksen kanssa. Saatavuus samankaltaisiin sovelluksiin on rajoitettu 5-6.&lt;/p&gt;
                    
                    &lt;p&gt;KDE on nykyaikainen työpöytä, joka voi hyödyntää useimpia grafiikan tai äänikortin ominaisuuksia. Tämä ei tarkoita, etteikö KDE voi toimia erittäin halvoissa laitteissa, mutta yleensä tällaisille järjestelmille on tarjolla parempia ratkaisuja (esim. OpenBox). Pienin tarve &lt;b&gt;kiintolevytilaa on 8 Gt, mutta 25 Gt&lt;/b&gt; on silti minimisuositus. KaOS asentuu 1,5 Gb muistimäärällä, mutta parempi toiminta alkaen &lt;b&gt;2 Gb RAM&lt;/b&gt;. Koska vain x86_64-paketteja on saatavilla, tarvitaan &lt;b&gt;64 bit prosessori&lt;/b&gt;. Kaikissa rullaavissa jakelussa, päivitykset ovat usein suuria, joten kohtuullisen nopeaa internet-yhteyttä suositellan ja yli 2Gt (kuukausittaista) dataa.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>guide</name>
    <message>
        <location filename="../guide/guide.qml" line="33"/>
        <source>Guide</source>
        <translation>Opas</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="81"/>
        <source>Intro</source>
        <translation>Johdanto</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="84"/>
        <source>Keyboard</source>
        <translation>Näppäimistö</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation>Osiointi</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>Käyttäjät</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>Yhteenveto</translation>
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
        <translation>&lt;h3&gt;Asennusohje&lt;/h3&gt;

            &lt;p&gt;Nyt kun olet nähnyt, kuinka KaOS toimii live-tilassa, saatat olla valmis asentamaan. Ennen kuin aloitat on parasta ymmärtää muutama seikka.&lt;/p&gt;

            &lt;p&gt;Kuten minkä tahansa rullaava jakelu, säännöllinen päivittäminen on välttämätöntä, jos jätät päivitysvälin liian pitkäksi niin päivitys saattaa silloin aiheuttaa ongelmia. Suositus on päivittää viikoittain, vähintään kerran kuukaudessa.&lt;/br&gt;
            Jos tämä ei ole sinulle mahdollista, saattaa olla parempi harkita staattisen jakelun käyttöä kuuden tai yhdeksän kuukauden julkaisujaksolla. Jos tarvitset KaOS-päivitykseen ohjeita, &lt;a href=&apos;https://kaosx.us/news/&apos;&gt;kaosx.us/news/&lt;/a&gt; varoittaa sinua aina niistä (näkyy myös Octopi paketinhallinnassa). Hyvä tutustua komentoriviin &lt;a href=&apos;https://kaosx.us/docs/pacman/&apos;&gt;pacman pakettien hallinta&lt;/a&gt;. Jokaisen jakelun on toteutettava suuria muutoksia ajoittain, rullaavan jakelun on luotettava paketinhallintaan, joka on vuorovaikutuksessa käyttäjien kanssa varmistaakseen, että tällaiset päivitykset tehdään oikein. Koska rullaaminen tarkoittaa luonnostaan, ettei asennusta uudelleen suoriteta tietyin väliajoin (staattinen jakelu voi käyttää uudelleenasennusta suurten muutosten tekemiseen). Mikään pacman GUI ei ole yhtä tehokas kuin pacman itse näissä tilanteissa.&lt;/p&gt;

            &lt;p&gt;Calamares, KaOS:n asennusohjelma on suoraviivainen ja helppo, mutta siitä puuttuu tässä vaiheessa yksi ominaisuus. RAID-levyasetuksia ei vielä tueta.&lt;/p&gt;

            &lt;h3&gt;Aloita asennusohjelma&lt;/h3&gt;

            &lt;p&gt;Aluksi on tietoja asennusohjelmasta, mahdollisuus tarkistaa tällä hetkellä tunnetut ongelmat ja valita asennuksessa käytettävä kieli.&lt;/p&gt;
            
            &lt;p&gt;Varmista, että tietokoneesi täyttää vähimmäisvaatimukset. Internet-yhteyden puuttuminen asennuksen aikana ei ole ongelma, eikä estä asennusta.&lt;/p&gt;
            
            &lt;p&gt;Jos levytilaa tai käytettävissä olevaa RAM-muistia on vähemmän, asennus epäonnistuu lähes varmasti. Levytilaksi suositellaan vähintään 20 Gt.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="35"/>
        <source>Welcome</source>
        <translation>Tervetuloa</translation>
    </message>
    <message>
        <location filename="../main.qml" line="44"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt;Kiitos, että kokeilet KaOS:ää. Tarvitsetko salasanatiedoston tai pakettilistan?&lt;br&gt;
                            Haluatko tietää lisää projektista? Löydät linkit alta.&lt;br&gt;&lt;br&gt;
                            Älä epäröi kertoa mielipidettäsi KaOS foorumilla.&lt;/div&gt;</translation>
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
        <translation>&lt;p&gt;Oikeat salasanat käytettäväksi live-istunnossa:&lt;/p&gt;
                            &lt;p&gt;&lt;/p&gt;
                            &lt;table width=100% align=center bgcolor=#eaeaea&gt;
                                &lt;tr&gt;
                                    &lt;th&gt;Käyttäjänimi:&lt;/th&gt;
                                    &lt;th&gt;Salasana:&lt;/th&gt;
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
                            &lt;p&gt;Toivottavasti viihdyt&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="108"/>
        <source>Main</source>
        <translation>Pääsivu</translation>
    </message>
    <message>
        <location filename="../main.qml" line="111"/>
        <source>Passwords</source>
        <translation>Salasanat</translation>
    </message>
    <message>
        <location filename="../main.qml" line="114"/>
        <source>About</source>
        <translation>Tietoja</translation>
    </message>
    <message>
        <location filename="../main.qml" line="117"/>
        <source>Package List</source>
        <translation>Pakettilista</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation>&lt;p&gt; &lt;strong&gt;Julkaisutiedot&lt;/strong&gt; antavat sinulle tärkeitä tietoja tämän ISO:n sisällöstä&lt;/p&gt;
            &lt;p&gt;Jos valitsit Nvidia live-istunnon valmistajan ajureilla käynnistyksen aikana, sinulle näytetään Lisenssiehdot. Varmista, että luet ja hyväksyt lisenssin, muuten asennuksesi ei sisällä valmistajan ohjainta, vaan palautuu Nouveau ajuriin. Et näe tätä sivua, jos valitsit käyttäväsi ilmaisia ohjaimia.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Seuraavaksi &lt;strong&gt;näppäimistön asetukset&lt;/strong&gt;. Voit testata näppäimistöä kirjoittamalla jotain sille varattuun kenttään.&lt;/p&gt;

            &lt;p&gt;Käytä pudotusvalikkoa hienosäätääksesi haluamasi näppäimistömallin.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Osiointi&lt;/h3&gt;
            
            &lt;p&gt;Oikeiden osioasetusten, sopivimman tiedostojärjestelmän ja osiotaulukon käyttäminen on haastavin osa kaikille, jotka  aloittavat käyttöjärjestelmän asennusta.&lt;/p&gt;

            &lt;p&gt;&lt;font color=&apos;#ff0000&apos;&gt;Varmista, että olet varmuuskopioinut asemalta kaikki tarvitsemasi tiedot ennen kuin jatkat.&lt;/font&gt;&lt;/p&gt;
            
            &lt;p&gt;Jos asennuskohde (esim. hdd, ssd, usb-tikku) ei ole alustettu ja osioitu tai sitä ei ole tehty mielesi mukaan, voit tehdä sen asennusohjelmalla tai valmistella se etukäteen ennen asennusta.&lt;/p&gt;
            
            &lt;p&gt;Sekä UEFI- että BIOS-järjestelmissä hiiren osoitin vastaavien infopainikkeiden päällä antaa lisätietoja kunkin vaihtoehdon eri vaihtoehdoista.&lt;/p&gt;
            
            &lt;p&gt;Asennusohjelma antaa neljä vaihtoehtoa käytettäväksi.&lt;/br&gt;
            Ensimmäisen avulla voit pienentää olemassa olevaa osiota ja asentaa KaOS:n minkä tahansa muun käyttöjärjestelmän rinnalle käyttämällä XFS-tiedostojärjestelmää. Pienentäminen ei ole mahdollista laajennetussa osiotauluissa tai XFS-tiedostojärjestelmää käyttävissä osioissa.&lt;/br&gt;
            Toinen antaa sinun käyttää olemassa olevaa osiota ja korvata kaikki kyseisen osion tiedostot ja/tai KaOS-asennuksella XFS-tiedostojärjestelmää käyttäen.&lt;/br&gt;
            Kolmas käyttää kiintolevyn kokonaan ja luo yhden osion, jossa kaikki asennetaan rootin alle, muut osiot poistetaan ja käytetty tiedostojärjestelmä on XFS.&lt;/p&gt;
            
            &lt;p&gt;Neljäs antaa sinulle vapauden asettaa mitä tahansa,  tiedostojärjestelmän tai osiotaulun. Jos haluat puhdistaa aseman kokonaan ja aloittaa alusta tai jos asemalla ei ole vielä osiotaulua (uusi media, virtualbox-asennus), sinun on päätettävä, mitä osiotaulua käytetään. Asennusohjelman oletusarvo on GPT, ms-dos on vanhempi vaihtoehto (käytetään yhä yleisemmin BIOS-järjestelmissä). GPT:n voi käyttää rajattomasti virtuaalisia osioita (ms-dos on rajoitettu neljään), se tarvitaan yli 2 Tb:n asemille ja on paras UEFI-järjestelmille. Jos päätät käyttää GPT:tä BIOS-järjestelmässä, määritä se oikein siten, että levyn alussa on tarvittava 8 Mt:n osio alustamatonta tilaa ja kyseiselle alustamattomalle osiolle on määritetty bios_grub-lippu. Tällä asetuksella ei voi olla erillistä osiota /boot .&lt;/p&gt;
            
            &lt;p&gt;Kun osiotaulu on asetettu, sinun on osioitava asema, vähintään yksi osio / (root). Erillisen /home osion käyttämisessä on joitakin etuja ja saatat haluta swap osion lepotilaa/horrostilaa varten. Kaikki muut osiot ovat täysin henkilökohtaista valintaa, vaikka /usr määrittäminen ei ole hyvin tuettu systemd:ssä (sinun on käytettävä lisävaiheita, jotta se toimii oikein).&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="117"/>
        <source>&lt;p&gt;Option to install alongside an existing partition, UEFI system, / (root) and swap used. After selecting which partition you want to shrink to create room for KaOS, you can drag in that partition to set the desired size.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mahdollisuus asentaa olemassa olevan osion rinnalle on käytetty UEFI-järjestelmässä, / (root) ja swap. Kun olet valinnut, minkä osion ja haluat pienentää tehdäksesi tilaa KaOS:lle, voit asettaa koon vetämällä se kyseiseen osioon. Tässä näkvillä myös mahdollisuus salata järjestelmä salasanalla.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="144"/>
        <source>&lt;p&gt;Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the &lt;i&gt;after&lt;/i&gt; bar.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mahdollista korvata olemassa oleva osio, UEFI-järjestelmä, / (root) ja käytetty swap. Kun olet valinnut osion, jonka haluat korvata, esikatselu näyttää &lt;i&gt;siirtymispalkin&lt;/i&gt;.  Tässä näkyvillä myös mahdollisuus salata järjestelmä salasanalla.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="171"/>
        <source>&lt;p&gt;Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mahdollista käyttää koko levyasemaa, kaikki asennettuna kohtaan / (root), jos BIOS-järjestelmä niin FAT32 EFI -osio luodaan myös, jos järjestelmä on UEFI, swap on määritetään, jos levyn koko sallii. Tämä poistaa kaikki tiedot ja asennetut järjestelmät valitulta asemalta.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="198"/>
        <source>&lt;p&gt;Using the fourth option to delete an existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight &lt;code&gt;Free Space&lt;/code&gt; and select &lt;code&gt;Create&lt;/code&gt;.  You then get a window with options to set partition type, file system and mountpoint. When using an UEFI install, it is a must to have a vfat (fat32) formatted /boot partition available. Best set the size to 512Mb and have it at the beginning of the partition-table. Once root is set, the Next button will become active again.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Neljännen käyttäminen olemassa olevan asetuksen poistaminen. Valitse &lt;code&gt;Uusi osiotaulu&lt;/code&gt; uutta asemaa varten tai vaihtaaksesi ms-dos GPT:hen tai päinvastoin.3
            Korosta &lt;code&gt;Vapaa tila&lt;/code&gt; ja valitse &lt;code&gt;Luo&lt;/code&gt;.  Saat ikkunan, jossa voit määrittää osion tyypin, tiedostojärjestelmän ja liitoskohdan. UEFI-asennusta käytettäessä vfat (fat32) -formatoitu /boot osio on oltava käytettävissä. Aseta kooksi 512 Mt ja sijoita se osiotaulun alukuun. Kun root on asetettu, Seuraava-painike tulee aktiiviseksi.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="266"/>
        <source>&lt;p&gt;Using the fourth option to adjust existing layout. Select &lt;code&gt;New Partition Table&lt;/code&gt; for a new drive or to switch from ms-dos to GPT or vice versa.&lt;/br&gt;
            Highlight a desired partition, and select &lt;code&gt;Format&lt;/code&gt;. If this is going to be the root partition, it needs to be formatted. If old files are still present it will most likely result in a broken install. Next select a Mountpoint, root needs to be set, for UEFI install /boot needs to be set too. Repeat these steps for any other partition you want to use for this install. Once root is set, the Next button will become active again. Options are available to encrypt partitions, this includes swap.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Neljännen käyttäminen sallii nykyisen asettelun säätämisen. Valitse&lt;code&gt;Uusi osiotaulu&lt;/code&gt; uudelle asemalle tai vaihtaaksesi ms-dos GPT:hen tai päinvastoin.&lt;/br&gt;
            Korosta haluamasi osio ja valitse &lt;code&gt;Alusta&lt;/code&gt;. Jos tämä tulee olemaan root osio, se on alustettava. Jos vanhoja tiedostoja on edelleen olemassa, tämä todennäköisesti johtaa vialliseen asennukseen. Valitse seuraavaksi Liitospiste, root on valittava, UEFI-asennus /boot on myös valittava. Toista vaiheet kaikille muille osioille, joita haluat käyttää tässä asennuksessa. Kun root on asetettu, Seuraava-painike tulee aktiiviseksi. Osioiden salaaminen on mahdollista, mukaan lukien swap.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="304"/>
        <source>&lt;p&gt;The image below shows the needed setup for an UEFI partition. If your install already has this set, &lt;font color='#ff0000'&gt;DO NOT&lt;/font&gt; format it. With UEFI any existing bootloader can be used, formatting will delete any currently present files to boot Windows or any other OS.&lt;/br&gt;
            For BIOS systems select where you want to install the bootloader, this can either be done in the Master Boot Record of the selected disc, or can be installed in the /boot partition of the system (/boot can reside under root for that).&lt;/br&gt;
            No changes will happen when you click the Next button, you will get a chance to review all your chosen settings and go back if things are not exactly as you want them.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Kuva alla näyttää UEFI-osion tarvitsemat asetukset. Jos asennuksessasi on jo nämä, &lt;font color=&apos;#ff0000&apos;&gt;ÄLÄ&lt;/font&gt; alusta sitä. UEFI voi käyttää mitä tahansa olemassa olevaa käynnistyslatainta, alustus poistaa kaikki nykyiset tiedostot Windowsin tai minkä tahansa muun käyttöjärjestelmän käynnistämiseksi.&lt;/br&gt;
            BIOS-järjestelmissä valitse paikka, mihin haluat asentaa käynnistyslataimen. Voidaan tehdä joko valitun levyn Master Boot Record:ssa tai se voidaan asentaa järjestelmän /boot osioon (/boot voi sijaita rootin alla).&lt;/br&gt;
            Ei muutoksia, kun napsautat Seuraava-painiketta. Saat mahdollisuuden tarkistaa kaikki valitsemasi asetukset ja palata takaisin, jos ne eivät ole aivan kuten haluat.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>summary</name>
    <message>
        <location filename="../guide/summary.qml" line="52"/>
        <source>&lt;h3&gt;Summary&lt;/h3&gt;

            &lt;p&gt;All looking as it should? Then clicking Next will give you one last warning before the actual formatting and installation will start.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Yhteenveto&lt;/h3&gt;

            &lt;p&gt;Näyttäkö kaikki siltä kuin pitää? Napsauta Seuraava ja saat viimeisen varoituksen ennen varsinaisen alustuksen ja asennuksen alkamista.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/summary.qml" line="90"/>
        <source>&lt;p&gt;While the system is being installed, a slideshow is shown which will give you some basic info. You can follow what the installer is doing at different stages though. Expect this part to take between 5-10 minutes depending on your settings and speed of the target drive. At around 30%, the copying of the files is completed (which will take the longest), then the installer will create the users, remove Live system specific packages, install additional packages, remove any language packs &amp; drivers not needed for your specific hardware, setup either GRUB for BIOS systems or Systemd-boot for UEFI and copies the KaOS specific user settings.&lt;/p&gt;

            &lt;p&gt;Once the installation is finished, you have the option to close the installer and go back to live mode or reboot the system right away. A full log of the install is available as installation.log in the home directory of the Live user and this log is copied to /var/log/installation.log of the target system.&lt;/p&gt;

            &lt;p&gt;Hopefully this Guide has answered any questions you had about using this Installer. If anything is not clear enough then it would be really appreciated if you can get in touch to get the needed changes in.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Järjestelmän asennuksen aikana näkyy esitys, joka antaa sinulle perustietoa. Voit kuitenkin seurata, mitä asentaja tekee eri vaiheissa. Tämän osuus odotetaan kestävän 5-10 minuuttia asetuksistasi ja kohdeaseman nopeudesta riippuen. Noin 30 %:n kohdalla tiedostojen kopiointi on valmis (mikä kestää pisimpään), sitten asennusohjelma luo käyttäjät, poistaa Live-järjestelmäkohtaiset paketit, asentaa lisäpaketit, poistaa kaikki kielipaketit ja ajurit, joita ei tarvita. Määrittää GRUB BIOS-järjestelmille tai Systemd-boot UEFI:lle ja kopioi KaOS käyttäjän asetukset.&lt;/p&gt;

            &lt;p&gt;Kun asennus on valmis, voit sulkea asennusohjelman ja palata live-tilaan tai käynnistää järjestelmän välittömästi uudelleen. Täydellinen asennusloki on saatavilla install.log Live-käyttäjän kotihakemistossa ja tämä loki kopioidaan myös järjestelmän hakemistoon /var/log/installation.log&lt;/p&gt;

            &lt;p&gt;Toivottavasti tämä opas on vastannut kaikkiin tämän asennusohjelman käyttöä koskeviin kysymyksiin. Jos jokin ei ole tarpeeksi selkeää, olisin todella mukavaa, jos voit ottaa yhteyttä tarvittavien muutosten tekemiseksi.&lt;/p&gt;</translation>
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
        <translation>&lt;h3&gt;Käyttäjän luominen&lt;/h3&gt;

            &lt;p&gt;Käyttäjän luontisivulla voit määrittää käyttäjänimen, joka poikkeaa todellisesta nimestäsi ja määrittää ensisijaisen nimen järjestelmälle.&lt;/p&gt;

            &lt;p&gt;Turvallisuussyistä on suositeltavaa käyttää eri salasanaa järjestelmänvalvojan (root) tilille.&lt;/p&gt;

            &lt;p&gt;Automaattinen sisäänkirjautuminen oletuksena pois käytöstä, lisää merkki salasanattoman kirjautumisen kohtaan.&lt;/p&gt;</translation>
    </message>
</context>
</TS>