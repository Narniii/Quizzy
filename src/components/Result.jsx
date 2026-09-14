import { useSelector } from "react-redux";
import questions from "@/data/questions.json";
export default function Result() {
  const username = useSelector((state) => state.quiz.username);
  const score = useSelector((state) => state.quiz.score);

  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="w-full flex items-center justify-center bg-[#07130f] px-4">
      <div className="w-full my-12 max-w-lg rounded-3xl bg-[#10231c] p-10 text-center shadow-xl">
        <h1 className="mb-3 text-4xl font-bold text-white">Quiz Completed!</h1>

        <p className="mb-8 text-gray-400">Well done, {username}!</p>

        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Your Score
          </p>

          <p className="mt-2 text-6xl font-bold text-orange-400">
            {score}
            <span className="text-2xl text-gray-500">/{totalQuestions}</span>
          </p>
        </div>

        <div className="mb-8">
          <p className="text-2xl font-semibold text-white">{percentage}%</p>

          <p className="mt-2 text-gray-400">
            {percentage >= 80
              ? "Excellent job! 🎉"
              : percentage >= 60
                ? "Good job! Keep going! 👏"
                : "Keep practicing! 💪"}
          </p>
        </div>

        <button
          className="w-full rounded-3xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
