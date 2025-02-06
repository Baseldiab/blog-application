import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomDate(seed: number = 0) {
  // Use the provided seed instead of random number
  const seededRandom = () => {
    const x = Math.sin(seed + 1) * 10000;
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
  // Use a random number between 1-1000 instead of timestamp
  const randomId = Math.floor(Math.random() * 1000) + 1;
  return `https://picsum.photos/id/${randomId}/${width}/${height}.webp`;
}
