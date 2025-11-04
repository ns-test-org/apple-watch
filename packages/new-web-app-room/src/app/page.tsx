'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Health & Fitness",
      description: "Track your workouts, monitor your heart rate, and stay motivated with personalized fitness goals.",
      icon: "❤️"
    },
    {
      title: "Always-On Display",
      description: "See the time and important information at a glance, even when your wrist is down.",
      icon: "⌚"
    },
    {
      title: "Water Resistant",
      description: "Swim, shower, and splash without worry. Built to handle your active lifestyle.",
      icon: "💧"
    },
    {
      title: "Apps & Notifications",
      description: "Stay connected with calls, messages, and your favorite apps right on your wrist.",
      icon: "📱"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-thin mb-6 tracking-tight">
            Apple Watch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            The ultimate device for a healthy life.
          </p>
          
          {/* Watch Visual */}
          <div className="relative mx-auto mb-12 w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-[60px] shadow-2xl animate-float watch-glow hover:rotate-6 transition-transform duration-700">
              <div className="absolute inset-4 bg-black rounded-[45px] flex items-center justify-center">
                <div className="text-4xl md:text-6xl animate-pulse-glow">⌚</div>
              </div>
              {/* Digital Crown */}
              <div className="absolute -right-1 top-16 w-3 h-8 bg-gray-600 rounded-r-lg"></div>
              {/* Side Button */}
              <div className="absolute -right-1 top-28 w-2 h-6 bg-gray-600 rounded-r-lg"></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
              Learn More
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
              Watch Video
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-thin text-center mb-16">
            Designed for Life
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    currentFeature === index 
                      ? 'bg-gray-800 border border-gray-600 scale-105 feature-card-active' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => setCurrentFeature(index)}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl">{feature.icon}</span>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                {/* Watch Display */}
                <div className="relative w-48 h-48 bg-black rounded-[40px] border-4 border-gray-700 flex items-center justify-center">
                  <div className="text-6xl transition-all duration-500 transform">
                    {features[currentFeature].icon}
                  </div>
                  {/* Watch Screen Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[36px] opacity-30"></div>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-thin text-center mb-16">
            Choose Your Style
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-black rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-[25px] flex items-center justify-center text-4xl">
                ⌚
              </div>
              <h3 className="text-2xl font-semibold mb-4">Apple Watch SE</h3>
              <p className="text-gray-300 mb-6">Essential features. Incredible value.</p>
              <p className="text-3xl font-bold text-blue-400">From $249</p>
            </div>
            
            <div className="bg-black rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 border-2 border-blue-500">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[25px] flex items-center justify-center text-4xl watch-glow">
                ⌚
              </div>
              <h3 className="text-2xl font-semibold mb-4">Apple Watch Series 9</h3>
              <p className="text-gray-300 mb-6">Our most advanced watch yet.</p>
              <p className="text-3xl font-bold text-blue-400">From $399</p>
              <div className="mt-4 text-sm text-blue-400 font-medium">Most Popular</div>
            </div>
            
            <div className="bg-black rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-600 to-red-700 rounded-[25px] flex items-center justify-center text-4xl">
                ⌚
              </div>
              <h3 className="text-2xl font-semibold mb-4">Apple Watch Ultra 2</h3>
              <p className="text-gray-300 mb-6">Built for adventure. Designed to explore.</p>
              <p className="text-3xl font-bold text-orange-400">From $799</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-thin mb-16">
            Technical Specifications
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Display</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Always-On Retina LTPO OLED</li>
                <li>1000 nits brightness</li>
                <li>Digital Crown with haptic feedback</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Health</h3>
              <ul className="text-gray-300 space-y-2">
                <li>ECG app</li>
                <li>Blood oxygen monitoring</li>
                <li>Sleep tracking</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Connectivity</h3>
              <ul className="text-gray-300 space-y-2">
                <li>GPS + Cellular options</li>
                <li>Wi-Fi 802.11b/g/n 2.4GHz</li>
                <li>Bluetooth 5.3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-thin mb-8">
            Ready to upgrade your life?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Experience the future of wearable technology today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-medium transition-colors">
              Buy Now
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-12 py-4 rounded-full text-lg font-medium transition-colors">
              Compare Models
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Apple Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}





