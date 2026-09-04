import React from 'react';
import { Utensils, Phone, Navigation, Calendar } from 'lucide-react';
import { OKIRO_INFO } from '../data/okiroData';

interface MobileBottomNavProps {
  onOpenMenu: () => void;
  onOpenReservation: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenMenu,
  onOpenReservation,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#171513]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 shadow-[0_-5px_25px_rgba(0,0,0,0.4)]">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5 text-[#FFFDF8]">
        {/* Button 1: MENU */}
        <button
          onClick={onOpenMenu}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-sm hover:bg-white/10 transition-colors"
        >
          <Utensils className="w-4 h-4 text-[#DD643E]" />
          <span className="text-[9px] uppercase tracking-[0.2em] font-medium mt-1">
            Menu
          </span>
        </button>

        {/* Button 2: CALL */}
        <a
          href={`tel:${OKIRO_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-sm hover:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#DD643E]" />
          <span className="text-[9px] uppercase tracking-[0.2em] font-medium mt-1">
            Call
          </span>
        </a>

        {/* Button 3: DIRECTIONS */}
        <a
          href={OKIRO_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-sm hover:bg-white/10 transition-colors"
        >
          <Navigation className="w-4 h-4 text-[#DD643E]" />
          <span className="text-[9px] uppercase tracking-[0.2em] font-medium mt-1">
            Directions
          </span>
        </a>

        {/* Button 4: BOOK / VISIT */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-sm bg-[#DD643E] text-white hover:bg-[#C85331] transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[9px] uppercase tracking-[0.2em] font-medium mt-1">
            Reserve
          </span>
        </button>
      </div>
    </div>
  );
};
