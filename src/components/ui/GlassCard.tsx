'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  className?: string;
  children?: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hover = true, glow = false, gradient = false }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Clean, solid card — subtle border, soft shadow, no heavy glass/blur
          'relative overflow-hidden rounded-card',
          'bg-white border border-slate-200 shadow-soft',
          'dark:bg-primary-900/60 dark:border-white/10 dark:shadow-none',

          // Hover effects
          hover && [
            'transition-all duration-300 ease-out',
            'hover:-translate-y-1 hover:border-slate-300 dark:hover:border-white/20',
          ],

          // Glow effect
          glow && 'hover:shadow-glow dark:hover:shadow-none',

          // Gradient background
          gradient && 'bg-gradient-to-br from-white via-white to-accent-50/60 dark:from-primary-900/60 dark:to-primary-900/40',

          className
        )}
      >
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard };
