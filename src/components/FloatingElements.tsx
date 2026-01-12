import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Lotus Flowers */}
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-60" style={{ animationDelay: '0s' }}>
        🪷
      </div>
      <div className="absolute top-40 right-20 text-3xl animate-float opacity-50" style={{ animationDelay: '1s' }}>
        🪷
      </div>
      <div className="absolute bottom-40 left-20 text-5xl animate-float opacity-40" style={{ animationDelay: '2s' }}>
        🪷
      </div>
      <div className="absolute top-60 left-1/4 text-2xl animate-float opacity-50" style={{ animationDelay: '3s' }}>
        🪷
      </div>
      <div className="absolute bottom-60 right-1/4 text-4xl animate-float opacity-60" style={{ animationDelay: '4s' }}>
        🪷
      </div>

      {/* Sparkles */}
      <div className="absolute top-32 right-1/3 text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>
        ✨
      </div>
      <div className="absolute top-1/2 left-16 text-xl animate-sparkle" style={{ animationDelay: '1.5s' }}>
        ✨
      </div>
      <div className="absolute bottom-32 right-16 text-3xl animate-sparkle" style={{ animationDelay: '2.5s' }}>
        ✨
      </div>
      <div className="absolute top-1/4 right-10 text-xl animate-sparkle" style={{ animationDelay: '3.5s' }}>
        ✨
      </div>

      {/* Diyas */}
      <div className="absolute bottom-20 right-32 text-3xl animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
        🪔
      </div>
      <div className="absolute top-1/3 left-8 text-2xl animate-bounce-gentle" style={{ animationDelay: '1.5s' }}>
        🪔
      </div>

      {/* Om symbols */}
      <div className="absolute bottom-1/4 left-1/3 text-4xl text-saffron/20 animate-float" style={{ animationDelay: '2s' }}>
        🕉️
      </div>
      <div className="absolute top-20 right-1/4 text-3xl text-saffron/15 animate-float" style={{ animationDelay: '4s' }}>
        🕉️
      </div>
    </div>
  );
};

export default FloatingElements;
