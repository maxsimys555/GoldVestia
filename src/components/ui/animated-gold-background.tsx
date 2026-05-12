'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimatedGoldBackgroundProps = {
  className?: string;
};

const glowLayers = [
  {
    className: 'left-[-18%] top-[-24%] h-[36rem] w-[36rem] bg-amber-200/[0.28] sm:h-[50rem] sm:w-[50rem]',
    x: [0, 28, -16, 0],
    y: [0, 18, 34, 0],
    scale: [1, 1.08, 0.98, 1],
    opacity: [0.5, 0.76, 0.42, 0.5],
    duration: 28,
  },
  {
    className: 'right-[-20%] top-[8%] h-[32rem] w-[32rem] bg-yellow-500/[0.22] sm:h-[44rem] sm:w-[44rem]',
    x: [0, -26, 18, 0],
    y: [0, 34, -12, 0],
    scale: [0.96, 1.1, 1, 0.96],
    opacity: [0.38, 0.64, 0.32, 0.38],
    duration: 34,
  },
  {
    className: 'bottom-[-26%] left-[30%] h-[30rem] w-[30rem] bg-orange-300/[0.18] sm:h-[42rem] sm:w-[42rem]',
    x: [0, 20, -24, 0],
    y: [0, -24, -36, 0],
    scale: [1, 0.95, 1.08, 1],
    opacity: [0.3, 0.54, 0.34, 0.3],
    duration: 38,
  },
];

const particles = [
  'left-[10%] top-[24%]',
  'left-[18%] top-[62%]',
  'left-[34%] top-[18%]',
  'left-[52%] top-[72%]',
  'left-[68%] top-[22%]',
  'left-[78%] top-[58%]',
  'left-[88%] top-[34%]',
  'left-[92%] top-[76%]',
];

export function AnimatedGoldBackground({ className }: AnimatedGoldBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#090909]', className)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,222,150,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,222,150,0.065)_1px,transparent_1px)] bg-[size:68px_68px] opacity-[0.2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,208,92,0.18),transparent_34%),radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.62))]" />
      {glowLayers.map((layer) => (
        <motion.div
          key={layer.className}
          className={cn('absolute rounded-full blur-3xl will-change-transform', layer.className)}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: layer.x,
                  y: layer.y,
                  scale: layer.scale,
                  opacity: layer.opacity,
                }
          }
          transition={{
            duration: layer.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        className="absolute -left-1/3 top-[-10%] h-[120%] w-2/3 rotate-12 bg-gradient-to-r from-transparent via-amber-100/[0.16] to-transparent blur-2xl"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: ['0%', '260%'],
                opacity: [0, 0.72, 0],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 4,
        }}
      />

      {particles.map((position, index) => (
        <motion.span
          key={position}
          className={cn('absolute h-1.5 w-1.5 rounded-full bg-amber-100/55 blur-[1px]', position)}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -16, 0],
                  opacity: [0.16, 0.62, 0.16],
                }
          }
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: index * 0.55,
          }}
        />
      ))}
    </div>
  );
}
