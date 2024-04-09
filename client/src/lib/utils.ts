import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// randomize color from tailwindcss color palette
export function randomColor() {
  const colors = [
    "#FFCFE5",
    "#D0E4F8",
    "#C7F8BA",
    "#F0E1FF",
    "#FFFDD0",
    "#FFFACD",
    "#A0CBFB",
    "#FFE6B4",
    "#C7C7C7",
    "#FFFF99"
  ]

  return colors[Math.floor(Math.random() * colors.length)]
}

export function randomPosition() {
  // return x and y position
  // return {
  //   x: Math.floor(Math.random() * 100),
  //   y: Math.floor(Math.random() * 100)
  // }

  const screenWidth = 100;
  const screenHeight = 100;

  const randomX = Math.floor(Math.random() * screenWidth);
  const randomY = Math.floor(Math.random() * screenHeight);

  return {
    x: randomX,
    y: randomY,
  };
}