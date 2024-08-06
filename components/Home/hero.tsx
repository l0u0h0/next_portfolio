import { URL } from '@/app/constant';
import Animation from './animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      <div className="lg:basis-1/3 w-2/3 mb-10">
        <Animation />
      </div>
      <div className="lg:basis-2/3 px-12 md:pr-6 lg:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          즐거움으로 성장하는 개발자,&nbsp;
          <br className="inline-block" />
          이유한입니다.
        </h1>
        <ul className="mb-8 ml-6 leading-relaxed text-lg text-left list-disc">
          <li>
            사용자와 가장 밀접한 부분에서 효과적으로 서비스를 제공하는{' '}
            <b>Frontend</b>
            개발에 관심을 갖게 되었고, 이에 <b>즐거움</b>을 느끼게 되었습니다.
          </li>
          <li>
            보다 <b>완성도 있는 서비스 제공</b>을 위해 즐거움을 원동력 삼아
            학습하며 성장하는 <b>주니어 개발자</b>입니다.
          </li>
          <li>
            끊임없는 성장을 위해 <b>컴퓨터 공학</b>을 전공한 후{' '}
            <b>삼성 청년 SW 아카데미</b>에서 알고리즘 역량을 바탕으로 한{' '}
            <b>웹 개발 교육</b>과 실무에 기반한 다양한 <b>팀 프로젝트</b>를
            경험해왔습니다.
          </li>
        </ul>
        <div className="w-full flex gap-4 justify-center lg:justify-start">
          <Link href={URL.portfolio} className="btn-project" target="_blank">
            포트폴리오 보러가기
          </Link>
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
    </div>
  );
}
