import Head from "next/head";
import Hero from "../components/Home/hero";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>l0u0h0's</title>
        <meta name="description" content="l0u0h0's Front-end Portfolio Web" />
        <meta name="author" content="l0u0h0" />

        <meta
          property="og:image"
          content="/images/meta-image.jpg"
        />
        <meta property="og:title" content="이유한 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:description"
          content="FrontEnd Developer LeeYuHan"
        />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="xl:mx-auto flex p-5 lg:px-32 md:px-20 py-24 md:flex-row flex-col items-center justify-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
