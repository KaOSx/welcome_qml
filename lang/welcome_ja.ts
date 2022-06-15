<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="ja">
<context>
    <name>Page1Form.ui</name>
    <message>
        <location filename="../Page1Form.ui.qml" line="45"/>
        <source>Install KaOS</source>
        <translation>KaOSをインストール</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="94"/>
        <source>Guide</source>
        <translation>ガイド</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="187"/>
        <source>Donate</source>
        <translation>寄付</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="138"/>
        <source>Forum</source>
        <translation>フォーラム</translation>
    </message>
    <message>
        <location filename="../Page1Form.ui.qml" line="163"/>
        <source>Documentation</source>
        <translation>ドキュメント</translation>
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
        <translation>&lt;h3&gt;KaOSについて&lt;/h3&gt;
&lt;p&gt;KaOSの背後にあるアイデアは、非常に特定の焦点でゼロから構築された、現代のデスクトップのための緊密に統合されたローリングと透明なディストリビューションを作成することです。&lt;b&gt;一つのDE（KDE）、一つのツールキット（Qt）、一つのアーキテクチャ（x86_64）&lt;/b&gt;に加え、最も適したツールやアプリケーションを評価し選択することに焦点を当てます。すべての作業はパッケージングに向けられ、新しいツールやアプリケーションを開発することはありません。&lt;/p&gt;

&lt;p&gt;プロプライエタリなオペレーティングシステムからオープンソースのオプション(Linuxベース、BSDベース、Solarisベース)への移行は、ほとんどすべてのケースにおいて、&lt;b&gt;自由と選択&lt;/b&gt;を求めることです。しかし、そのようなオペレーティングシステムやディストリビューションは、それが最も適していると信じるものをいくつか選択すべきではないでしょうか。KaOSはこの点に関して、焦点が定まっていないと考えています。可能な限り高品質のディストリビューションを作るには、ユーザーがどのような選択をしたにせよ、可能な限り最高のものを手に入れられるようにすることに焦点を合わせる必要があります。すべてのデスクトップ環境やツールキットで完璧に動作するように、すべてをパッケージ化することは、単に不可能なのです。&lt;/p&gt;

&lt;p&gt;KaOS は &lt;b&gt;Linux カーネル&lt;/b&gt;をベースにする選択をしました (ただし Illumos カーネルは常に評価中で、将来の切り替えは希望です)。その選択の結果、KaOS のようなローリングディストリビューションでは、パッケージマネージャ、パッケージ構築の最も柔軟な方法、リポジトリのメンテナンスは &lt;b&gt;pacman/makepkg&lt;/b&gt; が最も有効です。デスクトップ環境については、LinuxであろうとIllumosベースであろうと、KDEが選択され、Qtがツールキットとなることに変わりはないでしょう。これらの選択肢が揃ったので、2013年4月、この独立したディストリビューションのためのパッケージ構築が開始されました。&lt;/p&gt;

&lt;p&gt;KaOSはゼロから構築するディストリビューションで、&lt;b&gt;すべてのリポジトリにあるすべてのパッケージはKaOSによって、またKaOSのために構築されています。&lt;/b&gt;2013年7月までに、当初の目標であった約1500のパッケージに到達しました。&lt;/p&gt;

&lt;p&gt;利用可能なパッケージの総数が比較的少ないことを考慮した場合、1 つのことを心に留めておいてください。一つのツールキット、一つのDEに焦点が当てられているため、あらゆる種類の異なる環境ですべてを動作させようとする&lt;b&gt;パッケージの過度の分割は必要ありません。&lt;/b&gt;他のところでは、多くのパッケージが3-4-5、時には15-20に分割されていますが、KaOSでは可能な限り単純化して分割を避けています（例：xorg apps、約50のパッケージがたった3つにまとめられています、Mesaは15ではなく2つで構成されています）。&lt;/p&gt;

&lt;p&gt;KDE/QTを選択することは、KaOSが&lt;b&gt;その仕事に利用可能な最高のツール&lt;/b&gt;を持つことの重要性を失うことを意味するものではありません。ほとんどの場合、KDE/Qtは優れたツールを提供すると考えられていますが、GTKオプションがその種の唯一の利用可能なアプリケーションであったり (Inkscape、Ardourを挙げることができます)、例えばウェブブラウザの場合、QtオプションがGTK対応品に追いつかないということがいくつかあります。このような場合、GTKアプリケーションは利用可能ですが、その数は限られたものになるでしょう。&lt;b&gt;このISOはQt/KDEのパワーを紹介するものなので、GTKフリーです。&lt;/b&gt;つまり、Firefox、Chrome、LibreOfficeなどはGTKに依存しているため、使用できません。&lt;/p&gt;

&lt;p&gt;リポジトリのレイアウトはシンプルで、Core、Main、Appsの3つのグループから構成されています。定期的にシステムを完全にアップデートすることで、システムの&lt;b&gt;再インストールの必要なく&lt;/b&gt;、常に最新のものが利用できます。&lt;i&gt;Core&lt;/i&gt; には、システムが起動し、BIOS と通信してほとんどのハードウェアを接続し、基本的なシェルオプションを設定するために必要な基本パッケージがあります。パッケージの例としては、カーネル、systemd、ビルド用ツールチェーン、基本的なコマンドラインツールなどがあります。&lt;i&gt;Main&lt;/i&gt; リポジトリは、デスクトップとアプリケーションを機能させるために必要なライブラリ、追加ドライバ、ファームウェアのすべてで構成されています。&lt;i&gt;Apps&lt;/i&gt; は、KDE や必要なツールなど、ユーザが見て使うすべてのパッケージで構成されています。&lt;i&gt;Build&lt;/i&gt;は、すべてのパッケージが始まる場所です。リビルド、アップデート、新しい追加など、すべてがビルドされ、適切なテストを経て、それぞれのリポジトリに移動されます。&lt;/p&gt;

&lt;p&gt;&lt;b&gt;対象ユーザー&lt;/b&gt;は、多くのオペレーティングシステム/ディストリビューション/デスクトップ環境を試した結果、1つのDEに対して利用可能なリソースをすべて使って最高の状態で動作するディストリビューションを好み、探索の結果、自分にとって最高のものがKDEであることを知っている人たちです。彼らの使用するハードウェアは2005年以降のものなので、64ビットのソフトウェアを実行することに問題はありません。そして、ターゲットとなるユーザーは、必要なアプリケーションの KDE/Qt バージョンを使うことに躊躇せず、たとえそれが、以前使っていなかったアプリケーションで新しい作業方法を学ぶことになったとしても、彼らのニーズに応じて選択された最良のものを見るのが好きなのです。類似のアプリケーションの選択は、5-6に制限されることを理解しています。&lt;/p&gt;

&lt;p&gt;KDE は最新のデスクトップ環境であり、グラフィックカードやサウンドカードの機能のほとんどを利用することができます。これは、KDE が非常にローエンドなハードウェアで動作しないという意味ではありませんが、一般的に、そのようなシステムにはより良い選択肢があります (例えば、OpenBox など)。&lt;b&gt;ハードディスクの容量は最低でも 8GB ですが、25GB を推奨します。&lt;/b&gt;KaOS は 1.5GB の RAM があればインストールできますが、&lt;b&gt;2GB の RAM&lt;/b&gt; があればより良い体験ができます。x86_64パッケージのみが利用可能なので、&lt;b&gt;64ビット対応のCPU&lt;/b&gt;が必要です。他のローリングディストリビューションと同様、アップデートは頻繁に行われ、容量も大きくなる可能性があります。したがって、適度な速さのインターネット接続（ダイアルアップは非常に面倒になります）と、2GB以上の月間データを利用できることが推奨されます。
&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>guide</name>
    <message>
        <location filename="../guide/guide.qml" line="33"/>
        <source>Guide</source>
        <translation>ガイド</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="81"/>
        <source>Intro</source>
        <translation>紹介</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="84"/>
        <source>Keyboard</source>
        <translation>キーボード</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="87"/>
        <source>Partitioning</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="90"/>
        <source>Users</source>
        <translation>ユーザー</translation>
    </message>
    <message>
        <location filename="../guide/guide.qml" line="93"/>
        <source>Summary</source>
        <translation>概要</translation>
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
        <translation>&lt;h3&gt;インストールガイド&lt;h3&gt;

&lt;p&gt;さて、KaOSがライブモードでどのように動作するかの一部をご覧になったので、インストールする準備ができたかもしれませんね。そうする前に、いくつかのことを理解しておくとよいでしょう。&lt;/p&gt;

&lt;p&gt;他のローリングリリースと同様に、定期的なアップデートは必須です。あまりに遅れると、その後にアップデートしようとしても、問題が発生する可能性が高くなります。推奨は毎週、最低でも月に一度のアップデートです。&lt;/p&gt;

&lt;p&gt;もしそれがあなたにとって実現不可能なことであるなら、6ヶ月か9ヶ月のリリースサイクルで、静的ディストリビューションを使うことを考慮する方が良いかもしれません。KaOSのアップデートに何らかの指示が必要な場合、&lt;a href=&apos;https://kaosx.us/news/&apos;&gt;kaosx.us/news/&lt;/a&gt;が常に警告を発します（パッケージマネージャのOctopiにも表示されます）。コマンドラインの&lt;a href=&apos;https://kaosx.us/docs/pacman/&apos;&gt;パッケージマネージャである pacman&lt;/a&gt; に慣れるのが一番です。どんなディストリビューションでも時には大きな変更をしなければなりません。ローリングディストリビューションはパッケージマネージャに依存し、ユーザーと対話し、アップデートが正しく行われることを確認しなければなりません。ローリングは本質的に一定の間隔で再インストールしないことを意味します（静的なディストリビューションは大きな変更を導入するために再インストールを必要とすることがあります）。pacman の GUI はそのような状況では pacman 自身ほど強力ではありません。&lt;/p&gt;

&lt;p&gt;Calamares、KaOSのインストーラーは分かりやすく使いやすいのですが、現段階では1つ機能が不足しています。RAIDディスクのセットアップがまだサポートされていないのです。&lt;/p&gt;

&lt;h3&gt;インストーラーを起動する&lt;/h3&gt;

&lt;p&gt;最初のページでは、インストーラの情報、現在知られている問題を確認するオプション、インストールに使用する言語を選択するオプションが表示されます。&lt;/p&gt;

&lt;p&gt;お使いのシステムが最小限の要件を満たしていることを確認してください。インストール中にインターネットに接続できなくても、インストールが中断されることはありません。&lt;/p&gt;

&lt;p&gt;ディスクの空き容量やRAMの空き容量が表示値より少ないと、ほぼ間違いなくインストールに失敗します。ディスク容量については、最低20GBを推奨します。&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="35"/>
        <source>Welcome</source>
        <translation>ようこそ</translation>
    </message>
    <message>
        <location filename="../main.qml" line="44"/>
        <source>&lt;div&gt;Thanks for trying KaOS. In need of the password file or package list?&lt;br&gt;
                            Want to learn more about the project? Please find the links below.&lt;br&gt;&lt;br&gt;
                            Don&apos;t hesitate to give your opinion about KaOS in the Forum.&lt;/div&gt;</source>
        <translation>&lt;div&gt;KaOSをお試しいただきありがとうございます。パスワードファイルやパッケージリストが必要ですか？&lt;br&gt;
このプロジェクトについてもっと知りたいですか？以下のリンク先をご覧ください。&lt;br&gt;&lt;br&gt;

フォーラムでは、KaOSに関するご意見を遠慮なくお寄せください。&lt;/div&gt;</translation>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../main.qml" line="108"/>
        <source>Main</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../main.qml" line="111"/>
        <source>Passwords</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../main.qml" line="114"/>
        <source>About</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../main.qml" line="117"/>
        <source>Package List</source>
        <translation>パッケージリスト</translation>
    </message>
</context>
<context>
    <name>notes</name>
    <message>
        <location filename="../guide/notes.qml" line="52"/>
        <source>&lt;p&gt;The &lt;strong&gt;Release Notes&lt;/strong&gt; give you important information of what is included in this ISO&lt;/p&gt;
            &lt;p&gt;If you selected non-free Nvidia during the start-up of the Live session, you will be presented with a License page.  Make sure to read and accept the license, otherwise your install will not include the non-free driver, and will fallback to Nouveau instead. You won&apos;t see this page if you selected to use the free drivers.&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../guide/notes.qml" line="90"/>
        <source>&lt;p&gt;Next is the &lt;strong&gt;Keyboard Setup&lt;/strong&gt;. You can test the layout by typing something in the designated area.&lt;/p&gt;

            &lt;p&gt;Use the drop-down menu to fine tune to your exact desired keyboard model.&lt;/p&gt;</source>
        <translation type="unfinished"/>
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