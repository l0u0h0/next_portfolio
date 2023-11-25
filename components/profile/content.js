import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
        <div className="w-full title-font text-start">
          <h1 className="text-2xl sm:text-3xl">📖 Introduce</h1>
          <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-40 min-w-[10rem] m-auto mt-10 md:m-10">
            <Image
              className="rounded-md"
              src={`/Images/profile-image.jpg`}
              alt="Profile Image"
              width="75"
              height="100"
              layout="responsive"
              objectFit="fill"
              quality={100}
              priority
            />
          </div>
          <div className="m-10 ml-0">
            <ul className="lg:grid lg:grid-cols-2 lg:gap-2 leading-relaxed flex flex-wrap gap-x-10 text-lg text-start">
              <li className="mb-2 p-1">
                <b className="text-xl">이름</b> <br /> 이유한
              </li>
              <li className="mb-2 p-1">
                <b className="text-xl">이메일</b> <br />
                l0u0h0@gmail.com
              </li>
              <li className="mb-2 p-1 overflow-clip">
                <b className="text-xl">Velog</b> <br />
                <a href="https://velog.io/@l0u0h0" target="_blank">
                  https://velog.io/@l0u0h0
                </a>
              </li>
              <li className="mb-2 p-1overflow-clip">
                <b className="text-xl">Git</b> <br />
                <a href="https://github.com/l0u0h0" target="_blank">
                  https://github.com/l0u0h0
                </a>
              </li>
              <li className="mb-2 p-1">
                <b className="text-xl">학력</b> <br />
                백석대학교
                <br />
                컴퓨터공학부 소프트웨어학 전공
                <br />
                <small className="mt-0 mb-1">2017.03 ~ 2023.02 졸업</small>
                <br /> 환일고등학교
                <br />
                <small>2014.03 ~ 2017.02 졸업</small>
              </li>
              <li className="mb-2 p-1">
                <b className="text-xl">이력</b> <br />
                삼성 청년 SW 아카데미
                <br />
                9기 자바 전공자반
                <br />
                <small className="mt-0 mb-1">2023.01 ~ 현재</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
        <div className="w-full title-font text-start">
          <h1 className="text-2xl sm:text-3xl">☺️ About Me</h1>
          <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="m-10 mx-0">
            <ul className="mb-8 ml-12 mr-6 leading-relaxed text-lg text-left list-disc">
              <li className="text-xl text-zinc-50 font-jalnangothic mb-2 -ml-4 list-none">
                최적화를 향해 나아가는 <b>Front-End</b> 개발자
              </li>
              <li>
                저는 서비스 <b>최적화</b>를 이끌어낼 수 있는 <b>개발자</b>를
                목표로 <b>학습</b>하며 <b>성장</b>하고 있습니다.
              </li>
              <li>
                팀 구성원들과의 <b>커뮤니케이션</b>을 중요시하며 모르는 것을{" "}
                <b>해결</b>할 때, 새로운 것을 <b>학습</b>할 때 <b>즐거움</b>을
                느끼는 개발자입니다.
              </li>
              <li>
                <b>React</b>를 활용한 <b>웹 프론트엔드 개발</b>을 주로 하였고{" "}
                <b>반응형 디자인</b>을 통한 웹앱 프로젝트 진행 경험이 있습니다.
                최근엔 <b>웹 성능 최적화</b>나 <b>웹 접근성</b>을 고려한 개발에
                관심을 가지고 있습니다.
              </li>
              <li>
                현재 <b>삼성 청년 SW 아카데미</b>에서 알고리즘에 기반한{" "}
                <b>웹개발 교육 과정</b>을 자바 전공자 반으로 수료 중에 있습니다.
                이 과정에서 <b>팀 프로젝트</b>를 경험하며 <b>Slack</b>,{" "}
                <b>Jira</b>, <b>Gitlab</b> 등 협업 툴에 대한 경험이 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
        <div className="w-full title-font text-start">
          <h1 className="text-2xl sm:text-3xl">💼 Experience</h1>
          <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-40 min-w-[10rem] m-auto mt-10 md:m-10">
            <Image
              className="rounded-md"
              src={`/Images/SSAFY-image.png`}
              alt="SSAFY Image"
              width="100"
              height="75"
              layout="responsive"
              objectFit="fill"
              quality={100}
              priority
            />
          </div>
          <div className="m-10 ml-0">
            <ul className="leading-relaxed text-lg text-start font-jalnangothic">
              <div className="mb-2">
                <b className="text-xl font-jalnan">삼성 청년 SW 아카데미</b>{" "}
                <br /> 9기 자바 전공자반
                <li className="pl-4 text-base font-sans">
                  - <b>알고리즘</b>을 기반으로 한 코딩 교육 과정을 통해{" "}
                  <b>구조적</b>이고 <b>효율적</b>인 코드 작성 역량 및{" "}
                  <b>웹 개발</b>에 대한 심화적인 역량 성장
                </li>
                <li className="pl-4 text-base font-sans">
                  - <b>Gitlab</b> 및 <b>Jira</b> 등을 활용하는 자기주도적인{" "}
                  <b>팀프로젝트</b> 경험을 통해 신기술 및 팀원들과의 <b>소통</b>
                  , <b>컨벤션</b> 규정 등 <b>협업</b> 역량 성장
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
        <div className="w-full title-font text-start">
          <h1 className="text-2xl sm:text-3xl">👩🏻‍💻 Skills</h1>
          <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <a className="h-6 text-yellow-300">
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
          </a>
        </div>
      </div>
    </>
  );
}
