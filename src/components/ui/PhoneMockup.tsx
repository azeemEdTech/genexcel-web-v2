'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Presents one of the real GenExcel app screenshots (already cropped to a
 * phone-shaped frame with its own bezel baked in — see public/images/*
 * -screenshot*.jpeg). This wraps it for layout/motion only: sizing,
 * rotation and an optional gentle float — it does not draw a fake device
 * frame on top of a real screenshot.
 */
export function PhoneMockup({
  src,
  alt,
  width = 240,
  rotate = 0,
  float = false,
  floatDelay = 0,
  className,
}: {
  src: string;
  alt: string;
  width?: number;
  rotate?: number;
  float?: boolean;
  floatDelay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const shouldFloat = float && !prefersReducedMotion;

  const frame = (
    <div
      className={cn('rounded-[28px] overflow-hidden shadow-soft-lg bg-white', className)}
      style={{ width, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );

  if (!shouldFloat) return frame;

  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
    >
      {frame}
    </motion.div>
  );
}
