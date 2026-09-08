import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

function AppleGlyph() {
  return (
    <svg viewBox="0 0 384 512" className="h-[22px] w-[22px] fill-current" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 100 100" className="h-[22px] w-[22px]" aria-hidden="true">
      <path d="M48,38 L20,10 L20,90 Z" fill="#00A0FF" />
      <path d="M48,38 L20,10 L73,41.2 Z" fill="#FF3D00" />
      <path d="M48,38 L73,41.2 L88,50 L73,58.8 Z" fill="#FFD500" />
      <path d="M48,38 L73,58.8 L20,90 Z" fill="#00E676" />
    </svg>
  );
}

const badgeBase =
  'inline-flex items-center justify-center gap-2.5 h-[52px] px-5 rounded-2xl border transition-colors bg-white border-slate-300 text-primary-950 hover:border-slate-400 shadow-sm dark:bg-primary-900 dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:shadow-none';

export function AppStoreBadges({ className }: { className?: string }) {
  const { appStoreUrl, playStoreUrl } = siteConfig;
  if (!appStoreUrl && !playStoreUrl) return null;

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={badgeBase}
        >
          <AppleGlyph />
          <span className="leading-tight text-left">
            <span className="block text-[10px] opacity-70">Download on the</span>
            <span className="block text-[15px] font-semibold -mt-0.5">App Store</span>
          </span>
        </a>
      )}
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={badgeBase}
        >
          <PlayGlyph />
          <span className="leading-tight text-left">
            <span className="block text-[10px] opacity-70">GET IT ON</span>
            <span className="block text-[15px] font-semibold -mt-0.5">Google Play</span>
          </span>
        </a>
      )}
    </div>
  );
}
