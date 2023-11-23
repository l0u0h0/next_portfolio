import Image from "next/image";

export default function ProjectItem({ data }) {
  const Title = data.properties.Name.title[0].plain_text;
  const github = data.properties.GitHub.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  return (
    <div
      className="project-card"
      onClick={() => (location.href = `${data.public_url}`)}
    >
      <div className="w-full">
        <Image
          className="rounded-t-md"
          src={imgSrc}
          alt="Cover Image"
          width="100"
          height="60"
          layout="responsive"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="p-4 flex flex-col">
        <h1 className="text-xl font-jalnan">{Title}</h1>
        <div className="flex items-start mt-1 mb-2">
          {tags.map((aTag) => (
            <h1
              key={aTag.id}
              className="h-5 px-2 py-1 mr-1 rounded-md font-jalnangothic text-xs text-zinc-200 dark:text-zinc-700 bg-zinc-600 dark:bg-zinc-200"
            >
              {aTag.name}
            </h1>
          ))}
        </div>
        <h3 className="my-1 text-sm">{description}</h3>
        <a href={github} className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1"
            viewBox="-1 -1 24 24"
          >
            <rect
              x="-2"
              y="-2"
              width="20"
              height="20"
              fill="none"
              stroke="none"
            />
            <path
              fill="currentColor"
              d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099C.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647c.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091a2.026 2.026 0 0 1-.872-.39a1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156a.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15c.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813c.282.186.566.28.852.28c.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234a5.314 5.314 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365c-.177-.564-.266-1.215-.266-1.952c0-1.049.342-1.942 1.027-2.68c-.32-.788-.29-1.673.091-2.652c.252-.079.625-.02 1.119.175c.494.195.856.362 1.086.5c.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143c.39.98.424 1.864.103 2.653c.685.737 1.028 1.63 1.028 2.68c0 .737-.089 1.39-.267 1.957c-.177.568-.407 1.023-.689 1.366a3.65 3.65 0 0 1-1.053.865c-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064c.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099c.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"
            />
          </svg>
          GitHub 바로가기
        </a>
        <p className="mt-1 text-sm">
          {start} ~ {end}
        </p>
      </div>
    </div>
  );
}
