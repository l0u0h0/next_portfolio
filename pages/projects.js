import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Port Folio</title>
        <meta name="description" content="Hello World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>총 프로젝트 : {projects.results.length}</h1>
      {projects.results.map((aProject) => (
        <h1>{aProject.properties.Name.title[0].plain_text}</h1>
      ))}
    </Layout>
  );
}

// 빌드될 때 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectIds = projects.results.map((aProject) => aProject.id);

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0].plain_text
  );

  return {
    props: { projects },
  };
}
