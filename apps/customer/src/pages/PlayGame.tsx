import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Maximize2 } from "lucide-react";
import { allGames } from "../data/gameData";

export function PlayGame() {
  const { gameId } = useParams();
  const navigate = useNavigate();

  // Scroll to the top when the game loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentGame = allGames.find((g) => g.id === gameId);

  // Falls back to a default pragmatic frame if a custom demoUrl isn't provided
  const gameLaunchUrl = currentGame?.demoUrl ||
    `https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=${gameId}&jurisdiction=99`;

  const handleFullscreen = () => {
    const iframe = document.getElementById("game-frame");
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-800 bg-[#0a0a0a]">

        {/* Changed this button to navigate explicitly to "/" */}
        <button
          onClick={() => navigate("/home-game")}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Exit Game
        </button>

        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold capitalize text-emerald-400">
            {currentGame ? currentGame.title : gameId?.replace(/-/g, " ")}
          </span>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
            {currentGame?.provider || "Casino Provider"}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleFullscreen}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" /> Fullscreen
          </button>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure
          </div>
        </div>
      </div>

      {/* Iframe Viewport */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-6 bg-black">
        <div className="w-full max-w-6xl aspect-[16/9] max-h-[85vh] bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative">
          <iframe
            id="game-frame"
            src={gameLaunchUrl}
            title={gameId}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
