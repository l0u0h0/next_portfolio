import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 px-20 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-16 h-16"
            >
              <path
                fillRule="evenodd"
                d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
                clipRule="evenodd"
              />
            </svg>

            <span className="ml-3 text-3xl font-bold">l0u0h0's</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">홈</a>
          </Link>
          <Link href="/projects">
            <a className="mr-5 hover:text-gray-900">프로젝트</a>
          </Link>
          {/* contact 페이지 링크 예정 */}
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">연락하기</a>
          </Link>
          {/* 다크모드 토글버튼 */}
          <DarkModeToggleButton />
        </nav>
      </div>
    </header>
  );
}
