import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Clock, MapPin, Phone, Utensils, Sparkles } from 'lucide-react';
import { OkiroLogo } from './OkiroLogo';
import { OKIRO_INFO } from '../data/okiroData';

interface HeaderProps {
  onOpenReservation?: () => void;
  onOpenMenuModal?: () => void;
  heroMode?: 'food' | 'figurines';
  onToggleHeroMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenReservation,
  onOpenMenuModal,
  heroMode = 'food',
  onToggleHeroMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'MENU', href: '#menu', isSpecialAction: true },
    { label: 'ABOUT', href: '#about' },
    { label: 'COFFEE', href: '#coffee' },
    { label: 'SPACE', href: '#space' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isSpecialAction?: boolean) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isSpecialAction && onOpenMenuModal && href === '#menu-modal') {
      onOpenMenuModal();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F9F1DA]/92 backdrop-blur-md border-b border-[#EDE4D2] py-3.5 shadow-[0_4px_24px_rgba(23,21,19,0.04)]'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 lg:py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Okiro Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center transition-transform duration-300 active:scale-95"
            aria-label="Okiro Coffee Roasters Home"
          >
            <OkiroLogo
              theme={isScrolled ? 'light' : 'dark'}
              size="md"
              showSubtitle={true}
            />
          </a>

          {/* Center/Right Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[11px] uppercase tracking-[0.24em] font-medium transition-colors duration-300 relative py-1 group ${
                  isScrolled
                    ? 'text-[#171513]/85 hover:text-[#DD643E]'
                    : 'text-[#FFFDF8]/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#DD643E] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Mode Toggle, Visit Us Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {onToggleHeroMode && (
              <button
                onClick={onToggleHeroMode}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium transition-all duration-300 rounded-full border shadow-sm ${
                  isScrolled
                    ? 'bg-white text-[#171513] border-[#EDE4D2] hover:border-[#DD643E]'
                    : 'bg-black/30 backdrop-blur-md text-white border-white/30 hover:bg-black/45'
                }`}
                title="Toggle between Food and 3D Figurines collection"
              >
                {heroMode === 'food' ? (
                  <>
                    <Utensils className="w-3 h-3 text-[#DE623E]" />
                    <span>Food Edition</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3 h-3 text-[#DE623E]" />
                    <span>3D Edition</span>
                  </>
                )}
              </button>
            )}

            <button
              onClick={() => {
                const target = document.querySelector('#visit');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
                else if (onOpenReservation) onOpenReservation();
              }}
              className={`hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300 border rounded-sm ${
                isScrolled
                  ? 'bg-[#171513] text-[#F9F1DA] border-[#171513] hover:bg-[#DD643E] hover:border-[#DD643E]'
                  : 'bg-white/15 backdrop-blur-md text-[#FFFDF8] border-white/30 hover:bg-[#DD643E] hover:border-[#DD643E] hover:text-white'
              }`}
            >
              <span>Visit Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? 'text-[#171513]' : 'text-white'
              }`}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#171513] text-[#F9F1DA] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <OkiroLogo theme="dark" size="sm" showSubtitle={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#F9F1DA] transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="my-8 flex flex-col space-y-5" aria-label="Mobile Navigation">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="group flex items-baseline justify-between py-1 border-b border-white/5 hover:border-[#DD643E]/50 transition-colors"
                >
                  <span className="font-serif-luxury text-3xl sm:text-4xl text-[#F9F1DA] group-hover:text-[#DD643E] transition-colors">
                    {link.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#EDE4D2]/40 font-mono">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom Info inside Drawer */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-start gap-2.5 text-xs text-[#EDE4D2]/80">
                <MapPin className="w-4 h-4 text-[#DD643E] shrink-0 mt-0.5" />
                <span>{OKIRO_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EDE4D2]/80">
                <Clock className="w-4 h-4 text-[#DD643E] shrink-0" />
                <span>Open Daily: {OKIRO_INFO.hours.timing}</span>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${OKIRO_INFO.phone}`}
                  className="flex-1 py-3 text-center text-xs uppercase tracking-[0.2em] font-medium bg-white/10 hover:bg-white/20 text-[#FFFDF8] border border-white/20 transition-colors"
                >
                  Call Roastery
                </a>
                <a
                  href="#visit"
                  onClick={(e) => handleNavClick(e, '#visit')}
                  className="flex-1 py-3 text-center text-xs uppercase tracking-[0.2em] font-medium bg-[#DD643E] hover:bg-[#C85331] text-white transition-colors"
                >
                  Find Us in Raipur
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
