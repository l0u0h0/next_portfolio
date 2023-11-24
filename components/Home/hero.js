import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-wrap-reverse md:flex-nowrap justify-center">
      <div className="md:basis-1/2 lg:w-1/2 md:w-1/2 mx-4 px-2 md:pr-6 lg:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          서비스 최적화를 꿈꾸는&nbsp;
          <br className="hidden lg:inline-block" />
          이유한입니다.
        </h1>
        <ul className="mb-8 ml-6 leading-relaxed text-lg text-left list-disc">
          <li>
            서비스 <b>최적화</b>를 위해 <b>고민하고 노력하는 개발자</b>를 목표로 나아가고 있습니다.
          </li>
          <li>
            서비스 최적화란 <b>웹 성능 최적화</b> 및 <b>UX 최적화</b>를 통해 이루어진다고 생각합니다.
            <br className="hidden lg:inline-block" />
            그렇기에, <b>렌더링 성능 개선</b>과 <b>웹 접근성 향상</b>에 대해 관심을 가지고 있습니다.
          </li>
          <li>
            현재, <b>삼성 청년 SW 아카데미</b>에서 팀 프로젝트를 진행하며
            이를 <b>적용</b>할 방안에 대해 <b>고민</b>하고 <b>성장</b> 중에 있습니다.
          </li>
        </ul>
        <div className="w-full flex justify-end">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="md:basis-1/2 w-2/3 sm:w-5/6 md:w-3/4 lg:w-1/2 mb-10">
        <Animation />
      </div>
    </div>
  );
}
