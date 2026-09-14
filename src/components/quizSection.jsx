"use client";

import { Clock3, LineChart, Timer } from "lucide-react";
import ProgressBar from "./progressBar";
import QuestionCard from "./questionCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TimeUp from "./timeUp";

export default function QuizSection({ setScreen }) {
  const QUESTION_TIME = 30;
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const currentQuestion = useSelector((state) => state.quiz.currentQuestion);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    if (loading || !question) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestion, loading, question]);

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
    <div className="flex-1 min-w-0 relative overflow-hidden">
      <div className="flex flex-col justify-center mx-auto w-full max-w-4xl px-8 py-10">
        {/* top content */}
        <div className="gap-5 flex items-center justify-between">
          <div className="w-full flex flex-col">
            <p className="text-sm font-medium text-[#A8B4AD]">
              Question {question.id} of {questions.length}
            </p>
            <ProgressBar question={question} totalQuestions={questions.length}/>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock3 className="text-[#FF8A2A]" />
            <p>00:{String(timeLeft).padStart(2, "0")}</p>
          </div>
        </div>
        <QuestionCard
          totalQuestions={questions.length}
          setScreen={setScreen}
          question={question}
          currentQuestion={currentQuestion}
          timeLeft={timeLeft}
        />
      </div>
    </div>
  );
}
