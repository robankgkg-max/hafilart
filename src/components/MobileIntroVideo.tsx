import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, ChevronRight } from 'lucide-react';

const VIDEO_URL = 'https://res.cloudinary.com/cbi5mcab/video/upload/v1793771278/hafi_intro_ddybi8.mp4';

interface MobileIntroVideoProps {
  onVideoComplete: () => void;
}

export const MobileIntroVideo: React.FC<MobileIntroVideoProps> = ({ onVideoComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Strictly enforce mobile only (< 768px) - skip immediately if on tablet or desktop
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      onVideoComplete();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    // Mobile inline autoplay compliance (must be muted initially)
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Mobile video autoplay prevented:', err);
      });
    }
  }, [onVideoComplete]);

  const handleVideoEnded = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);

    // Smooth cinematic crossfade into the mobile Enter Portfolio hero cover
    setTimeout(() => {
      onVideoComplete();
    }, 600);
  };

  const handleToggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div 
      className={`block md:hidden fixed inset-0 w-full min-h-[100dvh] h-[100dvh] z-[60] bg-[#d45a1e] overflow-hidden select-none touch-none flex items-center justify-center ${
        isFadingOut 
          ? 'opacity-0 pointer-events-none transition-opacity duration-600 ease-out' 
          : 'opacity-100 transition-opacity duration-600 ease-out'
      }`}
      style={{ overscrollBehavior: 'none' }}
      aria-label="HAFIL.M Mobile Intro Video"
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Top Controls Overlay for Mobile Video */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
        {/* Audio Mute/Unmute Toggle */}
        <button
          type="button"
          onClick={handleToggleSound}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[#F5EFE4] text-[9px] font-mono tracking-[0.2em] uppercase active:scale-95 transition-transform"
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        >
          {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
          <span>{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
        </button>

        {/* Skip Button -> transitions immediately to Enter Portfolio hero cover */}
        <button
          type="button"
          onClick={handleVideoEnded}
          className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-[#F5EFE4] text-[9.5px] font-mono tracking-[0.22em] uppercase active:scale-95 transition-transform hover:bg-black/60"
          aria-label="Skip video to portfolio cover"
        >
          <span>SKIP</span>
          <ChevronRight size={13} />
        </button>
      </div>

      {/* Subtle bottom tap hint */}
      <div 
        onClick={handleVideoEnded} 
        className="absolute inset-x-0 bottom-0 h-28 z-10 cursor-pointer pointer-events-auto flex items-end justify-center pb-6"
      >
        <span className="font-mono text-[8px] tracking-[0.28em] uppercase text-[#F5EFE4]/60 bg-black/30 backdrop-blur-xs px-3 py-1 rounded-full">
          TAP TO CONTINUE
        </span>
      </div>
    </div>
  );
};
