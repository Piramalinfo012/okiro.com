import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Instagram, ArrowUpRight, Volume2, VolumeX, Play, Film } from 'lucide-react';

interface ReelData {
  id: string;
  reelUrl: string;
  videoSrc: string;
  poster: string;
  tag: string;
  title: string;
  caption: string;
}

const REELS: ReelData[] = [
  {
    id: 'reel-1',
    reelUrl: 'https://www.instagram.com/reel/DYEmxCFjVC1/',
    videoSrc: '/videos/reel1.mp4',
    poster: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=900&q=85',
    tag: '#OkiroFounder',
    title: 'Founder Story & Craft Pour',
    caption: 'Discover the craft of manual extraction and single-origin roast in Raipur.',
  },
  {
    id: 'reel-2',
    reelUrl: 'https://www.instagram.com/reel/DaK6Wh5k6Pn/',
    videoSrc: '/videos/reel2.mp4',
    poster: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85',
    tag: '#OkiroExperience',
    title: 'Evenings & Atmosphere',
    caption: 'Unwind at our VIP estate sanctuary with peaceful vibes and craft brews.',
  },
  {
    id: 'reel-3',
    reelUrl: 'https://www.instagram.com/reel/DaK3NTzEzv7/',
    videoSrc: '/videos/reel3.mp4',
    poster: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=85',
    tag: '#OkiroTerroir',
    title: 'Small Batch Roasting',
    caption: 'Directly sourced estate beans roasted to absolute perfection on-site.',
  },
];

interface VideoCardProps {
  reel: ReelData;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ reel, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { margin: '-30px', once: false });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView && isPlaying) {
        videoRef.current.muted = true;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
          });
        }
      } else if (!isInView) {
        videoRef.current.pause();
      }
    }
  }, [isInView, isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[310px] sm:max-w-[330px] mx-auto select-none"
    >
      {/* Borderless Video Card Container */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl group border-0">
        {/* Continuous Autoplay Video Canvas */}
        <div className="relative aspect-[9/13.5] w-full overflow-hidden bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={reel.videoSrc}
            poster={reel.poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
          />

          {/* Top Floating Info & Audio Toggle */}
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/90 bg-black/60 px-2.5 py-0.5 rounded-full backdrop-blur-md">
              {reel.tag}
            </span>

            <button
              onClick={toggleMute}
              className="p-1.5 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white transition-all pointer-events-auto cursor-pointer shadow-md"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#DD643E]" />}
            </button>
          </div>

          {/* Center Play Button Overlay if Paused */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center cursor-pointer pointer-events-auto"
            >
              <div className="w-12 h-12 rounded-full bg-[#DD643E]/90 text-white flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </div>
          )}

          {/* Bottom Gradient Overlay with Title & Instagram Action */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent text-white z-20">
            <h3 className="font-serif-luxury text-base text-white font-normal mb-1">
              {reel.title}
            </h3>
            <p className="text-[11px] text-white/80 font-light line-clamp-1 mb-2.5">
              {reel.caption}
            </p>

            <a
              href={reel.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[#DD643E] hover:text-white font-medium transition-colors cursor-pointer"
            >
              <Instagram className="w-3 h-3" />
              <span>Watch on Instagram</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const InstagramReelsShowcase: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#171513] text-[#FFFDF8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Film className="w-3.5 h-3.5 text-[#DD643E]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#DD643E] font-medium">
                Live Video Stories · Continuous Play
              </span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#FFFDF8] font-normal leading-tight">
              THE ROASTERY IN MOTION
            </h2>
            <p className="mt-1 text-[#EDE4D2]/70 text-xs sm:text-sm max-w-lg font-light">
              Watch our craft, atmosphere, and roasting in continuous automatic playback.
            </p>
          </div>
        </div>

        {/* 3 Borderless Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start justify-center">
          {REELS.map((reel, idx) => (
            <VideoCard key={reel.id} reel={reel} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
