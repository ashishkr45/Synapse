import { IconProps, IconSizeVariants } from ".";

export const AddIcon = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	</svg>
);

export const ShareIcon = ({ size, color = "#d87656" }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
    strokeWidth={1.5} 
    stroke={color} 
    className={`${IconSizeVariants[size]} hover:stroke-blue-500 transition-colors duration-200 cursor-pointer`}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" 
    />
  </svg>
);


export const ChevronDownIcon = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
		strokeWidth={1.5} stroke={color} 
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
	</svg>
);

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
	<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17 "
    height="17"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.479l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z"></path>
  </svg>
);

export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// Pinterest Icon
export const PinterestIcon = ({ size, color = "#74777d" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24"
    className={IconSizeVariants[size]}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.02.024.025.058.018.09-.105.437-.336 1.342-.383 1.529-.059.24-.192.29-.443.175-1.672-.776-2.712-3.213-2.712-5.174 0-4.212 3.057-8.08 8.826-8.08 4.637 0 8.244 3.307 8.244 7.728 0 4.611-2.907 8.315-6.947 8.315-1.355 0-2.632-.706-3.068-1.548 0 0-.672 2.563-.835 3.194-.302 1.163-1.117 2.625-1.666 3.516C9.247 23.859 10.578 24.029 12.017 24.029c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.12.017 0z"/>
  </svg>
);

export const DeleteIcon = ({ size, color = "#6b7280" }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
    strokeWidth={1.5} 
    stroke="currentColor"
    className={`${IconSizeVariants[size]} text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer`}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" 
    />
  </svg>
);

export const Docx = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
	</svg>
);

export const Video = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M10 15.5V8.5l6 3.5-6 3.5z" />
		<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25v7.5a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
	</svg>
);

export const Reel = ({ size, color = "#74777d" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.5} stroke={color}
    className={IconSizeVariants[size]}>
    {/* Outer rectangle */}
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Play button */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 9.5v5l4-2.5-4-2.5z" />
    
    {/* Film strip circles (optional aesthetic touch) */}
    <circle cx="7" cy="7" r="0.5" fill="#74777d" />
    <circle cx="11" cy="7" r="0.5" fill="#74777d" />
    <circle cx="15" cy="7" r="0.5" fill="#74777d" />
    <circle cx="17" cy="7" r="0.5" fill="#74777d" />
  </svg>
);

export const CrossIcon = ({ size, color }: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className={`${IconSizeVariants[size]} cursor-pointer text-[#${color}] hover:text-red-500 transition-colors duration-200`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
);

export const HamBurger = ({ size, color = "#74777d" }: IconProps) => (
	<svg 
		xmlns="http://www.w3.org/2000/svg" 
		fill="none" 
		viewBox="0 0 24 24" 
		strokeWidth={1.5} 
		stroke={color} 
		className={IconSizeVariants[size]}>
  		<path 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
	</svg>
);

export const Links = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
	</svg>
);

export const Hash = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
	</svg>
);

// 🗂️ Generic File Icon
export const FileIcon = ({ size, color = "#74777d" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    className={IconSizeVariants[size]}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 2.25H14.25L20.25 8.25V21a.75.75 0 01-.75.75H9A1.5 1.5 0 017.5 20.25V3.75A1.5 1.5 0 019 2.25z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 2.25V8.25H20.25"
    />
  </svg>
);

// 💬 Quote Icon
export const QuoteIcon = ({ size, color = "#74777d" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    className={IconSizeVariants[size]}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 8.25h4.5v7.5H6a3 3 0 003-3v-4.5zm9 0h4.5v7.5H15a3 3 0 003-3v-4.5z"
    />
  </svg>
);

// 🔖 Bookmark Icon
export const BookmarkIcon = ({ size, color = "#74777d" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    className={IconSizeVariants[size]}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 3.75h12a.75.75 0 01.75.75V21l-6-3-6 3V4.5a.75.75 0 01.75-.75z"
    />
  </svg>
);

// 🧠 Code Icon
export const CodeIcon = ({ size, color = "#74777d" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    className={IconSizeVariants[size]}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 8.25l5.25 3.75-5.25 3.75m-9-7.5L2.25 12l5.25 3.75m3.75 5.25l2.25-15"
    />
  </svg>
);

// 📅 Calendar / Event Icon
export const CalendarIcon = ({ size, color = "#74777d" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    className={IconSizeVariants[size]}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 001.5-1.5V7.5H3v12A1.5 1.5 0 004.5 21zM8.25 11.25h.008v.008H8.25v-.008zm0 3h.008v.008H8.25v-.008zm3-3h.008v.008H11.25v-.008zm0 3h.008v.008H11.25v-.008zm3-3h.008v.008H14.25v-.008zm0 3h.008v.008H14.25v-.008z"
    />
  </svg>
);
