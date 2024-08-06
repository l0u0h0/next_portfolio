import Hero from '@/components/Home/hero';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="xl:mx-auto flex p-5 lg:px-32 md:px-20 py-24 flex-col items-center justify-center sm:min-w-[600px]">
        <Hero />
      </div>
    </div>
  );
}
