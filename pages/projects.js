import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
import { useTheme } from "next-themes";

export default function Projects({ projects }) {
  const { theme } = useTheme();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-[376px] px-6 py-24 mb-10">
        <Head>
          <title>Projects</title>
          <meta name="description" content="l0u0h0's Projects with Notion" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-6 md:mr-6 gap-0 md:gap-10 text-center md:text-left items-center">
          <Image 
            src={theme === 'dark' ? `/images/Macbook_white.png` : `/images/Macbook_black.png`}
            alt="Cover Image"
            width="100"
            height="100"
            layout="responsive"
            objectFit="fill"
            quality={100}
            priority
          />
          <h1 className="text-3xl font-bold sm:text-4xl">
            총 프로젝트 :&nbsp;
            <span className="text-zinc-700 dark:text-zinc-300">{projects.results.length}</span>
          </h1>
        </div>
        <hr className="w-2/3 min-w-[246px] md:min-w-[720px] mt-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 m-6 pb-10 gap-8">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
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
          property: "WorkPeriod",
          direction: "descending",
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
