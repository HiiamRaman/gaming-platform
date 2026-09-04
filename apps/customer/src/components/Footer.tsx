import React from 'react';
import { informationLinks, helpCenterLinks, gameProviders, certifications } from '../data/footerData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] text-zinc-400 py-16 px-6 border-t border-[#222] selection:bg-amber-500 selection:text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Side: Game Providers Grid (Span 7 columns) */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
            {gameProviders.map((provider) => (
              <div
                key={provider.name}
                className="bg-[#141414] p-3 rounded-md border border-[#222] flex items-center justify-center h-13 hover:border-zinc-600 hover:bg-[#1a1a1a] transition-all duration-200 group cursor-pointer shadow-sm"
              >
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="max-h-7 max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Links & Compliance (Span 5 columns) */}
        <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">

          {/* Information Column */}
          <div>
            <h4 className="text-zinc-200 font-bold mb-4 uppercase tracking-wider text-[11px]">
              Information
            </h4>
            <ul className="space-y-3">
              {informationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-zinc-400 hover:text-white transition-colors text-xs font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center Column */}
          <div>
            <h4 className="text-zinc-200 font-bold mb-4 uppercase tracking-wider text-[11px]">
              Help Center
            </h4>
            <ul className="space-y-3">
              {helpCenterLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-zinc-400 hover:text-white transition-colors text-xs font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gaming License & Certifications Column */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-zinc-200 font-bold mb-4 uppercase tracking-wider text-[11px]">
              Gaming License
            </h4>
            <div className="bg-[#141414] px-3.5 py-2.5 rounded-md border border-[#222] inline-block mb-6 shadow-sm">
              <span className="text-[10px] font-black text-amber-500 tracking-widest block">GAMING CURACAO</span>
            </div>

            <h4 className="text-zinc-200 font-bold mb-3 uppercase tracking-wider text-[11px]">
              Certification
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="bg-[#141414] px-2 py-1 rounded border border-[#222] text-[10px] font-mono text-zinc-400"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
