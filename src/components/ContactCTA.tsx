import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { OKIRO_INFO } from '../data/okiroData';

interface ContactCTAProps {
  onOpenReservation: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenReservation }) => {
  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-36 bg-[#171513] text-[#FFFDF8] relative overflow-hidden">
      {/* Subtle Grain Background */}
      <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#DD643E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#DD643E]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#DD643E] font-medium">
            Hospitality & Reservations
          </span>
        </motion.div>

        {/* Large Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl text-[#FFFDF8] font-normal leading-[0.98] tracking-tight"
        >
          MAKE TIME
          <br />
          <span className="italic font-light text-[#F9F1DA]">FOR COFFEE.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-[#EDE4D2]/80 max-w-xl mx-auto font-light leading-relaxed"
        >
          Whether meeting friends, working quietly over a pour-over, or sharing fresh viennoiserie,
          we look forward to welcoming you to VIP Estate.
        </motion.p>

        {/* Action Buttons as requested */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Button 1: BOOK A TABLE */}
          <button
            onClick={onOpenReservation}
            className="group px-7 py-4 bg-[#DD643E] hover:bg-[#C85331] text-white transition-all duration-300 text-xs uppercase tracking-[0.24em] font-medium flex items-center gap-2.5 shadow-[0_10px_30px_rgba(221,100,62,0.3)]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Table</span>
          </button>

          {/* Button 2: CALL OKIRO */}
          <a
            href={`tel:${OKIRO_INFO.phone}`}
            className="group px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-[#FFFDF8] border border-white/25 hover:border-white/50 transition-all duration-300 text-xs uppercase tracking-[0.24em] font-medium flex items-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-[#DD643E]" />
            <span>Call Okiro</span>
          </a>

          {/* Button 3: WHATSAPP US */}
          <a
            href={OKIRO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-[#FFFDF8] border border-white/25 hover:border-white/50 transition-all duration-300 text-xs uppercase tracking-[0.24em] font-medium flex items-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4 text-[#DD643E]" />
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Small verified info note */}
        <div className="mt-8 text-xs text-[#EDE4D2]/50 tracking-wider">
          Direct Line: {OKIRO_INFO.phoneDisplay} · Open Daily 8:00 AM – 11:30 PM
        </div>
      </div>
    </section>
  );
};
