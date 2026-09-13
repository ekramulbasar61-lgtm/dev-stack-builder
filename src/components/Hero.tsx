import React from 'react';
import bannerStack from '../assets/banner-stack.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="text-gradient-brand">Development Stack</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#technologies"
                className="px-6 py-3 rounded-full bg-gradient-brand hover-gradient-brand text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                Explore Technologies
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Right Banner Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-60"></div>
              <img
                src={bannerStack}
                alt="Development Stack 3D Illustration"
                className="relative w-full h-auto object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
