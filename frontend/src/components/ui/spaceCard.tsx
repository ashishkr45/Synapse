import { ShareIcon, DeleteIcon} from "../../icons/Icons";
import { z } from "zod";
import { MediaEmbedCard, MediaType } from "./mediaCard";
import { extractEmbedType } from "../../utility/embedId";

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
  notes?: string,
  url?: string;
  isDarkMode: boolean;
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
  "bg-cyan-100 text-cyan-700 border-cyan-200"
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
  "bg-cyan-900/30 text-cyan-300 border-cyan-800/50"
];

export const Card = (props: CardProps) => {
  const { type, title, tags, time, url, isDarkMode} = props;

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

    const getTagColor = (index: number, isDarkMode: boolean) => {
      const colors = isDarkMode ? darkPastelColors : lightPastelColors;
      return colors[index % colors.length];
    };

  // Default card for other types - using consistent styling
  return (
    <div className={`${isDarkMode ? 'bg-white border-gray-200' : 'bg-gray-800 border-y-gray-950'} break-inside-avoid rounded-lg border p-2 w-full h-fit shadow-sm hover:shadow-md transition-shadow`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
            {/* {renderTypeIcon(type)} */}
          </div>
          <span className="text-sm font-medium text-gray-900 truncate">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ShareIcon size="sm" color="#9ca3af" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <DeleteIcon size="sm" color="#9ca3af" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="mb-3">
        <div className="text-gray-400 text-xs text-center py-4">
          Content type not supported
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 space-y-1">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`${getTagColor(index, isDarkMode)} px-3 py-1 rounded-full text-sm border flex items-center gap-2 font-medium`}
                      >
                        <span className="truncate max-w-[200px]" title={tag}>
                          {tag}
                        </span>
                      </span>
                    ))}
                  </div>
          )}
          <div className="bg-slate-300 text-gray-700 border-slate-600 px-3 py-1 rounded-full text-sm border truncate max-w-[100px] font-medium">{new Date(time).toLocaleDateString()}</div>
        </div>
    </div>
  );
  };
}
