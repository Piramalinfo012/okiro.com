/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { ToonhubFoodHero } from './components/ToonhubFoodHero';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { Experience } from './components/Experience';
import { MenuSection } from './components/MenuSection';
import { CoffeeSection } from './components/CoffeeSection';
import { SpaceSection } from './components/SpaceSection';
import { InstagramGrid } from './components/InstagramGrid';
import { Reviews } from './components/Reviews';
import { VisitSection } from './components/VisitSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { FullMenuModal } from './components/FullMenuModal';
import { ReservationModal } from './components/ReservationModal';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [heroMode, setHeroMode] = useState<'food' | 'figurines'>('food');

  return (
    <div className="relative min-h-screen bg-[#F9F1DA] text-[#171513] font-sans antialiased selection:bg-[#DD643E] selection:text-[#FFFDF8]">
      {/* Luxury Loading Screen */}
      <LoadingScreen />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Header
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenMenuModal={() => setIsMenuModalOpen(true)}
        heroMode={heroMode}
        onToggleHeroMode={() => setHeroMode((prev) => (prev === 'food' ? 'figurines' : 'food'))}
      />

      {/* Main Content Sections */}
      <main>
        {/* Full-Viewport 3D Food & Figurine Hero Carousel as requested */}
        <section id="hero" className="w-full">
          <ToonhubFoodHero
            mode={heroMode}
            onToggleMode={() => setHeroMode((prev) => (prev === 'food' ? 'figurines' : 'food'))}
            onExploreClick={() => setIsMenuModalOpen(true)}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        </section>

        {/* Section 2: Brand Philosophy */}
        <BrandStory />

        {/* Section 3: Signature Experience with Interactive 3D Cards */}
        <Experience onOpenMenuModal={() => setIsMenuModalOpen(true)} />

        {/* Section 4: What's Brewing (Menu) */}
        <MenuSection onOpenFullMenu={() => setIsMenuModalOpen(true)} />

        {/* Section 5: Signature Coffee */}
        <CoffeeSection />

        {/* Section 6: The Space */}
        <SpaceSection />

        {/* Section 7: Instagram Feed Grid */}
        <InstagramGrid />

        {/* Section 8: Reviews / Social Proof */}
        <Reviews />

        {/* Section 9: Come Find Us (Location & Hours) */}
        <VisitSection />

        {/* Section 10: Make Time For Coffee (Hospitality CTA) */}
        <ContactCTA onOpenReservation={() => setIsReservationOpen(true)} />
      </main>

      {/* Section 11: Dark Charcoal Footer */}
      <Footer
        onOpenMenuModal={() => setIsMenuModalOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomNav
        onOpenMenu={() => setIsMenuModalOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Full Menu Interactive Modal / Drawer */}
      <FullMenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        onReserveTable={() => {
          setIsMenuModalOpen(false);
          setIsReservationOpen(true);
        }}
      />

      {/* Table Reservation Dialog Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
