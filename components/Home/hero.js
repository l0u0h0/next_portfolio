import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:w-1/2 md:w-1/2 lg:pr-10 md:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Lee Yu Han,
          <br className="hidden lg:inline-block" />
          Front-End Developer
        </h1>
        <ul className="mb-8 leading-relaxed text-lg text-left list-disc hover:list-none">
          <li>
            팀 구성원들과의<b>커뮤니케이션</b>을 중요시하며<b>모르는 것</b>을
            해결할 때,<b>새로운 것</b>을 배워나갈 때<b>즐거움</b>을 느끼는
            주니어 개발자입니다.
          </li>
          <li>
            2022년 기준 GitHub에 700번 이상의<b>Commit</b> 을 진행했으며 React를
            활용한<b>웹 프론트엔드 개발</b>을 주로 하였고 반응형 디자인을 통한
            웹앱 프로젝트 진행 경험이 있습니다. 최근엔 웹 성능 최적화나 웹
            접근성을 고려한 개발에 관심을 가지고 있습니다.
          </li>
          <li>
            현재 2023년<b>SSAFY</b>에서 알고리즘에 기반한 웹개발 교육 과정을
            자바 전공자 반으로 수료 중에 있습니다.
          </li>
          <li>
            <b>Slack</b>,<b>Jira</b>,<b>Gitlab</b> 등 협업 툴에 대한 경험이
            있습니다.
          </li>
        </ul>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
