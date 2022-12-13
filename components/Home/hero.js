export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요 빡박이입니다!
            <br className="hidden lg:inline-block" />
            오늘도 빡코딩?
          </h1>
          <p className="mb-8 leading-relaxed">
            피어나는 피에 바로 사막이다. 크고 청춘을 어디 길지 있는가? 속에 작고
            창공에 위하여서, 석가는 인간에 피고, 것이다. 방황하였으며, 바이며,
            청춘의 품었기 가장 쓸쓸하랴? 인생을 모래뿐일 더운지라 이는 피다.
            새가 우리 대중을 이것이야말로 고동을 트고, 영원히 위하여 황금시대를
            것이다. 청춘을 그러므로 눈이 풍부하게 능히 커다란 가는 천자만홍이
            청춘의 칼이다. 맺어, 위하여, 황금시대의 피부가 앞이 이것이다.
            방황하였으며, 그들은 피부가 없으면, 설산에서 어디 희망의 있다. 가진
            새가 끓는 착목한는 거친 방지하는 위하여, 그들의 눈에 운다. 이는
            소담스러운 몸이 없으면 맺어, 아름다우냐?
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
      </div>
    </section>
  );
}
