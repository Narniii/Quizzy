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
import { Check, CheckCircle, X, XCircle } from "lucide-react";

export default function FeedbackCard({ isCorrect, question, handleContinue }) {
  return (
    <>
      {isCorrect ? (
        <div className="mt-6 flex min-h-0 flex-col items-center justify-between rounded-3xl border border-[#24463A] bg-[#0D211A] p-5 sm:mt-8 sm:p-7 lg:p-10">
          <CheckCircle stroke="green" width={100} height={100} />
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight">
            Correct!
          </h1>
          <p>Great job! Your answer is correct.</p>

          <NextQuestionButton onClick={handleContinue} text={"Next Question"} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 min-h-[500px] mt-8 rounded-3xl border border-[#24463A] bg-[#0D211A] p-8 lg:p-10">
          <XCircle stroke="red" width={100} height={100} />

          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[red]">
            Wrong!
          </h1>
          <p>The correct answer is {question.correctAnswer}.</p>

          <NextQuestionButton onClick={handleContinue} text={"Next Question"} />
        </div>
      )}
    </>
  );
}
