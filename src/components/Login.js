"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "@/redux/quizSlice";

export default function Login({ onStart }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [err, setErr] = useState(false);
  const handleStart = () => {
    dispatch(setUsername(name));
    onStart();
  };
  return (
    <div className="flex-1 min-w-0 relative overflow-hidden">
      <div className="flex justify-center items-center mx-auto w-full max-w-4xl px-8 py-10">
        <div className="flex w-full flex-col gap-10 justify-center items-center min-h-[500px] rounded-3xl border border-[#24463A] bg-[#0D211A] p-8 lg:p-10">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your username"
            className="w-full rounded-xl border border-[#24463A] bg-[#0A1C16] px-5 py-4 text-[#F4F1E8] outline-none placeholder:text-[#A8B4AD] transition-all duration-200 focus:border-[#FF8A2A] focus:ring-2 focus:ring-[#FF8A2A]/10"
          />
          {err ? (
            <p className="text-[red]">Please enter a username!</p>
          ) : undefined}
          <button
            onClick={name == "" ? () => setErr(true) : handleStart}
            className="flex items-center justify-center rounded-xl bg-[#FF8A2A] px-6 py-4 font-semibold text-[#06130F] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF9D42]"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
