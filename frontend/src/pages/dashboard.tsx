import { useState } from 'react';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';
import { Card } from '../components/ui/spaceCard';
import CreateContentModel from '../components/createContentModel';
import DashNavigation from '../components/dashNevBar';
import { CardSkeleton } from '../components/ui/CardSkeleton';

const contentFormSchema = z.object({
  type: z.enum([
    "article", "tweet", "link", "document", "youtube", 
    "code", "thread", "note", "quote", "event", 
    "bookmark", "post", "reel",
  ]),
  title: z.string(),
  link: z.string().optional(),
  note: z.string().optional(),
  tags: z.array(z.string()),
});
export type ContentFormData = z.infer<typeof contentFormSchema>;


const fetchUserContent = async () => {
  const token = localStorage.getItem('app_token');
  if (!token) throw new Error("Authentication token not found, please log in again!");

  const response = await axios.get('http://localhost:3000/api/content/board', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data.content;
};

const createNewContent = async (newContentData: ContentFormData) => {
  const token = localStorage.getItem('app_token');
  if (!token) throw new Error("No authorization token found.");

  const response = await axios.post('http://localhost:3000/api/content/board', newContentData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};


interface DashboardProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function Dashboard({ isDarkMode, toggleDarkMode }: DashboardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: content, isLoading, isError } = useQuery({
    queryKey: ['userContent'],
    queryFn: fetchUserContent,
  });

  const createContentMutation = useMutation({
    mutationFn: createNewContent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userContent'] });
    },
  });
  
  const handleCreateContent = (data: ContentFormData) => {
    createContentMutation.mutate(data);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#282828]' : 'bg-[#eaeaea]'} transition-all ease-linear duration-300 pl-4 pr-4`}>
      <DashNavigation
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onAddContentClick={() => setModalOpen(true)}
      />
      
      <CreateContentModel
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        isDarkMode={isDarkMode}
        onSubmit={handleCreateContent}
      />

      <div className="p-4 pt-24">
        {isLoading && 
          <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-2'>
            {Array.from({ length: 8 }).map((_, index) => (
              <CardSkeleton key={index} isDarkMode={isDarkMode} />
            ))}
          </div>
        }
        {isError && <p className="text-red-500">Error fetching your content.</p>}
        
        {content && (
          <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 max-w-[95%] mx-auto'>
            {content.map((item: any) => (
              <div 
                key={item._id}
                className="break-inside-avoid mb-4"
                style={{ 
                  breakInside: 'avoid',
                  pageBreakInside: 'avoid',
                  display: 'inline-block',
                  width: '100%'
                }}
              >
                <Card
                  type={item.type}
                  title={item.title}
                  tags={item.tags.map((tag: any) => tag.title)}
                  time={new Date(item.createdAt)}
                  url={item.link}
                  isDarkMode={isDarkMode}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;