'use client';

export default function Skills() {
  return (
    <section className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
      <div className="w-full title-font text-start">
        <h1 className="text-2xl sm:text-3xl">👩🏻‍💻 Skills</h1>
        <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
      </div>
      <div className="flex flex-wrap gap-4 my-10 pb-3 justify-center">
        <ul className="xl:w-[45%] mx-5 my-3 leading-relaxed text-lg text-start">
          <li className="flex items-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://www.svgrepo.com/show/452092/react.svg"
              alt="React"
            />
            <b className="text-2xl font-jalnangothic">React.js</b>
          </li>
          <li className="ml-4 list-disc">
            클래스형 컴포넌트 사용으로 리액트의 <b>라이프 사이클</b>을 이해하고
            있으며 함수형 컴포넌트에서의 여러 <b>Hook</b> 들의 사용법을 숙지하고
            있음.
          </li>
          <li className="ml-4 list-disc">
            다양한 프로젝트에서 <b>React 18</b> 버전을 사용해보았으며 다양한
            훅과 메서드를 활용한 <b>최적화</b>에 중점을 두고 학습 중에 있음.
          </li>
        </ul>

        <ul className="xl:w-[45%] mx-5 my-3 leading-relaxed text-lg text-start">
          <li className="flex items-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://www.svgrepo.com/show/378440/nextjs-fill.svg"
              alt="Next"
            />
            <b className="text-2xl font-jalnangothic">Next.js</b>
          </li>
          <li className="ml-4 list-disc">
            <b>서버 사이드 렌더링</b>의 이점을 알고 이를 활용한 프로젝트 구현
            가능.
          </li>
          <li className="ml-4 list-disc">
            <b>page 라우터</b> 방식의 프로젝트와 <b>app 라우터</b> 방식의
            프로젝트를 진행한 경험이 있음.
          </li>
          <li className="ml-4 list-disc">
            <b>서버 사이드 컴포넌트</b>와 <b>클라이언트 컴포넌트</b>를 나누어 이
            둘의 이점을 활용해봤음. <b>API 라우터</b>를 작성해 요청과 응답을
            주고 받을 수 있음.
          </li>
        </ul>

        <ul className="xl:w-[45%] mx-5 my-3 leading-relaxed text-lg text-start">
          <li className="flex items-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://www.svgrepo.com/show/349419/javascript.svg"
              alt="javascript"
            />
            <b className="text-2xl font-jalnangothic">Javascript</b>
          </li>
          <li className="ml-4 list-disc">
            <b>ES6 +</b> 문법에 대한 이해를 갖고있고, <b>async await</b> 을
            활용한 비동기 처리 등 프로젝트에서 활용해봤음.
          </li>
          <li className="ml-4 list-disc">
            가장 많이 다룬 언어이며, 대부분의 프로젝트 진행 시 사용했음.{' '}
            <b>메모리 구조</b> 및 <b>실행 컨텍스트</b>, <b>GC</b> 등
            자바스크립트에 대한 이해를 갖고 있음.
          </li>
        </ul>

        <ul className="xl:w-[45%] mx-5 my-3 leading-relaxed text-lg text-start">
          <li className="flex items-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://www.svgrepo.com/show/349540/typescript.svg"
              alt="typescript"
            />
            <b className="text-2xl font-jalnangothic">Typescript</b>
          </li>
          <li className="ml-4 list-disc">
            여러 데이터를 다루는 프로젝트를 통해 <b>엄밀한 타입 지정</b>에 대해
            필요성을 체감해 학습 시작해 현재는 프로젝트에서 주로 활용 중.
          </li>
          <li className="ml-4 list-disc">
            <b>Interface</b>와 <b>type</b>의 차이를 알고 있으며 <b>any</b>{' '}
            타입의 사용을 지양하고 <b>타입 가드</b>로 컴파일러가 추론할 수
            있도록 탐구하고 있음.
          </li>
        </ul>

        <ul className="xl:w-[45%] mx-5 my-3 leading-relaxed text-lg text-start">
          <li className="flex items-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://www.svgrepo.com/show/354274/redux.svg"
              alt="Redux"
            />
            <b className="text-2xl font-jalnangothic">Redux</b>
          </li>
          <li className="ml-4 list-disc">
            컴포넌트가 복잡해질수록 관리하기 힘들었던 상태 관리를{' '}
            <b>전역 상태</b> 관리 라이브러리를 통해 <b>props-drilling</b> 없이
            상태 관리를 해봄.
          </li>
          <li className="ml-4 list-disc">
            중앙 집중식 전역 상태 관리를 통해 <b>Top-Down</b> 방식의 데이터 전달
            방식을 적용해봄.
          </li>
          <li className="ml-4 list-disc">
            <b>Redux-Saga</b> 미들웨어를 통해 Redux를 통한 <b>비동기 처리</b>와
            Action 요청 중 API 요청 등 Redux 사용을 더욱 손쉽게 사용하는 법을
            학습함.
          </li>
        </ul>

        <ul className="xl:w-[45%] mx-5 my-3 leading-relaxed text-lg text-start">
          <li className="flex flex-wrap items-center">
            <div className="flex my-1">
              <img
                className="w-8 h-8 mr-2 rounded-md"
                src="https://cdn.worldvectorlogo.com/logos/recoil-js.svg"
                alt="recoil"
              />
              <b className="text-2xl font-jalnangothic">Recoil</b>
            </div>
            <div className="flex my-1">
              <img
                className="w-8 h-8 mx-2"
                src="https://storage.googleapis.com/candycode/jotai/jotai-mascot.png"
                alt="Jotai"
              />
              <b className="text-2xl font-jalnangothic">Jotai</b>
            </div>
          </li>
          <li className="ml-4 list-disc">
            그동안 중앙 집중 식의 <b>Flux 패턴</b>을 통한 상태 관리 라이브러리인
            Redux만 사용해보다가 <b>Atom 패턴</b>의 상태 관리 라이브러리인{' '}
            <b>Recoil</b>을 학습. <b>useState</b>와 비슷한 구조로 친숙하게 사용.
          </li>
          <li className="ml-4 list-disc">
            이 후 유사한 상태관리 라이브러리인 <b>Jotai</b>를 프로젝트에 적용.
            비동기 요청 시에도 손쉬운 사용을 경험해봄.
          </li>
        </ul>
      </div>
    </section>
  );
}
