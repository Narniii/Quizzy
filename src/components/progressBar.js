export default function ProgressBar({ question }) {
  return (
    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#1A3028]">
      <div
        style={{
          width: `${(question.id / question.total) * 100}%`,
        }}
        className="h-full rounded-full bg-[#FF8A2A] transition-all duration-300"
      />
    </div>
  );
}
