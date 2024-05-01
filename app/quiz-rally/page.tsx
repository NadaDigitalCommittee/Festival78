"use client";

import { Header } from "@/components/Header";
import { QuizCell } from "./quizCell";

export default function Page() {
  const orange="#fc9a6b";
  const yellow="#cfff59";
  const red="#f17276";
  const blue="#77eeed";

  return (
    <main>
      <Header>Quiz Rally</Header>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4 w-full mx-auto font-bold items-center justify-between">
        <QuizCell color={orange} content="鉄道" length={100} rotate={90}/>
        <QuizCell color={yellow} content="LEGO" length={70} rotate={90} />
        <QuizCell color={yellow} content="パソコン" length={70} rotate={90} />
        <QuizCell color={yellow} content="囲碁" length={60} rotate={90} />
        <QuizCell color={yellow} content="ワンダーフォーゲル" length={65} rotate={90} />
        <QuizCell color={yellow} content="オセロ" length={80} rotate={90} />
        <QuizCell color={yellow} content="文藝" length={70} rotate={90} />
        <QuizCell color={yellow} content="書道" length={80} rotate={90} />
        <QuizCell color={yellow} content="卓球" length={60} rotate={90} />
        <QuizCell color={red} content="写真" length={100} rotate={90} />
        <QuizCell color={red} content="にこやかT車＆折り紙" length={70} rotate={90} />
        <QuizCell color={red} content="ポケモン" length={70} rotate={90} />
        <QuizCell color={red} content="将棋" length={70} rotate={90} />
        <QuizCell color={red} content="化学" length={60} rotate={90} />
        <QuizCell color={red} content="地理社会＆社会科学＆都市開発" length={90} rotate={90} />
        <QuizCell color={red} content="生物" length={90} rotate={90} />
        <QuizCell color={red} content="剣道" length={90} rotate={90} />
        <QuizCell color={red} content="ドラえもん＆パズル" length={90} rotate={90} />
        <QuizCell color={red} content="野球ファン" length={90} rotate={90} />
        <QuizCell color={red} content="占い" length={90} rotate={90} />
        <QuizCell color={red} content="マジカル" length={90} rotate={90} />
        <QuizCell color={red} content="ESS" length={90} rotate={90} />
        <QuizCell color={blue} content="サッカー" length={90} rotate={90} />
        <QuizCell color={blue} content="クイズ" length={90} rotate={90} />
        <QuizCell color={blue} content="数学" length={90} rotate={90} />
        <QuizCell color={blue} content="カジノ" length={90} rotate={90} />
        <QuizCell color={blue} content="アニメ" length={90} rotate={90} />
        <QuizCell color={blue} content="物理" length={90} rotate={90} />
        <QuizCell color={blue} content="地学" length={90} rotate={90} />
        <QuizCell color={blue} content="コナン" length={90} rotate={90} />
        <QuizCell color={blue} content="アマチュア" length={90} rotate={90} />

      </div>

    </main>
  )
}