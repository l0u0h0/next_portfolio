'use client';

export default function Awards() {
  return (
    <section className="w-full flex flex-col mx-6 md:mr-6 text-center md:text-left items-start">
      <div className="w-full title-font text-start">
        <h1 className="text-2xl sm:text-3xl">🏆 Awards</h1>
        <hr className="min-w-[246px] mt-4 border-2 dark:border-1 border-zinc-900 dark:border-zinc-300" />
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="m-10 mx-0">
          <ul className="mb-8 ml-12 mr-6 leading-relaxed text-lg text-left list-disc">
            <li>
              <b>삼성 청년 SW 아카데미</b>(SSAFY) 공통프로젝트 웹기술 트랙{' '}
              <b>우수상</b> 수상{' '}
              <b>
                (
                <a
                  href="https://fork-fluorine-608.notion.site/Stargate-c60966acfc384a7da08c06d0eabb0992"
                  target="_blank"
                >
                  StarGate
                </a>
                )
              </b>{' '}
              - <small>2023.08.18</small>
            </li>
            <li>
              2020 STARTUP INVENTION CONTEST 공모전 <b>단체상</b> 수상 -{' '}
              <small>2020.11.13</small>
            </li>
            <li>
              마이스타일 트렌드페어 2017 대학생 STARTUP 공모전 <b>장려상</b>{' '}
              수상 - <small>2017.11.11</small>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
