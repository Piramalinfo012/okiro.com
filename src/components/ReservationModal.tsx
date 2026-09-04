import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, Coffee, CheckCircle, MessageSquare, Phone } from 'lucide-react';
import { OKIRO_INFO } from '../data/okiroData';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    guests: 2,
    seatingPreference: 'Indoor Lounge',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  const getWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
      `Hello Okiro Coffee Roasters, I would like to reserve a table.\n\n` +
      `• Name: ${formData.name}\n` +
      `• Date: ${formData.date}\n` +
      `• Time: ${formData.time}\n` +
      `• Guests: ${formData.guests}\n` +
      `• Seating: ${formData.seatingPreference}\n` +
      (formData.notes ? `• Special Notes: ${formData.notes}` : '')
    );
    return `https://wa.me/917696243008?text=${text}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-[#F9F1DA] bg-grain text-[#171513] shadow-2xl p-6 sm:p-8 border border-[#EDE4D2] max-h-[90vh] overflow-y-auto z-10"
          >
            {/* Close Button */}
            <button
              onClick={resetForm}
              className="absolute top-5 right-5 p-2 rounded-full border border-[#171513]/20 hover:border-[#DD643E] hover:text-[#DD643E] transition-colors"
              aria-label="Close reservation dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#DD643E] font-medium block">
                    Hospitality & Table Inquiries
                  </span>
                  <h3 className="font-serif-luxury text-3xl text-[#171513] mt-1">
                    Book a Table at Okiro
                  </h3>
                  <p className="text-xs text-[#171513]/70 font-light mt-1">
                    VIP Estate, Raipur · Daily 8:00 AM – 11:30 PM
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-[0.2em] text-[#171513]/70 font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDE4D2] focus:border-[#DD643E] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block uppercase tracking-[0.2em] text-[#171513]/70 font-medium mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDE4D2] focus:border-[#DD643E] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-[0.2em] text-[#171513]/70 font-medium mb-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#DD643E]" />
                        <span>Date *</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDE4D2] focus:border-[#DD643E] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block uppercase tracking-[0.2em] text-[#171513]/70 font-medium mb-1 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#DD643E]" />
                        <span>Time *</span>
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDE4D2] focus:border-[#DD643E] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Guests and Seating Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-[0.2em] text-[#171513]/70 font-medium mb-1 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#DD643E]" />
                        <span>Number of Guests</span>
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDE4D2] focus:border-[#DD643E] focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block uppercase tracking-[0.2em] text-[#171513]/70 font-medium mb-1">
                        Seating Preference
                      </label>
                      <select
                        value={formData.seatingPreference}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            seatingPreference: e.target.value as any,
                          })
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDE4D2] focus:border-[#DD643E] focus:outline-none"
                      >
                        <option value="Indoor Lounge">Indoor Lounge</option>
                        <option value="Brew Bar Counter">Brew Bar Counter</option>
                        <option value="Garden Veranda">Garden Veranda</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block uppercase tracking-[0.2em] text-[#171513]/70 font-medium mb-1">
                      Special Requests / Occasion (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Anniversary, quiet work nook, pour-over tasting..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#EDE4D2] focus:border-[#DD643E] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#171513] text-[#F9F1DA] hover:bg-[#DD643E] hover:text-white transition-colors text-xs uppercase tracking-[0.22em] font-medium"
                    >
                      Confirm Table Request
                    </button>
                  </div>
                </form>

                {/* Instant alternative */}
                <div className="mt-4 pt-4 border-t border-[#EDE4D2] flex items-center justify-between text-xs text-[#171513]/70">
                  <span>Prefer direct instant confirmation?</span>
                  <a
                    href={OKIRO_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DD643E] font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp Directly
                  </a>
                </div>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#DD643E]/10 text-[#DD643E] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-serif-luxury text-3xl text-[#171513]">
                  Request Received
                </h3>
                <p className="text-xs sm:text-sm text-[#171513]/80 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="font-medium">{formData.name}</strong>. Your table inquiry for{' '}
                  <strong className="font-medium">{formData.guests} guests</strong> on{' '}
                  <strong className="font-medium">{formData.date} at {formData.time}</strong> has been logged.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-[#DD643E] text-white hover:bg-[#C85331] transition-colors text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <button
                    onClick={resetForm}
                    className="flex-1 py-3 bg-[#171513] text-[#F9F1DA] hover:bg-black transition-colors text-xs uppercase tracking-[0.2em] font-medium"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
