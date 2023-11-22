import Head from "next/head";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-[376px] px-6 py-24 mb-10">
        <Head>
          <title>Contact</title>
          <meta name="description" content="About l0u0h0's" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-6 md:mr-6 gap-40 text-center md:text-left">
          <h1 className="text-3xl font-bold sm:text-4xl">
          </h1>
        </div>
        <hr className="w-2/3 min-w-[246px] md:min-w-[720px] mt-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 m-6 pb-10 gap-8">
        </div>
      </div>
    </Layout>
  );
}
