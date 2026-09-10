import { useState, useEffect } from "react";
import {
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Clock,
  ShieldAlert,
  RefreshCcw,
} from "lucide-react";

export function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger entry animations on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      id: 1,
      label: "Gross Revenue (24h)",
      value: "NPR 4,250,000",
      trend: "+12.5%",
      isUp: true,
      icon: DollarSign,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      id: 2,
      label: "Active Players",
      value: "8,492",
      trend: "+5.2%",
      isUp: true,
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      id: 3,
      label: "Wager Volume (24h)",
      value: "NPR 12.1M",
      trend: "-2.4%",
      isUp: false,
      icon: Activity,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
    },
    {
      id: 4,
      label: "Pending Payouts",
      value: "142",
      trend: "Action Required",
      isUp: null,
      icon: Wallet,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "VIP_Tiger99",
      action: "Requested Withdrawal",
      amount: "NPR 500,000",
      time: "2 mins ago",
      status: "pending",
    },
    {
      id: 2,
      user: "SamuraiX",
      action: "Deposit Cleared",
      amount: "NPR 25,000",
      time: "5 mins ago",
      status: "success",
    },
    {
      id: 3,
      user: "System",
      action: "Routine Security Audit",
      amount: "-",
      time: "15 mins ago",
      status: "info",
    },
    {
      id: 4,
      user: "LuckyDragon",
      action: "Won Jackpot (Slots)",
      amount: "NPR 1,200,000",
      time: "28 mins ago",
      status: "success",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div
        className={`flex items-end justify-between transition-all duration-700 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <div>
          <h1 className="text-2xl font-black text-white tracking-widest uppercase">
            Command Center
          </h1>
          <p className="text-xs text-zinc-400 mt-1 font-mono">
            Live telemetry and system overview
          </p>
        </div>
        <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-red-500/50 hover:text-red-400 text-zinc-400 px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all">
          <RefreshCcw className="w-3.5 h-3.5" />
          Sync Data
        </button>
      </div>

      {/* Top Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`bg-[#111] border border-zinc-800/80 rounded-2xl p-5 hover:bg-[#151515] hover:border-zinc-700 transition-all duration-500 transform group ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.border} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>

                {stat.isUp !== null && (
                  <div
                    className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-md ${stat.isUp ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}
                  >
                    {stat.isUp ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    {stat.trend}
                  </div>
                )}
                {stat.isUp === null && (
                  <div className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-md bg-amber-500/10 text-amber-400 animate-pulse">
                    <ShieldAlert className="w-3 h-3" />
                    {stat.trend}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">
                  {stat.label}
                </h3>
                <p className="text-2xl font-black text-white">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section: Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Placeholder (Spans 2 columns) */}
        <div
          style={{ transitionDelay: "400ms" }}
          className={`lg:col-span-2 bg-[#111] border border-zinc-800/80 rounded-2xl p-6 transition-all duration-700 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Revenue Analytics (7D)
            </h3>
            <select className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 px-3 py-1.5 rounded-lg focus:outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Year to Date</option>
            </select>
          </div>

          {/* Faux Chart Area */}
          <div className="w-full h-64 border border-zinc-800/50 rounded-xl bg-gradient-to-b from-zinc-900/50 to-transparent flex items-end justify-between p-4 gap-2">
            {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
              <div key={i} className="w-full relative group">
                <div
                  style={{
                    height: `${height}%`,
                    transitionDelay: `${500 + i * 100}ms`,
                  }}
                  className={`w-full bg-red-600/20 hover:bg-red-500/40 border-t border-red-500/50 rounded-t-sm transition-all duration-700 ease-out ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Live Activity Feed (Spans 1 column) */}
        <div
          style={{ transitionDelay: "500ms" }}
          className={`bg-[#111] border border-zinc-800/80 rounded-2xl p-6 transition-all duration-700 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Ledger
            </h3>
          </div>

          <div className="space-y-4">
            {recentActivity.map((log) => (
              <div
                key={log.id}
                className="flex flex-col gap-2 p-3 rounded-xl bg-[#0a0a0a] border border-zinc-800/50 hover:border-zinc-700 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-white">
                    {log.user}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-mono">
                    <Clock className="w-3 h-3" /> {log.time}
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400">
                    {log.action}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold ${
                      log.status === "success"
                        ? "text-emerald-400"
                        : log.status === "pending"
                          ? "text-amber-400"
                          : "text-blue-400"
                    }`}
                  >
                    {log.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-2 border border-zinc-800 text-xs font-bold text-zinc-400 uppercase tracking-wider rounded-lg hover:bg-zinc-900 transition-colors">
            View All Logs
          </button>
        </div>
      </div>
    </div>
  );
}
