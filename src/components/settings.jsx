"use client";

import { useState } from "react";

export default function Settings({ onStart }) {
  const [name, setName] = useState("");
  const [err, setErr] = useState(false);
  return (
    <div className="flex-1 min-w-0 relative overflow-hidden">
      <div className="flex flex-col justify-center mx-auto w-full max-w-4xl px-8 py-10">
        <div className="flex items-center justify-between">
          <div className="w-full flex flex-col">
            <h2 className="font-medium text-[#A8B4AD] mb-8">
              What do you want to change?
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-col gap-10 justify-center items-center min-h-[500px] rounded-3xl border border-[#24463A] bg-[#0D211A] p-8 lg:p-10">
          <button
            onClick={onStart}
            className="flex items-center justify-center rounded-xl bg-[#FF8A2A] px-6 py-4 font-semibold text-[#06130F] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF9D42]"
          >
            Back to Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
