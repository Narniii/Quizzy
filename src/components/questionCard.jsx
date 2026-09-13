"use client";
import AnswerCard from "./answerCard";
import NextQuestionButton from "./nextQuestionButton";

export default function QuestionCard({ question, onNext, selected, onSelect }) {
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
              // isSelected={isSelected}
              selected={selected === option}
              onSelect={() => onSelect(option)}
            />
          );
        })}
      </div>
      <NextQuestionButton onClick={onNext} />
    </div>
  );
}
