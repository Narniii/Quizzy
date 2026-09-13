"use client";
export default function AnswerCard({ option, selected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
        selected
          ? "border-[#FF8A2A] bg-[#FF8A2A]/10"
          : "border-[#24463A] bg-[#0A1C16] hover:border-[#FF8A2A] hover:bg-[#132A21]"
      }`}
    >
      <div
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? "border-[#FF8A2A]" : "border-[#A8B4AD]"
        }`}
      >
        {selected && <div className="h-3 w-3 rounded-full bg-[#FF8A2A]" />}
      </div>

      <span>{option}</span>
    </button>
  );
}
