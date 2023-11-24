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
      <div className="flex flex-col items-center justify-center min-h-screen sm:min-w-[640px] pb-24">
        <Head>
          <title>Projects</title>
          <meta name="description" content="l0u0h0's Projects with Notion" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-3/4 h-fit flex mx-6 mt-24 md:mr-6 text-start justify-start items-end pb-5">
          <div className="min-w-[6rem] min-h-[6rem] w-24 h-24">
          <Image 
            src={theme === 'dark' ? `/Images/Macbook_white.png` : `/Images/Macbook_black.png`}
            alt="Computer Image"
            width="100"
            height="100"
            layout="responsive"
            objectFit="fill"
            quality={100}
            priority
          />
          </div>
          <div className="ml-2 flex flex-col">
            <h1 className="text-xl font-jalnangothic">
              총 프로젝트 :&nbsp;
              <span className="text-zinc-500 dark:text-zinc-400">{projects.results.length}</span>
            </h1>
            <p className="font-lg font-semibold">
            담당한 프로젝트를 최신 순으로 구성했습니다. 프로젝트 소개, 역할, 개발 환경, 느낀 점 등을 확인할 수 있습니다.
            </p>
          </div>
        </div>
        <hr className="w-4/5 min-w-[246px] md:min-w-[720px] border-2 dark:border-1 border-zinc-900 dark:border-zinc-300 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 pb-10 gap-4">
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

  return {
    props: { projects },
  };
}
