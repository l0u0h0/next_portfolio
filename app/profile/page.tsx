import Content from '@/components/profile/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '프로필',
  description: "About l0u0h0's",
};

export default function Profile() {
  return <Content />;
}
