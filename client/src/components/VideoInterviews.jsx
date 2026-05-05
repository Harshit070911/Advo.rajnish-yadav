import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const VideoInterviews = ({ videos = [] }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (videoId) => {
    setActiveVideo(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  if (!videos || videos.length === 0) return null;

  // The specific layout spans requested in the UI snippet
  const getColSpan = (index) => {
    if (index % 4 === 0) return "md:col-span-4";
    if (index % 4 === 1) return "md:col-span-8";
    if (index % 4 === 2) return "md:col-span-8";
    if (index % 4 === 3) return "md:col-span-4";
    return "md:col-span-12";
  };

  return (
    <section className="mx-auto w-full text-slate-100">
      <div className="grid grid-cols-12 gap-6">
        {videos.map((video, index) => (
          <BounceCard 
            key={index} 
            className={`col-span-12 ${getColSpan(index)}`}
            onClick={() => openVideo(video.id)}
          >
            <CardTitle>{video.title}</CardTitle>
            
            <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 overflow-hidden rounded-t-2xl bg-slate-900 border border-white/10 p-2 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[1deg] shadow-2xl group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100 group-hover:mix-blend-normal"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-slate-950/60 backdrop-blur-sm border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] transition-transform duration-300 group-hover:scale-110 shadow-lg group-hover:bg-[#d4af37] group-hover:text-slate-950">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                </div>
              </div>

            </div>
          </BounceCard>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-[#d4af37] transition-colors z-50 p-2 bg-white/10 rounded-full"
              onClick={closeVideo}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-[#d4af37]/30"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const BounceCard = ({ className, children, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.96, rotate: "-0.5deg" }}
      className={cn(
        "group relative min-h-[350px] cursor-pointer overflow-hidden rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/5 p-6 shadow-xl",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="text-xl md:text-2xl font-serif font-semibold text-slate-100 pr-8 line-clamp-2">
      {children}
    </h3>
  );
};

export default VideoInterviews;
