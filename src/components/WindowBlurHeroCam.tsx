import React, { useState } from 'react';
import { Play, Pause, Sparkles, Sliders, Maximize2, RefreshCw, Star, Heart } from 'lucide-react';
import { triggerPartyConfetti } from '../utils/confetti';

interface WindowBlurHeroCamProps {
  onBookNow: () => void;
}

export const WindowBlurHeroCam: React.FC<WindowBlurHeroCamProps> = ({ onBookNow }) => {
  const [blurAmount, setBlurAmount] = useState<'soft' | 'frosted' | 'deep' | 'crystal'>('frosted');
  const [activeTab, setActiveTab] = useState<'bounce' | 'popcorn' | 'movie'>('bounce');
  const [isPlaying, setIsPlaying] = useState(true);

  // Video feeds for the window
  const scenes = {
    bounce: {
      title: 'Backyard Bounce Castle Arena',
      tag: '🔥 100% Kid Approved Jumper',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-children-playing-on-an-inflatable-castle-41551-large.mp4',
      poster: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1200&q=80',
      caption: 'Commercial safety walls, non-slip vinyl & super-bounce floor for nonstop excitement.',
    },
    popcorn: {
      title: 'Hot Gourmet Popcorn Machine in Action',
      tag: '🍿 Popping Live at 350°F',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-colorful-balloons-floating-in-the-air-42646-large.mp4',
      poster: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=1200&q=80',
      caption: 'Real buttery aroma filling your backyard party! 50+ fresh servings ready in minutes.',
    },
    movie: {
      title: '16ft Mega Movie Night Under Texas Stars',
      tag: '🎬 1080p Cinema Projection',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-kids-jumping-on-a-trampoline-in-the-park-41552-large.mp4',
      poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
      caption: 'Massive outdoor projection screen with high-lumen laser projector & stereo blast sound.',
    },
  };

  const currentScene = scenes[activeTab];

  const getBlurStyle = () => {
    switch (blurAmount) {
      case 'deep':
        return 'backdrop-blur-xl bg-[#FFFDF2]/75 border-cream-200';
      case 'frosted':
        return 'backdrop-blur-md bg-[#FFFDF2]/55 border-white/60';
      case 'soft':
        return 'backdrop-blur-xs bg-[#FFFDF2]/35 border-white/40';
      case 'crystal':
        return 'backdrop-blur-none bg-transparent border-transparent';
    }
  };

  return (
    <div className="relative mx-auto max-w-5xl rounded-3xl p-1 bg-gradient-to-br from-red-500 via-amber-400 to-blue-600 shadow-[0_20px_50px_rgba(220,38,38,0.2)]">
      {/* WINDOW FRAME (Retro Arcade / Kids Party Window) */}
      <div className="rounded-[22px] bg-[#FFFDF4] overflow-hidden border-4 border-white shadow-2xl">
        {/* Window Title Bar */}
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 px-4 py-3 text-white flex flex-wrap items-center justify-between gap-3">
          {/* Mac/Arcade style control dots in playful red, yellow, blue */}
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-400 border border-white shadow-xs" />
            <span className="w-3.5 h-3.5 rounded-full bg-amber-300 border border-white shadow-xs" />
            <span className="w-3.5 h-3.5 rounded-full bg-blue-300 border border-white shadow-xs" />
            <span className="ml-2 font-display font-black text-xs tracking-wider uppercase flex items-center gap-1.5 text-cream-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              EventsRentals.io Live Fun Window Cam
            </span>
          </div>

          {/* Quick Scene Selector Buttons */}
          <div className="flex items-center gap-1.5 bg-black/20 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('bounce')}
              className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === 'bounce'
                  ? 'bg-amber-400 text-slate-950 shadow-xs scale-102'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              🏰 Bounce House
            </button>
            <button
              onClick={() => setActiveTab('popcorn')}
              className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === 'popcorn'
                  ? 'bg-amber-400 text-slate-950 shadow-xs scale-102'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              🍿 Popcorn Cart
            </button>
            <button
              onClick={() => setActiveTab('movie')}
              className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === 'movie'
                  ? 'bg-amber-400 text-slate-950 shadow-xs scale-102'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              🎬 Movie Screen
            </button>
          </div>
        </div>

        {/* Video Canvas Container with Window Blur Effect */}
        <div className="relative aspect-16/10 sm:aspect-21/9 min-h-[300px] w-full overflow-hidden bg-slate-950">
          {/* Background Running Video */}
          <video
            key={currentScene.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            poster={currentScene.poster}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={currentScene.videoUrl} type="video/mp4" />
          </video>

          {/* WINDOW BLUR FROSTED GLASS OVERLAY */}
          <div
            className={`absolute inset-0 transition-all duration-300 pointer-events-none ${getBlurStyle()}`}
          />

          {/* In-Window Content Card: Red, Blue, and Cream Playful Callout */}
          <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between pointer-events-auto">
            {/* Top Bar inside Window */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-red-600 text-white shadow-lg border-2 border-white">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                {currentScene.tag}
              </span>

              {/* Window Blur Filter Switcher */}
              <div className="flex items-center gap-1.5 bg-[#FFFDF2]/90 backdrop-blur-md p-1.5 rounded-2xl border-2 border-red-300 shadow-lg">
                <span className="text-[11px] font-black text-red-700 px-1 hidden sm:inline">
                  Window Blur:
                </span>
                {(['frosted', 'deep', 'soft', 'crystal'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setBlurAmount(lvl)}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      blurAmount === lvl
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-700 hover:bg-amber-100'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Glass Card inside the Window */}
            <div className="bg-[#FFFDF4]/92 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-2 border-red-200 shadow-2xl max-w-xl">
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-black text-slate-800 ml-1">#1 Rated Kids Party Rental in Texas</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 leading-tight">
                {currentScene.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-semibold leading-relaxed">
                {currentScene.caption}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={(e) => {
                    triggerPartyConfetti(e.clientX, e.clientY);
                    onBookNow();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 active:translate-y-1 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_0_#991b1b] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Reserve for Your Date</span>
                </button>

                <button
                  onClick={(e) => triggerPartyConfetti(e.clientX, e.clientY)}
                  className="px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:translate-y-1 text-white font-black text-xs uppercase tracking-wider shadow-[0_4px_0_#1e3a8a] transition-all cursor-pointer flex items-center gap-1"
                >
                  <Heart className="w-3.5 h-3.5 fill-red-300 text-white" />
                  <span>Confetti Blast!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
