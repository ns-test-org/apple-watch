'use client';

export default function AppleWatchIntro() {

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Apple Watch visual representation */}
          <div className="mb-12 flex justify-center animate-fade-in-up">
            <div className="relative animate-float">
              <div className="w-48 h-60 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border border-gray-700 animate-glow">
                <div className="absolute inset-4 bg-black rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    {/* Animated heart rate */}
                    <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2 animate-pulse flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    <div className="text-xs text-gray-400 mb-1">72 BPM</div>
                    <div className="text-xs text-gray-500">10:09</div>
                  </div>
                </div>
                {/* Digital Crown */}
                <div className="absolute right-0 top-16 w-3 h-8 bg-gray-600 rounded-l-lg shadow-lg" />
                {/* Side button */}
                <div className="absolute right-0 top-28 w-2 h-6 bg-gray-600 rounded-l-lg shadow-lg" />
                {/* Watch band */}
                <div className="absolute -left-4 top-8 w-4 h-44 bg-gray-700 rounded-l-full" />
                <div className="absolute -right-4 top-8 w-4 h-44 bg-gray-700 rounded-r-full" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-thin mb-6 tracking-tight">
            Apple Watch
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
            The future of health is on your wrist.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-thin text-center mb-16">Revolutionary Features</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Health Monitoring */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Health Monitoring</h3>
              <p className="text-gray-400 leading-relaxed">
                Track your heart rate, blood oxygen, and ECG. Get insights into your health like never before.
              </p>
            </div>

            {/* Fitness Tracking */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Fitness Tracking</h3>
              <p className="text-gray-400 leading-relaxed">
                Close your rings every day. Track workouts, calories, and stay motivated to reach your goals.
              </p>
            </div>

            {/* Smart Connectivity */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Smart Connectivity</h3>
              <p className="text-gray-400 leading-relaxed">
                Stay connected with calls, messages, and apps. Your iPhone&apos;s perfect companion on your wrist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-thin mb-8">Designed for Life</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Every detail matters. From the curved edges to the Digital Crown, 
                Apple Watch is crafted with precision and care.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Available in multiple sizes and finishes. Choose the perfect style 
                that matches your personality and lifestyle.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative group">
                <div className="w-64 h-80 bg-gradient-to-br from-gray-700 to-gray-900 rounded-[4rem] shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  <div className="absolute inset-6 bg-black rounded-[3rem] flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      {/* Activity rings */}
                      <div className="relative w-20 h-20 mb-4">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                          {/* Move ring */}
                          <path className="text-red-500" strokeDasharray="75, 100" strokeDashoffset="0" strokeLinecap="round" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831">
                            <animateTransform attributeName="transform" type="rotate" values="0 18 18;360 18 18" dur="3s" repeatCount="indefinite"/>
                          </path>
                          {/* Exercise ring */}
                          <path className="text-green-500" strokeDasharray="50, 100" strokeDashoffset="0" strokeLinecap="round" strokeWidth="3" stroke="currentColor" fill="none" d="M18 6.0845 a 11.9155 11.9155 0 0 1 0 23.831 a 11.9155 11.9155 0 0 1 0 -23.831">
                            <animateTransform attributeName="transform" type="rotate" values="0 18 18;360 18 18" dur="4s" repeatCount="indefinite"/>
                          </path>
                          {/* Stand ring */}
                          <path className="text-blue-500" strokeDasharray="80, 100" strokeDashoffset="0" strokeLinecap="round" strokeWidth="3" stroke="currentColor" fill="none" d="M18 10.0845 a 7.9155 7.9155 0 0 1 0 15.831 a 7.9155 7.9155 0 0 1 0 -15.831">
                            <animateTransform attributeName="transform" type="rotate" values="0 18 18;360 18 18" dur="2s" repeatCount="indefinite"/>
                          </path>
                        </svg>
                      </div>
                      <div className="text-sm text-gray-400">Activity Rings</div>
                      <div className="text-xs text-gray-500 mt-1">Close your rings daily</div>
                    </div>
                  </div>
                  {/* Digital Crown */}
                  <div className="absolute right-0 top-20 w-4 h-10 bg-gray-600 rounded-l-lg shadow-lg" />
                  {/* Side button */}
                  <div className="absolute right-0 top-36 w-3 h-8 bg-gray-600 rounded-l-lg shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-thin text-center mb-16">Choose Your Apple Watch</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Apple Watch SE */}
            <div className="bg-gray-900 rounded-3xl p-8 text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="relative w-32 h-40 bg-gradient-to-b from-gray-700 to-gray-800 rounded-[2rem] mx-auto mb-6 shadow-xl">
                <div className="absolute inset-2 bg-black rounded-[1.5rem] flex items-center justify-center">
                  <div className="text-xs text-gray-400">SE</div>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4">Apple Watch SE</h3>
              <p className="text-gray-400 mb-6">Essential features. Incredible value.</p>
              <p className="text-3xl font-thin mb-6">From $249</p>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Apple Watch Series 9 */}
            <div className="bg-gray-900 rounded-3xl p-8 text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border-2 border-blue-600">
              <div className="relative w-32 h-40 bg-gradient-to-b from-blue-600 to-blue-800 rounded-[2rem] mx-auto mb-6 shadow-xl animate-glow">
                <div className="absolute inset-2 bg-black rounded-[1.5rem] flex items-center justify-center">
                  <div className="text-xs text-blue-400">S9</div>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4">Apple Watch Series 9</h3>
              <p className="text-gray-400 mb-6">Our most advanced Apple Watch yet.</p>
              <p className="text-3xl font-thin mb-6">From $399</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition-all duration-300">
                Buy Now
              </button>
            </div>

            {/* Apple Watch Ultra 2 */}
            <div className="bg-gray-900 rounded-3xl p-8 text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="relative w-32 h-40 bg-gradient-to-b from-orange-600 to-orange-800 rounded-[2rem] mx-auto mb-6 shadow-xl">
                <div className="absolute inset-2 bg-black rounded-[1.5rem] flex items-center justify-center">
                  <div className="text-xs text-orange-400">Ultra</div>
                </div>
              </div>
              <h3 className="text-2xl font-light mb-4">Apple Watch Ultra 2</h3>
              <p className="text-gray-400 mb-6">Built for adventure. Designed to explore.</p>
              <p className="text-3xl font-thin mb-6">From $799</p>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-full transition-all duration-300">
                Explore Ultra
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-thin mb-8">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join millions who have made Apple Watch an essential part of their daily life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Buy Now
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2024 Apple Inc. All rights reserved. Apple Watch requires iPhone.
          </p>
        </div>
      </footer>
    </div>
  );
}









