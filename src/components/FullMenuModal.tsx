import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Coffee, Utensils, Sparkles, Snowflake, Cake, Download, ExternalLink } from 'lucide-react';
import { MENU_ITEMS, OKIRO_INFO } from '../data/okiroData';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserveTable?: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({ isOpen, onClose, onReserveTable }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = [
    { id: 'all', label: 'ALL ITEMS' },
    { id: 'coffee', label: 'SPECIALTY COFFEE' },
    { id: 'signatures', label: 'SIGNATURE CREATIONS' },
    { id: 'cold', label: 'COLD BREWS & ICED' },
    { id: 'food', label: 'CRAFT KITCHEN' },
    { id: 'desserts', label: 'DESSERTS & BAKERY' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedFilter === 'all' || item.category === selectedFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl h-full bg-[#F9F1DA] bg-grain text-[#171513] shadow-2xl flex flex-col z-10"
          >
            {/* Drawer Header */}
            <div className="p-6 sm:p-8 border-b border-[#EDE4D2] flex items-center justify-between bg-[#F9F1DA]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#DD643E] font-medium block">
                  Okiro Coffee Roasters · Raipur
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#171513] mt-1">
                  The Complete Menu
                </h2>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-[#171513]/20 hover:border-[#DD643E] hover:text-[#DD643E] flex items-center justify-center transition-colors"
                aria-label="Close menu drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search and Filters */}
            <div className="p-6 border-b border-[#EDE4D2] space-y-4 bg-[#F9F1DA]/60">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#171513]/40" />
                <input
                  type="text"
                  placeholder="Search single origins, dishes, brew methods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white/80 border border-[#EDE4D2] focus:border-[#DD643E] focus:outline-none placeholder:text-[#171513]/40"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {filterOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedFilter(opt.id)}
                    className={`px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors border ${
                      selectedFilter === opt.id
                        ? 'bg-[#171513] text-[#F9F1DA] border-[#171513]'
                        : 'bg-white/40 text-[#171513]/70 border-[#EDE4D2] hover:bg-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
              {filteredItems.length === 0 ? (
                <div className="py-16 text-center text-[#171513]/60">
                  <p className="font-serif-luxury text-xl">No selections found matching your search.</p>
                  <p className="text-xs mt-2">Try clearing your search query or selecting another category.</p>
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="pb-6 border-b border-[#EDE4D2]/60 last:border-none group"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif-luxury text-xl sm:text-2xl text-[#171513]">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <span className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 bg-[#DD643E] text-white font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="font-serif-luxury text-lg text-[#171513] font-medium">
                        {item.price}
                      </span>
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-[#171513]/70 font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {item.notes && (
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#DD643E] font-medium">
                          {item.notes}
                        </span>
                      )}
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 bg-[#EDE4D2]/50 text-[#171513]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-6 border-t border-[#EDE4D2] bg-[#F9F1DA] flex flex-col sm:flex-row gap-3 items-center justify-between">
              <span className="text-[11px] text-[#171513]/60">
                100% Vegetarian · Plant-based milk options available
              </span>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={OKIRO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none text-center px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium bg-[#171513] text-[#F9F1DA] hover:bg-[#DD643E] transition-colors"
                >
                  WhatsApp Inquiries
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
