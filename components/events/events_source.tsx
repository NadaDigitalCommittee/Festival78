import Image from "next/image";
import { ImageCarousel } from "./ImageCarousel";

type EventsPageSourceType = {
  color?: "red" | "orange" | "green" | "blue" | "pink";
  event_id: string;
  name: string;
  description: React.ReactNode;
  map_id?: string;
};

type EventsPageSourceTypes = {
  map_id: string;
  events: EventsPageSourceType[];
};
/*筋肉王、格付け、ブラバン、ボクシンク→赤、N1→オレンジ、IPPON→黄色、授業→緑、灘中に入る前と後→黄色、ESS→青、オーロラ→ピンク */

export const EVENTS_PAGE_SOURCE: [
  EventsPageSourceTypes,
  EventsPageSourceTypes,
  EventsPageSourceTypes,
  EventsPageSourceTypes,
  EventsPageSourceTypes,
  EventsPageSourceTypes,
] = [
  {
    map_id: "garden",
    events: [
      {
        color: "red",
        name: "ODORIBA",
        event_id: "odoriba",
        description: (
          <>
            ODORIBAを見ずして灘校文化祭は語れない。
            <br />
            爽やかイケメンから全力の女装・コスプレまで、
            <wbr />
            様々な灘校生が披露する圧巻のダンスは必見です!
          </>
        ),
      },
      {
        color: "blue",
        name: "Ms.灘コンテスト",
        event_id: "mscontest",
        description: (
          <>
            ステージ企画最高級の大人気大盛り上がり企画!!
            <wbr />
            灘校一の美女を決める戦いに目が離せない!?
            <br />
            みんなも推し美女を見つけて、
            <wbr />
            たくさん応援して盛り上げよう!
            <br />
            <div className="mt-4" />
            <ImageCarousel
              options={{
                direction: "rtl",
                loop: true,
              }}
              width={350}
              height={500}
              slides={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
                <Image
                  src={`/img/events/mscontest/${i}.webp`}
                  key={i}
                  alt="muscle"
                  width={350}
                  height={500}
                />
              ))}
            />
            <Image
              src={"/img/events/mscontest/logo.webp"}
              className="mx-auto"
              width={400}
              height={400}
              alt="ロゴ"
            />
          </>
        ),
      },
      {
        color: "red",
        name: "筋肉王",
        event_id: "muscle",
        description: (
          <>
            史上最も偉大なボディビルダー、 ロニーコールマンはこう言いました。
            <br />
            「筋肉という名の衣服を日々の努力で縫い上げていくんだ」
            <br />
            灘校生の裸を見ることができる唯一のステージ。
            <br />
            最高のファッションショーはこちらです。
            <br />
            <div className="mt-4" />
            <ImageCarousel
              options={{
                direction: "rtl",
                loop: true,
              }}
              width={350}
              height={500}
              slides={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
                <Image
                  src={`/img/events/muscle/${i}.webp`}
                  key={i}
                  alt="muscle"
                  width={350}
                  height={500}
                />
              ))}
            />
            <Image
              src={"/img/events/muscle/logo.webp"}
              className="mx-auto"
              width={400}
              height={400}
              alt="ロゴ"
            />
          </>
        ),
      },
      {
        color: "green",
        name: "パフォーマンス",
        event_id: "performance",
        description: (
          <>
            たくさんの灘校生がパフォーマンスを披露します!
            <br />
            様々なジャンルのパフォーマンスをお楽しみ下さい!
          </>
        ),
      },
      {
        color: "blue",
        name: "マジックショー",
        event_id: "magic",
        description: (
          <>
            観客の皆さんをも巻き込む、
            <wbr />
            一風変わったステージマジックの数々をとくとご覧あれ!!
          </>
        ),
      },
      {
        color: "orange",
        name: "フィナーレ",
        event_id: "finale",
        description: (
          <>
            各ステージ企画やブースの優勝者、運営を担う文化委員などが中庭ステージに集結!
            <br />
            更にはODORIBA, N1優勝者による実演も!
            <br />
            灘校文化祭ODYSSEYの最高のフィナーレを見逃すな!
          </>
        ),
      },
    ],
  },
  {
    map_id: "audiovisual",
    events: [
      {
        color: "orange",
        name: "N1グランプリ2024",
        event_id: "n1",
        description: (
          <>
            灘校屈指のお笑いたちがコンビを組み、
            <wbr />
            その笑いのセンスを武器に熱い漫才バトルをします!
            <br />
            灘校一の漫才師の栄光を手にするのは誰だ!?
            <br />
            <br />
            <ImageCarousel
              options={{
                direction: "rtl",
                loop: true,
              }}
              width={300}
              height={190}
              slides={[1, 2, 3, 4, 5].map((i) => (
                <Image
                  src={`/img/events/n1/${i}.webp`}
                  key={i}
                  alt="n1"
                  width={500}
                  height={500}
                />
              ))}
            />
            <ImageCarousel
              options={{
                direction: "ltr",
                loop: true,
              }}
              width={300}
              height={190}
              slides={[6, 7, 8, 9].map((i) => (
                <Image
                  src={`/img/events/n1/${i}.webp`}
                  key={i}
                  alt="n1"
                  width={500}
                  height={500}
                />
              ))}
            />
            <Image
              src={"/img/events/n1/logo.webp"}
              className="mx-auto"
              width={600}
              height={600}
              alt="ロゴ"
            />
          </>
        ),
      },
      {
        color: "orange",
        name: "IPPONグランプリ",
        event_id: "ippon",
        description: (
          <>
            今年も開催!
            <wbr />
            想像のナナメ上を行く本校生の回答にあなたも抱腹絶倒待ったナシ!
            <br />
            灘校の大喜利championを決める熱き闘いを見逃すな!
            <Image
              src={"/img/events/ippon/logo.webp"}
              className="mx-auto mt-4"
              width={400}
              height={400}
              alt="ロゴ"
            />
          </>
        ),
      },
      {
        color: "red",
        name: "灘校生格付けチェック",
        event_id: "kakuzuke",
        description: (
          <>
            灘校生が自らの感覚を駆使して問題を解き、
            <wbr />
            ランク付けされていきます。
            <br />
            果たして最後まで正解して一流灘校生を維持できる者は現れるのか!?
            <br />
            <Image
              src={"/img/events/kakuzuke/logo.webp"}
              className="mx-auto"
              width={400}
              height={400}
              alt="ロゴ"
            />
          </>
        ),
      },
      {
        color: "blue",
        name: "学校対抗クイズ大会",
        event_id: "quiz",
        description: (
          <>
            灘、大阪星光、東大寺、西大和。
            <br />
            いずれも名打ての強豪校達が、今日特別に視聴覚室に集結!!
            <br />
            普段画面の向こうでしか見られない超人達の最高峰の知力対決を見逃すな！
          </>
        ),
      },
      {
        color: "orange",
        name: "N1グランプリ敗者復活戦",
        event_id: "n1consolation",
        description: (
          <>
            ここでは終われない!
            <wbr />
            舞い戻るのは俺らだ!
            <br />
            本戦へと進むラスト1組を決める闘いを視聴覚室で!
          </>
        ),
      },
    ],
  },
  {
    map_id: "lecture",
    events: [
      {
        color: "orange",
        name: "灘中に入る前と後",
        event_id: "maetoato",
        description: (
          <>
            人気企画「新中一企画」が、内容をリニューアルして登場!
            <br />
            「どんな習い事をしていた?」「学校の授業のスピードは?」
            <wbr />
            4月に入学した中学1年生全員のアンケート結果を公開!
            <br />
            アンケート結果をもとに、中１生と先輩中学生の生の声をお届けします。
          </>
        ),
      },
      {
        color: "red",
        name: "ボクシンク",
        event_id: "boxing",
        description: (
          <>
            知の格闘技、ボクシンクが今年も開催!
            <br />
            蝶のように論を立て、
            <wbr />
            蜂のように相手を刺す選手たち。
            <br />
            あなたはどちらの意見を選ぶ?
            <wbr />
            ぜひご観戦ください!
          </>
        ),
      },
      {
        color: "green",
        name: "灘校一受けたい授業",
        event_id: "nadaju",
        description: (
          <>
            個性的なのは灘生だけじゃない!
            <br />
            灘校の教師陣の授業がついに明らかとなる!!
            <br />
            この機会を見逃すな!
            <br />
            <Image
              src={"/img/events/nadaju/logo.webp"}
              className="mx-auto mt-4"
              width={400}
              height={400}
              alt="ロゴ"
            />
          </>
        ),
      },
      {
        color: "pink",
        name: "オーロラサイエンス",
        event_id: "aurorascience",
        description: (
          <>
            物理、化学、生物、地学、言語学と、
            <wbr />
            様々な分野のオリンピアンが大講義室に集結!
            <br />
            「いま地球上で起こっていること」をテーマに、
            <wbr />
            それぞれの視点から多角的に解説します!!
          </>
        ),
      },
    ],
  },
  {
    map_id: "mainhall",
    events: [
      {
        name: "ブラスバンド",
        event_id: "brassband",
        description: (
          <>
            これぞまさに文化祭！
            <br />
            音楽をこよなく愛する灘校生が、灘校の顔、本館を盛り上げていきます。
            <wbr />
            熱い演奏と情熱的な歌声、リズミカルなビートと心揺さぶるメロディー。
            <br />
            Let's enjoy!
            <Image
              src={"/img/events/band/logo.webp"}
              alt="ロゴ"
              className="mx-auto"
              width={500}
              height={500}
            />
          </>
        ),
      },
      {
        color: "green",
        name: "No True Face",
        event_id: "band1",
        description: (
          <>
            <Image
              src={"/img/events/band/1.webp"}
              alt="band1"
              className="mx-auto"
              width={500}
              height={500}
            />
          </>
        ),
      },
      {
        color: "red",
        name: "Crescent Moon",
        event_id: "band2",
        description: <></>,
      },
      {
        color: "blue",
        name: "Pentamix",
        event_id: "band3",
        description: (
          <>
            <Image
              src={"/img/events/band/3.webp"}
              alt="band1"
              className="mx-auto"
              width={500}
              height={500}
            />
          </>
        ),
      },
      {
        color: "green",
        name: "感謝",
        event_id: "band4",
        description: (
          <>
            <Image
              src={"/img/events/band/4.webp"}
              alt="band1"
              className="mx-auto"
              width={500}
              height={500}
            />
          </>
        ),
      },
      {
        color: "pink",
        name: "GCS",
        event_id: "band5",
        description: (
          <>
            <Image
              src={"/img/events/band/5.webp"}
              alt="band1"
              className="mx-auto"
              width={500}
              height={500}
            />
          </>
        ),
      },
      {
        color: "orange",
        name: "diagonal",
        event_id: "band6",
        description: (
          <>
            <Image
              src={"/img/events/band/6.webp"}
              alt="band1"
              className="mx-auto"
              width={500}
              height={500}
            />
          </>
        ),
      },
      {
        color: "blue",
        name: "YUKAI",
        event_id: "band7",
        description: (
          <>
            <Image
              src={"/img/events/band/7.webp"}
              alt="band1"
              className="mx-auto"
              width={500}
              height={500}
            />
          </>
        ),
      },
      {
        color: "green",
        name: "The Stellar Mercury",
        event_id: "band8",
        description: (
          <>
            <Image
              src={"/img/events/band/8.webp"}
              alt="band1"
              className="mx-auto"
              width={500}
              height={500}
            />
          </>
        ),
      },
      {
        color: "red",
        name: "御曹司",
        event_id: "band9",
        description: <></>,
      },
      {
        color: "blue",
        name: "linKer.",
        event_id: "band10",
        description: (
          <>
            <Image
              src={"/img/events/band/10.webp"}
              alt="band1"
              className="mx-auto"
              width={500}
              height={500}
            />
          </>
        ),
      },
      {
        color: "green",
        name: "SevenS",
        event_id: "band11",
        description: <></>,
      },
    ],
  },
  {
    map_id: "gym",
    events: [
      {
        color: "pink",
        name: "ESS",
        event_id: "ess",
        description: (
          <>
            英語で「アラジン」の劇を披露します!
            <br />
            世界観に虜になること間違いなし!
            <br />
            皆様是非体育館にお越しください!
            <Image
              src={"/img/circles/original/ess.png"}
              alt="ロゴ"
              width={500}
              height={500}
              className="mx-auto mt-4"
            />
          </>
        ),
      },
    ],
  },
  {
    map_id: "",
    events: [
      {
        color: "orange",
        name: "トイブロックで灘校机椅子を制作体験",
        event_id: "lego_event",
        description: (
          <>
            伝統的な中学棟の机椅子とそれに座る生徒を、
            <wbr />
            部員と一緒に19パーツと3パーツのミニフィギアで再現します。
            <br />
            作った作品は持って帰ることが出来ます
          </>
        ),
        map_id: "m3-2",
      },
      {
        name: "根軸基本講座",
        event_id: "mathematics_event1",
        description: (
          <>根軸とは何か、どういったものなのかについて優しく説明します。</>
        ),
        map_id: "m3-2",
      },
      {
        name: "円に内接する六角形についての小噺",
        event_id: "mathematics_event2",
        description: (
          <>
            円(二次曲線)に内接する六角形について、
            <wbr />
            射影幾何学の定理を使いながらどのような性質があるかを考えます。
          </>
        ),
        map_id: "m3-2",
      },
      {
        name: "対称性を利用して合同式を得る方法",
        event_id: "mathematics_event3",
        description: (
          <>
            ある組み合わせの問題を解き、
            <wbr />
            その答えが整数になることを利用して合同式を導きます。
          </>
        ),
        map_id: "h3-1",
      },
      {
        name: "三角形に関する2種類の操作と相似三角形の出現",
        event_id: "mathematics_event4",
        description: (
          <>
            三角形に関する簡単な操作によって生み出される、
            <wbr />
            元の三角形と相似な三角形について紹介し、
            <wbr />
            証明します。
          </>
        ),
        map_id: "h3-1",
      },
      {
        color: "green",
        name: "詰めオセロをしてみよう",
        event_id: "othello_event",
        description: (
          <>
            みなさんお馴染み「オセロ」ですが、
            <wbr />
            「詰めオセロ」はご存知ですか?
            <br />
            堅苦しい言い方をすると「終盤問題」です。
            <br />
            今回はクイズ形式で楽しく詰めオセロに触れてみましょう!景品もありますよ♪
          </>
        ),
        map_id: "m3-2",
      },
      {
        color: "pink",
        name: "パソコン解体",
        event_id: "npca_event1",
        description: (
          <>
            皆さんがいつも使っているパソコン、
            <wbr />
            その中身を覗いたことはありますか?
            <br />
            中2の部員がパソコンを解体して解説します♪
          </>
        ),
        map_id: "h3-1",
      },
      {
        name: "入試模試解説",
        event_id: "mathematics_event5",
        description: (
          <>
            灘中入試模試の作問者が問題作成の背景とともに詳しく、
            <wbr />
            分かりやすく解説します。
          </>
        ),
        map_id: "h3-1",
      },
      {
        color: "pink",
        name: "ハッキング実演",
        event_id: "npca_event2",
        description: (
          <>
            高度な技術を必要とするイメージがあるハッキング。
            <br />
            部員が分かりやすく解説しつつ、
            <wbr />
            実際に行うところをお見せします!
          </>
        ),
        map_id: "h3-1",
      },
      {
        color: "green",
        name: "物理実験ショー",
        event_id: "physics_event",
        description: (
          <>
            物理実験ショーでは、
            <wbr />
            液体窒素を使った普段ではなかなか見られない
            <wbr />
            様々な実験ショーを行います。
            <br />
            不思議な物理を間近で見てみたいという方は是非お越しください。
          </>
        ),
        map_id: "h3-1",
      },

      //ここからその他サークル
      {
        color: "orange",
        name: "ビンゴ大会",
        event_id: "casino_event",
        description: (
          <>
            今年も陸上部カジノにてビンゴ大会を行います！
            <br />
            皆さんが欲しかったあの灘校グッズなどなど豪華景品が当たるかも？！
            <wbr />
            ぜひお楽しみに！
          </>
        ),
        map_id: "h1-1",
      },
      {
        name: "サロンマジック",
        event_id: "magical_event",
        description: (
          <>
            常設して行われる
            <wbr />
            クロースアップマジック(テーブルマジック)とは打って変わって、
            <wbr />
            教室を大きく使ったステージマジックです!
          </>
        ),
        map_id: "m2-4",
      },
      {
        color: "red",
        name: "能楽　仕舞",
        event_id: "classicculture_event",
        description: (
          <>
            古典文化の能楽班です!
            <wbr />
            今回仕舞では両日ともに「賀茂」と「清経」を舞います。
            <br />
            「賀茂」は賀茂別雷命という雷神の仕舞です。
            <br />
            「清経」は死後永遠に戦い続ける修羅道に堕ちた平家の武士の仕舞です。
            <br />
            神と武士の力強さに注目してください!
          </>
        ),
        map_id: "training",
      },
      {
        color: "green",
        name: "少林寺拳法演舞会",
        event_id: "shorinji_event",
        description: (
          <>
            少林寺拳法同好会は研修館の3階にて、
            <wbr />
            演舞会を行います。
            <br />
            少林寺拳法は突きや蹴りから投げまで行う武道です。
            <br />
            演舞会ではいわゆる「型」と、
            <wbr />
            寸劇の中での技紹介を行います。
            <br />
            ぜひ研修館3階までご来場ください。
          </>
        ),
        map_id: "training",
      },
      {
        color: "red",
        name: "常設ブース（クイズ）",
        event_id: "quiz_event",
        description: (
          <>
            常設ブースではペーパークイズ受験と早押しクイズ体験ができます!
            <br />
            視聴覚ステージでは他の学校の生徒を招いてクイズ大会を行います!
            <br />
            クイズの出題中はお静かにお願いします
          </>
        ),
        map_id: "h3-3",
      },
      {
        color: "orange",
        name: "図書館ツアー",
        event_id: "library_event",
        description: (
          <>
            図書委員が図書館内を案内するツアーです。
            <br />
            普段は入ることができない灘校図書館の中で
            <wbr />
            ゆったりとした時間をお楽しみください。
            <br />
            <span className="text-[#64748B]">
              （途中退出も可能です。参加希望者が定員に達した場合、
              <wbr />
              ツアーの受付を終了することがあります。
              <br />
              あらかじめご了承ください）
            </span>
          </>
        ),
        map_id: "library",
      },
      {
        color: "green",
        name: "Live解剖 エビ/イカ/カエル",
        event_id: "biology_event1",
        description: (
          <>
            Live解剖では、
            <wbr />
            みなさんの目の前で生き物の解剖を行います!
            <br />
            ただ解剖するだけではなく、
            <wbr />
            担当の部員が並行して解説しますので、
            <wbr />
            生き物の体の構造についての理解が深まること間違いなしです!
          </>
        ),
        map_id: "biologysub",
      },
      {
        color: "green",
        name: "生研Lab",
        event_id: "biology_event2",
        description: (
          <>
            生研Labでは、
            <wbr />
            みなさんが部員と一緒に生物の実験を行います!
            <br />
            今年はいつでも、
            <wbr />
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <span>①ホタルイカの解剖</span>
                <span>②アサリの解剖</span>
                <span>③DNAの抽出</span>
                <span>④細胞観察</span>
              </div>
            </div>
            の４種類から好きなものを選択できるようになっています!
          </>
        ),
        map_id: "biologysub",
      },
      {
        color: "green",
        name: "生研ゼミβ",
        event_id: "biology_event3",
        description: (
          <>
            生研ゼミβでは、
            <wbr />
            部員が生物学に関する事柄について講義を行います!
            <br />
            普段生物学に触れていない方でも理解できるように解説しますので、
            <wbr />
            是非聴きにきてください!
          </>
        ),
        map_id: "biologysub",
      },

      //ここから抽選
      {
        color: "orange",
        name: "キャンパスツアー",
        event_id: "campustour",
        description: (
          <>
            キャンパスツアーはオンライン抽選にて、
            <wbr />
            抽選券を持っている方に学校内を生徒がツアーするというものです。
            <br />
            灘校生しか知らない灘校の中身を知ることが出来るかも!
          </>
        ),
        map_id: "campustour",
      },
      {
        name: "トリック実演",
        event_id: "conan_event",
        description: (
          <>
            中学棟4階にて10:30と13:30から
            <wbr />
            名探偵コナンで実際に使われたトリックを実演します!
            <br />
            観覧したい方はオンライン抽選券での応募をしてください。
          </>
        ),
        map_id: "m3-3",
      },
      {
        color: "red",
        name: "ペーパークラフトでミニカーを作ろう！",
        event_id: "car_event",
        description: (
          <>
            ペーパークラフトでリアルなミニカーを作る企画です。
            <br />
            メンバーがしっかりと製作のサポートをします。
            <br />
            高校棟三階へぜひお越しください!
          </>
        ),
        map_id: "h2-3",
      },
      {
        color: "orange",
        name: "砂金堀り体験",
        event_id: "earthscience_event",
        description: (
          <>
            あなたも灘校で砂金を掘ってみませんか?
            <br />
            地学部の部員がサポートします。
            <br />
            掘った砂金は持ち帰ることができます!
          </>
        ),
        map_id: "earthscience",
      },
      {
        name: "ミニ電車",
        event_id: "minitrain",
        description: (
          <>
            鉄研で５年ぶりに復活したミニ電車は、
            <wbr />
            小さな子供から大人まで楽しめる、
            <wbr />
            「実際に乗れる」のが特徴の大型鉄道模型です。
            <br />
            客車に跨って見える、
            <wbr />
            新しい灘の景色を一度楽しんでみませんか？
          </>
        ),
        map_id: "ground1",
      },
      {
        color: "green",
        name: "化学マジック",
        event_id: "chemistry_event",
        description: (
          <>
            毎年大好評の常設展示、
            <wbr />
            そしてパワーアップされた新・化学マジックを開催します!
            <br />
            化学マジックは抽選に外れても立ち見で見ることができます!
            <br />
            化学に興味がなくても楽しめる内容となっておりますので
            <wbr />
            是非３階連絡通路の化学教室へお越しください!
          </>
        ),
        map_id: "chemistry",
      },
      {
        color: "red",
        name: "電子工作教室",
        event_id: "amateurradio_event1",
        description: (
          <>
            中学棟3-4教室で電子工作教室を行います。
            <br />
            この企画では「点灯虫」と呼ばれる回路を作ることができます。
            <br />
            部員たちが丁寧に説明しますので、電子工作初心者の方でも大歓迎です。
            <br />
            <span className="text-[#64748B]">
              (また5才以下の方は講習を受けられません。
              <wbr />
              小学生は保護者同伴でお願いします。）
            </span>
          </>
        ),
        map_id: "m3-4",
      },
      {
        color: "red",
        name: "ロボットプログラミング講習",
        event_id: "amateurradio_event2",
        description: (
          <>
            中学棟3-3教室でロボットプログラミング講習を行います。
            <br />
            黒い線の上を走るライントレースロボットのプログラミングをしてもらいます。
            <br />
            実際にコースも用意していますので、
            <wbr />
            プログラミングを終えたら動かすことができます。
          </>
        ),
        map_id: "m3-3",
      },
    ],
  },
];
