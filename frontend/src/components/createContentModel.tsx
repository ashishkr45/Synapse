import { useState } from "react";
import { CrossIcon, AddIcon, ChevronDownIcon } from "../icons/Icons";
import { Button } from "./ui/button";
import { z } from "zod";
import { ContentFormData } from "../pages/dashboard";

interface CreateContentModelProps {
  open: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onSubmit: (data: ContentFormData) => void;
}

// --- ZOD TYPES ---
export const contentTypes = z.enum([
  "link",
  "code",
  "note",
  "quote",
  "event",
  "bookmark",
]);
type ContentType = z.infer<typeof contentTypes>;


// --- MAIN COMPONENT ---
const CreateContentModel = ({ open, onClose, isDarkMode, onSubmit }: CreateContentModelProps) => {
  const [selectedType, setSelectedType] = useState<ContentType | "">("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [note, setNote] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const pastelColors = [
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

  const getTagColor = (index: number) => {
    return pastelColors[index % pastelColors.length];
  };

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const handleSubmit = () => {
    const newErrors: string[] = [];

    if (!selectedType) newErrors.push("Please select a content type");
    if (!title.trim()) newErrors.push("Please enter a title");
    if (selectedType === "link" && !link.trim()) newErrors.push("Please enter a link");
    if (selectedType && selectedType !== "link" && !note.trim()) newErrors.push("Please enter your note");
    
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    onSubmit({
      type: selectedType as ContentType,
      title: title.trim(),
      link: link ? link.trim() : undefined,
      note: note ? note.trim() : undefined,
      tags: tags.filter(tag => tag.trim() !== "")
    });

    // Reset form state
    setSelectedType("");
    setTitle("");
    setLink("");
    setNote("");
    setTags([]);
    setCurrentTag("");
    onClose();
  };
  
  const formatTypeName = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  if (!open) {
    return null;
  }

  return (
    <div className={`fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 ${isDarkMode ? 'bg-black/30' : 'bg-white/30'}`} onClick={onClose}>
      <div 
        className={`rounded-2xl shadow-lg w-full max-w-xl p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create Content</h2>
          <button onClick={onClose}>
            <CrossIcon 
              size="md"
              color={isDarkMode ? 'ffffff' : '000000'}  
            />
          </button>
        </div>

        <div className="space-y-4">
          {/* Content Type Dropdown */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Content Type *</label>
            <Dropdown
              value={selectedType}
              onChange={setSelectedType}
              options={contentTypes.options.map(type => ({
                value: type,
                label: formatTypeName(type)
              }))}
              placeholder="Select content type"
              isDarkMode={isDarkMode}
            />
          </div>
          
          {/* Title Input */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Title *</label>
            <Input 
              placeholder="Enter title" 
              value={title}
              onChange={(value) => setTitle(value)} 
              isDarkMode={isDarkMode}
            />
          </div>

          {selectedType === "link" && (
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Link *</label>
              <Input 
                placeholder="https://example.com" 
                value={link}
                onChange={(value) => setLink(value)}  
                isDarkMode={isDarkMode}
              />
            </div>
          )}
    
          {selectedType && selectedType !== "link" && (
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Note *</label>
              <textarea
                placeholder="Enter note here..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className={`w-full border p-2 rounded-md min-h-[100px] resize-y ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
              />
            </div>
          )}
    
          {/* Tags Input */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tags</label>
            <div className="flex gap-2 mb-2">
              <Input 
                placeholder="Add tag and press Enter" 
                value={currentTag}
                onChange={(value) => setCurrentTag(value)}
                onKeyPress={handleKeyPress}
                isDarkMode={isDarkMode}
              />
              <Button
                variant="secondary"
                size="sm"
                innerText="Add"
                onClick={addTag}
              />
            </div>
            
            {/* Display Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`${getTagColor(index)} px-3 py-1 rounded-full text-sm border flex items-center gap-2 font-medium`}
                  >
                    <span className="truncate max-w-[200px]" title={tag}>
                      {tag}
                    </span>
                    <button 
                      onClick={() => removeTag(tag)}
                      className="hover:opacity-70 font-bold text-lg leading-none"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
    
          <div className="flex justify-end mt-6">
            <Button
              variant="primary"
              size="sm"
              innerText="Create Content"
              icon={<AddIcon size='md' color="#fff"/>}
              onClick={handleSubmit}
            />
          </div>
    
          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-md">
              <div className="text-red-700 text-sm space-y-1 font-medium">
                {errors.map((error, index) => (
                  <div key={index}>- {error}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


interface InputProps {
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  isDarkMode: boolean;
}

function Input({ onChange, placeholder, value, onKeyPress, isDarkMode }: InputProps) {
  // 2. Add conditional styling
  const themeClasses = isDarkMode 
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
    : "bg-white border-gray-300 text-black";

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${themeClasses}`}
    />
  );
}

// Dropdown component
interface DropdownProps<T = string> {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  placeholder: string;
  isDarkMode: boolean; // 1. Add isDarkMode to props
}

function Dropdown<T extends string>({ value, onChange, options, placeholder, isDarkMode }: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  // 2. Add conditional styling for the button and panel
  const buttonThemeClasses = isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300";
  const panelThemeClasses = isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200";
  const optionThemeClasses = isDarkMode ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-100";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center ${buttonThemeClasses}`}
      >
        <span className={value ? (isDarkMode ? "text-white" : "text-gray-900") : "text-gray-500"}>
          {value ? options.find(opt => opt.value === value)?.label : placeholder}
        </span>
        <ChevronDownIcon size="sm" />
      </button>

      {isOpen && (
        <div className={`absolute z-10 w-full mt-1 border rounded-md shadow-lg max-h-60 overflow-auto ${panelThemeClasses}`}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left focus:outline-none ${optionThemeClasses}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CreateContentModel;