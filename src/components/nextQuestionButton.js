
"use client";
import { ArrowRight } from "lucide-react";

export default function NextQuestionButton({ onClick }) {
  return (
    <div className="mt-8 flex justify-end">
      <button
        onClick={onClick}
        className="flex items-center gap-2 rounded-3xl bg-[#FF8A2A] px-6 py-3 font-semibold text-[#06130F] shadow-lg shadow-[#FF8A2A]/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF9D42]"
      >
        <ArrowRight />
        <p>Next Question</p>
      </button>
    </div>
  );
}
