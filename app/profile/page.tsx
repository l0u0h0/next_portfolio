import ProfileContainer from '@/components/Profile/ProfileContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '프로필',
  description: "About l0u0h0's",
};

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen sm:min-w-[600px] w-full px-10 sm:px-48 pt-12 pb-24">
      <ProfileContainer />
    </div>
  );
}
