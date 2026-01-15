import React from 'react';
import { Card, CardContent } from './ui/card';

interface Blessing {
  icon: string;
  title: string;
  description: string;
  rarity: 'common' | 'rare' | 'legendary';
}

const blessings: Blessing[] = [
  {
    icon: '🚌',
    title: 'Blessing of Always Missing the Bus',
    description: 'Guaranteed to arrive exactly 30 seconds after departure. Includes free cardio.',
    rarity: 'common',
  },
  {
    icon: '🌙',
    title: 'Spiritual Clarity at 3am Only',
    description: 'All your best ideas will come when you should be sleeping. Side effects may include existential dread.',
    rarity: 'rare',
  },
  {
    icon: '☮️',
    title: 'Inner Peace, But Only on Weekends',
    description: "Monday through Friday, you're on your own. Terms and conditions apply.",
    rarity: 'legendary',
  },
  {
    icon: '📱',
    title: 'Perfect WiFi Signal (Spiritually)',
    description: 'Your aura will have full bars. Actual internet connection sold separately.',
    rarity: 'common',
  },
  {
    icon: '🍕',
    title: 'The Last Slice is Yours',
    description: 'At every pizza party, the universe conspires to save you the final piece.',
    rarity: 'rare',
  },
  {
    icon: '😴',
    title: 'Power Nap Mastery',
    description: '20-minute naps that feel like 8 hours. Warning: may extend to actual 8 hours.',
    rarity: 'legendary',
  },
];

const rarityStyles = {
  common: 'border-saffron/30 bg-gradient-to-br from-card to-saffron/5',
  rare: 'border-mystic/40 bg-gradient-to-br from-card to-mystic/10',
  legendary: 'border-gold/50 bg-gradient-to-br from-card to-gold/15 shadow-glow',
};

const rarityBadge = {
  common: 'bg-saffron/20 text-saffron',
  rare: 'bg-mystic/20 text-mystic',
  legendary: 'bg-gold/30 text-gold-dark animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-gold/30 via-gold/50 to-gold/30',
};

const playSound = () => {
  const audio = new Audio("https://res.cloudinary.com/dziklqu26/video/upload/v1768480526/Blessing_h9v63l.mp3");
  audio.play();
};


const Blessings: React.FC = () => {
  return (
    <section id="blessings" className="py-20 px-4 bg-cream-dark/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">🙏</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-spiritual">Sacred Blessings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated useless powers that will definitely not improve your life,
            but will give you something to blame when things go wrong.
          </p>
        </div>

        {/* Blessings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blessings.map((blessing, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-spiritual border-2 ${rarityStyles[blessing.rarity]}`}
            >
              <CardContent className="p-6">
                {/* Rarity Badge */}
                <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full uppercase ${rarityBadge[blessing.rarity]}`}>
                  {blessing.rarity}
                </span>

                {/* Icon */}
                <div className="text-5xl mb-4">{blessing.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold mb-2 text-foreground pr-16">
                  {blessing.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {blessing.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-12 text-sm text-muted-foreground italic">
          ✨ All blessings come with a lifetime guarantee of absolutely nothing ✨
        </p>
        <div className='flex justify-center items-center'><button
          onClick={playSound}
          className="mt-4 h-10 w-30 px-4 py-2 rounded-lg bg-gradient-spiritual text-white text-sm font-medium hover:opacity-90 transition"
        >
          Devine✨Blessing's
        </button></div>


      </div>
    </section>
  );
};

export default Blessings;
