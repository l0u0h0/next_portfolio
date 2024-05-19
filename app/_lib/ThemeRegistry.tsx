'use client';
import { ThemeProvider } from 'next-themes';

export default function ThemeRegistry({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
