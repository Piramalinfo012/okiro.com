import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

// 4 Food Items with exact palette and transparent PNG cutouts
const FOOD_IMAGES = [
  {
    src: '/images/food/1.burger.png',
    bg: '#F4845F',
    panel: '#F79B7F',
    title: 'BRIOCHE SMASH BURGER',
    ghostText: 'CRAFT FOOD',
    description:
      'The artwork is stunning, shipped fully prepared. The finish is a vision, the culinary craft is flawless. Many thanks! Wishing you the win. Order now.',
  },
  {
    src: '/images/food/2.dal.png',
    bg: '#54825C',
    panel: '#6D9E75',
    title: 'ARTISANAL DAL TADKA',
    ghostText: 'HERITAGE',
    description:
      'Aromatic red and yellow lentils simmered in rustic earthen clay with golden cumin tadka, fresh cilantro, and warm spices. Order now.',
  },
  {
    src: '/images/food/3.coffee.png',
    bg: '#B27D56',
    panel: '#8F5E3B',
    title: 'SIGNATURE FLAT WHITE',
    ghostText: 'ROASTERY',
    description:
      'Masterfully pulled double espresso blended with micro-textured silky milk, delicate latte art, and single-origin roasted beans. Order now.',
  },
  {
    src: '/images/food/4.pizza.png',
    bg: '#547285',
    panel: '#3C5463',
    title: 'NEAPOLITAN WOODFIRED',
    ghostText: 'GOURMET',
    description:
      'Hand-stretched cold-fermented sourdough baked at 900°F with blistered crust, sweet San Marzano tomatoes, buffalo mozzarella, and fresh garden basil. Order now.',
  },
];

// Original 3D Character Figurine Dataset
const FIGURINE_IMAGES = [
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    bg: '#F4845F',
    panel: '#F79B7F',
    title: 'TOONHUB FIGURINES',
    ghostText: '3D SHAPE',
    description:
      'The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.',
  },
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
    bg: '#6BBF7A',
    panel: '#85CC92',
    title: 'TOONHUB FIGURINES',
    ghostText: '3D SHAPE',
    description:
      'The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.',
  },
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png',
    bg: '#E882B4',
    panel: '#ED9DC4',
    title: 'TOONHUB FIGURINES',
    ghostText: '3D SHAPE',
    description:
      'The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.',
  },
  {
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    bg: '#6EB5FF',
    panel: '#8DC4FF',
    title: 'TOONHUB FIGURINES',
    ghostText: '3D SHAPE',
    description:
      'The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.',
  },
];

interface ToonhubFoodHeroProps {
  onExploreClick?: () => void;
  onOpenReservation?: () => void;
  mode?: 'food' | 'figurines';
  onToggleMode?: () => void;
}

export const ToonhubFoodHero: React.FC<ToonhubFoodHeroProps> = ({
  onExploreClick,
  onOpenReservation,
  mode: propMode,
  onToggleMode,
}) => {
  const [internalMode, setInternalMode] = useState<'food' | 'figurines'>('food');
  const mode = propMode ?? internalMode;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const isAnimatingRef = useRef(isAnimating);
  isAnimatingRef.current = isAnimating;

  // GSAP animation refs
  const containerRef = useRef<HTMLDivElement>(null);
  const bgOverlayRef = useRef<HTMLDivElement>(null);
  const ghostTextRef = useRef<HTMLSpanElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);
  const carouselItemsRef = useRef<HTMLDivElement>(null);
  const prevModeRef = useRef<string>(mode);

  const currentDataset = useMemo(() => {
    return mode === 'food' ? FOOD_IMAGES : FIGURINE_IMAGES;
  }, [mode]);

  const activeItem = currentDataset[activeIndex];

  // GSAP smooth crossfade and background color transitions
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Seamless background color crossfade using GSAP power2 interpolation
      gsap.to(containerRef.current, {
        backgroundColor: activeItem.bg,
        duration: 0.75,
        ease: 'power2.inOut',
        overwrite: 'auto',
      });

      // 2. Ambient radial glow pulse
      if (bgOverlayRef.current) {
        gsap.fromTo(
          bgOverlayRef.current,
          { opacity: 0.25 },
          { opacity: 0.45, duration: 0.75, ease: 'sine.inOut', yoyo: true, repeat: 1, overwrite: 'auto' }
        );
      }

      // 3. Crisp 3D Watermark text entrance with spatial depth & perspective
      if (ghostTextRef.current) {
        gsap.fromTo(
          ghostTextRef.current,
          {
            opacity: 0,
            y: 28,
            rotationX: 28,
            z: -70,
            scale: 0.94,
            filter: 'blur(4px)',
          },
          {
            opacity: isMobile ? 0.9 : 0.95,
            y: 0,
            rotationX: 0,
            z: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.75,
            ease: 'power3.out',
            overwrite: 'auto',
          }
        );
      }

      // 4. Bottom-left card text crossfade
      if (textCardRef.current) {
        gsap.fromTo(
          textCardRef.current,
          { opacity: 0.45, y: 6 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', overwrite: 'auto' }
        );
      }

      // 5. Crossfade carousel items container if mode switched
      if (prevModeRef.current !== mode && carouselItemsRef.current) {
        gsap.fromTo(
          carouselItemsRef.current,
          { opacity: 0.25, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out', overwrite: 'auto' }
        );
        prevModeRef.current = mode;
      }

      // 6. Active center image smooth settle without layout flickering
      const centerItemImg = containerRef.current?.querySelector('.carousel-center-item img');
      if (centerItemImg) {
        gsap.fromTo(
          centerItemImg,
          { opacity: 0.75, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.65, ease: 'power2.out', overwrite: 'auto' }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex, mode, activeItem.bg, isMobile]);

  // Preload all 4 images on mount
  useEffect(() => {
    [...FOOD_IMAGES, ...FIGURINE_IMAGES].forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, []);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carousel navigation logic with 600ms lock
  const navigate = useCallback(
    (direction: 'next' | 'prev') => {
      if (isAnimatingRef.current) return;
      setIsAnimating(true);
      if (direction === 'next') {
        setActiveIndex((prev) => (prev + 1) % 4);
      } else {
        setActiveIndex((prev) => (prev + 3) % 4);
      }
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    },
    []
  );

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft') navigate('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  // Pinned Wheel Scroll Navigation:
  // Intercept scroll down so all 4 images (01, 02, 03, 04) are revealed first!
  // Only after reaching the 4th item (slide index 3), subsequent downward scroll continues down the page.
  useEffect(() => {
    let lastScrollTime = 0;

    const handleWheel = (e: WheelEvent) => {
      // If user has already scrolled down past the hero, allow normal scrolling everywhere
      if (window.scrollY > 20) return;

      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 15) return;

      const now = Date.now();

      if (delta > 0) {
        // User scrolling DOWN
        if (activeIndexRef.current < 3) {
          // Prevent window scroll until all 4 images have been shown!
          e.preventDefault();

          if (now - lastScrollTime >= 550 && !isAnimatingRef.current) {
            lastScrollTime = now;
            setIsAnimating(true);
            setActiveIndex((prev) => Math.min(prev + 1, 3));
            setTimeout(() => {
              setIsAnimating(false);
            }, 600);
          }
        } else {
          // activeIndex === 3 (Last dish revealed!):
          // DO NOT call e.preventDefault() -> Page smoothly scrolls down to the rest of the site!
        }
      } else if (delta < 0) {
        // User scrolling UP while at top of page
        if (window.scrollY <= 10 && activeIndexRef.current > 0) {
          e.preventDefault();

          if (now - lastScrollTime >= 550 && !isAnimatingRef.current) {
            lastScrollTime = now;
            setIsAnimating(true);
            setActiveIndex((prev) => Math.max(prev - 1, 0));
            setTimeout(() => {
              setIsAnimating(false);
            }, 600);
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Touch swipe gesture support on mobile with pinned scroll behavior
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let lastTouchTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.scrollY > 20) return;
      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const diffY = touchStartY - currentY; // positive = swipe up = scroll down
      const diffX = touchStartX - currentX;

      // When vertical swipe is dominant and not all items shown, prevent page scroll
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 8) {
        if (diffY > 0 && activeIndexRef.current < 3) {
          if (e.cancelable) e.preventDefault();
        } else if (diffY < 0 && activeIndexRef.current > 0 && window.scrollY <= 5) {
          if (e.cancelable) e.preventDefault();
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (window.scrollY > 20) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      const now = Date.now();

      if (now - lastTouchTime < 450 || isAnimatingRef.current) return;

      // Vertical swipe: swipe up advances down until slide 3
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 35) {
        if (diffY > 35) {
          // Swiping up = scrolling down
          if (activeIndexRef.current < 3) {
            lastTouchTime = now;
            setIsAnimating(true);
            setActiveIndex((prev) => Math.min(prev + 1, 3));
            setTimeout(() => setIsAnimating(false), 600);
          }
        } else if (diffY < -35) {
          // Swiping down = scrolling up
          if (activeIndexRef.current > 0) {
            lastTouchTime = now;
            setIsAnimating(true);
            setActiveIndex((prev) => Math.max(prev - 1, 0));
            setTimeout(() => setIsAnimating(false), 600);
          }
        }
      } else if (Math.abs(diffX) > 40) {
        // Horizontal swipe always allows navigation
        lastTouchTime = now;
        if (diffX < 0) {
          navigate('next');
        } else {
          navigate('prev');
        }
      }
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigate]);

  // Roles derived from activeIndex
  const roles = useMemo(() => {
    const center = activeIndex;
    const left = (activeIndex + 3) % 4;
    const right = (activeIndex + 1) % 4;
    const back = (activeIndex + 2) % 4;
    return { center, left, right, back };
  }, [activeIndex]);

  // Exact per-role style mapping as specified with 3D rotation
  const getRoleStyle = (index: number) => {
    const isCenter = roles.center === index;
    const isLeft = roles.left === index;
    const isRight = roles.right === index;
    const isBack = roles.back === index;

    if (isCenter) {
      return {
        transform: `translateX(-50%) rotateY(0deg) scale(${isMobile ? 1.05 : 1.68}) translateZ(30px)`,
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 20,
        left: '50%',
        height: isMobile ? '46%' : '92%',
        bottom: isMobile ? '28%' : 0,
      };
    }

    if (isLeft) {
      return {
        transform: 'translateX(-50%) rotateY(22deg) scale(1) translateZ(-15px)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? '12%' : '30%',
        height: isMobile ? '13%' : '28%',
        bottom: isMobile ? '38%' : '12%',
      };
    }

    if (isRight) {
      return {
        transform: 'translateX(-50%) rotateY(-22deg) scale(1) translateZ(-15px)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? '88%' : '70%',
        height: isMobile ? '13%' : '28%',
        bottom: isMobile ? '38%' : '12%',
      };
    }

    // isBack
    return {
      transform: 'translateX(-50%) rotateY(0deg) scale(1) translateZ(-50px)',
      filter: 'blur(4px)',
      opacity: 1,
      zIndex: 5,
      left: '50%',
      height: isMobile ? '10%' : '22%',
      bottom: isMobile ? '42%' : '12%',
    };
  };

  // Dynamic directional lighting model that shifts angle based on carousel rotation
  const getRoleLighting = (index: number) => {
    const isCenter = roles.center === index;
    const isLeft = roles.left === index;
    const isRight = roles.right === index;

    // The virtual studio directional key light shines from the upper-left (base angle ~135°)
    // As items rotate around the carousel orbit:
    // - Center: facing camera directly, light angle ~140° (soft highlights with balanced shadows)
    // - Left: turned inward (+22° rotateY), surface directly meets key light at ~95° (high-contrast lit edge, dark inner side)
    // - Right: turned away (-22° rotateY), surfaces obliquely angled away from key light at ~235° (deep body shadows with gentle ambient rim)
    // - Back: far side of turntable, back-light gradient at ~180°
    if (isCenter) {
      return {
        angle: 140,
        gradient:
          'linear-gradient(140deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.1) 32%, rgba(0, 0, 0, 0) 56%, rgba(0, 0, 0, 0.28) 100%)',
        opacity: 0.85,
        mixBlendMode: 'overlay' as const,
        specularOpacity: 0.8,
      };
    }

    if (isLeft) {
      return {
        angle: 95,
        gradient:
          'linear-gradient(95deg, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.16) 28%, rgba(0, 0, 0, 0.25) 58%, rgba(0, 0, 0, 0.7) 100%)',
        opacity: 0.92,
        mixBlendMode: 'overlay' as const,
        specularOpacity: 0.7,
      };
    }

    if (isRight) {
      return {
        angle: 235,
        gradient:
          'linear-gradient(235deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.12) 26%, rgba(0, 0, 0, 0.52) 62%, rgba(0, 0, 0, 0.82) 100%)',
        opacity: 0.95,
        mixBlendMode: 'overlay' as const,
        specularOpacity: 0.4,
      };
    }

    // isBack
    return {
      angle: 180,
      gradient:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.5) 48%, rgba(255, 255, 255, 0.12) 100%)',
      opacity: 0.95,
      mixBlendMode: 'multiply' as const,
      specularOpacity: 0.2,
    };
  };

  // SVG fractal noise grain overlay
  const grainSvgUri =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
        '<filter id="n">' +
        '<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>' +
        '<feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0"/>' +
        '</filter>' +
        '<rect width="100%" height="100%" filter="url(#n)"/>' +
        '</svg>'
    );

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: activeItem.bg,
        fontFamily: "'Inter', sans-serif",
      }}
      className="relative w-full overflow-hidden select-none"
    >
      <div
        className="relative w-full"
        style={{ height: '100dvh', minHeight: '640px', overflow: 'hidden' }}
      >
        {/* 1. Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 50,
            backgroundImage: `url("${grainSvgUri}")`,
            backgroundSize: '200px 200px',
            opacity: 0.4,
          }}
        />

        {/* Ambient radial glow layer for seamless GSAP lighting crossfades */}
        <div
          ref={bgOverlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.18) 0%, transparent 70%)',
            opacity: 0.25,
            willChange: 'opacity',
          }}
        />

        {/* 2. Hero Background Editorial 3D Watermark ("CRAFT FOOD", "ORGANIC", etc.) */}
        <div
          className="absolute inset-x-0 flex flex-col items-center justify-center pointer-events-none select-none px-4"
          style={{
            zIndex: 1,
            top: isMobile ? '10%' : '12.5%',
            perspective: '1200px',
          }}
        >
          {/* Subtle editorial micro-tag above the grand watermark */}
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 opacity-85">
            <span className="w-3 sm:w-6 h-[1px] bg-white/60" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.28em] font-mono text-white/95 font-semibold">
              {mode === 'food' ? 'OKIRO ARTISANAL SERIES' : '3D FIGURINE ATELIER'}
            </span>
            <span className="w-3 sm:w-6 h-[1px] bg-white/60" />
          </div>

          <span
            ref={ghostTextRef}
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: isMobile ? 'clamp(22px, 6vw, 34px)' : 'clamp(32px, 4.2vw, 68px)',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.92)',
              WebkitTextStroke: isMobile
                ? '0.75px rgba(255, 255, 255, 0.4)'
                : '1.25px rgba(255, 255, 255, 0.55)',
              textShadow:
                '0 8px 24px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.12)',
              lineHeight: 1,
              letterSpacing: isMobile ? '0.08em' : '0.09em',
              whiteSpace: 'nowrap',
              willChange: 'transform, opacity, filter',
              transformStyle: 'preserve-3d',
            }}
            className="uppercase font-serif text-center"
          >
            {activeItem.ghostText}
          </span>
        </div>

        {/* 3. Carousel Items with GSAP crossfade and role states */}
        <div
          ref={carouselItemsRef}
          className="absolute inset-0 preserve-3d"
          style={{ zIndex: 10, perspective: 1200, transformStyle: 'preserve-3d' }}
        >
          {currentDataset.map((item, index) => {
            const style = getRoleStyle(index);
            const lighting = getRoleLighting(index);
            const isCenter = roles.center === index;
            return (
              <div
                key={`${mode}-${index}`}
                style={{
                  position: 'absolute',
                  aspectRatio: '0.6 / 1',
                  willChange: 'transform, filter, opacity',
                  transition:
                    'transform 650ms cubic-bezier(0.4, 0, 0.2, 1), filter 650ms cubic-bezier(0.4, 0, 0.2, 1), opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), left 650ms cubic-bezier(0.4, 0, 0.2, 1)',
                  transformStyle: 'preserve-3d',
                  ...style,
                }}
                className={`cursor-pointer ${isCenter ? 'carousel-center-item' : ''}`}
                onClick={() => {
                  if (roles.left === index) navigate('prev');
                  if (roles.right === index) navigate('next');
                }}
              >
                <div className="relative w-full h-full flex items-end justify-center pointer-events-none select-none">
                  {/* Base Cutout Carousel Image */}
                  <img
                    src={item.src}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'bottom center',
                      willChange: 'transform, opacity',
                    }}
                  />

                  {/* Dynamic Directional Light CSS Linear-Gradient Overlay (Shifts angle with carousel rotation) */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
                    style={{
                      background: lighting.gradient,
                      mixBlendMode: lighting.mixBlendMode,
                      opacity: lighting.opacity,
                      WebkitMaskImage: `url(${item.src})`,
                      maskImage: `url(${item.src})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'bottom center',
                      maskPosition: 'bottom center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                      willChange: 'background, opacity',
                    }}
                  />

                  {/* Directional Specular Sheen Rim aligned with lighting angle */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
                    style={{
                      background: `linear-gradient(${lighting.angle}deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.08) 28%, transparent 52%)`,
                      mixBlendMode: 'color-dodge',
                      opacity: lighting.specularOpacity,
                      WebkitMaskImage: `url(${item.src})`,
                      maskImage: `url(${item.src})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'bottom center',
                      maskPosition: 'bottom center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                      willChange: 'background, opacity',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Bottom-left text + nav buttons (High-contrast frosted glass card to avoid text clashes) */}
        <div
          ref={textCardRef}
          className="absolute bottom-4 left-3 right-3 sm:right-auto sm:bottom-12 sm:left-10 lg:left-16"
          style={{ zIndex: 40, maxWidth: isMobile ? 'calc(100% - 1.5rem)' : '380px', willChange: 'transform, opacity' }}
        >
          <div className="bg-black/45 backdrop-blur-xl border border-white/20 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between gap-2.5 mb-2 sm:mb-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.2em] text-[#DD643E] bg-[#DD643E]/15 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#DD643E]/30 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DD643E]" />
                  {mode === 'food' ? 'Artisanal Selection' : '3D Figurine Series'}
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/70 font-mono tracking-wider">
                  <span className="text-[#DD643E] font-bold">0{activeIndex + 1}</span> / 04
                </span>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-wider text-white/70 sm:hidden">
                {activeIndex < 3 ? 'Scroll / Swipe ↓' : 'Ready to Scroll ↓'}
              </span>
            </div>

            {/* Primary Headline with Cormorant Garamond Serif & Dynamic Viewport Width Scaling */}
            <h2
              className="font-serif tracking-[0.02em] mb-1.5 sm:mb-2.5 text-white drop-shadow-md font-semibold leading-[1.12]"
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.35rem, 4.2vw + 0.2rem, 2.65rem)',
              }}
            >
              {activeItem.title}
            </h2>

            {/* Body description */}
            <p className="hidden sm:block text-xs sm:text-sm text-white/90 leading-[1.6] mb-5 font-normal">
              {activeItem.description}
            </p>

            {/* Navigation & Action Controls Row */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => navigate('prev')}
                  aria-label="Previous item"
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer bg-[#DD643E] hover:bg-[#c95430] text-white border border-[#DD643E] shadow-lg shadow-[#DD643E]/30 hover:scale-105"
                >
                  <ArrowLeft className="text-white w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.25} />
                </button>

                <button
                  onClick={() => navigate('next')}
                  aria-label="Next item"
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer bg-[#DD643E] hover:bg-[#c95430] text-white border border-[#DD643E] shadow-lg shadow-[#DD643E]/30 hover:scale-105"
                >
                  <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.25} />
                </button>
              </div>

              {/* Mobile Integrated Discover Action (Prevents bottom-right collision) */}
              <a
                href="#menu"
                onClick={(e) => {
                  if (onExploreClick) {
                    e.preventDefault();
                    onExploreClick();
                  }
                }}
                className="sm:hidden flex items-center gap-2 uppercase text-white bg-[#DD643E] hover:bg-[#c95430] border border-[#DD643E] px-4 py-2.5 rounded-xl shadow-md cursor-pointer no-underline active:scale-95"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(13px, 3.2vw, 16px)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  lineHeight: 1,
                }}
              >
                <span>Discover</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* 5. Center Bottom Pinned-Scroll Step Indicator & Navigation */}
        <div
          className="hidden sm:flex absolute bottom-12 left-1/2 -translate-x-1/2 items-center z-40 select-none"
        >
          {activeIndex < 3 ? (
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-black/45 backdrop-blur-xl border border-white/20 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-white/90">
                SCROLL TO EXPLORE (0{activeIndex + 1} / 04)
              </span>
              <div className="flex items-center gap-1.5 ml-1">
                {[0, 1, 2, 3].map((idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-4 bg-[#DD643E]'
                        : idx < activeIndex
                        ? 'w-1.5 bg-white/80'
                        : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <ChevronDown className="w-4 h-4 text-[#DD643E] animate-bounce ml-0.5" />
            </div>
          ) : (
            <button
              onClick={() => {
                const nextSection = document.getElementById('about');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#DD643E] hover:bg-[#c95430] border border-[#DD643E] text-white shadow-[0_10px_30px_rgba(221,100,62,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer active:scale-95"
            >
              <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white">
                ALL 4 EXPLORED • SCROLL DOWN
              </span>
              <ChevronDown className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-y-0.5 animate-bounce" />
            </button>
          )}
        </div>

        {/* 6. Desktop Bottom-right button "DISCOVER IT" with Cormorant Garamond Serif & Burnt Orange Accent */}
        <div
          className="hidden sm:block absolute bottom-12 right-10 lg:right-16"
          style={{ zIndex: 40 }}
        >
          <a
            href="#menu"
            onClick={(e) => {
              if (onExploreClick) {
                e.preventDefault();
                onExploreClick();
              }
            }}
            className="group flex items-center gap-3 uppercase text-white transition-all duration-300 cursor-pointer no-underline bg-[#DD643E] hover:bg-[#c95430] border border-[#DD643E] px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl shadow-xl shadow-[#DD643E]/30 hover:scale-105"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(19px, 2.5vw, 32px)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              lineHeight: 1,
            }}
          >
            <span>DISCOVER IT</span>
            <ArrowRight
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1.5"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
