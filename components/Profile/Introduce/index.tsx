'use client';

import { CUSTOM_THEME } from '@/app/constant';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useState, useCallback, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function Introduce() {
  const thisYear = new Date().getFullYear();
  const { theme, systemTheme } = useTheme();
  const [year, setYear] = useState<number>(0);

  const prevYear = useCallback(() => {
    setYear(year - 1);
  }, [year]);

  const nextYear = useCallback(() => {
    setYear(year + 1);
  }, [year]);

  useEffect(() => {
    if (!year) setYear(thisYear);
  }, []);

  return (
    <section className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
      <div className="w-full title-font text-start">
        <h1 className="text-2xl sm:text-3xl">📖 Introduce</h1>
        <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
      </div>
      <div className="flex flex-wrap md:flex-nowrap mx-auto">
        <div className="w-44 min-w-[10rem] h-fit p-2 m-auto mt-10 md:m-10 border-zinc-700 dark:border-zinc-200 border-y-[3px] hover:scale-105 duration-300">
          <div className="w-full h-52 relative">
            <Image
              className="rounded-md object-cover"
              src={`/Images/profile-image.jpg`}
              alt="Profile Image"
              fill
              quality={100}
              priority
            />
          </div>
          <p className="flex my-1 justify-center items-center">
            <b className="text-xl text-zinc-800 dark:text-zinc-100 text-center font-jalnan">
              이유한
              <br />
              (LeeYuHan)
            </b>{' '}
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
              <small className="mt-0 mb-1">
                2017.03 ~ 2023.02 졸업 <b>[3.85/4.5]</b>
              </small>
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
              <small className="mt-0 mb-1">2023.01 ~ 2023.12 수료</small>
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
        GitHub 기록
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
              year <= 2020 && `text-zinc-500 dark:text-zinc-400`
            }`}
            onClick={() => prevYear()}
            disabled={year <= 2020}
          >
            Prev
          </button>
          <div className="calendar w-fit mx-4 my-10 lg:mx-10 overflow-x-auto duration-200">
            <GitHubCalendar
              username="l0u0h0"
              year={year}
              colorScheme={
                theme === 'dark' || theme === 'light' ? theme : systemTheme
              }
              theme={CUSTOM_THEME}
              style={{
                fontFamily: 'jalnangothic',
              }}
              renderBlock={(block, activity) =>
                React.cloneElement(block, {
                  'data-tooltip-id': 'react-tooltip',
                  'data-tooltip-html': `${activity.date.split('-')[0]}년 ${
                    activity.date.split('-')[1]
                  }월 ${activity.date.split('-')[2]}일 ${
                    activity.count
                  } activity`,
                })
              }
            />
            <ReactTooltip id="react-tooltip" className="font-jalnangothic" />
          </div>
          <button
            className={`font-jalnan ${
              year >= thisYear && `text-zinc-500 dark:text-zinc-400`
            }`}
            onClick={() => nextYear()}
            disabled={year >= thisYear}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
