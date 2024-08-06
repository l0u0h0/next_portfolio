'use client';

import { CUSTOM_THEME, URL } from '@/app/constant';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useState, useCallback, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import GithubSVG from '@/components/Svg/GithubSVG';
import VelogSVG from '@/components/Svg/VelogSVG';
import Link from 'next/link';

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
      <div className="w-full flex flex-wrap mx-auto justify-center">
        <div className="w-fit h-fit p-2 m-auto mt-10 md:m-10 border-zinc-700 dark:border-zinc-200 border-y-[3px] hover:scale-105 duration-300">
          <div className="w-40 h-52 relative">
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
          <ul className="sm:grid sm:grid-cols-2 sm:gap-2 leading-relaxed flex flex-wrap gap-x-10 text-lg text-start">
            <li className="mb-2 p-1">
              <b className="text-xl font-jalnan">이메일</b> <br />
              l0u0h0@gmail.com
            </li>
            <li className="mb-2 p-1">
              <b className="text-xl font-jalnan">전화번호</b> <br />
              010-2044-8798
            </li>
            <li className="mb-2 p-1 overflow-clip">
              <b className="inline-flex text-xl font-jalnan">
                <GithubSVG className="w-6 h-6 mr-1" />
                Git
              </b>{' '}
              <br />
              <Link href={URL.github} target="_blank">
                https://github.com/l0u0h0
              </Link>
            </li>
            <li className="mb-2 p-1 overflow-clip">
              <b className="inline-flex text-xl font-jalnan">
                <VelogSVG className="w-6 h-6 mr-1" />
                Blog
              </b>{' '}
              <br />
              <Link href={URL.velog} target="_blank">
                https://velog.io/@l0u0h0
              </Link>
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
            </li>
            <li className="mb-2 p-1">
              <b className="text-xl font-jalnan">경험</b> <br />
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
        <GithubSVG className="w-6 h-6 ml-1" />
        GitHub 캘린더
      </div>
      {year && (
        <div className="w-full mx-auto flex mb-10 justify-center">
          <button
            className={`font-jalnan ${
              year <= 2020 && `text-zinc-500 dark:text-zinc-400`
            }`}
            onClick={prevYear}
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
            onClick={nextYear}
            disabled={year >= thisYear}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
