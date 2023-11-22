import Link from "next/link";

export default function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <>
      <footer className="body-font">
        <div>
          <div className="container px-32 py-10 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span className="ml-3 text-2xl">Yuhan's PortFolio</span>
              </a>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © {thisYear} Next.js —
              <a
                href="https://fork-fluorine-608.notion.site/Lee-Yu-Han-Front-Developer-b8cc6a69fb06478f8f2d01f4288f49d4?pvs=4"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @notion~
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start">
              <a className="text-gray-500" href="https://github.com/l0u0h0" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
              </a>
              <a className="ml-3 text-gray-500" href="https://velog.io/@l0u0h0" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="none"
                  />
                  <path
                    fill="currentColor"
                    d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553a14.1 14.1 0 0 0 1.283-2.273c.405-.855.608-1.62.608-2.295c0-.405-.113-.727-.338-.967c-.21-.255-.608-.577-1.193-.967c.6-.765 1.35-1.148 2.25-1.148c.48 0 .878.143 1.193.428c.33.285.494.704.494 1.26c0 .93-.39 2.093-1.17 3.488c-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156l-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63c.81-.24 1.358-.36 1.643-.36Z"
                  />
                </svg>
              </a>
              <a className="ml-3 text-gray-500" href="https://www.instagram.com/gom.dol.ssu/" target="_blank">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
