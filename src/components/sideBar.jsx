import { CircleHelp, LogOut, Settings } from "lucide-react";
import Image from "next/image";

export default function SideBar({ onExit, screen, onQuiz, onSettings }) {
  const isLoggedIn = screen === "quiz" || screen === "settings";

  return (
    <aside
      className="
        shrink-0 border-[#24463A] bg-[#0D211A]

        /* mobile */
        flex h-16 w-full flex-row items-center justify-between
        border-b px-4

        /* tablet */
        sm:h-screen sm:w-30 sm:flex-col sm:justify-start sm:border-b-0
        sm:border-r sm:px-3 sm:py-5

        /* desktop */
        lg:w-64 lg:px-6 lg:py-6 lg:h-full
      "
    >
      {/* Logo */}
      <div
        className="
          flex items-center

          sm:mb-8
          lg:flex-col lg:items-start lg:mb-12 lg:w-full
        "
      >
        <div className="text-2xl font-bold tracking-tight text-[#FF8A2A]">
          Quizzy
        </div>

        <p className="hidden lg:block mt-1">
          small questions, <br />
          big knowledge.
        </p>
      </div>

      {/* Navigation */}
      {isLoggedIn && (
        <nav
          className="
            flex gap-1

            sm:flex-col sm:w-full sm:gap-2 

            lg:my-12
          "
        >
          {/* Quiz */}
          <button
            onClick={onQuiz}
            className={`
              flex cursor-pointer items-center justify-center
              rounded-3xl p-3 transition-all duration-200

              lg:justify-start lg:gap-3 lg:px-4 lg:py-3

              ${
                screen === "quiz"
                  ? "bg-[#FF8A2A]/10 text-[#FF8A2A]"
                  : "text-[#A8B4AD] hover:bg-[#132A21] hover:text-[#F4F1E8]"
              }
            `}
          >
            <CircleHelp size={20} />

            <span className="hidden lg:block text-sm font-semibold">Quiz</span>
          </button>

          {/* Settings */}
          <button
            onClick={onSettings}
            className={`
              flex cursor-pointer items-center justify-center
              rounded-3xl p-3 transition-all duration-200

              lg:justify-start lg:gap-3 lg:px-4 lg:py-3

              ${
                screen === "settings"
                  ? "bg-[#FF8A2A]/10 text-[#FF8A2A]"
                  : "text-[#A8B4AD] hover:bg-[#132A21] hover:text-[#F4F1E8]"
              }
            `}
          >
            <Settings size={20} />

            <span className="hidden lg:block text-sm font-semibold">
              Settings
            </span>
          </button>

          {/* Exit */}
          <button
            onClick={onExit}
            className="
              flex cursor-pointer items-center justify-center
              rounded-3xl p-3 text-[#A8B4AD]
              transition-all duration-200
              hover:bg-[#132A21] hover:text-[#F4F1E8]

              lg:justify-start lg:gap-3 lg:px-4 lg:py-3
            "
          >
            <LogOut size={20} />

            <span className="hidden lg:block text-sm font-semibold">Exit</span>
          </button>
        </nav>
      )}

      {/* Decoration */}
      {/* <div className="relative hidden flex-1 w-full lg:block">
        <div className="absolute -right-6 top-1/2 h-[160px] w-[160px] -translate-y-1/2 rounded-full bg-[#FF8A2A] transition-all duration-200 hover:scale-110 hover:rotate-6 hover:shadow-[0_0_60px_rgba(255,138,42,0.25)]">
          <Image
            className="rounded-2xl transition-all duration-300 hover:scale-110 hover:rotate-6"
            alt="leaves"
            width={160}
            height={160}
            src="/images/watermarked-leaves.png"
          />
        </div>
      </div> */}
    </aside>
  );
}
