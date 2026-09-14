"use client";
import { ArrowRight } from "lucide-react";

export default function NextQuestionButton({ onClick, text }) {
  return (
    <div className="mt-8 flex justify-end">
      <button
        onClick={onClick}
        className="flex items-center gap-2 rounded-3xl bg-[#FF8A2A] px-6 py-3 font-semibold text-[#06130F] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF9D42]"
      >
        {text}
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
