import  { useState } from "react";
import { MessageSquare, X, Send, Headset } from "lucide-react";

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 2147483647 }} className="font-sans">

      {/* Floating Welcome Notification Message */}
      {!isOpen && showNotification && (
        <div className="absolute bottom-20 right-0 bg-white text-zinc-900 px-4 py-2.5 rounded-2xl shadow-2xl border border-zinc-200 text-xs font-semibold flex items-center gap-3 animate-bounce whitespace-nowrap">
          <span>👋 Need help? Chat with us!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowNotification(false);
            }}
            className="text-zinc-400 hover:text-zinc-700"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Chat Window Box */}
      {isOpen && (
        <div
          className="absolute bottom-20 right-0 w-80 sm:w-96 bg-[#111] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ height: "450px" }}
        >
          {/* Chat Header */}
          <div className="bg-red-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Headset className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-red-600" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Live Support</h3>
                <p className="text-red-100 text-[10px]">Active 24/7</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#0a0a0a] flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 text-red-500">
                <Headset className="w-3.5 h-3.5" />
              </div>
              <div className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs p-3 rounded-xl max-w-[85%]">
                Hello! Welcome to Khalti88. How can we help you with your deposits or games today?
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#111] border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-red-500"
              />
              <button
                className="p-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl disabled:opacity-50"
                disabled={!message.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-red-600 hover:bg-red-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        style={{ boxShadow: '0 10px 25px -5px rgba(220, 38, 38, 0.5)' }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
