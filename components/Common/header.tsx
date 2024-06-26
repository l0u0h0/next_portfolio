import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';

export default function Header() {
  return (
    <header className="w-full min-w-fit sm:min-w-[640px] text-gray-600">
      <div className="mx-auto flex flex-wrap p-5 lg:px-32 md:px-20 flex-col md:flex-row justify-center items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-zinc-800 mb-4 hover:border-transparent hover:dark:border-transparent"
        >
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
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-lg title-font justify-evenly">
          <Link
            href="/"
            className="mr-7 hover:text-gray-900 dark:text-zinc-300"
          >
            홈
          </Link>
          <Link
            href="/projects"
            className="mr-7 hover:text-gray-900 dark:text-zinc-300"
          >
            프로젝트
          </Link>
          <Link
            href="/profile"
            className="mr-7 hover:text-gray-900 dark:text-zinc-300"
          >
            프로필
          </Link>
          {/* 다크모드 토글버튼 */}
          <DarkModeToggleButton />
        </nav>
      </div>
    </header>
  );
}
