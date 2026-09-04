import React from 'react';
import { ArrowUp, Instagram, MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { OkiroLogo } from './OkiroLogo';
import { OKIRO_INFO } from '../data/okiroData';

interface FooterProps {
  onOpenMenuModal?: () => void;
  onOpenReservation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMenuModal, onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171513] text-[#FFFDF8] border-t border-white/10 pt-18 sm:pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Okiro Logo in elegant dark treatment */}
              <div className="mb-6">
                <OkiroLogo theme="dark" size="lg" showSubtitle={true} />
              </div>

              <p className="text-sm text-[#EDE4D2]/80 max-w-sm font-light leading-relaxed">
                Central India’s premier specialty coffee destination and roastery. Dedicated to
                ethical sourcing from India’s heartlands, artisanal craft baking, and mindful architectural hospitality.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-[#DD643E] font-medium tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DD643E]" />
                <span>100% Pure Vegetarian Craft Kitchen</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={OKIRO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#DD643E] hover:text-[#DD643E] flex items-center justify-center transition-colors text-white/80"
                aria-label="Okiro Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={OKIRO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#DD643E] hover:text-[#DD643E] flex items-center justify-center transition-colors text-white/80"
                aria-label="Okiro Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>

              <a
                href={`tel:${OKIRO_INFO.phone}`}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#DD643E] hover:text-[#DD643E] flex items-center justify-center transition-colors text-white/80"
                aria-label="Call Okiro"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#DD643E] font-medium block">
              Navigation
            </span>
            <ul className="space-y-3 text-xs uppercase tracking-[0.2em] font-light text-[#EDE4D2]/80">
              <li>
                <a href="#hero" className="hover:text-[#DD643E] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#DD643E] transition-colors">Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DD643E] transition-colors">About & Philosophy</a>
              </li>
              <li>
                <a href="#coffee" className="hover:text-[#DD643E] transition-colors">Specialty Coffee</a>
              </li>
              <li>
                <a href="#space" className="hover:text-[#DD643E] transition-colors">The Architectural Space</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#DD643E] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#DD643E] transition-colors">Visit Raipur</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#DD643E] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Hours */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#DD643E] font-medium block">
              Sanctuary Details
            </span>

            <div className="space-y-3 text-[#EDE4D2]/80 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#DD643E] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  VIP Estate, A-25, Khamardih Road,
                  <br />
                  Beside CRPF, VIP Colony,
                  <br />
                  Raipur, Chhattisgarh 492001, India
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Clock className="w-4 h-4 text-[#DD643E] shrink-0" />
                <span>Open Daily: 8:00 AM – 11:30 PM</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#DD643E] shrink-0" />
                <a href={`tel:${OKIRO_INFO.phone}`} className="hover:text-white transition-colors">
                  {OKIRO_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-3">
                <a
                  href={OKIRO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#DD643E] hover:underline font-medium"
                >
                  <span>Follow @okiro.coffee</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#EDE4D2]/60">
          <p>© 2026 Okiro Coffee Roasters. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#EDE4D2]/40">
              Raipur · Chhattisgarh · India
            </span>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 text-xs text-[#FFFDF8] hover:text-[#DD643E] transition-colors"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
