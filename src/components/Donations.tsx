import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Heart, Star, Zap, Crown } from 'lucide-react';

interface DonationTier {
  amount: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
}

const donationTiers: DonationTier[] = [
  {
    amount: '₹51',
    title: 'Mild Enlightenment',
    description: 'A gentle spiritual nudge. May cause slight awareness.',
    icon: <Star className="w-6 h-6" />,
  },
  {
    amount: '₹101',
    title: 'Premium Karma+',
    description: 'Upgraded karma for 30 days. Rollover minutes not included.',
    icon: <Zap className="w-6 h-6" />,
    popular: true,
  },
  {
    amount: '₹251',
    title: 'VIP Ashram Access',
    description: 'Priority seating at imaginary meditation sessions.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    amount: '₹501',
    title: 'Remove One Bad Habit',
    description: 'Results not guaranteed. Refunds unavailable in this dimension.',
    icon: <Crown className="w-6 h-6" />,
  },
];

const FundraisingGoal: React.FC<{ title: string; current: number; goal: number; icon: string }> = ({
  title,
  current,
  goal,
  icon,
}) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div className="bg-card rounded-xl p-4 border border-border shadow-card">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">
            ₹{current.toLocaleString()} / ₹{goal.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-spiritual rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const Donations: React.FC = () => {
  const handleDonate = (amount: string) => {
    alert(`🙏 Received a donation of ${amount}`)
  };

  const playSound = () => {
    const audio = new Audio("https://res.cloudinary.com/dziklqu26/video/upload/v1768480527/Chaduvukondi_First_andapi.mp3");
    audio.play();
  };
  return (
    <section id="donations" className="py-20 px-4 bg-gradient-to-b from-background to-cream-dark/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">💝</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-spiritual">Support the Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help Dhootha continue his sacred mission of doing absolutely nothing productive
            while looking spiritually profound.
          </p>
        </div>

        {/* Fundraising Goals */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-bold text-center mb-6 text-foreground">
            🎯 Sacred Fundraising Goals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <FundraisingGoal
              title="Meditation Snacks"
              current={420}
              goal={1000}
              icon="🍪"
            />
            <FundraisingGoal
              title="Holy Amazon Robes"
              current={750}
              goal={2000}
              icon="👘"
            />
            <FundraisingGoal
              title="Emergency Chai Fund"
              current={1337}
              goal={1500}
              icon="☕"
            />
          </div>
        </div>

        {/* Donation Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {donationTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 border-2 ${tier.popular
                ? 'border-gold shadow-glow bg-gradient-to-br from-card to-gold/10'
                : 'border-border hover:border-primary/50 shadow-card'
                }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <CardContent className="p-6 text-center">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${tier.popular ? 'bg-gold/20 text-gold-dark' : 'bg-primary/10 text-primary'
                  }`}>
                  {tier.icon}
                </div>

                <p className="text-3xl font-display font-bold text-foreground mb-1">
                  {tier.amount}
                </p>

                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {tier.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 min-h-[48px]">
                  {tier.description}
                </p>

                <Button
                  variant={tier.popular ? 'gold' : 'outline'}
                  className="w-full"
                  onClick={() => {
                    playSound();
                    handleDonate(tier.amount);
                  }}
                >
                  Donate {tier.amount}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donations;
