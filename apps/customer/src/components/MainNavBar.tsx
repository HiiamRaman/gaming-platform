
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Trophy,
  Gamepad2,
  PlayCircle,
  Flame,
  Zap,
  Fish,
  Menu,
  Gift,
} from "lucide-react";

export function MainNavBar() {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "HOME", icon: Home },
    { to: "/jackpot", label: "JACKPOT", icon: Trophy },
    { to: "/slot", label: "SLOT", icon: Gamepad2 },
    { to: "/live-casino", label: "LIVE CASINO", icon: PlayCircle },
    { to: "/crash-game", label: "CRASH GAME", icon: Flame },
    { to: "/sports", label: "SPORTS", icon: Zap },
    { to: "/fishing", label: "FISHING", icon: Fish }, // Fixed casing and icon
    { to: "/esports", label: "ESPORTS", icon: Gamepad2 }, // Fixed casing, typo, and icon
  ];

  return (
    <div className="bg-red-700 border-t border-red-800 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto h-14 px-4 flex items-center gap-1 text-sm font-bold tracking-wide uppercase text-white whitespace-nowrap">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-1.5 px-3 py-2.5 transition-colors ${
                isActive ? "border-b-2 border-amber-400" : "hover:bg-red-800/60"
              }`}
            >
              <Icon className="w-3.5 h-3.5" /> {item.label}
            </Link>
          );
        })}

        <Link
          to="/promotion"
          className={`flex items-center rounded-md gap-1.5 px-3 py-2.5 ml-auto transition-colors ${
            location.pathname === "/promotion"
              ? "bg-emerald-700 border-b-2 border-amber-400"
              : "bg-emerald-600 hover:bg-emerald-500"
          }`}
        >
          <Gift className="w-3.5 h-3.5" /> PROMOTION
        </Link>
        <Link
          to="/more"
          className={`flex items-center rounded-md gap-1.5 px-3 py-2.5 transition-colors ${
            location.pathname === "/more"
              ? "bg-red-950 border-b-2 border-amber-400"
              : "bg-red-900 hover:bg-red-950"
          }`}
        >
          <Menu className="w-3.5 h-3.5" /> MORE
        </Link>
      </div>
    </div>
  );
}
