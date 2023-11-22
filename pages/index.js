import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Home/hero";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>l0u0h0</title>
        <meta name="description" content="l0u0h0's Front-end Portfolio Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex p-5 lg:px-32 md:px-20 py-24 md:flex-row flex-col items-center justify-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
