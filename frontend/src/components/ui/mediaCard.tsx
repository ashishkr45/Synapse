import { Video, Reel, XIcon, LinkedInIcon, PinterestIcon, ShareIcon, DeleteIcon } from "../../icons/Icons";
import { CardProps } from "./spaceCard";
import { YouTubeEmbed, InstagramEmbed, XEmbed, LinkedInEmbed, PinterestEmbed } from 'react-social-media-embed';
import { lightPastelColors, darkPastelColors } from "./spaceCard";

export type MediaType = 'youtube' | 'instagram' | 'twitter' | 'linkedin' | 'pinterest';

interface MediaCardProps extends CardProps {
  mediaType: MediaType;
}

const getMediaConfig = (mediaType: MediaType) => {
  switch (mediaType) {
    case 'youtube':
      return {
        icon: Video,
        iconBg: "bg-red-600",
        unavailableText: "YouTube video unavailable"
      };
    case 'instagram':
      return {
        icon: Reel,
        iconBg: "bg-gradient-to-r from-purple-500 to-pink-500",
        unavailableText: "Instagram Reel unavailable"
      };
    case 'twitter':
      return {
        icon: XIcon,
        iconBg: "bg-black",
        unavailableText: "Tweet unavailable"
      };
    case 'linkedin':
      return {
        icon: LinkedInIcon,
        iconBg: "bg-blue-600",
        unavailableText: "LinkedIn post unavailable"
      };
    case 'pinterest':
      return {
        icon: PinterestIcon,
        iconBg: "bg-red-500",
        unavailableText: "Pinterest pin unavailable"
      };
  }
};

const renderEmbed = (mediaType: MediaType, url: string | undefined, unavailableText: string) => {
  if (!url) {
    return (
      <div className="text-gray-400 text-xs text-center py-8 bg-gray-50 rounded-md">
        {unavailableText}
      </div>
    );
  }

  const embedDiv = {
    position: 'relative' as const,
    zIndex: 1,
    overflow: 'hidden',
    pointerEvents: 'none' as const,
    width: '100%',
  };

  const embedProps = {
    url,
    width: '100%',
    height: 'auto',
  };

  switch (mediaType) {
    case 'youtube':
      return (
        <div className="rounded-md overflow-hidden bg-gray-100 w-full">
          <div style={embedDiv}>
            <YouTubeEmbed {...embedProps} />
          </div>
        </div>
      );
    
    case 'instagram':
      return (
        <div className="rounded-md overflow-hidden bg-gray-100 w-full">
          <div style={{
            ...embedDiv,
            height: '370px',  
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            transform: 'scale(2)',
            transformOrigin: 'center center'
          }}>
            <InstagramEmbed 
              {...embedProps} 
              height="100%" 
            />
          </div>
        </div>
      );
    
    case 'twitter':
      return (
        <div className="rounded-md overflow-hidden bg-gray-100 w-full">
          <div style={{...embedDiv,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            transformOrigin: 'center center'
          }}>
            <XEmbed {...embedProps} />
          </div>
        </div>
      );
    
    case 'linkedin':
      return (
        <div className="rounded-md overflow-hidden bg-gray-100 w-full">
          <div style={embedDiv}>
            <LinkedInEmbed {...embedProps} />
          </div>
        </div>
      );
    
    case 'pinterest':
      return (
        <div className="rounded-md overflow-hidden bg-gray-100 w-full">
          <div style={embedDiv}>
            <PinterestEmbed {...embedProps} />
          </div>
        </div>
      );
  }
};

export const MediaEmbedCard = (props: MediaCardProps) => {
  const { title, tags, time, url, mediaType, isDarkMode } = props;
  const { icon: IconComponent, iconBg, unavailableText } = getMediaConfig(mediaType);

  const getTagColor = (index: number, isDarkMode: boolean) => {
    const colors = isDarkMode ? darkPastelColors : lightPastelColors;
    return colors[index % colors.length];
  };

  return (
    <article className={`${isDarkMode ? 'bg-gray-800/30 border-slate-900' : 'bg-white border-gray-200'} break-inside-avoid rounded-xl border shadow-sm hover:shadow-2xl transition-all duration-300 w-full mb-4`}>
      <div className="p-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 flex-1 min-w-0 pr-2">
            <div className={`w-6 h-6 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}>
              <IconComponent size="md" color="#ffffff" />
            </div>
            <span className={`${isDarkMode ? 'text-gray-50' : 'text-gray-900'} text-sm font-medium truncate`}>{title}</span>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors flex items-center justify-center">
              <ShareIcon size="md" color="#646b76" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors flex items-center justify-center">
              <DeleteIcon size="md" color="#646b76" />
            </button>
          </div>
        </div>

        {/* Media Embed - using the same approach as your working Card */}
        <div className="mb-3 w-full">
          <div className="text-sm overscroll-x-none overflow-hidden rounded-xl">
            {renderEmbed(mediaType, url, unavailableText)}
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-2">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className={`${getTagColor(index, isDarkMode)} px-2 py-0.5 rounded-2xl text-xs font-medium`}
                >
                  {tag}
                </span>
              ))}
              <span className={`${isDarkMode ? 'text-white bg-stone-700 border-stone-900' : 'text-gray-500 bg-slate-200 border-stone-600'} text-xs px-2 py-0.5 rounded-2xl font-medium`}>
                {new Date(time).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

// Legacy exports for backward compatibility
export const YouTubeCard = (props: CardProps) => (
  <MediaEmbedCard {...props} mediaType="youtube" />
);

export const ReelsCard = (props: CardProps) => (
  <MediaEmbedCard {...props} mediaType="instagram" />
);

export const TweetCard = (props: CardProps) => (
  <MediaEmbedCard {...props} mediaType="twitter" />
);

export const LinkedInCard = (props: CardProps) => (
  <MediaEmbedCard {...props} mediaType="linkedin" />
);

export const PinterestCard = (props: CardProps) => (
  <MediaEmbedCard {...props} mediaType="pinterest" />
);