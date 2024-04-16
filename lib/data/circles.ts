export type Place =
  | "H4"
  | "H3"
  | "H2"
  | "M4"
  | "M3"
  | "M2"
  | "East1"
  | "EastB1"
  | "Kensyu"
  | "G1"
  | "NewGarden"
  | "Kyoei"
  | "Gym"
  | "Music";

type PlaceString = {
  [key in Place]: string;
};

export const placeString: PlaceString = {
  H4: "高校棟4F",
  H3: "高校棟3F",
  H2: "高校棟2F",
  M4: "中学棟4F",
  M3: "中学棟3F",
  M2: "中学棟2F",
  East1: "東館1F",
  EastB1: "東館B1F",
  Kyoei: "共栄館",
  Gym: "体育館",
  Kensyu: "研修館",
  G1: "第一グラウンド",
  Music: "音楽室",
  NewGarden: "新中庭",
};

type Circle = {
  id: string;
  name: string;
  description: string;
  place: Place;
  mapId: string;
  articles: string[];
  hasLogo?: boolean;
};

export const data: Circle[] = [
  {
    id: "superball",
    name: "スーパーボール",
    description:
      "毎年大人気のスーパーボールすくいに加え、今年はフリースローチャレンジも開催します！小さなお子さんから大人の方まで大歓迎！バスケ部員たちと景品をかけて勝負する機会があるかも！？是非第1グラウンドまで足を運んでください！",
    place: "G1",
    mapId: "ground1",
    articles: [],
  },
  {
    id: "shooting",
    name: "射的",
    description:
      "灘校バレーボール部です！一昨年から始まった射的をグレードアップして今年も第1グラウンドで開催します！\n景品には売店でしか買えない灘校グッズなどを用意していますので、小さなお子様から大きなお子様まで奮ってご参加ください！",
    place: "G1",
    mapId: "ground1",
    articles: [],
  },
  {
    id: "baseball",
    name: "野球",
    description: `今年も第1グラウンドで毎年恒例のストラックアウトとスピードガンを開催します！いつもはできないストラックアウトとスピードガンをこの機会に一度やってみませんか？何度もチャレンジできます。皆さんの参加を待っています。景品もあります。`,
    place: "G1",
    articles: [],
    mapId: "ground1",
    hasLogo: true,
  },
  {
    id: "yoyo",
    name: "ヨーヨー",
    description:
      "今年もやります、ヨーヨー釣りです。例年通り柔道部員とソフトテニス部員の合同で行います！ヨーヨーの取れた数に応じてもらえる個数も決まります。いくつ取れるか、限界に挑戦してみませんか？ぜひ第1グラウンドまでお越しください！",
    place: "G1",
    articles: [],
    mapId: "ground1",
  },
  {
    id: "kicktarget",
    name: "キックターゲット",
    description:
      "昨年に続き老若男女問わず楽しめるキックターゲットが爆誕!自分でボールを選び、決まった距離から的を狙ってシュート!あなたは何枚撃ち抜くことができるのか?!チャレンジャーは是非お越しください!",
    place: "G1",
    articles: [],
    mapId: "ground1",
  },
  {
    id: "minitrain",
    name: "ミニ電車",
    description:
      "2019年以来5年ぶりに復活したミニ電車は、人が跨って実際に乗れる鉄道模型で、小さなお子さんでも楽しめるのが特徴です。一周何と150メートルもあり、ミニ電車ならではの灘の新たな景色も見られるかもしれません!皆さん是非お越しください。",
    place: "G1",
    articles: [],
    mapId: "ground1",
  },
  {
    id: "benada",
    name: "BE NADA",
    description: "BE NADA",
    place: "G1",
    mapId: "ground1",
    articles: [],
  },
  {
    id: "classic",
    name: "クラシック研究部",
    description:
      "こんにちは!クラシック研究部は今年も恒例のクラシックコンサートを開催します。ピアノやヴァイオリンのソロ演奏はもちろん、連弾や弦楽器のアンサンブルも充実しております。個性豊かな部員たちの演奏で一息つきたい方は、ぜひ音楽室へ!",
    place: "Music",
    mapId: "music",
    articles: [],
  },
  {
    id: "secondhandbooks",
    name: "古本屋",
    description:
      "毎年恒例の古本屋をやっている剣道部です。今年も新中庭で開催しています。そしてなんと今年は剣道場が使用可能になりました!ということでコロナ禍以来の剣道体験を剣道場にて行います!部員一同、二つの会場でご来場お待ちしております。",
    place: "NewGarden",
    mapId: "ground1",
    articles: [],
  },
  {
    id: "railway",
    name: "鉄道研究部",
    description:
      "毎年大好評のリアルに作りこまれたジオラマ、LED方向幕、車掌もできるようになった運転シミュレーターに加え、今年は5年ぶりに大阪駅のダイヤ運転も復活!「2日限りの鉄道博物館」鉄道研究部の展示をぜひご覧ください。",
    place: "East1",
    mapId: "meeting",
    articles: [],
  },
  {
    id: "cafe",
    name: "食堂",
    description:
      "ラーメン、カレーなど食事を販売しております。しっかり食べたいという方は、体育館よりこちらがオススメです。購入方法:食堂で食券をお買い求めください。( 金券は使用出来ません )",
    place: "EastB1",
    mapId: "cafe",
    articles: [],
  },
  {
    id: "broadcasting",
    name: "放送室",
    description: "",
    place: "NewGarden",
    mapId: "broadcasting",
    articles: [],
  },
  {
    id: "juice",
    name: "ジュース",
    description: "",
    place: "NewGarden",
    mapId: "broadcasting_juice",
    articles: [],
  },
  {
    id: "nurse",
    name: "保健室",
    description: "",
    place: "NewGarden",
    mapId: "nurse",
    articles: [],
  },
  {
    id: "information2",
    name: "インフォーメーション",
    description: "",
    place: "NewGarden",
    mapId: "newgarden_info",
    articles: [],
  },
  {
    id: "souvenir",
    name: "お土産",
    description: "",
    place: "Kyoei",
    mapId: "souvenir",
    articles: [],
  },
  {
    id: "goods",
    name: "灘校グッズ",
    description: "",
    place: "Gym",
    mapId: "gym",
    articles: [],
  },
  {
    id: "snack",
    name: "軽食売り場",
    description:
      "お祭りが感じられるスナック系を販売しております。少しお腹がすいたという方にオススメです。在校生に大人気の灘チキも販売しているかも?!\n購入方法:現金",
    place: "Gym",
    mapId: "gym",
    articles: [],
  },
  {
    id: "tabletennis",
    name: "卓球部",
    description:
      "校舎に入って右手の扉から行くことができる研修館にて、卓球台の貸し出しとミニ縁日を行っています。ミニ縁日ではピンポン玉を使った、景品付きのピンボールが遊べます。利用状況によっては事前予約が必要な場合がありますのでご注意ください。",
    place: "Kensyu",
    mapId: "training",
    articles: [],
  },
  {
    id: "shorinji",
    name: "少林寺拳法同好会",
    description:
      "少林寺拳法同好会は、研修館3階にて、ダイナミックな演舞を披露します。突き、蹴りから投げ、武器まで、幅広い技術を駆使した迫力ある演舞をお楽しみください。力強い動きと美しい形を通して、少林寺拳法の魅力をご堪能いただけます。",
    place: "Kensyu",
    mapId: "training",
    articles: [],
  },
  {
    id: "classicculture",
    name: "古典文化同好会",
    description:
      "かるた班:百人一首の札を使ったミニゲームをしたり、競技かるたを実際に体験したりすることができます!ミニゲームでは豪華景品がもらえるかも...?\n能楽班:能の仕舞をいくつか上演します!\n研修館2階でお待ちしています!",
    place: "Kensyu",
    mapId: "training",
    articles: [],
  },
  {
    id: "lecture_h",
    name: "講義教室",
    description: "",
    place: "H2",
    mapId: "lecture_h",
    articles: [],
  },
  {
    id: "npca",
    name: "パソコン研究部",
    description:
      "パソコンに関するクイズや、VR体験など、色んな展示に加えて、部員が作ったゲームには、リズムゲームや、円周率をモチーフにしたシミュレーションゲームもあります。隣の教室では、パソコンを解体したり、ハッキングの実演もしたりします!是非来てね!!",
    place: "H2",
    mapId: "h3-2",
    articles: [],
  },
  {
    id: "lego",
    name: "レゴ同好会",
    description:
      "今年制作したばかりの大型作品から、様々なメディアで取り上げられた過去作品、小さくともアイデアに富んだ個人作品まで様々なレゴが皆さんを迎えます。ここに来ずして灘の文化祭は語れません!ぜひお越しください!",
    place: "H2",
    mapId: "h3-34",
    articles: [],
  },
  {
    id: "igo",
    name: "囲碁部",
    description:
      "yo yo yo!\nいよいよきたぜ文化祭!\n燃やせよお前の着火剤!\n囲碁部の部員はあったかい、奴らばっかり、だから後悔、は全くさせない!\n全国屈指の部員との対局!詰碁は豪華な景品付きだ!\n時間があるならぜひ来てみてよ!M1-1、囲碁部に!",
    place: "M2",
    mapId: "m1-1",
    articles: [],
  },
  {
    id: "hiking",
    name: "ワンダーフォーゲル部",
    description:
      "ワンダーフォーゲル部（山岳部）です。毎年行っている、合宿先での写真や山のジオラマ展示を主にしています。今年はさらに山の360°写真をVRで見れる展示もあります。他にも、景品がもらえるゲームや問題を用意していますので、ぜひ来てください。",
    place: "M2",
    mapId: "m1-2",
    articles: [],
  },
  {
    id: "othello",
    name: "オセロサークル",
    description:
      "オセロサークルブースでは、灘校生とオセロで対局することができます!!!!小中学生を中心に毎年大人気で、初級中級上級から好きなレベルを選んでいただけます。景品ももちろんアリです。\n\n是非お越し下さい!!!",
    place: "M2",
    mapId: "m1-3",
    articles: [],
  },
  {
    id: "studentcouncil",
    name: "生徒会の間",
    description:
      "灘校生徒会を大解剖!!数十年前の灘校新聞から、文化祭用特別号まで。生徒会機関誌「Agora」とは?組織図の展示も!\np.s. 灘校料理愛好会ともコラボして、灘校生秘伝メニューも紹介しています!(*^-^)",
    place: "M2",
    mapId: "m1-4",
    articles: [],
  },
  {
    id: "tohoku",
    name: "東北企画",
    description:
      "灘校生が震災の被害を受けた東北現地に直接足を運び、そこで聞いたこと、学んだこと、感じたことなどをまとめたポスターや写真の展示をしたり、文化祭当日に直接お話したりします!地震についてより深く知り、共に地震を乗り越えていきましょう!",
    place: "M2",
    mapId: "m1-4",
    articles: [],
  },
  {
    id: "information1",
    name: "インフォーメーション",
    description: "",
    place: "M2",
    mapId: "m1open",
    articles: [],
  },
  {
    id: "viewing",
    name: "ビューイングルーム",
    description:
      "第一社会科教室にて、視聴覚ステージや中庭ステージなどの人気ステージのビューイングを行なっています。",
    place: "M2",
    mapId: "socialstudies1",
    articles: [],
  },
  {
    id: "literaryart",
    name: "文藝同好会",
    description:
      "We are 文藝同好会!我々は小説、俳句、短歌を中心に活動しています!文化祭では参加型の短歌イベントや、実はなかなか難しい灘中模試や灘的漢検も用意しています!来ると灘の文藝のイメージが変わるかも?気になったなら文藝へ Let's GO!",
    place: "M2",
    mapId: "seminar",
    articles: [],
  },
  {
    id: "library",
    name: "図書委員会",
    description:
      "図書委員会では、書評紙「読書尚友」の展示、会誌の配布等を行っています。さらに、今年も大人気企画「図書館ツアー」を開催します!例年とは異なり、灘校図書館の一部にブースを設置して臨む文化祭。一層パワーアップした「図書委員会」がお待ちしています!",
    place: "M2",
    mapId: "library",
    articles: [],
  },
  {
    id: "kingcrab",
    name: "タラバガニ",
    description:
      "多彩な個性を持つ灘校生は、部活や授業の外でも様々な事を考え、日々悩んでいます。『タラバガニ』は、それらがそのまま消えてしまわないよう、形として残すためのサークルです。雑誌の配布や展示・参加企画を行うので、ぜひ来てください。",
    place: "M2",
    mapId: "kingcrab",
    articles: [],
  },
  {
    id: "syodo",
    name: "書道同好会",
    description:
      "今年も中学棟二階書道教室にて灘校書展を開催いたします!総勢十一名の書道同好会員の魂のこもった作品は、きっとアナタのこころに静かな安らぎをもたらすことでしょう。白と黒の芸術の世界に是非足をお運びください!",
    place: "M2",
    mapId: "syodo",
    articles: [],
  },
  {
    id: "photo",
    name: "写真同好会",
    description:
      "皆さん、一度は灘校の生徒になりたいと思ったことはありませんか?そんな方におすすめの企画ありますよ!写真同好会では来校証という、生徒証と全く同じ形のものを作成、配布しております!ぜひ起こしください!部員の撮った写真も展示しておりますので是非!",
    place: "H3",
    mapId: "h2-4",
    articles: [],
  },
  {
    id: "nikoyaka",
    name: "にこやか自転車整理軍",
    description:
      "我々にこやか自転車整理軍は、我々自身を含めた人々の心の中にある放置自転車を整理回収し、それらを、分解し、融かし、鋳型に入れ、愛すべき無用の長距離砲として再生産する。すなわちくそなぞなぞの制作・展示である。\nガラガラな銭湯な生き物、なーんだ?",
    place: "H3",
    mapId: "h2-3",
    articles: [],
  },
  {
    id: "origami",
    name: "折り紙サークル",
    description:
      "灘校ありそうで無かったクラブ第一位、今年新設の折り紙サークルです!!部員たちの丹精込めて折った折り紙作品の展示や部誌の配布をしています。なかには人間サイズの大型作品も!是非お立ち寄りください。お待ちしてます!",
    place: "H3",
    mapId: "h2-3",
    articles: [],
  },
  {
    id: "car",
    name: "車サークル",
    description:
      "今年初めて出展する車サークルです。\nトミカを棒で釣って点数を競うトミカ釣りや子供から大人まで楽しめる車クイズ、ペーパークラフトでミニカーを作る企画をやっています。ぜひ高校棟3階へお越しください。",
    place: "H3",
    mapId: "h2-3",
    articles: [],
  },
  {
    id: "escape",
    name: "文化祭からの脱出",
    description:
      "灘校内を探索し、隠された宝を発見せよ!\n今年の文化祭からの脱出サークルは新形式。去年までの教室内での謎解きから校内全体に謎が広がる。校内を自由に駆け巡り隠された謎を解き明かせ!\n※参加される際は事前に筆記用具をご用意ください。",
    place: "H3",
    mapId: "h2-2",
    articles: [],
  },
  {
    id: "pokemon",
    name: "ポケモンサークル",
    description:
      "ポケモンサークルでは、ポケモンに関することを部員が自由に書いた部誌の配布や、初級、中級、上級のポケモンのクイズとその採点をしています。ポケモンが好きでゲームをしたり、アニメを見たりしている方はお気軽にどうぞ。",
    place: "H3",
    mapId: "h2-2",
    articles: [],
  },
  {
    id: "shogi",
    name: "将棋部",
    description:
      "H2-1では全国大会優勝経験者を含む将棋部員と対局でき、勝つと景品が貰えます。今年は初の試みとして、共通テストの将棋版を用意しております。また、懸賞詰将棋・ポスターの展示もしており、様々な形で将棋を堪能して頂けます。 是非お越しください!",
    place: "H3",
    mapId: "h2-1",
    articles: [],
  },
  {
    id: "chemistry",
    name: "化学研究部",
    description:
      "毎年好評の常設展示と化学マジックを行っています。今年の化学マジックは去年より演目が増え、豪華さもパワーアップしました!化研クイズでは豪華景品もあります。ぜひ化学教室にお越しください!",
    place: "M3",
    mapId: "chemistry",
    articles: [],
  },
  {
    id: "geography",
    name: "地理歴史研究部",
    description:
      "地歴部は文化祭で、以下の3つの活動をしています。\n①部誌：各部員が研究したことをまとめ、部誌として発表します。\n②文化祭模試・クイズ：地歴部員自作の模試・クイズに挑戦できます(景品あり)。\n③壁展示：ブース壁面に、大型の展示をします。",
    place: "M3",
    mapId: "socialstudies2",
    articles: [],
  },
  {
    id: "urbandevelopment",
    name: "都市開発サークル",
    description:
      "何このサークル...と思われた方も多いのではないでしょうか?ゆるい交通・建築系サークルです!\n文化祭来場者がどこから来たのかの調査や、クイズ・部誌の頒布を行っています!西ゾーン2階の第二社会科教室までお越しください!",
    place: "M3",
    mapId: "socialstudies2",
    articles: [],
  },
  {
    id: "biology",
    name: "生物研究部",
    description: `ODYSSEY？知的探求？なるほど、今年のテーマは生物研究部を意味しているんですね!!今年もホタルイカの解剖など、他にない体験型企画を用意しています!部員が専門分野を語る"β"企画や大迫力のライブ解剖、魚・昆虫展示、クイズなど盛りだくさん!`,
    place: "M3",
    mapId: "biology",
    articles: [],
  },
  {
    id: "slime",
    name: "スライムサークル",
    description:
      "今年もやります!毎年恒例スライム配り!自分は正直化学に興味が無い…という人でも大歓迎です!子供から大人まで誰でも気軽に中学棟3階フリースペースにお越しください!皆でスライムを作りながらお待ちしています!",
    place: "M3",
    mapId: "m2open",
    articles: [],
  },
  {
    id: "doraemon",
    name: "ドラえもん同好会",
    description:
      "こんにちは〜!ドラえもん同好会です!ドラえもん同好会では部誌とドラえもん検定を用意しています!ドラえもんのことについて自信があるという方向けのものからドラえもんをあまり知らない方向けのものまであります。展示もありますのでぜひお越しください!",
    place: "M3",
    mapId: "m2-1",
    articles: [],
  },
  {
    id: "puzzle",
    name: "パズルサークル",
    description:
      "今年はじめてのサークルです。普段から様々なパズルを作成し解いていて、有名どころのパズルから自作のパズルまで、数多く取り揃えています。景品も用意してありますのでぜひぜひ一度、足を運んでみてください!!!",
    place: "M3",
    mapId: "m2-1",
    articles: [],
  },
  {
    id: "baseballfan",
    name: "野球ファンサークル",
    description:
      "M2-2教室では、野球ファンサークルが毎年恒例のペーパークイズや、ユニフォームなどのグッズ展示、部誌の配布などを行っています!クイズで高得点を取って、灘校グッズなどの豪華賞品をゲットしよう!集え、全国の野球ファン!",
    place: "M3",
    mapId: "m2-2",
    articles: [],
  },
  {
    id: "fortunetelling",
    name: "占いの館",
    description:
      "毎年恒例の、ラグビー部によるタロット占いです。文化祭でしか発揮できない占星術を使って、あなたの運勢を占います!金運・恋愛運・健康運・勉強運など、どんな運勢でもOK‼︎　お子様から紳士淑女の皆様まで、ぜひ占いの館に足を踏み入れてみては?",
    place: "M3",
    mapId: "m2-3",
    articles: [],
  },
  {
    id: "magical",
    name: "マジカル同好会",
    description:
      "マジカル同好会では、お客様と近い距離でトランプなどを用いてする「クロースアップマジック」と教室全体を使った大規模な「サロンマジック」を行っています。騙されたと思って来てみてください、騙されます。",
    place: "M3",
    mapId: "m2-4",
    articles: [],
  },
  {
    id: "ess",
    name: "ESS",
    description:
      "ESSはEnglish Speaking Societyの略で、主に英語を話すことを活動にしています。今年はクロスワード、灘校入試模試に加えて体育館での演劇を行います。教室でパンフレットも配っているのでぜひESSのブースに来てください!",
    place: "M3",
    mapId: "english2",
    articles: [],
  },
  {
    id: "art",
    name: "美術同好会",
    description:
      "好きなものを描いてイラストの練習をしているなんちゃって美術の展示です。イラストって１年経つとだいぶ上達するんですよね〜→だから去年覗いた人も、まだ来たことない人も旧Twitterを覗きにくる感覚で是非足を運んでみてください!",
    place: "M3",
    mapId: "english1",
    articles: [],
  },
  {
    id: "kendo",
    name: "剣道部",
    description:
      "剣道部です。コロナ禍が過ぎ去り、剣道場を利用できるということで、久々の剣道体験を復活させることができました！打ち込み台に打ち込みをしてもらう簡単なものとなりますので、ぜひ気軽に剣道場へ足を運んでみてください！",
    place: "M3",
    mapId: "kendo",
    articles: [],
  },
  {
    id: "maze",
    name: "暗闇迷路",
    description:
      "今年から灘校文化祭に暗闇迷路が登場！　文化祭史上、最もスリリングな体験がここにあり！　暗い中、勇気を振り絞って、迷路の中を進もう！　迷路の果てには何が待ち受けているのか？！　イケメンサッカー部によるおもてなしをご覧あれ！",
    place: "H4",
    mapId: "h1-4",
    articles: [],
    hasLogo: true,
  },
  {
    id: "quiz",
    name: "クイズ同好会",
    description:
      "第78回灘校文化祭『ODYSSEY』にお越しの皆様はじめまして!灘校クイズ同好会です。常設ブースではペーパークイズ受験と早押しクイズ体験ができます。点数や正解数に応じて景品がありますので、ぜひお越しください!",
    place: "H4",
    mapId: "h1-3",
    articles: [],
  },
  {
    id: "mathematics",
    name: "数学研究部",
    description:
      "今年もやります、数研。\n恒例の灘中入試模試と和田杯をはじめ、部員による講義や、部員と数学ゲームで対戦できる数研遊戯などもあります!数学を気軽に楽しもう!\nぜひお越しください。",
    place: "H4",
    mapId: "h1-2",
    articles: [],
  },
  {
    id: "casino",
    name: "カジノ",
    description:
      "こんにちは灘校陸上部です!今年も大人気のカジノをやります!皆さんも自分の運を試してみませんか?初心者でも大歓迎なのでぜひ遊びに来てください!",
    place: "H4",
    mapId: "h1-1",
    articles: [],
  },
  {
    id: "anime",
    name: "アニメ研究会",
    description:
      "今年もやりますアニ研展示!室内では有り余るサブカルチャーへの愛がこもったオタク濃度120%の研究会誌や、初心者〜上級者向けクイズの頒布、展示を行っており、一部メンバーはODORIBAにコスプレ参加でガチダンス!是非お越しください",
    place: "H4",
    mapId: "multipurpose",
    articles: [],
  },
  {
    id: "physics",
    name: "物理研究部",
    description:
      "物理研究部では、物理に関する様々な現象の展示や、中学入試の模擬問題のチャレンジ(景品あり)をしています!また、講義用教室での公開実験なども行っています。不思議な物理の魅力を体験したい方は是非4階の物理教室までお越しください",
    place: "M4",
    mapId: "physics",
    articles: [],
  },
  {
    id: "earthscience",
    name: "地学研究部",
    description:
      "灘校地学研究部です!今年は日本プラネタリウム協議会公認でプラネタリウム100周年記念展示を行います。毎年大好評の、砂金を持って帰れる砂金掘り体験もあります!また、部員自作のプラネタリウムでは満天の星空をお届けします。ぜひ今年は中学棟4階へ!",
    place: "M4",
    mapId: "earthscience",
    articles: [],
  },
  {
    id: "lecture_m",
    name: "講義教室",
    description: "",
    place: "M4",
    mapId: "m3-2",
    articles: [],
  },
  {
    id: "conan",
    name: "コナンサークル",
    description:
      "中学棟4階にあるコナンサークルではコナンに関するペーパークイズを常に実施しています。\n初級から超級まで難易度ごとにクイズが違うのですべての人が楽しめる内容になっています。また１０時３０分、１４時からの１０分間はトリック実演を行います。",
    place: "M4",
    mapId: "m3-3",
    articles: [],
  },
  {
    id: "amateurradio",
    name: "アマチュア無線研究部",
    description:
      "アマチュア無線研究部では部員が作った電子工作やゲームの作品を展示しています。\nまた作品展示の他にも電子工作教室やロボット講習、アマチュア無線の体験ブースなども\nご用意しております。楽しめること間違いなしなので是非お立ち寄りください。",
    place: "M4",
    mapId: "m3-4",
    articles: [],
  },
];
