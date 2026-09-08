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
    <svg viewBox="0 0 512 512" className="h-[22px] w-[22px]" aria-hidden="true">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#00d4ff" />
      <path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" fill="#00f076" />
      <path d="M425.2 185.4l-60.1 34.6-65.4-65.4 65.4-65.4 60.1 34.6c17.7 10.2 17.7 35.4 0 45.6z" fill="#ffbc00" />
      <path d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#ff3a44" />
    </svg>
  );
}

const badgeBase =
  'inline-flex items-center gap-2.5 h-[52px] px-5 rounded-2xl border transition-colors bg-white border-slate-300 text-slate-900 hover:border-slate-400 shadow-sm dark:bg-[#0A1428] dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:shadow-none';

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
