import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';
import LogoSVG from '../Svg/LogoSVG';

export default function Header() {
  return (
    <header className="w-full min-w-fit sm:min-w-[640px] text-gray-600">
      <div className="mx-auto flex flex-wrap p-5 lg:px-32 md:px-20 flex-col md:flex-row justify-center items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-zinc-800 mb-4 hover:border-transparent hover:dark:border-transparent"
        >
          <LogoSVG className="w-16 h-16" />
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
          <DarkModeToggleButton />
        </nav>
      </div>
    </header>
  );
}
