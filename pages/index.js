import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Home/hero";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Port Folio</title>
        <meta name="description" content="Hello World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </Layout>
  );
}
