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
                  <b className="text-xl text-zinc-800 dark:text-zinc-100 text-center font-jalnan">이유한<br/>(LeeYuHan)</b> <br />
                  
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
                <small className="mt-0 mb-1">2017.03 ~ 2023.02 졸업</small>
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
                  - 상반기동안 9 To 6의 교육 시간으로 총 <b>800시간의 학습</b>을 진행하며 <b>Vue.js</b>를 이용한
                  Front-end, <b>SpringBoot</b>를 이용한 Back-end 등 웹 개발에 대한{" "}
                  <b>심화적인</b> 역량 성장
                </li>
                <li className="pl-4 text-base font-sans">
                  - <b>알고리즘</b>에 기반한 코딩 교육을 통해 <b>구조적</b>이고 <b>효율적</b>인 코드
                  작성 역량 강화, <b>모의 삼성 SW 역량 테스트</b>에서 <b>A+ (Advanced +)</b>
                  등급 취득
                </li>
                <li className="pl-4 text-base font-sans">
                  - <b>Gitlab</b> 및 <b>Jira</b> 등을 활용하는 자기주도적인{" "}
                  <b>팀프로젝트</b> 경험을 통해 여러 기술을 프로젝트에 적용할 수 있는 역량과 기술 스택 선정에 대한 폭 및 팀원들과의 <b>소통</b>
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
