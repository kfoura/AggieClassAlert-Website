import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/tamu-campus-entrance-aerial-sunset.jpeg')`,
        }}
      />
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start">
            {/* Small heading */}
            <p className="text-white/80 text-lg mb-4">AGGIE CLASS ALERT</p>
            
            {/* Main heading - split into lines */}
            <div className="space-y-2">
              <h1 className="text-7xl font-medium text-white">Never miss a</h1>
              <h1 className="text-7xl font-medium text-white">class that</h1>
              <h1 className="text-7xl font-medium text-white">matters.</h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-white/70 mt-6 max-w-xl">
              Get instant notifications when your desired Texas A&M classes become available.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-8 mt-12">
              <button className="px-8 py-3 bg-maroon text-white rounded-lg font-medium hover:bg-maroon/90 transition-colors shadow-lg">
                Get Started
              </button>
              <a href="#learn-more" className="text-white flex items-center gap-2 group">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Screenshot */}
          <div className="relative h-full flex items-center justify-center scale-110">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Add subtle glow effect behind the screenshot */}
              <div className="absolute inset-0 bg-maroon/20 blur-3xl rounded-full transform scale-95 translate-y-4"></div>
              {/* Screenshot with shadow and border */}
              <img 
                src="/images/Screenshot 2025-03-31 at 2.27.11 PM.png" 
                alt="Application Screenshot" 
                className="relative w-full h-auto rounded-xl shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 