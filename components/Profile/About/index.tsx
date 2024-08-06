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
              안녕하세요! 서비스 개발의 <b>본질</b>에 다가가고픈 <b>Frontend</b>{' '}
              개발자 이유한입니다.
            </li>
            <li>
              서비스의 본질엔 <b>사용자</b>가 있고, 그렇기에{' '}
              <b>사용자를 위한 서비스 개발에 집중</b>하고자 나아가고 있습니다.
              <br />
              사용자를 위한 서비스 개발에는 <b>서비스 최적화</b>와{' '}
              <b>원활한 협업 커뮤니케이션</b>이 중요하다 생각하며 이를 이루기
              위해 성장하고 있습니다.
            </li>
            <li>
              서비스 최적화를 이루기 위해 <b>메모이제이션</b> 훅이나{' '}
              <b>지연 로딩</b>, <b>디바운싱</b> 기법 등을 적용해보았고 더욱
              개선하며 성장하기 위해 노력하고 있습니다.
            </li>
            <li>
              저 뿐만 아닌 팀원 모두의 <b>성장</b>을 위합니다. <b>코드 리뷰</b>
              를 통해 서로 피드백을 주고 받으며 <b>더 나은 코드</b>를 위해
              고민하는 것을 주도합니다.
            </li>
            <li>
              <b>삼성 청년 SW 아카데미</b>에서 알고리즘에 기반한{' '}
              <b>웹개발 교육 과정</b>을 수료했으며 웹 개발에 대한 기본을
              익혔습니다.
              <br />이 과정에서 <b>팀 프로젝트</b>를 경험하며 <b>Slack</b>,{' '}
              <b>Jira</b>, <b>Gitlab</b> 등 협업 툴에 대한 경험과{' '}
              <b>Frontend</b>
              개발 경험을 쌓았습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
