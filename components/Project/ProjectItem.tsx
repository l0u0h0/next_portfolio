'use client';

import Image from 'next/image';
import GithubSVG from '@/components/Svg/GithubSVG';

type NotionMultiSelectType = {
  id: string;
  name: string;
};

export interface IProjectItem {
  id: string;
  properties: {
    Name: {
      title: [{ plain_text: string }];
    };
    GitHub: {
      url: string;
    };
    Description: {
      rich_text: [{ plain_text: string }];
    };
    Tags: {
      multi_select: NotionMultiSelectType[];
    };
    Part: {
      multi_select: NotionMultiSelectType[];
    };
    WorkPeriod: {
      date: {
        start: string;
        end: string;
      };
    };
  };
  cover: {
    file?: {
      url: string;
    };
    external: {
      url: string;
    };
  };
  public_url: string;
}

export default function ProjectItem({ data }: { data: IProjectItem }) {
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.GitHub.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file
    ? data.cover.file.url
    : data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const part = data.properties.Part.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  return (
    <div
      className="project-card"
      onClick={() => window.open(data.public_url, '_blank')}
    >
      <div className="w-full relative">
        <div className="w-full h-40 relative">
          <Image
            referrerPolicy="no-referrer"
            className="rounded-t-md object-cover"
            src={`${imgSrc}`}
            alt="Cover Image"
            fill
            quality={50}
            priority
          />
        </div>
        <div className="absolute top-4 -left-[5%]">
          {part.map((aTag) => (
            <h1
              key={aTag.id}
              className="px-4 py-2 rounded-md font-light font-jalnangothic text-md text-zinc-100 dark:text-zinc-700 bg-zinc-600 dark:bg-zinc-200 border-2 border-zinc-200 dark:border-zinc-600"
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
      <div className="p-4 flex flex-col">
        <h1 className="text-xl font-jalnan">{title}</h1>
        <div className="flex flex-wrap items-start mb-2">
          {tags.map((aTag) => (
            <h1
              key={aTag.id}
              className="px-2 py-1 mt-1 mr-1 rounded-md font-semibold text-xs text-zinc-200 dark:text-zinc-700 bg-zinc-600 dark:bg-zinc-200"
            >
              {aTag.name}
            </h1>
          ))}
        </div>
        <h3 className="my-1 text-sm">{description}</h3>
        <a
          href={github}
          className="flex w-fit items-center text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <GithubSVG className="w-5 h-5 mr-1" />
          GitHub 바로가기
        </a>
        <p className="mt-1 text-sm">
          {start} ~ {end}
        </p>
      </div>
    </div>
  );
}
