import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomDate(seed: number) {
  // Use a deterministic seed
  const seededRandom = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const startDate = new Date(2024, 0, 1).getTime(); // Jan 1, 2024
  const endDate = new Date(2024, 11, 31).getTime(); // Dec 31, 2024
  const randomDate = new Date(
    startDate + seededRandom() * (endDate - startDate)
  );
  
  const day = randomDate.getDate().toString().padStart(2, '0');
  const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
  const year = randomDate.getFullYear();
  
  return `${day}.${month}.${year}`;
}

export function generateRandomImage(width: number, height: number) {
  const randomImage = `https://picsum.photos/${width}/${height}.webp`;
  return randomImage;
}
