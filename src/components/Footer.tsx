import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-chai text-cream py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Icon */}
        <div className="text-5xl mb-6">🧘✨🪷</div>
        
        {/* Tagline */}
        <p className="text-xl font-display mb-4">
          Triganana Dhootha's Ashram of Questionable Enlightenment
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

       

        {/* Copyright */}
        <p className="text-xs opacity-60">
          © 2024 Triganana Dhootha Enterprises™ (not a real company) | Made with 💛 and too much chai
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;
