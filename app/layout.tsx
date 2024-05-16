import Footer from '@/components/Common/footer';
import Header from '@/components/Common/header';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: {
    template: "%s | l0u0h0's",
    default: "l0u0h0's",
  },
  description: "l0u0h0's Front-end Portfolio Web",
  authors: [{ name: 'l0u0h0', url: 'https://github.com/l0u0h0' }],
  openGraph: {
    title: 'FrontEnd 개발자 이유한',
    description: 'FrontEnd 개발자 이유한의 웹 포트폴리오입니다.',
    url: 'https://next-portfolio-l0u0h0.vercel.app',
    images:
      'https://velog.velcdn.com/images/l0u0h0/post/bbdb3edd-2982-48a7-9d2e-cab3177f32fc/image.jpg',
  },
};

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <Header />
      <body>
        <ThemeProvider attribute="class">
          <div className="bg-primary">{children}</div>
        </ThemeProvider>
      </body>
      <Footer />
    </html>
  );
}
