"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import Lottie (client-only)
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function NotFound() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load the Lottie JSON (supports both local dev + GitHub Pages)
  useEffect(() => {
    const loadAnimation = async () => {
      setIsLoading(true);

      // Try GitHub Pages path first (with basePath)
      const pathsToTry = [
        '/xbibz-portfolio/error404.json',
        '/error404.json',
      ];

      for (const path of pathsToTry) {
        try {
          const res = await fetch(path);
          if (res.ok) {
            const data = await res.json();
            setAnimationData(data);
            setIsLoading(false);
            return;
          }
        } catch (_) {
          // continue to next path
        }
      }

      setIsLoading(false);
    };

    loadAnimation();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[length:4px_4px] opacity-25" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
        {/* Lottie Animation Container */}
        <div className="w-full max-w-[320px] md:max-w-[380px] -mt-6 mb-1">
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: 'auto' }}
            />
          ) : (
            <div className="h-[300px] flex items-center justify-center">
              {isLoading ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-9 h-9 border-2 border-[#27272a] border-t-[#ef4444] rounded-full animate-spin" />
                  <div className="text-[#52525b] text-xs tracking-widest font-mono">LOADING ANIMATION</div>
                </div>
              ) : (
                <div className="text-6xl font-bold text-[#52525b]">404</div>
              )}
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="-mt-4 mb-6">
          <h1 className="font-heading text-[68px] md:text-[82px] font-semibold tracking-[-4.5px] leading-none mb-1">
            404
          </h1>
          <p className="text-[22px] md:text-[26px] tracking-[-1px] text-[#a1a1aa] font-medium">
            Page not found
          </p>
          <p className="mt-2.5 text-sm text-[#71717a] max-w-[260px] mx-auto">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[280px]">
          <Link
            href="/"
            className="btn-primary flex-1 flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold tracking-[0.5px] active:scale-[0.985] transition-transform"
          >
            GO TO HOMEPAGE
          </Link>

          <Link
            href="/#projects"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-medium border border-[#27272a] hover:bg-[#111111] hover:border-[#3f3f46] transition-colors"
          >
            SEE PROJECTS
          </Link>
        </div>

        {/* Subtle footer */}
        <div className="mt-12 text-[10px] text-[#3f3f46] tracking-[2.5px] font-mono">
          XBIBZ. • LOST IN THE VOID
        </div>
      </div>

      {/* Decorative bottom label */}
      <div className="absolute bottom-8 text-[#52525b] text-[9px] font-mono tracking-[3px] hidden md:block">
        ERROR 404
      </div>
    </div>
  );
}
