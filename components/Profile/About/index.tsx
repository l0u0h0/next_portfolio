'use client';

export default function AboutMe() {
  return (
    <section className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
      <div className="w-full title-font text-start">
        <h1 className="text-2xl sm:text-3xl">☺️ About Me</h1>
        <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="m-10 mx-0">
          <ul className="mb-8 ml-12 mr-6 leading-relaxed text-lg text-left list-disc">
            <li className="text-xl text-zinc-700 dark:text-zinc-50 font-semibold mb-2 -ml-4 list-none">
              안녕하세요. <b>사용자 중심</b>의 개발을 위해 성장하고 있는{' '}
              <b>Frontend</b> 개발자 이유한입니다.
            </li>
            <li>
              <b>서비스 최적화</b>를 진행해 <b>사용자 경험을 개선</b>할 수 있는
              개발자를 목표로 하고 있습니다. 이를 위해{' '}
              <a href="https://github.com/l0u0h0/dkslgg" target="_blank">
                <b>[dkslgg]</b>
              </a>{' '}
              프로젝트에서 지속적인 탐구를 통한 <b>유지보수</b> 및{' '}
              <b>리팩토링</b>을 진행하고 있습니다.
            </li>
            <li>
              저 뿐만 아닌 팀원 모두의 <b>성장</b>을 위합니다. <b>코드 리뷰</b>
              를 통해 서로 피드백을 주고 받으며 <b>더 나은 코드</b>를 위해
              고민하는 것을 주도합니다.
            </li>
            <li>
              주로 <b>ES6 이상의 JS</b> 기반 웹 <b>프론트엔드</b> 개발을
              진행했으며 <b>React, Next</b>와 같은 프레임워크를 활용한 프로젝트
              경험이 있습니다. <b>React 18</b>
              버전의 프로젝트 경험이 가장 많으며 포트폴리오 웹 사이트를{' '}
              <b>Next.js</b>
              14버전으로 제작하였습니다.
            </li>
            <li>
              <b>삼성 청년 SW 아카데미</b>에서 알고리즘에 기반한{' '}
              <b>웹개발 교육 과정</b>을 수료했으며 웹 개발에 대한 기본을
              익혔습니다. 이 과정에서 <b>팀 프로젝트</b>를 경험하며 <b>Slack</b>
              , <b>Jira</b>, <b>Gitlab</b> 등 협업 툴에 대한 경험과 프론트엔드
              개발 경험을 쌓았습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
