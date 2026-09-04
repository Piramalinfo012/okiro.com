import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Instagram, Clock, ExternalLink } from 'lucide-react';
import { OKIRO_INFO } from '../data/okiroData';

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="py-24 sm:py-32 lg:py-36 bg-[#F9F1DA] bg-grain text-[#171513] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Location, Hours & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Label */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#DD643E]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#DD643E] font-medium">
                Destination Raipur
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#171513] font-normal leading-tight">
              COME FIND US.
            </h2>

            <div className="w-12 h-[2px] bg-[#DD643E] my-6" />

            {/* Business Details Card */}
            <div className="space-y-6 text-[#171513]">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#DD643E] font-semibold block mb-2">
                  OKIRO COFFEE ROASTERS
                </span>
                <address className="not-italic text-sm sm:text-base text-[#171513]/85 leading-relaxed font-light space-y-0.5">
                  <p>VIP Estate, A-25,</p>
                  <p>Khamardih Road,</p>
                  <p>Beside CRPF, VIP Colony,</p>
                  <p>Raipur, Chhattisgarh 492001,</p>
                  <p className="font-normal text-[#171513]">India</p>
                </address>
              </div>

              {/* Opening Hours Box */}
              <div className="p-5 bg-white/70 border border-[#EDE4D2] space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#DD643E] font-medium">
                  <Clock className="w-4 h-4" />
                  <span>OPENING HOURS</span>
                </div>
                <div className="flex items-baseline justify-between text-sm sm:text-base">
                  <span className="text-[#171513]/70 font-light">Everyday (Mon – Sun):</span>
                  <span className="font-serif-luxury text-lg text-[#171513] font-medium">
                    8:00 AM – 11:30 PM
                  </span>
                </div>
                <p className="text-[11px] text-[#171513]/60 pt-1 border-t border-[#EDE4D2]">
                  Last kitchen & brew bar order: 11:30 PM daily.
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={OKIRO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 min-w-[140px] px-5 py-3.5 bg-[#171513] text-[#F9F1DA] hover:bg-[#DD643E] hover:text-white transition-all text-center text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#DD643E] group-hover:text-white transition-colors" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${OKIRO_INFO.phone}`}
                  className="flex-1 min-w-[130px] px-5 py-3.5 bg-white border border-[#171513]/20 hover:border-[#DD643E] hover:text-[#DD643E] text-[#171513] transition-colors text-center text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>

                <a
                  href={OKIRO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] px-5 py-3.5 bg-white border border-[#171513]/20 hover:border-[#DD643E] hover:text-[#DD643E] text-[#171513] transition-colors text-center text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Embedded Interactive Map & Spatial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border border-[#EDE4D2] bg-[#EDE4D2] shadow-[0_15px_40px_rgba(23,21,19,0.06)]">
              <iframe
                title="Okiro Coffee Roasters Location Map"
                src="https://maps.google.com/maps?q=VIP+Estate+A-25+Khamardih+Road+beside+CRPF+Raipur+Chhattisgarh+492001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(0.95)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Verified Location Pin Overlay */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 bg-[#171513]/95 backdrop-blur-md text-[#FFFDF8] border border-white/10 shadow-lg pointer-events-none">
                <div className="flex items-center gap-2 mb-1 text-[9px] uppercase tracking-[0.25em] text-[#DD643E] font-medium">
                  <MapPin className="w-3 h-3" />
                  <span>Specialty Roastery</span>
                </div>
                <h4 className="font-serif-luxury text-base text-[#FFFDF8]">
                  Okiro Coffee Roasters
                </h4>
                <p className="text-[11px] text-[#EDE4D2]/70 mt-1 font-light leading-snug">
                  VIP Estate, Khamardih Road, beside CRPF, Raipur
                </p>
              </div>
            </div>

            {/* Subtle Landmark Footnote */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#171513]/60 px-1">
              <span>Valet & Dedicated Parking Available</span>
              <span>Central India Roastery Hub</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
