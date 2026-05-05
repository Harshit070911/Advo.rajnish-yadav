import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedCards = ({ cards = [], limit = 3 }) => {
  const displayCards = cards.slice(0, limit);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayCards.map((card, index) => (
        <motion.div
          key={index}
          className="group relative flex flex-col rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#d4af37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.03, y: -5 }}
        >
          {card.image && (
            <div className="h-48 w-full overflow-hidden">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          )}
          
          <div className="flex flex-col flex-grow p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                {card.source || card.category}
              </span>
              <span className="flex items-center gap-1 text-slate-400 text-xs">
                <Calendar size={12} /> {card.date}
              </span>
            </div>
            
            <h3 className="font-serif text-xl font-semibold text-slate-50 mb-3 line-clamp-2">
              {card.title}
            </h3>
            
            <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
              {card.description || card.excerpt}
            </p>
            
            <Link 
              to={card.link || "/blog"} 
              className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-300 group-hover:text-[#d4af37]"
            >
              Read More <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedCards;
