import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Port Folio</title>
        <meta name="description" content="Hello World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is Home</h1>
    </Layout>
  );
}
