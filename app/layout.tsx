import Footer from '@/components/Common/footer';
import Header from '@/components/Common/header';
import '../styles/global.css';
import type { Metadata } from 'next';
import ThemeRegistry from './_lib/ThemeRegistry';
import { URL } from './constant';

export const metadata: Metadata = {
  title: {
    template: "%s | 유한's",
    default: "유한's",
  },
  description: "Front-end Developer Lee Yuhan's Web",
  authors: [{ name: 'l0u0h0', url: URL.github }],
  openGraph: {
    title: 'FrontEnd 개발자 이유한',
    description: 'FrontEnd 개발자 이유한의 웹 포트폴리오입니다.',
    url: URL.meta_url,
    images: URL.meta_img,
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
