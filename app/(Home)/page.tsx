import Hero from '@/components/Home/hero';

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="xl:mx-auto flex p-5 lg:px-32 md:px-20 py-24 md:flex-row flex-col items-center justify-center">
        <Hero />
      </div>
    </section>
  );
}
