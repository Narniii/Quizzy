
"use client";

import { Clock3, LineChart, Timer } from "lucide-react";
import ProgressBar from "./progressBar";
import QuestionCard from "./questionCard";
import questions from "@/data/questions.json";
import { useState } from "react";

export default function QuizSection({ onNextQuestion, onCorrect, onWrong }) {
  const [selected, setSelected] = useState(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion];
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelected(null);
    }
  };

  return (
    <div className="flex-1 min-w-0 relative overflow-hidden">
      <div className="flex flex-col justify-center mx-auto w-full max-w-4xl px-8 py-10">
        {/* top content */}
        <div className="gap-5 flex items-center justify-between">
          <div className="w-full flex flex-col">
            <p className="text-sm font-medium text-[#A8B4AD]">
              Question {question.id} of {question.total}
            </p>
            <ProgressBar question={question} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock3 className="text-[#FF8A2A]" />
            <p>00:24</p>
          </div>
        </div>
        <QuestionCard
          onSelect={setSelected}
          selected={selected}
          question={question}
          onNext={handleNextQuestion}
        />
      </div>
    </div>
  );
}
