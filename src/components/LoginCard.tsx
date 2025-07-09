'use client';

import { useState } from 'react';

export default function LoginCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-500 cursor-pointer overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4),0_8px_12px_rgba(0,0,0,0.3)] ${
        hovered ? 'w-80 h-72' : 'w-52 h-20'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated rotating border */}
      <div className="absolute inset-0 animate-spin-slow bg-[conic-gradient(at_top_left,_#00f,_#f0f,_#0ff,_#0f0,_#f0f)] rounded-2xl z-0" />

      {/* Inner card */}
      <div className="absolute inset-1.5 bg-[#1e1e28] rounded-xl border-[6px] border-[#25252b] z-10 shadow-[inset_0_2px_6px_rgba(255,255,255,0.06),0_4px_20px_rgba(0,0,0,0.6)]" />

      {/* Login content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-white">
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
  );
}
