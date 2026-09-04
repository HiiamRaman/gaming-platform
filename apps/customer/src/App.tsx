import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { SignUpModal } from "./components/SignUpModal";
import { HomePage } from "./pages/HomePage";
import { JackpotPage } from "./pages/JackpotPage";
import { SlotPage } from "./pages/SlotPage";
import { LiveCasinoPage } from "./pages/LiveCasinoPage";
import { CrashPage } from "./pages/CrashGamePage";
import { SportsPage } from "./pages/SportsPage";
import { useAuthStore } from "./store/auth.store";
import { FishingPage } from "./pages/FishingPage";
import { EsportsPage } from "./pages/EsportsPage";
function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="p-12 text-center max-w-xl mx-auto mt-16 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
      <h1 className="text-2xl font-bold text-white mb-2">{title} Portal</h1>
      <p className="text-zinc-400 text-sm">
        This section is currently under development.
      </p>
    </div>
  );
}

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const { user, fetchProfile } = useAuthStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-slate-100 font-sans selection:bg-red-600 selection:text-white pb-16">
        <Toaster position="bottom-right" richColors />

        <Navbar
          isLoggedIn={!!user}
          user={user}
          onLoginClick={() => setIsLoginOpen(true)}
          onSignUpClick={() => setIsSignUpOpen(true)}
        />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jackpot" element={<JackpotPage />} />
            <Route path="/slot" element={<SlotPage />} />
            <Route path="/live-casino" element={<LiveCasinoPage />} />
            <Route path="/crash-game" element={<CrashPage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/fishing" element={< FishingPage/>} />
            <Route path="/esports" element={<EsportsPage/>}/>
            <Route
              path="/promotion"
              element={<PlaceholderPage title="Promotion" />}
            />
            <Route
              path="/more"
              element={<PlaceholderPage title="More Options" />}
            />
          </Routes>
        </main>

        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSwitchToSignUp={() => {
            setIsLoginOpen(false);
            setIsSignUpOpen(true);
          }}
        />

        <SignUpModal
          isOpen={isSignUpOpen}
          onClose={() => setIsSignUpOpen(false)}
          onSwitchToLogin={() => {
            setIsSignUpOpen(false);
            setIsLoginOpen(true);
          }}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
