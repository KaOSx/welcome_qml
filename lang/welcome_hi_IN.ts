<?xml version="1.0" ?><!DOCTYPE TS><TS language="hi_IN" version="2.1">
<context>
    <name>Page1Form.ui</name>
    <message>
        <location filename="../Page1Form.ui.qml" line="44"/>
        <source>Install KaOS</source>
        <translation>KaOS इंस्टॉल करें</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="92"/>
        <source>Guide</source>
        <translation>सहायता गाइड</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="135"/>
        <source>Package List</source>
        <translation>पैकेज सूची</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="160"/>
        <source>Forum</source>
        <translation>फोरम</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="184"/>
        <source>Documentation</source>
        <translation>प्रलेखन</translation>
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
        <translation>&lt;h3&gt;KaOS के बारे में&lt;/h3&gt;
&lt;p&gt;KaOS के पीछे उद्देश्य है आज के आधुनिक डेस्कटॉप के लिए एक दृढ़ता से समन्वित व पारदर्शी ऑपरेटिंग सिस्टम, जो कि मूल रूप से ही एक विशिष्ट लक्ष्य के तहत हो। वह है &lt;b&gt;एक डेस्कटॉप वातावरण (KDE), एक टूलकिट (Qt) &amp; एक स्थापत्य (x86_64) &lt;/b&gt;पर ध्यान केंद्रित करना व इसके अलावा मूल्यांकन कर सबसे उपयुक्त साधन व अनुप्रयोगों को चुनना। समस्त प्रयास मौजूदा पैकेज पर केंद्रित है, न की नए अनुप्रयोग व साधन विकसित करने पर।&lt;/p&gt;

&lt;p&gt;अमूमन, अमुक्त ऑपरेटिंग सिस्टम छोड़ मुक्त स्रोत विकल्प (लिनक्स, BSD, Solaris आधारित) चुनना ही &lt;b&gt;स्वतंत्र इच्छा&lt;/b&gt; दिखाता है। पर क्या ऐसे ऑपरेटिंग सिस्टम या वितरणों को श्रेष्ट विकल्पों का चयन नहीं करना चाहिए? KaOS मानता है कि इस तरफ भी ध्यान दें की ज़रूरत है। संभवतः सबसे बेहतर वितरण को चाहिए कि वह उपयोक्ता को श्रेष्ठम उपलब्ध विकल्प मुहैया कराएं। यह कतई संभव नहीं है कि सर्वोच्च डेस्कटॉप अनुभव के लिए सभी मौजूद पैकेज उपलब्ध कराएं जाएँ।&lt;/p&gt;

&lt;p&gt;KaOS ने &lt;b&gt;लिनक्स कर्नेल&lt;/b&gt; को मूल चुना है (हालाँकि Illumos कर्नेल पर भी विचार किया जा रहा है व शायद ये भविष्य में हो भी जाएँ)। इसके बाद बारी आती है पैकेज व प्रबंधन हेतु सर्वोच्च पैकेज प्रबंधक की, &lt;b&gt;पैकमैन/makepkg जो KaOS जैसे हमेशा नवीनतम रहने वाले वितरण&lt;/b&gt; के लिए आवश्यक है। डेस्कटॉप वातावरण KDE व टूलकिट हमेशा Qt ही रहेगी चाहे सिस्टम लिनक्स आधारित हो या Illumos। इन सबको मद्देनज़र रखते हुए अप्रैल, 2013 में इस स्वतंत्र वितरण की नींव रखी गई।&lt;/p&gt;

&lt;p&gt;KaOS का निर्माण मूल से ही शुरू किया गया है, &lt;b&gt;प्रत्येक पैकेज KaOS के लिए ही निर्मित है&lt;/b&gt;। जुलाई, 2013 तक 1500 पैकेज का आरंभिक लक्ष्य हासिल किया गया।&lt;/p&gt;

&lt;p&gt;कुल उपलब्ध पैकेज की कम संख्या होने के पीछे भी एक कारण है। हमारा उद्देश्य एक टूलकिट, एक डेस्कटॉप वातावरण है, इसी कारण से सिर्फ पैकेज को विभिन्न वातावरणों में भी सुचारु रखने के लिए &lt;b&gt;उसे अत्यधिक विभाजित करने की कोई ज़रुरत नहीं है&lt;/b&gt;। दूसरे सिस्टम पर, बहुत से पैकेज 3-4-5 और कई बार तो पैकेज 15-20 में विभाजित रहते है, पर KaOS चीजों को सरल करता है व कम-से-कम विभाजन करता है ( उदाहरण के तौर पर xorg अनुप्रयोग के 50 पैकेज केवल 3 में सम्मिलित है, mesa में 15 के सिवाय 2 है)।&lt;/p&gt;

&lt;p&gt;KDE/Qt चुनने का मतलब यह बिलकुल नहीं है कि इस वजह से &lt;b&gt;कार्य के लिए उत्तम साधन&lt;/b&gt; को नज़रअंदाज़ किया जाएगा। ज़्यादातर कार्य के लिए KDE/QT बेहतर होते है, पर कभी-कभार सिर्फ GTK ही उपलब्ध होता है (जैसे Inkscape, Ardour आदि), वेब ब्राउज़र की ही बात करें तो GTK के विकल्पों के सामने KDE विकल्प कहीं नहीं टिकते। तो, GTK अनुप्रयोग भी मौजूद होंगे पर उनकी संख्या कम ही होंगी। पर यह ISO Qt/KDE की क्षमता को ही प्रदर्शित करेगा, इसलिए यह &lt;b&gt;ISO GTK मुक्त है&lt;/b&gt;, मतलब न फ़ायरफ़ॉक्स, न क्रोम व लिब्रे-ऑफिस क्योंकि ये सब GTK पर निर्भर है।&lt;/p&gt;

 &lt;p&gt;पैकेज संग्रह का नियोजन काफ़ी सरल है, इसमें तीन समूह है, मूल, मुख्य व अनुप्रयोग। नियमित अपडेट मात्र से ही आप सिस्टम को नवीनतम रख सकते हैं, &lt;b&gt;सिस्टम को पुनः इंस्टॉल करने की कोई आवश्यकता नहीं है&lt;/b&gt;। &lt;i&gt;मूल&lt;/i&gt; में सिस्टम बूट, BIOS द्वारा हार्डवेयर से संवाद करने व मूलभूत विकल्प हेतु पैकेज होते हैं। इसमें कर्नेल, toolchain, मूलभूत कमांड-लाइन साधन शामिल होते हैं। &lt;i&gt;मुख्य&lt;/i&gt; में डेस्कटॉप व अनुप्रयोग हेतु आवश्यक libraries, अतिरिक्त ड्राइवर होते हैं। &lt;i&gt;अनुप्रयोग&lt;/i&gt; में उपयोक्ता द्वारा उपयोग किए जाने वाले सभी पैकेज, जैसे व संबंधी साधन भी शामिल होते हैं। &lt;i&gt;निर्माण&lt;/i&gt; में पैकेज पुनः निर्मित करना, अपडेट करना व कुछ नया जोड़ने से लेकर पैकेज-संबंधी सब होता है, उचित परीक्षण के बाद पैकेज यहाँ से संग्रह में जाते हैं।&lt;/p&gt;

&lt;p&gt;&lt;b&gt;लक्षित उपयोक्ता&lt;/b&gt; वे हैं जो कई ऑपरेटिंग सिस्टम/वितरण/डेस्कटॉप वातावरण उपयोग कर चुके हैं और मानते हैं कि उन्हें एक ऐसा वितरण चाहिए जो एक डेस्कटॉप वातावरण पर पूर्णतया केंद्रित हो, और वह डेस्कटॉप वातावरण KDE हो। 2005 के बाद का कोई भी हार्डवेयर सेटअप, बिना किसी समस्या के 64-bit सॉफ्टवेयर चला सकता है। लक्षित उपयोक्ता अपने पसंदीदा अनुप्रयोगों के KDE/Qt संस्करण उपयोग करने के इच्छुक हो, भले ही उन्हें नए अनुप्रयोग द्वारा कार्य करने के नए तरीके सीखने पड़ें। लेकिन, इस तरह के केवल 5-6 अनुप्रयोग ही हैं।&lt;/p&gt;

&lt;p&gt;KDE एक आधुनिक डेस्कटॉप वातावरण है, जो हर तरह के ग्राफ़िक्स व ध्वनि कार्ड का प्रशस्त उपयोग करने में सक्षम है। इसका अर्थ यह नहीं है कि KDE सामान्य से नीचे के हार्डवेयर पर नहीं चल सकता, पर इस तरह के सिस्टम के लिए दूसरे बेहतर विकल्प (जैसे OpenBox) मौजूद है। आपकी &lt;b&gt; हार्ड डिस्क में कम-से-कम 8GB स्पेस होना चाहिए, पर 25GB है&lt;/b&gt; तो बेहतर रहेगा। इसी तरह KaOS 1.5GB RAM के साथ इंस्टॉल हो जाएगा, पर &lt;b&gt;2GB RAM&lt;/b&gt; के साथ आपका अनुभव ज़्यादा अच्छा होगा। क्योंकि सिर्फ x86_64 पैकेज ही मौजूद है, तो स्वाभाविक रूप से &lt;b&gt;CPU 64-bit समर्थित&lt;/b&gt; होना चाहिए। हर लगातार अपडेट होने वाले वितरण की ही भाँति, अपडेट काफी त्वरित व बड़ी हो सकती हैं, इसी कारणवश इंटरनेट कनेक्शन भी तेज होना चाहिए (धीमे होने के कारण डायल-अप कनेक्शन इसके लिए उपयुक्त नहीं है) व महीने में 2GB तक डाटा की खपत हो सकती है।&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>guide</name>
    <message>
        <location filename="../guide/guide.qml" line="33"/>
        <source>Guide</source>
        <translation>सहायता गाइड</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="81"/>
        <source>Intro</source>
        <translation>परिचय</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="84"/>
        <source>Keyboard</source>
        <translation>कुंजीपटल</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation>विभाजन</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>उपयोक्ता</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>सार</translation>
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
        <translation>&lt;h3&gt;इंस्टॉल हेतु निर्देश&lt;/h3&gt;

&lt;p&gt;हमें आशा है की अब KaOS का लाइव सत्र चलाने के बाद आप कुछ हद तक KaOS से अवगत हो चुके होंगें व इसे इंस्टॉल करना चाहेंगे। पर उससे पहले, आपको कुछ बातें जानना आवश्यक है।&lt;/p&gt;

&lt;p&gt;हर हमेशा अपडेट रहने वाले लिनक्स-वितरण की भाँति KaOS को भी नियमित रूप से अपडेट करना आवश्यक है, अन्यथा काफी समय बाद अपडेट करने से समस्याएँ हो सकती हैं। हम आपको हर सप्ताह अपडेट करने की सलाह देते हैं व महीने में एक बार तो अपडेट कर ही लें।&lt;/br&gt;
अगर यह संभव नहीं है, तो हम आपको कोई दूसरा लिनक्स-वितरण उपयोग करने की सलाह देंगें जिसका अपडेट चक्र 6 या 9 महीने का हो। अगर अपडेट सबंधी कोई विशेष सूचना जारी होती है, तो आप उसे इस वेबसाइट &lt;a href=&apos;http://kaosx.us/news/&apos;&gt;kaosx.us/news/ &lt;/a&gt;पर देख सकते हैं (ये सूचनाएँ आप Octopi पैकेज प्रबंधक में भी ख़बरें टैब में देख सकते हैं)। बेहतर होगा कि आप &lt;a href=&apos;https://kaosx.us/docs/pacman/&apos;&gt;पैकमैन पैकेज प्रबंधक&lt;/a&gt; में भी कुछ हद तक निपुणता हासिल कर लें। हमेशा अपडेट रहने वाले लिनक्स-वितरण में समय-समय पर बड़े बदलावों की आवश्यकता पड़ती है, ऐसे मौकों पर उपयोक्ता पैकेज प्रबंधक के सही उपयोग द्वारा ही अपडेट प्रक्रिया की सफलता सुनिश्चित कर सकता है। ये बदलाव आवश्यक होते हैं क्योंकि (स्थिर लिनक्स-वितरणों के तरह हम इन बदलावों को अगले संस्करण में लागू नहीं कर सकते व इसके अतिरिक्त) हम नहीं चाहते कि आपको अपना सिस्टम हर रिलीज़ के उपरांत पुनः इंस्टॉल करना पड़ें। इसलिए इन स्थितियों में पैकमैन से ज़्यादा विश्वसनीय पैकमैन का कोई GUI नहीं हो सकता।&lt;/p&gt;

&lt;p&gt;KaOS का इंस्टॉलर, Calamares उपयोग के लिहाज से एक काफी सरल इंस्टॉलर है, जो फिलहाल केवल एक सुविधा प्रदान नहीं करता है। वह है RAID डिस्क सेटअप करना।&lt;/p&gt;

&lt;h3&gt;इंस्टॉलर शुरू होते ही&lt;/h3&gt;

&lt;p&gt;प्रथम पृष्ट पर इंस्टॉलर संबंधी जानकारी व ज्ञात समस्याएँ प्रदर्शित करने के साथ-साथ आपको इंस्टॉल के दौरान उपयोग की जाने वाली भाषा चुनने का विकल्प भी देता है।&lt;/p&gt;

&lt;p&gt;कृपया, सुनिश्चित करें कि आपका सिस्टम इंस्टॉल की न्यूनतम आवश्यकताएँ पूरी करता हो। इंटरनेट इंस्टॉल हेतु आवश्यक नहीं है व किसी भी तरह इंस्टॉल को बाधित नहीं करेगा।&lt;/p&gt;

&lt;p&gt;परंतु डिस्क स्पेस या उपलब्ध RAM अगर ज़रूरत से कम है तो इंस्टॉल अवश्य ही असफल होगा। कम-से-कम 20 GB डिस्क स्पेस होना आवश्यक है।&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="33"/>
        <source>Welcome</source>
        <translation>स्वागतं </translation>
    </message>
    <message>
        <location filename="../main.qml" line="42"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt; KaOS चुनने के लिए धन्यवाद । क्या कूटशब्द फ़ाइल या पैकेज सूची चाहिए?&lt;br&gt;
KaOS के बारे में और जानने के लिए, नीचे दिए गए लिंक पर जाएँ।&lt;br&gt;&lt;br&gt;
फोरम में KaOS के बारे में निःसंकोच राय दें।&lt;/div&gt;</translation>
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
        <translation>&lt;p&gt;लाइव सत्र के लिए कूटशब्द :&lt;/p&gt;
&lt;p&gt;&lt;/p&gt;
&lt;table width=100% align=center bgcolor=#eaeaea&gt;
&lt;tr&gt;
&lt;th&gt;उपयोक्ता का नाम :&lt;/th&gt;
&lt;th&gt;कूटशब्द :&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align=center&gt;रुट&lt;/td&gt;
&lt;td align=center&gt;रुट&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align=center&gt;लाइव&lt;/td&gt;
&lt;td align=center&gt;लाइव&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;p&gt;आनंद लें&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="99"/>
        <source>Main</source>
        <translation>मुख्य</translation>
    </message>
    <message>
        <location filename="../main.qml" line="102"/>
        <source>Passwords</source>
        <translation>कूटशब्द</translation>
    </message>
    <message>
        <location filename="../main.qml" line="105"/>
        <source>About</source>
        <translation>बारे में</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;strong&gt;रिलीज़ नोट्स&lt;/strong&gt; का उद्देश्य आपको इस संस्करण के बारे में जानकारी देना होता है।&lt;/p&gt;
&lt;p&gt;अगर आपने लाइव सत्र के शुरुआत में अमुक्त Nvidia ड्राइवर उपयोग करना चयनित करा था, तो आपके समक्ष एक लाइसेंस पृष्ट प्रस्तुत किया जाएगा। इस लाइसेंस पढ़कर स्वीकारें अन्यथा अमुक्त ड्राइवर आपके इंस्टॉल में शामिल नहीं होगा व उसके स्थान पर Nouveau उपयोग होगा। अगर अपने मुक्त ड्राइवर चयनित करा था , तो यह पृष्ट आपको को प्रस्तुत नहीं किया जाएगा।&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation>&lt;p&gt;अगला है &lt;strong&gt;कुंजीपटल का सेटअप&lt;/strong&gt;। आप नीचे दी गई जगह पर टाइप कर कुंजीपटल का अभिन्यास जाँच सकते हैं।&lt;/p&gt;

&lt;p&gt;दी गई ड्रॉप-डाउन मेन्यू द्वारा अपने कुंजीपटल का मॉडल चुनें।&lt;/p&gt;</translation>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="144"/>
        <source>&lt;p&gt;Option to replace an existing partition, UEFI system, / (root) and swap used. Once you select the partition you want to replace, the preview will show the &lt;i&gt;after&lt;/i&gt; bar.  Also shown here is the option to encrypt the system with password set.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../guide/partition.qml" line="171"/>
        <source>&lt;p&gt;Option to use the entire drive, all installed under / (root) if on a BIOS system and FAT32 EFI partition also created if the system is UEFI, with swap assigned if disk size allows.  This will remove all data and installed systems from the selected drive.&lt;/p&gt;</source>
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
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
        <translation type="unfinished"/>
    </message>
</context>
</TS>