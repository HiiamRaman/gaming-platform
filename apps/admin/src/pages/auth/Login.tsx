import React, { useState } from "react";
import { Lock, User, ShieldAlert, ArrowRight, ServerCrash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Accept a prop to handle the authentication state in our main App
interface LoginProps {
  onLoginSuccess: () => void;
}

export function Login({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock API call delay
    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        toast.success("Authentication successful. Decrypting ledger...");
        onLoginSuccess();
        navigate("/admin");
      } else {
        toast.error("Access Denied. Invalid credentials or unauthorized IP.");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-red-600 selection:text-white">

      {/* Background Ambient Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">

        {/* Telemetry Header */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center font-black text-black shadow-2xl shadow-red-950/50 mb-4 animate-pulse">
              <ServerCrash className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-widest uppercase">K8 <span className="text-red-500">Gateway</span></h1>
            <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mt-2 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
              Restricted Admin Environment
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 shadow-2xl">

          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20 mb-6">
            <ShieldAlert className="w-4 h-4 flex-shrink-0" />
            <span>Unauthorized access attempts will be logged and reported.</span>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1">Authorized ID</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin ID"
                  required
                  className="w-full bg-[#111] border border-zinc-800 text-sm text-white rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-red-500 focus:bg-[#151515] transition-all placeholder:text-zinc-600"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider pl-1">Passcode</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-[#111] border border-zinc-800 text-sm text-white rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-red-500 focus:bg-[#151515] transition-all placeholder:text-zinc-600"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative group mt-4 overflow-hidden rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 via-rose-600 to-amber-500" />
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="relative z-10 flex items-center justify-center gap-2 py-4 px-6">
                <span className="text-black font-black text-xs uppercase tracking-widest">
                  {isLoading ? "Authenticating..." : "Initialize Gateway"}
                </span>
                {!isLoading && <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />}
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
