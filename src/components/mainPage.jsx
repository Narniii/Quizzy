"use client";

import Image from "next/image";
import QuizSection from "./quizSection";
import SideBar from "./sideBar";
import { useState } from "react";
import Login from "./Login";
import ResultPage from "./Result";
import Settings from "./settings";
import TimeUp from "./timeUp";
export default function Main() {
  const [screen, setScreen] = useState("login");
  const [quizState, setQuizState] = useState("answering");

  return (
    <div className="w-full h-full overflow-hidden rounded-xl mx-auto max-w-6xl flex border border-[#24463A] bg-[#081811]">
      <SideBar
        onExit={() => setScreen("login")}
        screen={screen}
        onQuiz={() => setScreen("quiz")}
        onSettings={() => setScreen("settings")}
      />

      {screen === "login" && <Login onStart={() => setScreen("quiz")} />}
      {screen === "settings" && <Settings onStart={() => setScreen("quiz")} />}

      {screen === "quiz" && <QuizSection setScreen={setScreen} />}
      {screen === "quiz" && (
        <div className="relative hidden w-30 shrink-0 lg:block">
          <div className="absolute -right-20 top-50 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-[#FF8A2A] hover:scale-110 hover:rotate-6 hover:shadow-[0_0_60px_rgba(255,138,42,0.25)] transition-all duration-200">
            <Image
              className="rounded-2xl hover:scale-110 hover:rotate-6 transition-all duration-200"
              alt="leaves"
              width={200}
              height={200}
              src={"/images/watermarked-leaves.png"}
            />
          </div>
        </div>
      )}
      {screen === "result" && <ResultPage />}
    </div>
  );
}
