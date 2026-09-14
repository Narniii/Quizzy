"use client";

import Image from "next/image";
import QuizSection from "./quizSection";
import SideBar from "./sideBar";
import { useState } from "react";
import Login from "./Login";
import ResultPage from "./Result";
import Settings from "./settings";
import { useDispatch } from "react-redux";
import { resetQuiz } from "@/redux/quizSlice";

export default function Main() {
  const [screen, setScreen] = useState("login");
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetQuiz());
    setScreen("login");
  };

  return (
    <div className="mx-auto flex flex-col sm:flex-row h-screen w-full max-w-6xl overflow-hidden border border-[#24463A] bg-[#081811] lg:my-6 lg:h-[90vh] lg:min-h-[700px] lg:rounded-xl">
      {/* Sidebar */}
      <SideBar
        onExit={handleLogout}
        screen={screen}
        onQuiz={() => setScreen("quiz")}
        onSettings={() => setScreen("settings")}
      />
      {/* Main content */}
      <main className="flex min-h-0 min-w-0 flex-1">
        {screen === "login" && <Login onStart={() => setScreen("quiz")} />}

        {screen === "settings" && (
          <Settings onStart={() => setScreen("quiz")} />
        )}

        {screen === "quiz" && <QuizSection setScreen={setScreen} />}

        {screen === "result" && <ResultPage />}
      </main>
      {/* Decorative leaves */}
      {screen === "quiz" && (
        <div className="relative hidden w-30 shrink-0 lg:block">
          <div className="absolute -right-20 top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-[#FF8A2A] transition-all duration-200 hover:scale-110 hover:rotate-6 hover:shadow-[0_0_60px_rgba(255,138,42,0.25)]">
            <Image
              className="rounded-2xl transition-all duration-200 hover:scale-110 hover:rotate-6"
              alt="leaves"
              width={200}
              height={200}
              src="/images/watermarked-leaves.png"
            />
          </div>
        </div>
      )}
    </div>
  );
}
