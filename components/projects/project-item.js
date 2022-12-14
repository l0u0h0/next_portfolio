import Image from "next/image";

export default function ProjectItem({ data }) {
  const Title = data.properties.Name.title[0].plain_text;
  const github = data.properties.GitHub.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;

  return (
    <div className="flex flex-col m-3 bg-slate-700 rounded-xl w-full">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="Cover Image"
        width="100"
        height="60"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1>{Title}</h1>
        <h3>{description}</h3>
        <a href={github}>GitHub 바로가기</a>
      </div>
    </div>
  );
}
