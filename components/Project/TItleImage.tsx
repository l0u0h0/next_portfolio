'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TitleImage() {
  const { theme } = useTheme();
  const [curTheme, setCurTheme] = useState(theme);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    const initialTheme = darkModeMediaQuery.matches ? 'dark' : 'light';
    if (theme !== initialTheme) setCurTheme(initialTheme);
  }, []);

  useEffect(() => {
    setCurTheme(theme);
  }, [theme]);

  return (
    <div className="min-w-[6rem] min-h-[6rem] w-24 h-24 mx-auto sm:mx-0 sm:ml-2 md:ml-6 lg:ml-10">
      <Image
        src={
          curTheme === 'dark'
            ? `/Images/Macbook_white.png`
            : `/Images/Macbook_black.png`
        }
        alt="Computer Image"
        width="100"
        height="100"
        layout="responsive"
        objectFit="fill"
        quality={100}
        loading="lazy"
      />
    </div>
  );
}
