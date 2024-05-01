"use client";

import { Header } from "@/components/Header";
import { QuizCell } from "./quizCell";
import { useState } from "react";

export default function Page() {
  const orange = "#fc9a6b";
  const yellow = "#cfff59";
  const red = "#f17276";
  const blue = "#77eeed";
  const [result,setResult]=useState<boolean|undefined>(undefined)
  const [input,setInput]=useState("")

  return (
    <main className="font-bold w-full max-w-[800px] mx-auto px-3 font-zen_kaku_gothic_new">
      <Header>Quiz Rally</Header>
      <div className="px-4 mb-12">
        <p>文字を集めると問題が現れます！</p>
        <p>文字を集めて、答えを埋めたパンフレットを中学1年4組生徒会の間に持っていくと景品をプレゼント!!</p>
        <p>※景品は無くなり次第配布を終了します。ご了承ください。</p>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-2 gap-y-6 md:gap-4 w-full mx-auto font-bold items-center justify-between">
        <QuizCell color={orange} content="鉄道" length={100} rotate={70} />
        <QuizCell color={yellow} content="LEGO" length={70} rotate={65} />
        <QuizCell color={yellow} content="パソコン" length={70} rotate={65} />
        <QuizCell color={yellow} content="囲碁" length={60} rotate={75} />
        <QuizCell color={yellow} content="ワンダーフォーゲル" length={65} rotate={40} />
        <QuizCell color={yellow} content="オセロ" length={80} rotate={70} />
        <QuizCell color={yellow} content="文藝" length={70} rotate={75} />
        <QuizCell color={yellow} content="書道" length={80} rotate={75} />
        <QuizCell color={yellow} content="卓球" length={60} rotate={75} />
        <QuizCell color={red} content="写真" length={80} rotate={75} />
        <QuizCell color={red} content="にこやか＆車＆折り紙" length={70} rotate={20} />
        <QuizCell color={red} content="ポケモン" length={70} rotate={65} />
        <QuizCell color={red} content="将棋" length={70} rotate={75} />
        <QuizCell color={red} content="化学" length={60} rotate={75} />
        <QuizCell color={red} content="地理社会＆社会科学＆都市開発" length={70} rotate={-40} />
        <QuizCell color={red} content="生物" length={80} rotate={75} />
        <QuizCell color={red} content="剣道" length={60} rotate={75} />
        <QuizCell color={red} content="ドラえもん＆パズル" length={70} rotate={40} />
        <QuizCell color={red} content="野球ファン" length={80} rotate={50} />
        <QuizCell color={red} content="占い" length={80} rotate={75} />
        <QuizCell color={red} content="マジカル" length={70} rotate={65} />
        <QuizCell color={red} content="ESS" length={60} rotate={73} />
        <QuizCell color={blue} content="サッカー" length={70} rotate={65} />
        <QuizCell color={blue} content="クイズ" length={60} rotate={60} />
        <QuizCell color={blue} content="数学" length={80} rotate={75} />
        <QuizCell color={blue} content="カジノ" length={60} rotate={60} />
        <QuizCell color={blue} content="アニメ" length={70} rotate={60} />
        <QuizCell color={blue} content="物理" length={60} rotate={75} />
        <QuizCell color={blue} content="地学" length={80} rotate={75} />
        <QuizCell color={blue} content="コナン" length={70} rotate={70} />
        <QuizCell color={blue} content="アマチュア" length={80} rotate={60} />
        <p className="text-6xl">?</p>
      </div>

      <div className="my-12 flex w-full text-3xl font-bold">
        <p className="min-w-24">答え</p>
        <input className="border-b-2 w-full" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      </div>

      <button className="text-3xl bg-theme rounded-xl p-4 mb-6 ml-2 text-white"
      onClick={async (e)=>{
        const res=await fetch("/api/quiz-rally",{
          method:"POST",
          body:JSON.stringify({answer:input}),
        })
        const data=await res.json()
        setResult(data.ok)
      }}
      >
        答えを確認する！
      </button>
      <div className="text-3xl h-20">
      {result===true&&<p>正解です！</p>}
      {result===false&&<p>不正解です！</p>}
      </div>
    </main>
  )
}