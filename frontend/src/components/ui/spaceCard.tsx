import { ShareIcon, DeleteIcon, FileIcon, QuoteIcon, BookmarkIcon, CodeIcon, CalendarIcon, } from "../../icons/Icons";
import { IconProps } from "../../icons";
import { z } from "zod";
import { MediaEmbedCard, MediaType } from "./mediaCard";
import { extractEmbedType } from "../../utility/embedId";
import { NoteCard } from "./noteCade";

export const contentTypes = z.enum([
  "link",
  "document",
  "code",
  "note",
  "quote",
  "event",
  "bookmark",
]);

export interface CardProps {
  type: z.infer<typeof contentTypes>;
  title: string;
  tags: string[];
  time: Date | string;
  notes?: string;
  url?: string;
  isDarkMode: boolean;
  onDelete?: () => void;
}

export const lightPastelColors = [
  "bg-pink-100 text-pink-700 border-pink-200",
  "bg-blue-100 text-blue-700 border-blue-200",
  "bg-green-100 text-green-700 border-green-200",
  "bg-yellow-100 text-yellow-700 border-yellow-200",
  "bg-purple-100 text-purple-700 border-purple-200",
  "bg-indigo-100 text-indigo-700 border-indigo-200",
  "bg-red-100 text-red-700 border-red-200",
  "bg-orange-100 text-orange-700 border-orange-200",
  "bg-teal-100 text-teal-700 border-teal-200",
  "bg-cyan-100 text-cyan-700 border-cyan-200",
];

export const darkPastelColors = [
  "bg-pink-900/30 text-pink-300 border-pink-800/50",
  "bg-blue-900/30 text-blue-300 border-blue-800/50",
  "bg-green-900/30 text-green-300 border-green-800/50",
  "bg-yellow-900/30 text-yellow-300 border-yellow-800/50",
  "bg-purple-900/30 text-purple-300 border-purple-800/50",
  "bg-indigo-900/30 text-indigo-300 border-indigo-800/50",
  "bg-red-900/30 text-red-300 border-red-800/50",
  "bg-orange-900/30 text-orange-300 border-orange-800/50",
  "bg-teal-900/30 text-teal-300 border-teal-800/50",
  "bg-cyan-900/30 text-cyan-300 border-cyan-800/50",
];

const typeIcons: Record<string, React.FC<IconProps>> = {
  document: FileIcon,
  code: CodeIcon,
  quote: QuoteIcon,
  event: CalendarIcon,
  bookmark: BookmarkIcon,
  note: FileIcon,
  link: FileIcon,
};

export const Card = (props: CardProps) => {
  const { type, title, tags, time, url, notes, isDarkMode } = props;

  if (type === "note") {
    return (
      <NoteCard
        title={title}
        tags={tags}
        time={time}
        notes={notes}
        isDarkMode={isDarkMode}
      />
    );
  }

  if (type === "link" && url) {
    const mediaType = extractEmbedType(url);
    if (mediaType) {
      return (
        <MediaEmbedCard
          type={type}
          title={title}
          tags={tags}
          time={time}
          url={url}
          mediaType={mediaType as MediaType}
          isDarkMode={isDarkMode}
        />
      );
    }

    return (
      <DefaultCard
        type={type}
        title={title}
        tags={tags}
        time={time}
        content={url}
        isDarkMode={isDarkMode}
        isLink
      />
    );
  }

  return (
    <DefaultCard
      type={type}
      title={title}
      tags={tags}
      time={time}
      content={notes || "No content available."}
      isDarkMode={isDarkMode}
      onDelete={props.onDelete} 
    />
  );
};

interface DefaultCardProps {
  type: string;
  title: string;
  tags: string[];
  time: Date | string;
  content?: string;
  isDarkMode: boolean;
  isLink?: boolean;
  onDelete?: () => void;
}

const DefaultCard = ({
  type,
  title,
  tags,
  time,
  content,
  isDarkMode,
  isLink,
  onDelete
}: DefaultCardProps) => {
  const getTagColor = (index: number) => {
    const colors = isDarkMode ? darkPastelColors : lightPastelColors;
    return colors[index % colors.length];
  };

  const Icon = typeIcons[type] || FileIcon;

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
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center ${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <Icon size="sm" color={isDarkMode ? "#e5e7eb" : "#4b5563"} />
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
            <button className="p-1.5 hover:bg-gray-700/20 rounded"
              onClick={onDelete}
            >
              <DeleteIcon size="md" color={isDarkMode ? "#a1a1aa" : "#6b7280"} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          className={`text-sm mb-3 leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {isLink ? (
            <a
              href={content}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline break-all"
            >
              {content}
            </a>
          ) : (
            <p className="whitespace-pre-line">
              {content || "No content available."}
            </p>
          )}
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

        {/* Subtype Label */}
        <div
          className={`mt-3 text-[11px] font-medium uppercase tracking-wide ${
            isDarkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {type || "default"}
        </div>
      </div>
    </article>
  );
};
