import Footer from '@/components/Common/footer';
import Header from '@/components/Common/header';
import '../styles/global.css';
import type { Metadata } from 'next';
import ThemeRegistry from './_lib/ThemeRegistry';

export const metadata: Metadata = {
  title: {
    template: "%s | 유한's",
    default: "유한's",
  },
  description: "Front-end Developer Lee Yuhan's Web",
  authors: [{ name: 'l0u0h0', url: 'https://github.com/l0u0h0' }],
  openGraph: {
    title: 'FrontEnd 개발자 이유한',
    description: 'FrontEnd 개발자 이유한의 웹 포트폴리오입니다.',
    url: 'https://l0u0h0-web.vercel.app',
    images:
      'https://velog.velcdn.com/images/l0u0h0/post/bbdb3edd-2982-48a7-9d2e-cab3177f32fc/image.jpg',
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-primary flex flex-col" suppressHydrationWarning>
        <ThemeRegistry>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
