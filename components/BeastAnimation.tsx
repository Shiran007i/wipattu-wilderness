"use client";

import React, { useEffect, useRef } from 'react';

const BeastAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  
  // Segment configuration
  const numSegments = 25; // Slightly more for smoother liquid feel
  const segments = useRef(Array.from({ length: numSegments }, () => ({ x: 0, y: 0 })));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Check if hovering interactive elements
      const target = e.target as HTMLElement;
      isHovering.current = !!target.closest('button, a, .cursor-pointer, input, textarea');
    };

    const handleMouseDown = () => {
      // Impact effect
      segments.current.forEach(seg => {
        seg.x += (Math.random() - 0.5) * 80;
        seg.y += (Math.random() - 0.5) * 80;
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    handleResize();

    let animationFrame: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Physics: First segment follows mouse
      const head = segments.current[0];
      head.x += (mouse.current.x - head.x) * 0.2;
      head.y += (mouse.current.y - head.y) * 0.2;

      // Other segments follow previous with decay
      for (let i = 1; i < numSegments; i++) {
        const seg = segments.current[i];
        const prev = segments.current[i - 1];
        
        const dx = prev.x - seg.x;
        const dy = prev.y - seg.y;
        seg.x += dx * 0.35;
        seg.y += dy * 0.35;
      }

      // Colors: Use vibrant emerald that works on both dark and white
      const mainColor = isHovering.current ? '252, 211, 77' : '16, 185, 129'; 
      const glowColor = isHovering.current ? '255, 230, 100' : '52, 211, 153';

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // 1. Shadow/Outer Glow (Visible on white)
      ctx.shadowBlur = 15;
      ctx.shadowColor = `rgba(${mainColor}, 0.5)`;
      
      // 2. Draw the Trail
      ctx.beginPath();
      ctx.moveTo(segments.current[0].x, segments.current[0].y);
      for (let i = 1; i < numSegments; i++) {
        ctx.lineTo(segments.current[i].x, segments.current[i].y);
      }
      
      const gradient = ctx.createLinearGradient(
        segments.current[0].x, segments.current[0].y,
        segments.current[numSegments-1].x, segments.current[numSegments-1].y
      );
      
      gradient.addColorStop(0, `rgba(${mainColor}, 0.8)`);
      gradient.addColorStop(1, `rgba(${mainColor}, 0)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = isHovering.current ? 10 : 4;
      ctx.stroke();

      // Reset shadow for inner segments
      ctx.shadowBlur = 0;

      // 3. Draw glowing segments
      segments.current.forEach((seg, i) => {
        const size = (numSegments - i) / numSegments * (isHovering.current ? 12 : 8);
        const opacity = (numSegments - i) / numSegments * 0.6;
        
        // Inner Core
        ctx.beginPath();
        ctx.arc(seg.x, seg.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${glowColor}, ${opacity})`;
        ctx.fill();
        
        if (i === 0) { // Head specialized glow
          const headRad = ctx.createRadialGradient(seg.x, seg.y, 0, seg.x, seg.y, size * 4);
          headRad.addColorStop(0, `rgba(${glowColor}, 0.4)`);
          headRad.addColorStop(1, `rgba(${glowColor}, 0)`);
          ctx.beginPath();
          ctx.arc(seg.x, seg.y, size * 4, 0, Math.PI * 2);
          ctx.fillStyle = headRad;
          ctx.fill();
        }
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[150] opacity-90"
      style={{ filter: 'drop-shadow(0px 0px 5px rgba(0,0,0,0.1))' }}
    />
  );
};

export default BeastAnimation;
