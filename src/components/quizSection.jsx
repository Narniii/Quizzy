"use client";

import { Clock3, LineChart, Timer } from "lucide-react";
import ProgressBar from "./progressBar";
import QuestionCard from "./questionCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimeUp from "./timeUp";
import { nextQuestion } from "@/redux/quizSlice";

export default function QuizSection({ setScreen }) {
  const QUESTION_TIME = 30;
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [timerRunning, setTimerRunning] = useState(true);
  const currentQuestion = useSelector((state) => state.quiz.currentQuestion);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeLeft(QUESTION_TIME);
  }, [currentQuestion]);
  useEffect(() => {
    async function getQuestions() {
      try {
        const response = await fetch("/api/questions");

        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }

        const data = await response.json();

        setQuestions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getQuestions();
  }, []);
  const question = questions[currentQuestion];

  useEffect(() => {
    if (loading || !question || !timerRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestion, loading, question, timerRunning]);

  const handleNextQuestion = () => {
    setTimeLeft(QUESTION_TIME);
    setTimerRunning(true);
    dispatch(nextQuestion());
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>Loading questions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>Something went wrong: {error}</p>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>Question not found.</p>
      </div>
    );
  }
  return (
    <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overflow-x-hidden ">
      <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 h-full">
        {/* top content */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-full flex flex-col">
            <p className="text-sm font-medium text-[#A8B4AD]">
              Question {question.id} of {questions.length}
            </p>
            <ProgressBar
              question={question}
              totalQuestions={questions.length}
            />
          </div>
          <div className="flex shrink-0 items-center justify-center gap-2">
            <Clock3 className="text-[#FF8A2A]" size={18} />
            <p className="text-sm sm:text-base">
              00:{String(timeLeft).padStart(2, "0")}
            </p>
          </div>
        </div>
        <QuestionCard
          setTimerRunning={setTimerRunning}
          totalQuestions={questions.length}
          setScreen={setScreen}
          question={question}
          currentQuestion={currentQuestion}
          timeLeft={timeLeft}
          handleNextQuestion={handleNextQuestion}
        />
      </div>
    </div>
  );
}
