
import {
  CheckCircle2,

  ShieldCheck,
  Copy,
  Home,
  Gamepad2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export function DepositSuccessPage() {
  const transactionId = "TXN-8849-K8";
  const amount = "NPR 10,000";

  const handleCopy = () => {
    navigator.clipboard.writeText(transactionId);
    toast.success("Transaction reference copied to clipboard!");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-[#111] border border-zinc-800/80 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Success Check Icon */}
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-950/50 animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-900/50 uppercase tracking-widest mb-3">
            Audit Verified
          </span>

          <h1 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
            Deposit Successful
          </h1>
          <p className="text-xs text-zinc-400 mb-8">
            Your funds have cleared the gateway audit and have been credited to
            your ledger at lightspeed.
          </p>

          {/* Transaction Receipt Box */}
          <div className="w-full bg-[#080808] border border-zinc-800/80 rounded-2xl p-4 mb-8 space-y-3 text-left">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-500 font-mono">Amount Credited</span>
              <span className="text-white font-black font-mono text-sm">
                {amount}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-500 font-mono">Gateway Channel</span>
              <span className="text-zinc-300 font-medium">
                Khalti / Direct QR
              </span>
            </div>
            <div className="flex justify-between items-center text-xs pt-2 border-t border-zinc-800/60">
              <span className="text-zinc-500 font-mono">Reference ID</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-mono transition-colors cursor-pointer"
              >
                {transactionId} <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3">
            <Link
              to="/casino"
              className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-black font-black text-xs uppercase py-4 rounded-xl shadow-xl shadow-red-950/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4 text-white" />
              <span className="text-white font-black tracking-widest">
                Proceed to Casino
              </span>
            </Link>

            <Link
              to="/"
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/80 font-bold text-xs uppercase py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </div>

          {/* Security Footer Note */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 mt-6">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Secured via 256-Bit Encrypted Ledger Protocol</span>
          </div>
        </div>
      </div>
    </div>
  );
}
