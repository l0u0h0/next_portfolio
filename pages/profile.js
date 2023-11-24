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
            <h1 className="text-2xl sm:text-3xl">☺️ About Me</h1>
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
