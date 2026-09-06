import React, { useState, useEffect } from "react";
import { ChevronRight, Flame, ChevronLeft, Wallet } from "lucide-react";
import { CasinoPage } from "./CasinoPage";
import { PromoTicker } from "../components/PromoTicker";

// Direct imports from your src/assets folder
import khalti1 from "../assets/Home-khalti/khalti1.webp";
import khalti2 from "../assets/Home-khalti/khalti2.webp";
import khalti3 from "../assets/Home-khalti/khalti3.webp";
import khalti4 from "../assets/Home-khalti/khalti4.webp";
import khalti5 from "../assets/Home-khalti/khalti5.webp";
import khalti6 from "../assets/Home-khalti/khalti6.webp";
import khalti7 from "../assets/Home-khalti/khalti7.webp";
import khalti8 from "../assets/Home-khalti/khalti8.webp";

export function HomePage() {
  const banners = [
    { id: 1, title: "KHALTI88 WELCOME REWARD", image: khalti1 },
    { id: 2, title: "DAILY LIVE CASINO YIELD", image: khalti2 },
    { id: 3, title: "CRASH & JETX TOURNAMENT", image: khalti3 },
    { id: 4, title: "MEGA FORTUNE SPINS", image: khalti4 },
    { id: 5, title: "GLOBAL LEAGUE ODDS", image: khalti5 },
    { id: 6, title: "OCEAN KING MULTIPLIERS", image: khalti6 },
    { id: 7, title: "PRO TOURNAMENT STREAMS", image: khalti7 },
    { id: 8, title: "LIGHTSPEED SETTLEMENTS", image: khalti8 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-sliding every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  const steps = [
    {
      num: "01",
      title: "CLICK ON DEPOSIT",
      desc: "Instantly launch the secure cashier matrix from your personal dashboard.",
    },
    {
      num: "02",
      title: "SELECT BANK & AMOUNT",
      desc: "Pick your preferred high-speed banking channel and enter your stake.",
    },
    {
      num: "03",
      title: "SCAN QR / TRANSFER",
      desc: "Authorize seamlessly via official encrypted gateway QR codes.",
    },
    {
      num: "04",
      title: "UPLOAD RECEIPT",
      desc: "Instant automated audit validation clears your transaction instantly.",
    },
    {
      num: "05",
      title: "START PLAYING",
      desc: "Funds hit your ledger at lightspeed. Claim your table.",
    },
  ];

  return (
    <div className="bg-[#050505] text-zinc-100 overflow-hidden font-sans pb-24 relative">

      {/* High-End Cinematic Sliding Hero Banner */}
      <div className="relative h-[400px] lg:h-[480px] bg-[#0d0d0d] border-b border-zinc-800/80 overflow-hidden w-full group mb-10">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full h-full px-4 sm:px-6 lg:px-8 relative z-10">
          {banners.map((banner, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={banner.id}
                className={`absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 inset-y-0 transition-all duration-700 ease-in-out flex items-center ${
                  isActive
                    ? "opacity-100 translate-x-0 pointer-events-auto z-10 scale-100"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-12 pointer-events-none z-0 scale-95"
                    : "opacity-0 translate-x-12 pointer-events-none z-0 scale-95"
                }`}
              >
                {/* Visible Background Image Container */}
                <div className="absolute inset-0 z-0 lg:rounded-3xl overflow-hidden border-x border-zinc-800/80 shadow-2xl bg-[#111]">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
            );
          })}

          {/* Swipe / Navigation Arrow Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl text-white flex items-center justify-center opacity-80 hover:opacity-100 hover:bg-red-600 hover:border-red-500 transition-all duration-300 cursor-pointer shadow-2xl active:scale-90"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl text-white flex items-center justify-center opacity-80 hover:opacity-100 hover:bg-red-600 hover:border-red-500 transition-all duration-300 cursor-pointer shadow-2xl active:scale-90"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2 bg-black/60 px-4 py-2.5 rounded-full border border-white/10 backdrop-blur-md">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === currentSlide
                    ? "w-8 bg-gradient-to-r from-red-500 to-amber-400 shadow-sm"
                    : "w-2 bg-zinc-400 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <PromoTicker/>
      </div>

      {/* Main Casino Games Section */}
      <div className="relative z-10">
        <CasinoPage />
      </div>

      {/* 5-Step Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-zinc-800/80 pb-6">
          <div>
            <h2 className="text-lg font-black text-white tracking-widest uppercase flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-lg shadow-red-600/50 animate-ping" />
              <Flame className="w-4 h-4 text-amber-500" />
              Instant Cashier Protocol
            </h2>
            <p className="text-xs text-zinc-400 mt-1 font-medium">
              Follow these straightforward steps to load your wallet balance.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 w-fit">
            <Wallet className="w-3.5 h-3.5" /> SECURE PIPELINE
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#121212] border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-red-600/60 hover:bg-[#161616] transition-all duration-300 group shadow-lg transform hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl pointer-events-none group-hover:bg-red-600/10 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-black text-red-500 bg-red-950/60 px-2.5 py-1 rounded-md border border-red-900/40">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-white font-black text-xs uppercase tracking-wider mb-2 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
                <span className="font-mono text-[10px] uppercase text-zinc-500">Verified</span>
                <div className="w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-red-600/50 group-hover:text-red-500 transition-all">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-500 transform group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
