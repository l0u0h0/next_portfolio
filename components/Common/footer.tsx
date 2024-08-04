import Link from 'next/link';
import GithubSVG from '../Svg/GithubSVG';
import VelogSVG from '../Svg/VelogSVG';
import InstaSVG from '../Svg/InstaSVG';

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
            <a
              href="https://fork-fluorine-608.notion.site/Lee-Yu-Han-Front-Developer-b8cc6a69fb06478f8f2d01f4288f49d4?pvs=4"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @author-l0u0h0(Lee YuHan)
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start">
            <a
              className="text-gray-500 hover:border-transparent hover:dark:border-transparent"
              href="https://github.com/l0u0h0"
              target="_blank"
            >
              <GithubSVG className="footer-icon" />
            </a>
            <a
              className="ml-3 text-gray-500 hover:border-transparent hover:dark:border-transparent"
              href="https://velog.io/@l0u0h0"
              target="_blank"
            >
              <VelogSVG className="footer-icon" />
            </a>
            <a
              className="ml-3 text-gray-500 hover:border-transparent hover:dark:border-transparent"
              href="https://www.instagram.com/gom.dol.ssu/"
              target="_blank"
            >
              <InstaSVG className="footer-icon" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
