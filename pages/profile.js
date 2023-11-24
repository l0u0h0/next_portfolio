import Head from "next/head";
import Layout from "../components/layout";
import Content from "../components/profile/content";

export default function Profile() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start min-h-screen sm:min-w-[600px] w-full px-10 sm:px-48 pt-12 pb-24">
        <Head>
          <title>Profile</title>
          <meta name="description" content="About l0u0h0's" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Content />
      </div>
    </Layout>
  );
}
