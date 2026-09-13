import { CircleHelp, Leaf, LogOut, Settings } from "lucide-react";
import Image from "next/image";

export default function SideBar({ onExit, screen, onQuiz, onSettings }) {
  return (
    <div className="w-64 shrink-0 flex flex-col border-r border-[#24463A] bg-[#0D211A] p-6">
      <div className="flex items-left gap-3 mb-12 flex-col ">
        <div className="text-2xl font-bold tracking-tight text-[#FF8A2A]">
          Quizzy
        </div>
        <p>
          small questions, <br /> big knowledge.
        </p>
      </div>

      {/* loggedIn nav */}
      {screen == "quiz" || screen == "settings" ? (
        <div className="flex flex-col gap-2 my-12">
          <div
            onClick={onQuiz}
            className={`cursor-pointer flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
              screen == "quiz"
                ? "bg-[#FF8A2A]/10 text-[#FF8A2A]"
                : "text-[#A8B4AD] hover:bg-[#132A21] hover:text-[#F4F1E8]"
            }`}
          >
            <CircleHelp />
            <p>Quiz</p>
          </div>
          <div
            onClick={onSettings}
            className={`cursor-pointer flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
              screen == "settings"
                ? "bg-[#FF8A2A]/10 text-[#FF8A2A]"
                : "text-[#A8B4AD] hover:bg-[#132A21] hover:text-[#F4F1E8]"
            }`}
          >
            <Settings />
            <p>Settings</p>
          </div>
          <div
            onClick={onExit}
            className="cursor-pointer flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold text-[#A8B4AD] transition-all duration-200 hover:bg-[#132A21] hover:text-[#F4F1E8]"
          >
            <LogOut />
            <p>Exit</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 my-12 h-[160px]" />
      )}

      {/* decoration */}
      <div className="relative hidden w-30 shrink-0 lg:block">
        <div className="absolute -right-0 top-50 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-[#FF8A2A] hover:scale-110 hover:rotate-6 hover:shadow-[0_0_60px_rgba(255,138,42,0.25)] transition-all duration-200">
          <Image
            className="rounded-2xl hover:scale-110 hover:rotate-6 transition-all duration-300"
            alt="leaves"
            width={200}
            height={200}
            src={"/images/watermarked-leaves.png"}
          />
        </div>
      </div>
    </div>
  );
}
