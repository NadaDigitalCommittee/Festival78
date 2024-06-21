"use client";

import { Header } from "@/components/Header";
import { QuizCell } from "../../components/quiz-rally/quizCell";
import { useState } from "react";

export default function Page() {
  const orange = "#fc9a6b";
  const yellow = "#cfff59";
  const red = "#f17276";
  const blue = "#77eeed";
  const [result, setResult] = useState<boolean | undefined>(undefined);
  const [input, setInput] = useState("");

  //公開終了用

  const initialCharacters =
    "灘校文化祭テーマの由来である神話オデュッセイアの主人公の名前は".split("");

  return (
    <main className="mx-auto w-full max-w-[800px] px-3 font-zen_kaku_gothic_new font-bold">
      <Header>Quiz Rally</Header>
      <div className="mb-12 px-4">
        <p>文字を集めると問題が現れます！</p>
        <p>
          文字を集めて、答えを埋めたパンフレットを中学1年4組生徒会の間に持っていくと景品をプレゼント!!
        </p>
        <p>※景品は無くなり次第配布を終了します。ご了承ください。</p>
      </div>
      <div className="mx-auto grid w-full grid-cols-4 items-center justify-between gap-x-2 gap-y-6 font-bold md:grid-cols-6 md:gap-4 lg:grid-cols-8">
        <QuizCell
          color={orange}
          content="鉄道"
          length={100}
          rotate={70}
          initialValue={initialCharacters[0]}
        />
        <QuizCell
          color={yellow}
          content="LEGO"
          length={70}
          rotate={68}
          initialValue={initialCharacters[1]}
        />
        <QuizCell
          color={yellow}
          content="パソコン"
          length={70}
          rotate={55}
          initialValue={initialCharacters[2]}
        />
        <QuizCell
          color={yellow}
          content="囲碁"
          length={60}
          rotate={75}
          initialValue={initialCharacters[3]}
        />
        <QuizCell
          color={yellow}
          content="ワンダーフォーゲル"
          length={65}
          rotate={40}
          initialValue={initialCharacters[4]}
        />
        <QuizCell
          color={yellow}
          content="オセロ"
          length={80}
          rotate={65}
          initialValue={initialCharacters[5]}
        />
        <QuizCell
          color={yellow}
          content="文藝"
          length={70}
          rotate={70}
          initialValue={initialCharacters[6]}
        />
        <QuizCell
          color={yellow}
          content="書道"
          length={80}
          rotate={70}
          initialValue={initialCharacters[7]}
        />
        <QuizCell
          color={yellow}
          content="卓球"
          length={60}
          rotate={75}
          initialValue={initialCharacters[8]}
        />
        <QuizCell
          color={red}
          content="写真"
          length={80}
          rotate={75}
          initialValue={initialCharacters[9]}
        />
        <QuizCell
          color={red}
          content="にこやか＆車＆折り紙"
          length={70}
          rotate={0}
          initialValue={initialCharacters[10]}
        />
        <QuizCell
          color={red}
          content="ポケモン"
          length={70}
          rotate={60}
          initialValue={initialCharacters[11]}
        />
        <QuizCell
          color={red}
          content="将棋"
          length={70}
          rotate={75}
          initialValue={initialCharacters[12]}
        />
        <QuizCell
          color={red}
          content="化学"
          length={60}
          rotate={75}
          initialValue={initialCharacters[13]}
        />
        <QuizCell
          color={red}
          content="地理社会＆社会科学＆都市開発"
          length={70}
          rotate={-40}
          initialValue={initialCharacters[14]}
        />
        <QuizCell
          color={red}
          content="生物"
          length={80}
          rotate={75}
          initialValue={initialCharacters[15]}
        />
        <QuizCell
          color={red}
          content="剣道"
          length={60}
          rotate={70}
          initialValue={initialCharacters[16]}
        />
        <QuizCell
          color={red}
          content="ドラえもん＆パズル"
          length={70}
          rotate={10}
          initialValue={initialCharacters[17]}
        />
        <QuizCell
          color={red}
          content="野球ファン"
          length={80}
          rotate={50}
          initialValue={initialCharacters[18]}
        />
        <QuizCell
          color={red}
          content="占い"
          length={80}
          rotate={75}
          initialValue={initialCharacters[19]}
        />
        <QuizCell
          color={red}
          content="マジカル"
          length={70}
          rotate={65}
          initialValue={initialCharacters[20]}
        />
        <QuizCell
          color={red}
          content="ESS"
          length={60}
          rotate={73}
          initialValue={initialCharacters[21]}
        />
        <QuizCell
          color={blue}
          content="サッカー"
          length={70}
          rotate={60}
          initialValue={initialCharacters[22]}
        />
        <QuizCell
          color={blue}
          content="クイズ"
          length={60}
          rotate={60}
          initialValue={initialCharacters[23]}
        />
        <QuizCell
          color={blue}
          content="数学"
          length={80}
          rotate={75}
          initialValue={initialCharacters[24]}
        />
        <QuizCell
          color={blue}
          content="カジノ"
          length={60}
          rotate={60}
          initialValue={initialCharacters[25]}
        />
        <QuizCell
          color={blue}
          content="アニメ"
          length={70}
          rotate={60}
          initialValue={initialCharacters[26]}
        />
        <QuizCell
          color={blue}
          content="物理"
          length={60}
          rotate={75}
          initialValue={initialCharacters[27]}
        />
        <QuizCell
          color={blue}
          content="地学"
          length={80}
          rotate={70}
          initialValue={initialCharacters[28]}
        />
        <QuizCell
          color={blue}
          content="コナン"
          length={70}
          rotate={70}
          initialValue={initialCharacters[29]}
        />
        <QuizCell
          color={blue}
          content="アマチュア"
          length={80}
          rotate={45}
          initialValue={initialCharacters[30]}
        />
        <p className="text-6xl">?</p>
      </div>

      <div className="my-12 flex w-full text-3xl font-bold">
        <p className="min-w-24">答え</p>
        <input
          className="w-full border-b-2"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>

      <button
        className="mb-6 ml-2 rounded-xl bg-theme p-4 text-3xl text-white"
        onClick={async () => {
          const res = await fetch("/api/quiz-rally", {
            method: "POST",
            body: JSON.stringify({ answer: input }),
          });
          const data = await res.json();
          setResult(data.ok);
        }}
      >
        答えを確認する！
      </button>
      <div className="h-20 text-3xl">
        {result === true && <p>正解です！</p>}
        {result === false && <p>不正解です！</p>}
      </div>
    </main>
  );
}
