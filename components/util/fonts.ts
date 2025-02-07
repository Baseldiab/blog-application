import { Lora } from 'next/font/google';

export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

