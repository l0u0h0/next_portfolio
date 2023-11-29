import Image from "next/image";
import React, { useEffect, useCallback, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import ActivityCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const customTheme = {
  light: ["hsl(255, 0%, 90%)", "hsl(255,10%,11%)"],
  dark: ["hsl(0, 0%, 20%)", "hsl(225,10%,88%)"],
};

export default function Content() {
  const { theme } = useTheme();
  const [year, setYear] = useState(null);

  const prevYear = useCallback(() => {
    setYear(year - 1);
  }, [year]);

  const nextYear = useCallback(() => {
    setYear(year + 1);
  }, [year]);

  useEffect(() => {
    if (!year) {
      const getYear = new Date().getFullYear();
      setYear(getYear);
    }
  }, [year]);

  return (
    <>
      <div className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
        <div className="w-full title-font text-start">
          <h1 className="text-2xl sm:text-3xl">📖 Introduce</h1>
          <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-44 min-w-[10rem] h-fit p-2 m-auto mt-10 md:m-10 border-zinc-700 dark:border-zinc-200 border-y-[3px] hover:scale-105 duration-300">
            <Image
              className="rounded-md"
              src={`/Images/profile-image.jpg`}
              alt="Profile Image"
              width="78"
              height="100"
              layout="responsive"
              objectFit="fill"
              quality={100}
              priority
            />
            <p className="flex my-1 justify-center items-center">
              <b className="text-xl text-zinc-800 dark:text-zinc-100 text-center font-jalnan">
                이유한
                <br />
                (LeeYuHan)
              </b>{" "}
              <br />
            </p>
          </div>
          <div className="m-10 ml-0">
            <ul className="lg:grid lg:grid-cols-2 lg:gap-2 leading-relaxed flex flex-wrap gap-x-10 text-lg text-start">
              <li className="mb-2 p-1">
                <b className="text-xl font-jalnan">이메일</b> <br />
                l0u0h0@gmail.com
              </li>
              <li className="mb-2 p-1">
                <b className="text-xl font-jalnan">전화번호</b> <br />
                010-2044-8798
              </li>
              <li className="mb-2 p-1 overflow-clip">
                <b className="text-xl font-jalnan">Velog</b> <br />
                <a href="https://velog.io/@l0u0h0" target="_blank">
                  https://velog.io/@l0u0h0
                </a>
              </li>
              <li className="mb-2 p-1overflow-clip">
                <b className="text-xl font-jalnan">Git</b> <br />
                <a href="https://github.com/l0u0h0" target="_blank">
                  https://github.com/l0u0h0
                </a>
              </li>
              <li className="mb-2 p-1">
                <b className="text-xl font-jalnan">학력</b> <br />
                백석대학교
                <br />
                컴퓨터공학부 소프트웨어학 전공
                <br />
                <small className="mt-0 mb-1">2017.03 ~ 2023.02 졸업 <b>[3.85/4.5]</b></small>
                <br /> 환일고등학교
                <br />
                <small>2014.03 ~ 2017.02 졸업</small>
              </li>
              <li className="mb-2 p-1">
                <b className="text-xl font-jalnan">이력</b> <br />
                삼성 청년 SW 아카데미
                <br />
                9기 자바 전공자반
                <br />
                <small className="mt-0 mb-1">2023.01 ~ 현재</small>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-fit mx-auto flex justify-center items-center text-xl sm:text-2xl font-jalnangothic text-zinc-800 dark:text-zinc-100 border-b-4 border-zinc-700 dark:border-zinc-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-1"
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
          GitHub Calendar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-1"
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
        </div>
        {year && (
          <div className="w-full mx-auto flex mb-10 justify-center">
            <button
              className={`font-jalnan ${
                year <= 2022 && `text-zinc-500 dark:text-zinc-400`
              }`}
              onClick={() => prevYear()}
              disabled={year <= 2022}
            >
              Prev
            </button>
            <div className="calendar w-fit mx-4 my-10 lg:mx-10 overflow-x-auto duration-200">
              <ActivityCalendar
                username="l0u0h0"
                year={year}
                theme={customTheme}
                blockMargin={3}
                style={{
                  fontFamily: "jalnangothic",
                }}
                renderBlock={(block, activity) =>
                  React.cloneElement(block, {
                    'data-tooltip-id': 'react-tooltip',
                    'data-tooltip-html': `[${activity.date}] ${activity.count} commits 기록`,
                  })
                }
              />
              <ReactTooltip id="react-tooltip" className="font-jalnangothic" />
            </div>
            <button
              className={`font-jalnan ${
                year >= 2023 && `text-zinc-500 dark:text-zinc-400`
              }`}
              onClick={() => nextYear()}
              disabled={year >= 2023}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
        <div className="w-full title-font text-start">
          <h1 className="text-2xl sm:text-3xl">☺️ About Me</h1>
          <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="m-10 mx-0">
            <ul className="mb-8 ml-12 mr-6 leading-relaxed text-lg text-left list-disc">
              <li className="text-xl text-zinc-700 dark:text-zinc-50 font-jalnangothic mb-2 -ml-4 list-none">
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
                <br /> 9기 자바 전공자반{" "}
                <small className="text-zinc-400 dark:text-zinc-400 font-extralight">
                  2023.01 ~ 현재
                </small>
                <li className="pl-4 text-base font-sans">
                  - 상반기동안 9 To 6의 교육 시간으로 총 <b>800시간의 학습</b>을
                  진행하며 <b>Vue.js</b>를 이용한 Front-end, <b>SpringBoot</b>를
                  이용한 Back-end 등 웹 개발에 대한 <b>심화적인</b> 역량 성장
                </li>
                <li className="pl-4 text-base font-sans">
                  - <b>알고리즘</b>에 기반한 코딩 교육을 통해 <b>구조적</b>이고{" "}
                  <b>효율적</b>인 코드 작성 역량 강화,{" "}
                  <b>모의 삼성 SW 역량 테스트</b>에서 <b>A+ (Advanced +)</b>
                  등급 취득
                </li>
                <li className="pl-4 text-base font-sans">
                  - <b>Gitlab</b> 및 <b>Jira</b> 등을 활용하는 자기주도적인{" "}
                  <b>팀프로젝트</b> 경험을 통해 여러 기술을 프로젝트에 적용할 수
                  있는 역량과 기술 스택 선정에 대한 폭 및 팀원들과의 <b>소통</b>
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
          <p className="italic text-zinc-500">
            기술 별 1~5점의 점수를 메겼습니다.
          </p>
          <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
        </div>
        <div className="flex flex-col my-10">
          <ul className="mx-5 mb-3 leading-relaxed text-lg text-start">
            <li className="flex items-center">
              <img
                className="w-8 h-8 mr-2"
                src="https://www.svgrepo.com/show/452092/react.svg"
                alt="React"
              />
              <b className="text-2xl font-jalnan">React - 4점</b>
            </li>
            <li className="ml-4 list-disc">
              클래스형 컴포넌트 사용으로 리액트의 <b>라이프 사이클</b>을
              이해하고 있으며 함수형 컴포넌트에서의 여러 <b>Hook</b> 들의
              사용법을 숙지하고 있음.
            </li>
            <li className="ml-4 list-disc">
              모바일 화면을 베이스로 한 <b>반응형 디자인</b>을 도입한 웹앱 개발
              경험이 있으며 대부분의 프로젝트를 <b>React</b>를 활용해 진행함.
            </li>
            <li className="ml-4 list-disc">
              <b>렌더링 최적화</b>를 통한 클라이언트 <b>성능 최적화</b>를 이루는
              개발을 탐구하고 있음.
            </li>
          </ul>

          <ul className="mx-5 my-3 leading-relaxed text-lg text-start">
            <li className="flex items-center">
              <img
                className="w-8 h-8 mr-2"
                src="https://www.svgrepo.com/show/349419/javascript.svg"
                alt="javascript"
              />
              <b className="text-2xl font-jalnan">Javascript - 4점</b>
            </li>
            <li className="ml-4 list-disc">
              <b>ES6</b> 에서 새롭게 추가된 <b>화살표 함수</b>와 <b>let</b>,{" "}
              <b>const</b>를 이용한 변수 선언 및 스코프에 따른 사용,{" "}
              <b>async await</b> 을 활용한 비동기 처리에 대해 학습하고
              프로젝트에서 활용해봤음
            </li>
          </ul>
          <ul className="mx-5 my-3 leading-relaxed text-lg text-start">
            <li className="flex items-center">
              <img
                className="w-8 h-8 mr-2"
                src="https://www.svgrepo.com/show/349540/typescript.svg"
                alt="typescript"
              />
              <b className="text-2xl font-jalnan">Typescript - 4점</b>
            </li>
            <li className="ml-4 list-disc">
              여러 데이터를 다루는 프로젝트를 통해 <b>엄밀한 타입 지정</b>에
              대해 필요성을 체감해 학습 시작해 현재는 프로젝트에서 주로 활용 중.
            </li>
            <li className="ml-4 list-disc">
              <b>Interface</b>와 <b>type</b>을 학습했으며 <b>any</b> 타입의
              사용을 지양하고 <b>타입 가드</b>로 컴파일러가 추론할 수 있도록
              탐구하고 있음.
            </li>
          </ul>

          <ul className="mx-5 my-3 leading-relaxed text-lg text-start">
            <li className="flex items-center">
              <img
                className="w-8 h-8 mr-2"
                src="https://www.svgrepo.com/show/354274/redux.svg"
                alt="Redux"
              />
              <b className="text-2xl font-jalnan">Redux - 3점</b>
            </li>
            <li className="ml-4 list-disc">
              컴포넌트가 복잡해질수록 관리하기 힘들었던 상태 관리를{" "}
              <b>전역 상태</b> 관리 라이브러리를 통해 <b>props-drilling</b> 없이
              상태 관리를 해봄.
            </li>
            <li className="ml-4 list-disc">
              중앙 집중식 전역 상태 관리를 통해 <b>Top-Down</b> 방식의 데이터
              전달 방식을 적용해봄.
            </li>
            <li className="ml-4 list-disc">
              <b>Redux-Saga</b> 미들웨어를 통해 Redux를 통한 <b>비동기 처리</b>
              와 Action 요청 중 API 요청 등 Redux 사용을 더욱 손쉽게 사용하는
              법을 학습함.
            </li>
          </ul>

          <ul className="mx-5 mb-6 my-3 leading-relaxed text-lg text-start">
            <li className="flex flex-wrap items-center">
              <div className="flex my-1">
                <img
                  className="w-8 h-8 mr-2 rounded-md"
                  src="https://cdn.worldvectorlogo.com/logos/recoil-js.svg"
                  alt="recoil"
                />
                <b className="text-2xl font-jalnan">Recoil - 3점</b>
              </div>
              <div className="flex my-1">
                <img
                  className="w-8 h-8 mx-2"
                  src="https://storage.googleapis.com/candycode/jotai/jotai-mascot.png"
                  alt="Jotai"
                />
                <b className="text-2xl font-jalnan">Jotai - 3점</b>
              </div>
            </li>
            <li className="ml-4 list-disc">
              그동안 중앙 집중 식의 <b>Flux 패턴</b>을 통한 상태 관리
              라이브러리인 Redux만 사용해보다가 <b>Atom 패턴</b>의 상태 관리
              라이브러리인 <b>Recoil</b>을 학습. <b>useState</b>와 비슷한 구조로
              친숙하게 사용.
            </li>
            <li className="ml-4 list-disc">
              이 후 유사한 상태관리 라이브러리인 <b>Jotai</b>를 프로젝트에 적용.
              비동기 요청 시에도 손쉬운 사용을 경험해봄.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
        <div className="w-full title-font text-start">
          <h1 className="text-2xl sm:text-3xl">🏆 Awards</h1>
          <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="m-10 mx-0">
            <ul className="mb-8 ml-12 mr-6 leading-relaxed text-lg text-left list-disc">
              <li>
                <small>2023.08.18</small> - <b>삼성 청년 SW 아카데미</b>(SSAFY)
                공통프로젝트 웹기술 트랙 <b>우수상</b> 수상{" "}
                <b>
                  (
                  <a
                    href="https://fork-fluorine-608.notion.site/Stargate-c60966acfc384a7da08c06d0eabb0992"
                    target="_blank"
                  >
                    StarGate
                  </a>
                  )
                </b>
              </li>
              <li>
                <small>2020.11.13</small> - 2020 STARTUP INVENTION CONTEST
                공모전 <b>단체상</b> 수상
              </li>
              <li>
                <small>2017.11.11</small> - 마이스타일 트렌드페어 2017 대학생
                STARTUP 공모전 <b>장려상</b> 수상
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
