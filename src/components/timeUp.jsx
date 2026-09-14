"use client";
import { useDispatch, useSelector } from "react-redux";
import AnswerCard from "./answerCard";
import NextQuestionButton from "./nextQuestionButton";
import {
  incrementScore,
  nextQuestion,
  setSelectedAnswer,
} from "@/redux/quizSlice";
import { useState } from "react";
import { Check, CheckCircle, Timer, X, XCircle } from "lucide-react";

export default function TimeUp({ handleContinue }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-[500px] mt-8 rounded-3xl border border-[#24463A] bg-[#0D211A] p-8 lg:p-10">
      <Timer stroke="red" width={100} height={100} />
      <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight">
        Your time is up!
      </h1>
      <p>You didn't get this question in time</p>

      <NextQuestionButton onClick={handleContinue} text={"Next Question"} />
    </div>
  );
}
