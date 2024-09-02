import React, { useEffect, useRef, type HTMLAttributes, type PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { createNoise3D } from 'simplex-noise';

import { cn } from '@/lib/utils';

interface VortexProps extends PropsWithChildren, HTMLAttributes<HTMLCanvasElement> {
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const particleCount =
    typeof window !== 'undefined' ? Math.min(props.particleCount || 500, window.innerWidth * 0.2) : 500;
  const particlePropCount = 8;
  const particlePropsLength = particleCount * particlePropCount;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || '#000000';
  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  let center: [number, number] = [0, 0];
  let animationFrameId: number;

  const TAU: number = 2 * Math.PI;
  const rand = (n: number): number => n * Math.random();
  const fadeInOut = (t: number, m: number): number => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number => (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength); // Correctly sized array

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x, y, vx, vy, life, ttl, speed, radius;

    x = rand(canvas.width);
    y = rand(canvas.height);
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    speed = baseSpeed + rand(rangeSpeed);
    radius = baseRadius + rand(rangeRadius);

    if (i + particlePropCount <= particlePropsLength) {
      particleProps.set([x, y, vx, vy, life, ttl, speed, radius], i);
    }
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);

    animationFrameId = window.requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    const batchSize = Math.floor(particleCount / 10) * particlePropCount;

    for (let i = 0; i < particlePropsLength; i += batchSize) {
      // Ensure the loop doesn't exceed the array length
      const upperLimit = Math.min(i + batchSize, particlePropsLength);
      for (let j = i; j < upperLimit; j += particlePropCount) {
        updateParticle(j, ctx);
      }
    }
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i;
    let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius;

    x = particleProps[i];
    y = particleProps[i2];
    n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
    vx = lerp(particleProps[i3], Math.cos(n), 0.5);
    vy = lerp(particleProps[i4], Math.sin(n), 0.5);
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    x2 = x + vx * speed;
    y2 = y + vy * speed;
    radius = particleProps[i8];

    drawParticle(x, y, x2, y2, life, ttl, radius, ctx);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
  };

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(0, 0%, 100%, ${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) => {
    return x > canvas.width || x < 0 || y > canvas.height || y < 0;
  };

  const resize = (canvas: HTMLCanvasElement, _ctx?: CanvasRenderingContext2D) => {
    const container = containerRef.current;

    if (container) {
      const { offsetWidth, offsetHeight } = container;

      canvas.width = offsetWidth;
      canvas.height = offsetHeight;

      center[0] = 0.5 * canvas.width;
      center[1] = 0.5 * canvas.height;
    }
  };

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.filter = 'blur(8px) brightness(200%)';
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = 'blur(4px) brightness(200%)';
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const renderToScreen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(), wait);
    };
  };

  useEffect(() => {
    setup();
    const handleResize = debounce(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (canvas && ctx) {
        resize(canvas, ctx);
      }
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn('relative h-full w-full', props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn('relative z-10', props.className)}>{props.children}</div>
    </div>
  );
};
