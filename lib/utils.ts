import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomDate() {
  const startDate = new Date("2024-01-01");
  const endDate = new Date();
  const randomDate = new Date(
    startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomDate;
}

export function generateRandomImage(width: number, height: number) {
  const randomImage = `https://picsum.photos/${width}/${height}.webp`;
  return randomImage;
}
