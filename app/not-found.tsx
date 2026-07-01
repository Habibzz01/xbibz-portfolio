"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import Lottie (prevents SSR issues)
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function NotFound() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLottie = async () => {
      setIsLoading(true);

      // GitHub Pages (project site) + local dev paths
      const possiblePaths = [
        '/xbibz-portfolio/error404.json',   // GitHub Pages with basePath
        '/error404.json',                    // Local dev + some deployments
      ];

      for (const path of possiblePaths) {
        try {
          const res = await fetch(path, { cache: 'force-cache' });
          if (res.ok) {
            const json = await res.json();
            setAnimationData(json);
            setIsLoading(false);
            return;
          }
        } catch (e) {
          // try next path
        }
      }

      // Final fallback: try direct static import (if bundler allows)
      try {
        // @ts-ignore
        const fallback = await import('../public/error404.json');
        setAnimationData(fallback.default || fallback);
      } catch (_) {}

      setIsLoading(false);
    };

    loadLottie();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[length:4px_4px] opacity-20" />

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Lottie Animation */}
        <div className="w-full max-w-[340px] mx-auto -mt-6 mb-2">
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
                <div className="w-10 h-10 border-2 border-[#27272a] border-t-[#ef4444] rounded-full animate-spin" />
              ) : (
                <div className="text-[110px] font-bold tracking-[-8px] text-[#3f3f46]">404</div>
              )}
            </div>
          )}
        </div>

        {/* Text */}
        <div className="mb-7">
          <h1 className="font-heading text-[70px] md:text-[84px] font-semibold tracking-[-4.5px] leading-none mb-1">
            404
          </h1>
          <p className="text-2xl md:text-[27px] tracking-[-1.1px] text-[#a1a1aa]">
            Page not found
          </p>
          <p className="text-[#71717a] mt-2.5 text-[14px] max-w-[270px] mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-[290px] mx-auto">
          <Link 
            href="/" 
            className="btn-primary flex-1 flex items-center justify-center px-7 py-[14px] rounded-md text-sm font-semibold tracking-[0.5px] active:scale-[0.985] transition"
          >
            BACK TO HOME
          </Link>
          
          <Link 
            href="/#projects" 
            className="flex-1 flex items-center justify-center border border-[#27272a] hover:bg-[#111111] px-6 py-[14px] rounded-md text-sm font-medium transition-colors"
          >
            VIEW PROJECTS
          </Link>
        </div>

        <div className="mt-12 text-[10px] tracking-[3px] text-[#52525b] font-mono">
          XBIBZ. • LOST IN THE VOID
        </div>
      </div>
    </div>
  );
}
