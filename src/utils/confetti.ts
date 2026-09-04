// Lightweight Web Audio party sound + celebration confetti for kid-approved playfulness

export const playPartyPopSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
    osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.22);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  } catch {
    // AudioContext blocked or not supported, ignore silently
  }
};

export const triggerPartyConfetti = (x?: number, y?: number) => {
  playPartyPopSound();

  const count = 35;
  const colors = ['#EF4444', '#2563EB', '#F59E0B', '#10B981', '#F43F5E', '#38BDF8'];
  const originX = x ?? window.innerWidth / 2;
  const originY = y ?? (window.innerHeight * 0.4);

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'party-confetti-piece';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 9 + 6;
    const isRound = Math.random() > 0.4;

    el.style.position = 'fixed';
    el.style.zIndex = '9999';
    el.style.left = `${originX}px`;
    el.style.top = `${originY}px`;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = color;
    el.style.borderRadius = isRound ? '50%' : '2px';
    el.style.pointerEvents = 'none';
    el.style.transform = `translate3d(0, 0, 0)`;

    document.body.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 260 + 120;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity + 150;
    const rotation = Math.random() * 720 - 360;

    const anim = el.animate(
      [
        { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: 1 },
        {
          transform: `translate(${destX}px, ${destY}px) rotate(${rotation}deg) scale(0.6)`,
          opacity: 0,
        },
      ],
      {
        duration: 900 + Math.random() * 400,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      }
    );

    anim.onfinish = () => {
      el.remove();
    };
  }
};
