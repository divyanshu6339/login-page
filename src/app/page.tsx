'use client';

import { useState, useEffect } from 'react';

export default function LoginPage() {
  const [hovered, setHovered] = useState(false);
'use client';

import { useState, useEffect } from 'react';

export default function LoginPage() {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-neutral-900" />;

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <div
        className={`relative rounded-2xl transition-all duration-500 overflow-hidden cursor-pointer ${
          hovered ? 'w-80 h-72' : 'w-52 h-20'
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Glowing border animation */}
        <div className="absolute inset-0 animate-border-spin bg-[conic-gradient(at_top_left,_#00f,_#f0f,_#0ff,_#0f0,_#f0f)] rounded-2xl -z-10" />

        {/* Inner box */}
        <div className="absolute inset-1.5 bg-[#1e1e28] rounded-xl border-4 border-[#25252b] -z-0 shadow-[0_0_20px_#000]" />

        {/* Login content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-white">
          {!hovered ? (
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 tracking-wide">
              Login
            </h2>
          ) : (
            <form className="flex flex-col items-center w-full space-y-3">
              <input
                type="text"
                placeholder="Username"
                className="w-4/5 p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-4/5 p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded hover:brightness-110 transition"
              >
                Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

