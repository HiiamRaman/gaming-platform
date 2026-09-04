import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { MainNavBar } from './MainNavBar';
import type { UserSession } from '../../../../packages/shared/types/auth';

interface NavbarProps {
  isLoggedIn?: boolean;
  user?: UserSession | null;
  onLoginClick: () => void;
  onSignUpClick: () => void;
  onDepositClick?: () => void;
  onWithdrawClick?: () => void;
  onLogoutClick?: () => void;
}

export function Navbar({
  isLoggedIn = false,
  user,
  onLoginClick,
  onSignUpClick,
  onDepositClick,
  onWithdrawClick,
  onLogoutClick
}: NavbarProps) {
  return (
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-black tracking-wider text-white flex items-center gap-1.5">
          KHALTI<span className="text-yellow-500">88</span>
        </Link>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              {/* Displaying user info and balance so the 'user' prop is actively read */}
              <div className="hidden sm:flex flex-col text-right mr-1">
                <span className="text-xs font-bold text-zinc-200">{user?.username ?? 'Player'}</span>
                <span className="text-xs font-mono text-emerald-400">Rs {user?.balance ?? 0}</span>
              </div>

              <button onClick={onWithdrawClick} className="text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-3 py-1.5 rounded-lg border border-zinc-700 transition-colors">
                Withdrawal
              </button>
              <button onClick={onDepositClick} className="text-xs font-bold bg-red-600 hover:bg-red-500 text-white px-4 py-1.5 rounded-lg shadow-md transition-colors">
                DEPOSIT
              </button>
              <button onClick={onLogoutClick} className="text-xs font-semibold bg-zinc-950 hover:bg-red-950/40 text-red-400 px-3 py-1.5 rounded-lg border border-red-900/50 transition-colors">
                LOGOUT
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <button onClick={() => alert('Opening live chat...')} className="w-9 h-9 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-300 transition-colors" title="Live Chat">
                <MessageSquare className="w-4 h-4" />
              </button>
              <button onClick={onLoginClick} className="text-xs font-bold text-yellow-500 border border-yellow-500/60 hover:bg-yellow-500/10 px-4 py-2 rounded-lg transition-all tracking-wider">
                LOGIN
              </button>
              <button onClick={onSignUpClick} className="text-xs font-bold text-white bg-gradient-to-r from-red-700 to-rose-700 hover:from-red-600 hover:to-rose-600 px-4 py-2 rounded-lg shadow-md transition-all tracking-wider">
                SIGN UP
              </button>
              <div className="w-8 h-8 flex items-center justify-center overflow-hidden rounded-full border border-zinc-700 bg-zinc-950 ml-1">
                <span className="text-base" role="img" aria-label="Nepal Flag">🇳🇵</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <MainNavBar />
    </header>
  );
}
