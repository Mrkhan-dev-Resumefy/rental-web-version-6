import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Eye, EyeOff, Sparkles, Film, Sliders } from 'lucide-react';

export interface BackgroundVideoProps {
  blurLevel: 'light' | 'medium' | 'heavy' | 'none';
  onBlurChange: (level: 'light' | 'medium' | 'heavy' | 'none') => void;
}

export const PARTY_VIDEOS = [
  {
    id: 'bounce-castle',
    name: 'Kids Bounce Castle',
    label: '🏰 Bounce Castle Fun',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-children-playing-on-an-inflatable-castle-41551-large.mp4',
    poster: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'balloons',
    name: 'Carnival Balloons',
    label: '🎈 Colorful Balloons',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-colorful-balloons-floating-in-the-air-42646-large.mp4',
    poster: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'park-jump',
    name: 'Park Jumping Fun',
    label: '⭐ High Bouncing Play',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-kids-jumping-on-a-trampoline-in-the-park-41552-large.mp4',
    poster: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=1600&q=80',
  },
];

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  blurLevel,
  onBlurChange,
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const activeVideo = PARTY_VIDEOS[currentVideoIndex];

  // Canvas animated backup in case video autoplay is restricted
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Bouncy party bubbles & confetti
    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
    }

    const colors = ['#EF4444', '#2563EB', '#F59E0B', '#38BDF8', '#F43F5E', '#FEF3C7'];
    const particles: Particle[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 24 + 10,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5 - 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.4 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Warm cream & party sky background glow
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#FEF9E7');
      grad.addColorStop(0.5, '#FFF7D6');
      grad.addColorStop(1, '#FEE2E2');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = height + p.r;
        if (p.y > height + p.r) p.y = -p.r;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.closePath();
      });

      ctx.globalAlpha = 1.0;
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Sync play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Blur class mapping for window blur
  const getBlurClass = () => {
    switch (blurLevel) {
      case 'heavy':
        return 'backdrop-blur-2xl bg-[#FFFDF2]/88';
      case 'medium':
        return 'backdrop-blur-lg bg-[#FFFDF2]/80';
      case 'light':
        return 'backdrop-blur-sm bg-[#FFFDF2]/65';
      case 'none':
        return 'backdrop-blur-none bg-[#FFFDF2]/45';
      default:
        return 'backdrop-blur-lg bg-[#FFFDF2]/80';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Canvas Fallback Layer (Always Active) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* 2. Main Background Video (Running on website) */}
      <video
        ref={videoRef}
        key={activeVideo.id}
        autoPlay
        loop
        muted
        playsInline
        poster={activeVideo.poster}
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-85' : 'opacity-30'
        }`}
      >
        <source src={activeVideo.url} type="video/mp4" />
      </video>

      {/* 3. WINDOW BLUR Overlay: Frosted glass layer blending cream, red, and blue */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${getBlurClass()}`}
        style={{
          boxShadow: 'inset 0 0 100px rgba(220, 38, 38, 0.04), inset 0 0 120px rgba(37, 99, 235, 0.05)',
        }}
      />

      {/* 4. Subtle Carnival Bunting / Decorative Gradient Rim */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-red-500 via-amber-400 via-blue-500 to-red-500 opacity-90" />

      {/* 5. Floating Window Blur Controller Badge (Clickable, pointer-events-auto) */}
      <div className="absolute top-24 right-4 z-30 pointer-events-auto hidden sm:block">
        <div className="bg-[#FFFDF5]/90 backdrop-blur-md rounded-2xl border-2 border-red-300 shadow-xl p-2.5 flex items-center gap-2 transition-all hover:scale-102">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-xl bg-red-100 text-red-700 font-extrabold text-xs">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <Film className="w-3.5 h-3.5" />
            <span>Party Cam Video</span>
          </div>

          <button
            onClick={() => {
              const nextIdx = (currentVideoIndex + 1) % PARTY_VIDEOS.length;
              setCurrentVideoIndex(nextIdx);
              setIsVideoLoaded(false);
            }}
            title="Switch Background Video Scene"
            className="px-2.5 py-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs cursor-pointer flex items-center gap-1 shadow-xs transition-colors"
          >
            <span>Switch Scene</span>
          </button>

          {/* Quick Blur Toggle */}
          <button
            onClick={() => {
              const levels: ('light' | 'medium' | 'heavy' | 'none')[] = ['none', 'light', 'medium', 'heavy'];
              const nextLevel = levels[(levels.indexOf(blurLevel) + 1) % levels.length];
              onBlurChange(nextLevel);
            }}
            title="Adjust Window Blur"
            className="px-2.5 py-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs cursor-pointer flex items-center gap-1 shadow-xs transition-colors"
          >
            <Sliders className="w-3 h-3" />
            <span className="capitalize">{blurLevel} Blur</span>
          </button>

          <button
            onClick={togglePlay}
            title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
            className="p-1 rounded-lg text-slate-700 hover:bg-red-50 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-red-600" /> : <Play className="w-4 h-4 text-blue-600" />}
          </button>
        </div>
      </div>
    </div>
  );
};
