interface CardSkeletonProps {
  isDarkMode: boolean;
}

export const CardSkeleton = ({ isDarkMode }: CardSkeletonProps) => {
  const baseBg = isDarkMode ? "bg-gray-800/30 border-slate-900" : "bg-white border-gray-200";
  const pulseBg = isDarkMode ? "bg-gray-700/60" : "bg-gray-200";

  return (
    <article
      className={`rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 animate-pulse ${baseBg} w-full mb-4`}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full ${pulseBg}`} />
            <div className={`h-4 w-32 rounded ${pulseBg}`} />
          </div>

          <div className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-md ${pulseBg}`} />
            <div className={`w-5 h-5 rounded-md ${pulseBg}`} />
          </div>
        </div>

        {/* Body */}
        <div className="space-y-2 mb-4">
          <div className={`h-3 w-full rounded ${pulseBg}`} />
          <div className={`h-3 w-5/6 rounded ${pulseBg}`} />
          <div className={`h-3 w-3/4 rounded ${pulseBg}`} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className={`h-5 w-16 rounded-full ${pulseBg}`} />
          <div className={`h-5 w-14 rounded-full ${pulseBg}`} />
          <div className={`h-5 w-12 rounded-full ${pulseBg}`} />
        </div>

        {/* Footer Type Label */}
        <div className={`h-3 w-20 rounded ${pulseBg}`} />
      </div>
    </article>
  );
};
