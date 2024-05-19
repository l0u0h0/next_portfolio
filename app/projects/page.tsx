import TitleImage from '@/components/Project/TItleImage';
import type { Metadata } from 'next';
import { DATABASE_ID, TOKEN } from '../constant';
import ProjectItem, { IProjectItem } from '@/components/Project/ProjectItem';

export const metadata: Metadata = {
  title: '프로젝트',
  description: "l0u0h0's Projects with Notion",
};

export default async function Projects() {
  const getProjectItems = async () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        page_size: 100,
        sorts: [
          {
            property: 'WorkPeriod',
            direction: 'descending',
          },
        ],
      }),
    };
    const res = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      options
    );

    return res.json();
  };

  const projects = await getProjectItems();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen sm:min-w-[640px] pb-24">
      <div className="w-3/4 h-fit flex flex-wrap sm:flex-nowrap mx-6 mt-24 md:mr-6 text-start justify-start items-end pb-5">
        <TitleImage />
        <div className="ml-2 flex flex-col">
          <h1 className="text-2xl font-jalnangothic">
            총 프로젝트 :&nbsp;
            <span className="text-zinc-500 dark:text-zinc-400">
              {projects.results.length}
            </span>
          </h1>
          <p className="font-xl font-semibold italic text-zinc-500 dark:text-zinc-400">
            담당한 프로젝트를 정리했습니다. 프로젝트 소개, 역할, 개발 환경, 느낀
            점 등을 확인할 수 있습니다.
          </p>
          <a
            href="https://fork-fluorine-608.notion.site/Lee-Yu-Han-Front-Developer-b8cc6a69fb06478f8f2d01f4288f49d4?pvs=4"
            className="w-fit font-jalnan text-zinc-800 hover:text-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-500 cursor-pointer"
          >
            Notion PortFolio 바로가기
          </a>
        </div>
      </div>
      <hr className="w-4/5 min-w-[246px] md:min-w-[720px] border-2 dark:border-1 border-zinc-900 dark:border-zinc-300 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 pb-10 gap-4">
        {projects.results.map((aProject: IProjectItem) => (
          <ProjectItem key={aProject.id} data={aProject} />
        ))}
      </div>
    </div>
  );
}
