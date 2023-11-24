import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";

export default function Profile() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start min-h-screen sm:min-w-[600px] w-full px-10 sm:px-48 pt-12 pb-24">
        <Head>
          <title>Profile</title>
          <meta name="description" content="About l0u0h0's" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
                width="80"
                height="100"
                layout="responsive"
                objectFit="fill"
                quality={100}
                priority
              />
            </div>
            <div className="m-10 ml-0">
              <ul className="lg:grid lg:grid-cols-2 lg:gap-2 leading-relaxed flex flex-wrap gap-x-10 text-lg text-start">
                <li className="mb-2">
                  <b className="text-xl font-jalnan">이름</b> <br /> 이유한
                </li>
                <li className="mb-2">
                  <b className="text-xl font-jalnan">이메일</b> <br />{" "}
                  l0u0h0@gmail.com
                </li>
                <li className="mb-2 overflow-clip">
                  <b className="text-xl font-jalnan">Velog</b> <br />{" "}
                  <a href="https://velog.io/@l0u0h0" target="_blank">
                    https://velog.io/@l0u0h0
                  </a>
                </li>
                <li className="mb-2 overflow-clip">
                  <b className="text-xl font-jalnan">Git</b> <br />{" "}
                  <a href="https://github.com/l0u0h0" target="_blank">
                    https://github.com/l0u0h0
                  </a>
                </li>
                <li className="mb-2">
                  <b className="text-xl font-jalnan">학력</b> <br /> 백석대학교
                  졸업 <small className="mt-0 mb-1">2017.03 ~ 2023.02</small>
                  <br /> 환일고등학교 졸업 <small>2014.03 ~ 2017.02</small>
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
            <div className="m-10 ml-0">
              <ul className="mb-8 mx-12 leading-relaxed text-lg text-left list-disc">
                <li>
                  저는 서비스 <b>최적화</b>를 위해{" "}
                  <b>고민하고 노력하는 개발자</b>를 목표로 나아가고 있습니다.
                </li>
                <li>
                  팀 구성원들과의 <b>커뮤니케이션</b>을 중요시하며{" "}
                  <b>모르는 것</b>을 해결할 때, <b>새로운 것</b>을 배워나갈 때{" "}
                  <b>즐거움</b>을 느끼는 주니어 개발자입니다.
                </li>
                <li>
                  <b>React</b>를 활용한 <b>웹 프론트엔드 개발</b>을 주로 하였고{" "}
                  <b>반응형 디자인</b>을 통한 웹앱 프로젝트 진행 경험이
                  있습니다. 최근엔 <b>웹 성능 최적화</b>나 <b>웹 접근성</b>을
                  고려한 개발에 관심을 가지고 있습니다.
                </li>
                <li>
                  현재 <b>삼성 청년 SW 아카데미</b>에서 알고리즘에 기반한{" "}
                  <b>웹개발 교육 과정</b>을 자바 전공자 반으로 수료 중에
                  있습니다. 이 과정에서 <b>팀 프로젝트</b>를 경험하며{" "}
                  <b>Slack</b>, <b>Jira</b>, <b>Gitlab</b> 등 협업 툴에 대한
                  경험이 있습니다.
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
                <li className="mb-2">
                  <b className="text-xl font-jalnan">삼성 청년 SW 아카데미</b>{" "}
                  <br /> 9기 자바 전공자반
                  <li className="pl-4 text-base font-sans">
                    - 알고리즘을 기반으로 한 코딩 교육 과정을 통해 구조적이고
                    효율적인 코드 작성
                  </li>
                  <li className="pl-4 text-base font-sans">
                    - 팀프로젝트에 대한 경험, 신기술 및 팀원들과의 소통, 컨벤션
                    규정 등 협업 경험
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
