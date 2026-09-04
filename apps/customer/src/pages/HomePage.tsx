import { ArrowUpRight, Gift, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export function HomePage() {
  const steps = [
    {
      num: "STEP 1",
      title: "CLICK ON DEPOSIT",
      desc: "Access the cashier section from your account dashboard.",
    },
    {
      num: "STEP 2",
      title: "SELECT BANK & AMOUNT",
      desc: "Choose your preferred banking channel and enter the deposit amount.",
    },
    {
      num: "STEP 3",
      title: "SCAN QR / TRANSFER",
      desc: "Scan the official QR code or complete a manual bank transfer.",
    },
    {
      num: "STEP 4",
      title: "UPLOAD RECEIPT",
      desc: "Upload proof of your payment transaction for verification.",
    },
    {
      num: "STEP 5",
      title: "START PLAYING",
      desc: "Funds credit successfully so you can enjoy your favorite games.",
    },
  ];

  return (
    <div className="space-y-8 pb-20 pt-4">
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border-b border-red-900/30 py-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <span className="bg-red-500/10 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/20 uppercase tracking-widest">
              Instant Deposit Guide
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              KHALTI88 <span className="text-red-500">Deposit Process</span>
            </h1>
            <p className="text-zinc-400 text-sm lg:text-base leading-relaxed">
              Follow our simple 5-step procedure to top up your account balance
              safely, securely, and instantly.
            </p>
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={() =>
                  toast.info("Redirecting to secure deposit gateway...")
                }
                className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-red-900/40 transition-all flex items-center gap-2"
              >
                Deposit Now <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Promotional Banner Visual Card */}
          <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 border border-zinc-700/60 p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center relative">
            <div className="absolute -top-3 right-4 bg-yellow-500 text-black text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
              VIP BONUS
            </div>
            <div className="w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl mx-auto flex items-center justify-center mb-4 border border-red-500/30">
              <Gift className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">
              Namaste, HELLORAMAN
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Enjoy 100% cashback on your first qualifying deposit transaction
              today!
            </p>
            <div className="bg-zinc-950/60 rounded-xl p-3 border border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-400">Current Balance:</span>
              <span className="text-emerald-400 font-mono font-bold">
                NPR 0.00
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Step Process Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white tracking-wide uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />{" "}
            How to Deposit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between hover:border-red-600/50 transition-all group"
            >
              <div>
                <span className="text-xs font-bold text-red-500 tracking-wider block mb-2">
                  {item.num}
                </span>
                <h3 className="text-white font-bold text-sm mb-2 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                <span>Phase {idx + 1} of 5</span>
                <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-red-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
