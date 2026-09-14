"use client";
import { useDispatch, useSelector } from "react-redux";
import AnswerCard from "./answerCard";
import NextQuestionButton from "./nextQuestionButton";
import {
  incrementScore,
  nextQuestion,
  setSelectedAnswer,
} from "@/redux/quizSlice";
import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import TimeUp from "./timeUp";

export default function QuestionCard({
  totalQuestions,
  question,
  currentQuestion,
  setScreen,
  timeLeft,
}) {
  const [showFeedback, setShowFeedback] = useState(false);
  const selectedAnswer = useSelector((state) => state.quiz.selectedAnswer);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      setError("Please select an answer.");
      return;
    }

    setError("");

    if (selectedAnswer === question.correctAnswer) {
      dispatch(incrementScore());
    }

    setShowFeedback(true);
  };
  const handleContinue = () => {
    setShowFeedback(false);

    if (currentQuestion === totalQuestions - 1) {
      setScreen("result");
      return;
    }
    dispatch(setSelectedAnswer(null));
    dispatch(nextQuestion());
  };
  if (showFeedback) {
    const isCorrect = selectedAnswer === question.correctAnswer;

    return (
      <FeedbackCard
        isCorrect={isCorrect}
        handleContinue={handleContinue}
        question={question}
      />
    );
  }
  if (timeLeft === 0) {
    return <TimeUp handleContinue={handleContinue} />;
  }
  return (
    <div className="flex flex-col justify-between min-h-[500px] mt-8 rounded-3xl border border-[#24463A] bg-[#0D211A] p-8 lg:p-10">
      <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight">
        {question.question}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {question.options.map((option) => {
          // const isSelected = question.correctAnswer === option;

          return (
            <AnswerCard
              key={option}
              option={option}
              selected={selectedAnswer === option}
              onSelect={() => dispatch(setSelectedAnswer(option))}
            />
          );
        })}
      </div>
      {error && (
        <p className="mt-3 text-center text-sm text-[#FF5C5C]">{error}</p>
      )}
      <NextQuestionButton onClick={handleNextQuestion} text={"Check Answer"} />
    </div>
  );
}
