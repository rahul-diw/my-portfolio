// src/effects/BackgroundCanvas.jsx
import React, { useRef, useEffect } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const scrollRef = useRef(0);
  const timeRef = useRef(0);
  const lightningRef = useRef([]);
  const flashRef = useRef({ active: false, alpha: 0, time: 0 });
  const rainRef = useRef([]);
  const cloudsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let W, H;

    // ============================================================
    // 1. RESIZE & INIT
    // ============================================================
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initRain();
      initClouds();
    };

    const initRain = () => {
      const count = Math.floor((W * H) / 2000);
      rainRef.current = [];
      for (let i = 0; i < count; i++) {
        rainRef.current.push({
          x: Math.random() * W,
          y: Math.random() * H,
          length: 10 + Math.random() * 20,
          speed: 6 + Math.random() * 10,
          opacity: 0.15 + Math.random() * 0.25,
          width: 0.5 + Math.random() * 0.8,
        });
      }
    };

    const initClouds = () => {
      cloudsRef.current = [];
      const cloudCount = 8 + Math.floor(Math.random() * 6);
      for (let i = 0; i < cloudCount; i++) {
        cloudsRef.current.push({
          x: Math.random(),
          y: 0.1 + Math.random() * 0.5,
          width: 200 + Math.random() * 400,
          height: 60 + Math.random() * 120,
          speed: 0.05 + Math.random() * 0.1,
          darkness: 0.3 + Math.random() * 0.4,
          layer: Math.floor(Math.random() * 3), // 0=back, 1=mid, 2=front
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    // ============================================================
    // 2. EVENTS
    // ============================================================
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / W;
      mouseRef.current.y = (e.clientY - rect.top) / H;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = maxScroll > 0 ? scrollY / maxScroll : 0;
      
      if (Math.random() < 0.25) {
        triggerLightning();
      }
    };

    // Auto lightning
    const autoLightningInterval = setInterval(() => {
      if (Math.random() < 0.12) {
        triggerLightning();
      }
    }, 3500);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // ============================================================
    // 3. LIGHTNING — REALISTIC, FORKED
    // ============================================================
    
    const generateLightning = (startX, startY) => {
      const bolt = [];
      const segments = 20 + Math.floor(Math.random() * 15);
      const points = [];
      
      let x = startX;
      let y = startY;
      
      for (let i = 0; i < segments; i++) {
        const angle = (Math.random() - 0.5) * 1.0;
        const length = 10 + Math.random() * 25;
        
        x += Math.sin(angle) * length;
        y += Math.cos(angle) * length * 1.4;
        
        // Branches
        if (Math.random() < 0.15 && i > 4 && i < segments - 3) {
          const branchPoints = [];
          let bx = x;
          let by = y;
          const branchSegments = 4 + Math.floor(Math.random() * 6);
          const branchAngle = (Math.random() - 0.5) * 2.0 + Math.PI / 3;
          
          for (let j = 0; j < branchSegments; j++) {
            bx += Math.sin(branchAngle + (Math.random() - 0.5) * 0.6) * (8 + Math.random() * 18);
            by += Math.cos(branchAngle + (Math.random() - 0.5) * 0.6) * (10 + Math.random() * 16);
            branchPoints.push({ x: bx, y: by });
          }
          
          bolt.push({
            points: branchPoints,
            width: 0.3 + Math.random() * 0.5,
            isBranch: true,
          });
        }
        
        points.push({ x, y });
      }
      
      bolt.push({
        points: points,
        width: 1 + Math.random() * 0.5,
        isBranch: false,
      });
      
      return bolt;
    };

    const triggerLightning = () => {
      const scroll = scrollRef.current;
      
      const baseX = 0.1 + scroll * 0.8;
      const baseY = 0.05 + scroll * 0.6;
      
      const xOffset = (Math.random() - 0.5) * 0.5;
      const yOffset = (Math.random() - 0.5) * 0.25;
      
      const startX = (baseX + xOffset) * W;
      const startY = (baseY + yOffset) * H;
      
      const bolt = generateLightning(startX, startY);
      
      lightningRef.current.push({
        bolt,
        life: 1,
        fadeSpeed: 0.004 + Math.random() * 0.006,
        flashAlpha: 0.2 + Math.random() * 0.2,
      });
      
      flashRef.current.active = true;
      flashRef.current.alpha = 0.2 + Math.random() * 0.2;
      flashRef.current.time = 0;
      
      if (lightningRef.current.length > 4) {
        lightningRef.current.shift();
      }
    };

    // ============================================================
    // 4. DRAW FUNCTIONS
    // ============================================================

    // 4a. Sky Background
    const drawSky = () => {
      const scroll = scrollRef.current;
      
      // Dark storm sky
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, `hsl(220, 25%, ${8 + scroll * 3}%)`);
      grad.addColorStop(0.3, `hsl(225, 30%, ${10 + scroll * 4}%)`);
      grad.addColorStop(0.6, `hsl(230, 35%, ${12 + scroll * 5}%)`);
      grad.addColorStop(0.85, `hsl(235, 40%, ${14 + scroll * 6}%)`);
      grad.addColorStop(1, `hsl(240, 45%, ${16 + scroll * 7}%)`);
      
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    };

    // 4b. CLOUDS — REALISTIC, LAYERED
    const drawClouds = () => {
      const scroll = scrollRef.current;
      const mx = mouseRef.current.x;
      const time = timeRef.current;
      
      // Sort by layer (back to front)
      const sortedClouds = [...cloudsRef.current].sort((a, b) => a.layer - b.layer);
      
      sortedClouds.forEach((cloud) => {
        // Cloud movement
        const moveX = (cloud.x + time * cloud.speed * 0.0005 + scroll * 0.05) % 1;
        const moveY = cloud.y + scroll * 0.02;
        const cx = moveX * W;
        const cy = moveY * H;
        
        // Mouse influence — subtle
        const mouseOffsetX = (mx - 0.5) * 20 * (cloud.layer + 1) * 0.3;
        const mouseOffsetY = (mx - 0.5) * 10 * (cloud.layer + 1) * 0.2;
        
        const centerX = cx + mouseOffsetX;
        const centerY = cy + mouseOffsetY;
        
        // Cloud opacity based on layer
        const baseOpacity = 0.15 + cloud.darkness * 0.4;
        const layerOpacity = baseOpacity * (0.7 + cloud.layer * 0.15);
        const scrollOpacity = 1 + scroll * 0.3;
        
        // Multiple overlapping circles for cloud texture
        const circles = [
          { x: 0, y: 0, r: cloud.width * 0.5 },
          { x: -cloud.width * 0.25, y: -cloud.height * 0.2, r: cloud.width * 0.35 },
          { x: cloud.width * 0.3, y: -cloud.height * 0.15, r: cloud.width * 0.4 },
          { x: -cloud.width * 0.15, y: cloud.height * 0.15, r: cloud.width * 0.3 },
          { x: cloud.width * 0.2, y: cloud.height * 0.1, r: cloud.width * 0.35 },
          { x: -cloud.width * 0.35, y: cloud.height * 0.05, r: cloud.width * 0.25 },
          { x: cloud.width * 0.4, y: cloud.height * 0.05, r: cloud.width * 0.28 },
        ];
        
        circles.forEach((c) => {
          const grad = ctx.createRadialGradient(
            centerX + c.x,
            centerY + c.y,
            0,
            centerX + c.x,
            centerY + c.y,
            c.r
          );
          
          const alpha = layerOpacity * scrollOpacity * (0.5 + Math.random() * 0.2);
          grad.addColorStop(0, `rgba(50, 60, 90, ${alpha})`);
          grad.addColorStop(0.3, `rgba(40, 50, 80, ${alpha * 1.2})`);
          grad.addColorStop(0.7, `rgba(30, 40, 70, ${alpha * 1.4})`);
          grad.addColorStop(1, `rgba(20, 30, 60, ${alpha * 0.8})`);
          
          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.arc(centerX + c.x, centerY + c.y, c.r, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        });
        
        // Cloud edge glow (lightning reflection)
        if (flashRef.current.active) {
          const flashGrad = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, cloud.width * 0.6
          );
          flashGrad.addColorStop(0, `rgba(150, 190, 255, ${flashRef.current.alpha * 0.02})`);
          flashGrad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.beginPath();
          ctx.arc(centerX, centerY, cloud.width * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = flashGrad;
          ctx.fill();
        }
      });
    };

    // 4c. LIGHTNING
    const drawLightning = () => {
      const bolts = lightningRef.current;
      
      for (let b = bolts.length - 1; b >= 0; b--) {
        const data = bolts[b];
        data.life -= data.fadeSpeed;
        
        if (data.life <= 0) {
          bolts.splice(b, 1);
          continue;
        }
        
        const alpha = data.life * 0.8 + 0.2;
        
        data.bolt.forEach((segment) => {
          const pts = segment.points;
          if (pts.length < 2) return;
          
          const isBranch = segment.isBranch;
          const baseWidth = isBranch ? segment.width * 0.6 : segment.width;
          
          // Outer glow
          ctx.shadowColor = `rgba(80, 120, 220, ${alpha * 0.1})`;
          ctx.shadowBlur = isBranch ? 20 : 40;
          ctx.strokeStyle = `rgba(120, 160, 230, ${alpha * 0.06})`;
          ctx.lineWidth = baseWidth * (isBranch ? 10 : 16);
          ctx.beginPath();
          ctx.moveTo(pts[0].x, pts[0].y);
          for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i].x, pts[i].y);
          }
          ctx.stroke();
          
          // Mid glow
          ctx.shadowColor = `rgba(180, 210, 255, ${alpha * 0.15})`;
          ctx.shadowBlur = isBranch ? 12 : 25;
          ctx.strokeStyle = `rgba(200, 220, 250, ${alpha * 0.3})`;
          ctx.lineWidth = baseWidth * (isBranch ? 4 : 7);
          ctx.beginPath();
          ctx.moveTo(pts[0].x, pts[0].y);
          for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i].x, pts[i].y);
          }
          ctx.stroke();
          
          // Core — bright white
          ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.12})`;
          ctx.shadowBlur = isBranch ? 6 : 12;
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
          ctx.lineWidth = baseWidth * (isBranch ? 1 : 2);
          ctx.beginPath();
          ctx.moveTo(pts[0].x, pts[0].y);
          for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i].x, pts[i].y);
          }
          ctx.stroke();
          
          ctx.shadowBlur = 0;
        });
      }
    };

    // 4d. FLASH — SUBTLE
    const drawFlash = () => {
      if (!flashRef.current.active) return;
      
      flashRef.current.time += 0.02;
      flashRef.current.alpha *= 0.96;
      
      if (flashRef.current.alpha < 0.005 || flashRef.current.time > 1.5) {
        flashRef.current.active = false;
        flashRef.current.alpha = 0;
        return;
      }
      
      // Very subtle ambient flash
      ctx.fillStyle = `rgba(180, 210, 255, ${flashRef.current.alpha * 0.03})`;
      ctx.fillRect(0, 0, W, H);
      
      // Quick bright burst
      if (flashRef.current.time < 0.08) {
        ctx.fillStyle = `rgba(200, 220, 255, ${flashRef.current.alpha * 0.06})`;
        ctx.fillRect(0, 0, W, H);
      }
    };

    // 4e. RAIN
    const drawRain = () => {
      const scroll = scrollRef.current;
      const rain = rainRef.current;
      const time = timeRef.current;
      
      rain.forEach((drop) => {
        drop.y += drop.speed * (1 + scroll * 0.4);
        drop.x += drop.speed * 0.2 + Math.sin(time * 0.001 + drop.x) * 0.2;
        
        if (drop.y > H) {
          drop.y = -drop.length;
          drop.x = Math.random() * W;
        }
        if (drop.x > W) {
          drop.x = -10;
        }
        if (drop.x < -10) {
          drop.x = W + 10;
        }
        
        const alpha = drop.opacity * (0.5 + scroll * 0.3);
        
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + 1.5, drop.y + drop.length);
        ctx.strokeStyle = `rgba(150, 180, 220, ${alpha})`;
        ctx.lineWidth = drop.width;
        ctx.stroke();
      });
    };

    // 4f. Floating Shapes (minimal)
    const drawShapes = (mx, my, time) => {
      const shapes = [
        { x: 0.2, y: 0.4, size: 100, speed: 0.2 },
        { x: 0.75, y: 0.55, size: 80, speed: 0.3 },
        { x: 0.45, y: 0.7, size: 70, speed: 0.25 },
        { x: 0.9, y: 0.3, size: 60, speed: 0.35 },
        { x: 0.1, y: 0.6, size: 90, speed: 0.3 },
      ];

      shapes.forEach((shape, i) => {
        const targetX = shape.x + (mx - 0.5) * 0.05;
        const targetY = shape.y + (my - 0.5) * 0.05;
        
        const floatX = Math.sin(time * 0.0003 * shape.speed + i * 1.5) * 0.02;
        const floatY = Math.cos(time * 0.0004 * shape.speed + i * 1.2) * 0.02;
        
        const px = (targetX + floatX) * W;
        const py = (targetY + floatY) * H;
        
        const grad = ctx.createRadialGradient(px, py, 0, px, py, shape.size);
        grad.addColorStop(0, 'rgba(60, 80, 140, 0.015)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(px, py, shape.size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });
    };

    // 4g. Mouse Glow
    const drawMouseGlow = (mx, my, time) => {
      const px = mx * W;
      const py = my * H;
      
      const grad = ctx.createRadialGradient(px, py, 0, px, py, 200);
      grad.addColorStop(0, 'rgba(80, 120, 200, 0.02)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(px, py, 200, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      const ringSize = 18 + Math.sin(time * 0.03) * 3;
      ctx.beginPath();
      ctx.arc(px, py, ringSize, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(80, 120, 200, 0.04)';
      ctx.lineWidth = 0.6;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(px, py, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(180, 210, 255, 0.2)';
      ctx.fill();
    };

    // ============================================================
    // 5. MAIN LOOP
    // ============================================================
    const animate = () => {
      const time = timeRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      drawSky();
      drawClouds();
      drawRain();
      drawFlash();
      drawLightning();
      drawShapes(mx, my, time);
      drawMouseGlow(mx, my, time);

      timeRef.current += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(autoLightningInterval);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default BackgroundCanvas;