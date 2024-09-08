

"use client";

import React, { useEffect, useRef } from 'react';

const DotLottiePlayer: React.FC<{ src: string }> = ({ src }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current) {
      
    }
  }, []);

  return (
    <div ref={playerRef}>
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
      <dotlottie-player 
        src={src} 
        background="transparent" 
        speed="1" 
        style={{ width: '500px', height: '600px' }} 
        loop 
        autoplay>
      </dotlottie-player>
    </div>
  );
};

export default DotLottiePlayer;
