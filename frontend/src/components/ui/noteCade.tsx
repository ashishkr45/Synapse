import { Docx, ShareIcon, DeleteIcon } from "../../icons/Icons";
import { darkPastelColors, lightPastelColors } from "./spaceCard";

interface NoteCardProps {
  title: string;
  tags: string[];
  time: Date | string;
  notes: string | undefined;
  isDarkMode: boolean;
}

export const NoteCard = ({ title, tags, time, notes, isDarkMode }: NoteCardProps) => {
  const getTagColor = (index: number) => {
    const colors = isDarkMode ? darkPastelColors : lightPastelColors;
    return colors[index % colors.length];
  };

  return (
    <article
      className={`${
        isDarkMode
          ? "bg-gray-800/30 border-slate-900 text-gray-50"
          : "bg-white border-gray-200 text-gray-900"
      } break-inside-avoid rounded-xl border shadow-sm hover:shadow-2xl transition-all duration-300 w-full mb-4`}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center ${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <Docx size="sm" color={isDarkMode ? "#e5e7eb" : "#4b5563"} />
            </div>
            <h3
              className={`text-sm font-semibold truncate ${
                isDarkMode ? "text-gray-50" : "text-gray-900"
              }`}
              title={title}
            >
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 hover:bg-gray-700/20 rounded">
              <ShareIcon size="md" color={isDarkMode ? "#a1a1aa" : "#6b7280"} />
            </button>
            <button className="p-1.5 hover:bg-gray-700/20 rounded">
              <DeleteIcon size="md" color={isDarkMode ? "#a1a1aa" : "#6b7280"} />
            </button>
          </div>
        </div>

        {/* Notes Body */}
        <div
          className={`text-sm mb-4 leading-relaxed whitespace-pre-line ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {notes?.trim() ? notes : <span className="italic text-gray-400">No notes added...</span>}
        </div>

        {/* Footer */}
        <div className="space-y-2">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`${getTagColor(
                    index,
                  )} px-2 py-0.5 rounded-2xl text-xs font-medium`}
                >
                  {tag}
                </span>
              ))}
              <span
                className={`${
                  isDarkMode
                    ? "text-gray-300 bg-stone-700 border-stone-900"
                    : "text-gray-500 bg-slate-200 border-stone-600"
                } text-xs px-2 py-0.5 rounded-2xl font-medium`}
              >
                {new Date(time).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
