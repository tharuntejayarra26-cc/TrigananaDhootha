import React from 'react';
import { Button } from './ui/button';
import { Sparkles, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const playSound = () => {
    const audio = new Audio("/public/audio/Aatagade.mp3");
    audio.play();
  };
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-spiritual" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-dark px-4 py-2 rounded-full mb-6 animate-bounce-gentle">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Enlightened By Birth</span>
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Avatar placeholder */}
        <div className="w-40 h-40 md:w-52 md:h-52 mx-auto mb-8 rounded-full bg-gradient-spiritual p-1 shadow-glow animate-glow-pulse">
          <div className="relative w-full h-full rounded-full bg-cream flex items-center justify-center text-6xl md:text-7xl">
            <img src="/public/Dhootha1.jpeg" alt="charan" onClick={playSound} className='h-full w-full absolute rounded-full z-10 opacity-100 hover:opacity-0 transition-opacity duration-500' />
            <img src="/public/Dhootha.jpeg" alt="charan" className='absolute rounded-full z-0' />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
          <span className="text-gradient-spiritual">Triganana🧘Dhootha</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-display mb-2">
          Spiritual Guide • Calculator • BJ Expert
        </p>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Join millions* of followers on a sacred journey of{' '}
          <span className="text-saffron font-semibold">questionable wisdom</span>,{' '}
          <span className="text-mystic font-semibold">unnecessary blessings</span>, and{' '}
          <span className="text-gold-dark font-semibold">premium daridram</span>.
        </p>

        <p className="text-sm text-muted-foreground mb-8 italic">
          *actual count: 7 (including his mom and our group chat)
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="blessing"
            size="xl"
            onClick={() => scrollToSection('blessings')}
            className="group"
          >
            <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
            Receive Blessings
          </Button>
          <Button
            variant="donate"
            size="xl"
            onClick={() => scrollToSection('donations')}
            className="group"
          >
            <Heart className="w-5 h-5 group-hover:animate-wiggle" />
            Support the Journey
          </Button>
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-xs text-muted-foreground max-w-md mx-auto bg-card/50 p-3 rounded-lg border border-border">
          ⚠️ <strong>Disclaimer:</strong> This is a satirical fundraiser made with love.
          Baba Ji's enlightenment status is pending verification. No actual spiritual powers included.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
