import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-chai text-cream py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Icon */}
        <div className="text-5xl mb-6">🧘✨🪷</div>
        
        {/* Tagline */}
        <p className="text-xl font-display mb-4">
          Baba Ji's Ashram of Questionable Enlightenment
        </p>
        
        {/* Fun links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
            🍪 Cookie Policy (they're delicious)
          </span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
            🔮 Privacy (none, Baba Ji sees all)
          </span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
            ☕ Chai Recipes
          </span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
            😴 Nap Schedule
          </span>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-cream/20 pt-8 mb-6">
          <p className="text-sm opacity-80 max-w-2xl mx-auto leading-relaxed">
            <strong>Legal Disclaimer:</strong> This is a satirical website created with love as a joke gift. 
            No actual spiritual services are offered. No real money is collected. 
            Baba Ji is a fictional character based on a real friend who has been a very good sport about this. 
            If you're looking for genuine spiritual guidance, this ain't it. 
            Please consult an actual qualified professional for real life advice.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs opacity-60">
          © 2024 Baba Ji Enterprises™ (not a real company) | Made with 💛 and too much chai
        </p>

        {/* Easter egg */}
        <p className="text-xs opacity-40 mt-4">
          🕉️ If you're reading this, Baba Ji blesses you with finding ₹10 in your old jacket pocket 🕉️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
