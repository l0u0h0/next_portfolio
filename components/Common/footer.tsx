import Link from 'next/link';
import GithubSVG from '../Svg/GithubSVG';
import VelogSVG from '../Svg/VelogSVG';
import InstaSVG from '../Svg/InstaSVG';
import { URL } from '@/app/constant';

export default function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="w-full min-w-fit sm:min-w-[640px]">
      <div>
        <div className="container px-10 sm:px-32 py-4 sm:py-10 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-zinc-800 hover:border-transparent hover:dark:border-transparent"
          >
            <span className="ml-3 text-2xl">l0u0h0's</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © {thisYear} l0u0h0's Web —
            <Link
              href={URL.portfolio}
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @author-l0u0h0(Lee YuHan)
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start">
            <Link
              className="text-gray-500 hover:border-transparent hover:dark:border-transparent"
              href={URL.github}
              target="_blank"
            >
              <GithubSVG className="footer-icon" />
            </Link>
            <Link
              className="ml-3 text-gray-500 hover:border-transparent hover:dark:border-transparent"
              href={URL.velog}
              target="_blank"
            >
              <VelogSVG className="footer-icon" />
            </Link>
            <Link
              className="ml-3 text-gray-500 hover:border-transparent hover:dark:border-transparent"
              href={URL.insta}
              target="_blank"
            >
              <InstaSVG className="footer-icon" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
