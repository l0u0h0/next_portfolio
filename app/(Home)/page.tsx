import Hero from '@/components/Home/hero';

export default function Home() {
  return (
    <div className="flex h-max py-12 items-start justify-center">
      <div className="flex p-5 xl:px-32 md:px-20 py-12 my-auto flex-col items-center justify-center sm:min-w-[600px]">
        <Hero />
      </div>
    </div>
  );
}
