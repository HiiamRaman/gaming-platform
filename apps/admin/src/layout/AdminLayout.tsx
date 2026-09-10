import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Gamepad2,
  CreditCard,
  ShieldAlert,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { toast } from "sonner";

export function AdminLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  const navItems = [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { label: "User Management", path: "/admin/users", icon: Users },
    { label: "Game Matrix", path: "/admin/games", icon: Gamepad2 },
    { label: "Deposit Audit", path: "/admin/transactions", icon: CreditCard },
  ];

  const handleLogout = () => {
    toast.success("Secure session terminated.");
    // In a real app, you would clear the auth token here
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 flex font-sans selection:bg-red-600 selection:text-white">

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-[#080808] border-r border-zinc-800/80 flex flex-col justify-between z-50 transition-transform duration-300 ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <div>
          {/* Brand Header */}
          <div className="h-20 px-6 flex items-center justify-between border-b border-zinc-800/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center font-black text-black shadow-lg shadow-red-950/50">
                K8
              </div>
              <div>
                <span className="text-white font-black tracking-widest text-sm block leading-tight">ADMIN CONTROL</span>
                <span className="text-[10px] font-mono text-red-500 uppercase">Secure Gateway v2.4</span>
              </div>
            </div>
            {/* Mobile Close Button */}
            <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              // Exact match for dashboard, partial match for others
              const active = item.path === "/admin"
                ? location.pathname === "/admin"
                : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    active
                      ? "bg-red-600/10 border border-red-500/40 text-red-400 shadow-lg shadow-red-950/30 translate-x-1"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:translate-x-1"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-zinc-800/80">
          <Link
            to="/"
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-red-400 hover:bg-zinc-900 hover:border-red-500/30 border border-transparent transition-all"
          >
            <LogOut className="w-4 h-4" />
            Exit to Client Site
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">

        {/* Top Telemetry Header */}
        <header className="h-20 flex-shrink-0 bg-[#080808]/80 backdrop-blur-xl border-b border-zinc-800/80 px-4 sm:px-8 flex items-center justify-between z-30">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-zinc-400 hover:text-white p-1"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">Restricted Environment</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden sm:inline">System Secure</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="w-full h-full" />
            </div>
          </div>
        </header>

        {/* Scrollable Viewport for Pages */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
