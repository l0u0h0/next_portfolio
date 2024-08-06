'use client';

import { URL } from '@/app/constant';
import Image from 'next/image';
import Link from 'next/link';

export default function Experience() {
  return (
    <section className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
      <div className="w-full title-font text-start">
        <h1 className="text-2xl sm:text-3xl">💼 Experience</h1>
        <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
      </div>
      <div className="flex flex-wrap md:flex-nowrap py-4">
        <div className="m-10 mt-0">
          <div className="w-full flex justify-center items-center gap-4 my-4">
            <div className="w-40 max-sm:w-1/3 h-28 max-sm:h-12 relative">
              <Image
                className="ml-2 w-full h-auto object-contain"
                src={`/Images/SSAFY-image.png`}
                alt="SSAFY Image"
                fill
                quality={100}
                priority
              />
            </div>
            <div className="w-full self-centerleading-relaxed text-lg text-start font-jalnangothic text-zinc-600 dark:text-zinc-300">
              <Link
                href={URL.ssafy}
                target="_blank"
                className="text-zinc-600 dark:text-zinc-300"
              >
                <b className="text-xl font-jalnan">삼성 청년 SW 아카데미</b>{' '}
                <br /> 9기 자바 전공자반
              </Link>{' '}
              <br />
              <small className="text-zinc-400 dark:text-zinc-400 font-extralight">
                2023.01 ~ 2023.12
              </small>
            </div>
          </div>

          <ul className="leading-relaxed text-lg text-start font-sans">
            <div className="mb-2">
              <li>
                - 9 To 6의 교육 시간으로 총 <b>1600시간의 학습</b>을 진행하며{' '}
                <b>Vue.js</b>를 이용한 Frontend, <b>SpringBoot</b>를 이용한
                Backend 학습을 통해 Web 개발의 기본을 익혔음.
              </li>
              <li>
                - <b>알고리즘</b>에 기반한 코딩 교육과 주 2회 진행한{' '}
                <b>알고리즘 스터디</b>로<b>모의 삼성 SW 역량 테스트</b>에서{' '}
                <b>A+ (Advanced +)</b>
                등급을 취득함.
              </li>
              <li>
                - 다양한 주제로의 팀 프로젝트를 <b>프론트엔드</b> 담당으로 3회
                수행했으며{' '}
                <a href={URL.stargate_git} target="_blank">
                  <b>[StarGate]</b>
                </a>
                프로젝트는 현직 개발자의 심사를 통해 <b>우수 프로젝트</b>로
                선정되었음.
              </li>
              <li>
                - 웹 개발 및 React, JS에 대한 <b>스터디</b>를 통해 React의
                동작방식과 훅들, 최신 기술의 지식 및 웹 표준과 접근성,
                자바스크립트와 타입스크립트의 문법에 대해 학습하였음.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}
