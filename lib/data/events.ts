const categories = [
  "lecture_m",
  "lecture_h",
  "raffle",
  "garden",
  "audiovisual",
  "lecture",
  "mainhall",
  "gym",
  "others",
] as const;

export type Category = (typeof categories)[number];

export type Event = {
  id: string;
  name: string;
  description: string;
  category: Category;
  mapId: string;
};

export type EventTimetable = {
  id: string;
  time: { day: 1 | 2; from: Date; to: Date }[];
};

export const events: Event[] = [
  {
    id: "mathematics_event1",
    name: "根軸基本講座",
    description: "根軸とは何か、どういったものなのかについて優しく説明します。",
    category: "lecture_m",
    mapId: "m3-2",
  },
  {
    id: "mathematics_event2",
    name: "円に内接する六角形についての小噺",
    description:
      "円(二次曲線)に内接する六角形について、射影幾何学の定理を使いながらどのような性質があるかを考えます。",
    category: "lecture_m",
    mapId: "m3-2",
  },
  {
    id: "othello_event",
    name: "詰めオセロをしてみよう",
    description:
      "みなさんお馴染み「オセロ」ですが、「詰めオセロ」はご存知ですか？堅苦しい言い方をすると「終盤問題」です。今回はクイズ形式で楽しく詰めオセロに触れてみましょう！景品もありますよ♪",
    category: "lecture_m",
    mapId: "m3-2",
  },
  {
    id: "npca_event1",
    name: "パソコン解体",
    description:
      "皆さんがいつも使っているパソコン、その中身を覗いたことはありますか？　中２の部員がパソコンを解体して解説します♪",
    category: "lecture_h",
    mapId: "h3-1",
  },
  {
    id: "mathematics_event3",
    name: "対称性を利用して合同式を得る方法",
    description:
      "ある組み合わせの問題を解き、その答えが整数になることを利用して合同式を導きます。",
    category: "lecture_h",
    mapId: "h3-1",
  },
  {
    id: "mathematics_event4",
    name: "三角形に関する2種類の操作と相似三角形の出現",
    description:
      "三角形に関する簡単な操作によって生み出される、元の三角形と相似な三角形について紹介し、証明します。",
    category: "lecture_h",
    mapId: "h3-1",
  },
  {
    id: "mathematics_event5",
    name: "入試模試解説",
    description:
      "灘中入試模試の作問者が問題作成の背景とともに詳しく、分かりやすく解説します。",
    category: "lecture_h",
    mapId: "h3-1",
  },
  {
    id: "npca_event2",
    name: "ハッキング実演",
    description:
      "高度な技術を必要とするイメージがあるハッキング。部員が分かりやすく解説しつつ、実際に行うところをお見せします!",
    category: "lecture_h",
    mapId: "h3-1",
  },
  {
    id: "physics_event",
    name: "物理実験ショー",
    description:
      "物理実験ショーでは、液体窒素を使った普段ではなかなか見られない様々な実験ショーを行います。不思議な物理を間近で見てみたいという方は是非お越しください。",
    category: "lecture_h",
    mapId: "h3-1",
  },
  {
    id: "magical_event",
    name: "サロンマジック",
    description:
      "常設して行われるクロースアップマジック(テーブルマジック)とは打って変わって、教室を大きく使ったステージマジックです！",
    category: "others",
    mapId: "m2-4",
  },
  {
    id: "classicculture_event",
    name: "能楽 仕舞",
    description:
      "古典文化の能楽班です！今回仕舞では両日ともに「賀茂」と「清経」を舞います。「賀茂」は賀茂別雷命という雷神の仕舞です。「清経」は死後永遠に戦い続ける修羅道に堕ちた平家の武士の仕舞です。神と武士の力強さに注目してください！",
    category: "others",
    mapId: "training",
  },
  {
    id: "shorinji_event",
    name: "少林寺拳法演舞会",
    description:
      "少林寺拳法同好会は研修館の3階にて、演舞会を行います。少林寺拳法は突きや蹴りから投げまで行う武道です。演舞会ではいわゆる「型」と、寸劇の中での技紹介を行います。ぜひ研修館3階までご来場ください。",
    category: "others",
    mapId: "training",
  },
  {
    id: "quiz_event",
    name: "常設ブース（クイズ）",
    description:
      "常設ブースではペーパークイズ受験と早押しクイズ体験ができます！視聴覚ステージでは他の学校の生徒を招いてクイズ大会を行います！クイズの出題中はお静かにお願いします",
    category: "others",
    mapId: "h3-3",
  },
  {
    id: "library_event",
    name: "図書館ツアー",
    description:
      "図書委員が図書館内を案内するツアーです。普段は入ることができない灘校図書館の中でゆったりとした時間をお楽しみください。 （途中退出も可能です。参加希望者が定員に達した場合、ツアーの受付を終了することがあります。あらかじめご了承ください）",
    category: "others",
    mapId: "library",
  },
  {
    id: "biology_event1",
    name: "Live解剖 エビ/イカ/カエル",
    description:
      "Live解剖では、みなさんの目の前で生き物の解剖を行います！ただ解剖するだけではなく、担当の部員が並行して解説しますので、生き物の体の構造についての理解が深まること間違いなしです！",
    category: "others",
    mapId: "biologysub",
  },
  {
    id: "biology_event2",
    name: "生研Lab",
    description:
      "生研Labでは、みなさんが部員と一緒に生物の実験を行います！今年はいつでも、①ホタルイカの解剖②アサリの解剖③DNAの抽出④細胞観察の４種類から好きなものを選択できるようになっています！",
    category: "others",
    mapId: "biologysub",
  },
  {
    id: "biology_event3",
    name: "生研ゼミβ",
    description:
      "生研ゼミβでは、部員が生物学に関する事柄について講義を行います！普段生物学に触れていない方でも理解できるように解説しますので、是非聴きにきてください！",
    category: "others",
    mapId: "biologysub",
  },
  {
    id: "casino_event",
    name: "ビンゴ大会",
    description: "今年も陸上部カジノにてビンゴ大会を行います！皆さんが欲しかったあの灘校グッズなどなど豪華景品が当たるかも？！ぜひお楽しみに！",
    category: "others",
    mapId: "h1-1",
  },
  {
    id: "lego_event",
    name: "トイブロックで灘校机椅子を制作体験",
    description:
      "伝統的な中学棟の机椅子とそれに座る生徒を、部員と一緒に19パーツと３パーツのミニフィギアで再現します。作った作品は持って帰ることが出来ます。",
    category: "raffle",
    mapId: "m3-2",
  },
  {
    id: "lego_event",
    name: "トイブロックで灘校机椅子を制作体験",
    description:
      "伝統的な中学棟の机椅子とそれに座る生徒を、部員と一緒に19パーツと３パーツのミニフィギアで再現します。作った作品は持って帰ることが出来ます。",
    category: "lecture_m",
    mapId: "m3-2",
  },
  {
    id: "campustour",
    name: "キャンパスツアー",
    description:
      "キャンパスツアーはオンライン抽選にて、抽選券を持っている方に学校内を生徒がツアーするというものです。灘校生しか知らない灘校の中身を知ることが出来るかも！",
    category: "raffle",
    mapId: "campustour",
  },
  {
    id: "conan_event",

    name: "トリック実演",
    description:
      "中学棟4階にて10:30と13:30から名探偵コナンで実際に使われたトリックを実演します！観覧したい方はオンライン抽選券での応募をしてください。",
    category: "raffle",
    mapId: "m3-3",
  },
  {
    id: "car_event",
    name: "ペーパークラフトでミニカーを作ろう！",
    description:
      "ペーパークラフトでリアルなミニカーを作る企画です。メンバーがしっかりと製作のサポートをします。高校棟三階へぜひお越しください！",
    category: "raffle",
    mapId: "h2-3",
  },
  {
    id: "earthscience_event",
    name: "砂金堀り体験",
    description:
      "あなたも灘校で砂金を掘ってみませんか？地学部の部員がサポートします。掘った砂金は持ち帰ることができます！",
    category: "raffle",
    mapId: "earthscience",
  },
  {
    id: "railway_event",
    name: "ミニ電車",
    description:
      "鉄研で５年ぶりに復活したミニ電車は、小さな子供から大人まで楽しめる、「実際に乗れる」のが特徴の大型鉄道模型です。客車に跨って見える、新しい灘の景色を一度楽しんでみませんか？",
    category: "raffle",
    mapId: "ground1",
  },
  {
    id: "chemistry_event",
    name: "化学マジック",
    description:
      "毎年大好評の常設展示、そしてパワーアップされた新・化学マジックを開催します！化学マジックは抽選に外れても立ち見で見ることができます！化学に興味がなくても楽しめる内容となっておりますので是非３階連絡通路の化学教室へお越しください！",
    category: "raffle",
    mapId: "chemistry",
  },
  {
    id: "amateurradio_event1",
    name: "電子工作教室",
    description:
      "中学棟3-4教室で電子工作教室を行います。 この企画では「点灯虫」と呼ばれる回路を作ることができます。 部員たちが丁寧に説明しますので、電子工作初心者の方でも大歓迎です。　　　　　　　　　　　　　 　(また5才以下の方は講習を受けられません。小学生は保護者同伴でお願いします。)",
    category: "raffle",
    mapId: "m3-4",
  },
  {
    id: "amateurradio_event2",
    name: "ロボットプログラミング講習",
    description:
      "中学棟3-3教室でロボットプログラミング講習を行います。 黒い線の上を走るライントレースロボットのプログラミングをしてもらいます。 実際にコースも用意していますので、プログラミングを終えたら 動かすことができます。",
    category: "raffle",
    mapId: "m3-3",
  },
  {
    id: "odoriba",
    name: "踊り場",
    description:
      "ODORIBAを見ずして灘校文化祭は語れない。爽やかイケメンから全力の女装・コスプレまで、様々な灘校生が披露する圧巻のダンスは必見です！",
    category: "garden",
    mapId: "garden",
  },
  {
    id: "mscontest",
    name: "ミスコン",
    description:
      "ステージ企画最高級の大人気大盛り上がり企画!! 灘校一の美女を決める戦いに目が離せない⁉ みんなも推し美女を見つけて、たくさん応援して盛り上げよう！",
    category: "garden",
    mapId: "garden",
  },
  {
    id: "muscle",
    name: "筋肉王",
    description:
      "史上最も偉大なボディビルダー、ロニーコールマンはこう言いました。「筋肉という名の衣服を日々の努力で縫い上げていくんだ」 灘校生の裸を見ることができる唯一のステージ。最高のファッションショーはこちらです。",
    category: "garden",
    mapId: "garden",
  },
  {
    id: "performance",
    name: "パフォーマンス",
    description: "",
    category: "garden",
    mapId: "garden",
  },
  {
    id: "magic",
    name: "マジック",
    description:
      "観客の皆さんをも巻き込む、一風変わったステージマジックの数々をとくとご覧あれ！！",
    category: "garden",
    mapId: "garden",
  },
  {
    id: "finale",
    name: "フィナーレ",
    description: "",
    category: "garden",
    mapId: "garden",
  },
  {
    id: "n1",
    name: "N1",
    description:
      "灘校屈指のお笑いたちがコンビを組み、その笑いのセンスを武器に熱い漫才バトルをします！灘校一の漫才師の栄光を手にするのは誰だ！？",
    category: "audiovisual",
    mapId: "audiovisual",
  },
  {
    id: "ippon",
    name: "IPPON",
    description:
      "今年も開催！想像のナナメ上を行く本校生の回答にあなたも抱腹絶倒待ったナシ！ 灘校の大喜利championを決める熱き闘いを見逃すな！",
    category: "audiovisual",
    mapId: "audiovisual",
  },
  {
    id: "kakuzuke",
    name: "格付け",
    description:
      "灘校生が自らの感覚を駆使して問題を解き、ランク付けされていきます。 果たして最後まで正解して一流灘校生を維持できる者は現れるのか！？",
    category: "audiovisual",
    mapId: "audiovisual",
  },
  {
    id: "quiz",
    name: "クイズ",
    description:
      "灘、大阪星光、東大寺、西大和。 いずれも名打ての強豪校達が、今日特別に視聴覚室に集結！！普段画面の向こうでしか見られない超人達の最高峰の知力対決を見逃すな！",
    category: "audiovisual",
    mapId: "audiovisual",
  },
  {
    id: "n1consolation",
    name: "N1敗者復活",
    description:
      "ここでは終われない！舞い戻るのは俺らだ！本戦へと進むラスト1組を決める闘いを視聴覚室で！",
    category: "audiovisual",
    mapId: "audiovisual",
  },
  {
    id: "maetoato",
    name: "灘中に入る前と後",
    description:
      "人気企画「新中一企画」が、内容をリニューアルして登場！ 「どんな習い事をしていた？」 「学校の授業のスピードは？」 4月に入学した中学１年生全員のアンケート結果を公開！ アンケート結果をもとに、中１生と先輩中学生の生の声をお届けします。",
    category: "lecture",
    mapId: "lecture",
  },
  {
    id: "boxing",
    name: "ボクシンク",
    description:
      "知の格闘技、ボクシンクが今年も開催！蝶のように論を立て、蜂のように相手を刺す選手たち。あなたはどちらの意見を選ぶ？ぜひご観戦ください！",
    category: "lecture",
    mapId: "lecture",
  },
  {
    id: "nadaju",
    name: "灘校一受けたい授業",
    description:
      "個性的なのは灘生だけじゃない！ 灘校の教師陣の授業がついに明らかとなる！！ この機会を見逃すな！",
    category: "lecture",
    mapId: "lecture",
  },
  {
    id: "aurorascience",
    name: "オーロラサイエンス",
    description:
      "物理、化学、生物、地学、言語学と、様々な分野のオリンピアンが大講義室に集結！「いま地球上で起こっていること」をテーマに、それぞれの視点から多角的に解説します！！",
    category: "lecture",
    mapId: "lecture",
  },
  {
    id: "ess",
    name: "ESS",
    description: "",
    category: "gym",
    mapId: "gym",
  },
  {
    id: "band1",
    name: "No True Face",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
  {
    id: "band2",
    name: "Crescent Moon",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
  {
    id: "band3",
    name: "Pentamix",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
  {
    id: "band4",
    name: "感謝",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
  {
    id: "band5",
    name: "GCS",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
  {
    id: "band6",
    name: "diagonal",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
  {
    id: "band7",
    name: "YUKAI",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
  {
    id: "band8",
    name: "The Stellar Mercury",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
  {
    id: "band9",
    name: "御曹司",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
  {
    id: "band10",
    name: "linKer.",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
  {
    id: "band11",
    name: "SevenS",
    description: "",
    category: "mainhall",
    mapId: "mainhall",
  },
];
