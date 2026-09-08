'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
  {
    variants: {
      variant: {
        primary: [
          'text-white bg-accent-500 shadow-soft',
          'hover:bg-accent-600',
          'dark:bg-accent-400 dark:text-primary-950 dark:hover:bg-accent-300',
          'focus-visible:ring-accent-500',
          'active:scale-[0.98]',
        ],
        secondary: [
          'text-primary-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400',
          'dark:text-white dark:bg-white/5 dark:border-white/15 dark:hover:bg-white/10 dark:hover:border-white/25',
          'focus-visible:ring-primary-400',
        ],
        ghost: [
          'text-primary-700 dark:text-slate-200 hover:text-accent-600 dark:hover:text-white hover:bg-primary-50 dark:hover:bg-white/5',
          'focus-visible:ring-primary-400',
        ],
        glow: [
          'bg-gradient-to-r from-accent-500 via-accent-400 to-secondary-500 text-white',
          'shadow-lg shadow-accent-500/25',
          'hover:shadow-glow-lg',
          'animate-gradient bg-[length:200%_auto]',
        ],
        outline: [
          'text-primary-700 bg-transparent border border-slate-300 dark:border-white/15 dark:text-white',
          'hover:border-accent-400 hover:text-accent-600 dark:hover:border-accent-400 dark:hover:text-accent-300',
          'focus-visible:ring-accent-500',
        ],
      },
      size: {
        sm: 'h-10 px-4 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  magnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      magnetic = false,
      ...props
    },
    ref
  ) => {
    const buttonContent = (
      <>
        {/* Shimmer effect for primary/glow variants */}
        {(variant === 'primary' || variant === 'glow') && (
          <span className="absolute inset-0 -z-10">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
          </span>
        )}

        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon}
        <span className="relative z-10">{children}</span>
        {!isLoading && rightIcon}
      </>
    );

    if (magnetic) {
      return (
        <motion.button
          ref={ref}
          className={cn(buttonVariants({ variant, size }), className)}
          disabled={isLoading || disabled}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          type={props.type}
          onClick={props.onClick as HTMLMotionProps<'button'>['onClick']}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={isLoading || disabled}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
