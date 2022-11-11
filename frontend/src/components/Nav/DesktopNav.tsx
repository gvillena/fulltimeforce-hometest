import Link from "next/link";
import { ReactElement } from "react";

interface DesktopNavProps {
  onClick: () => void;
  shouldShow: boolean;
}

export const DesktopNav = ({
  onClick,
  shouldShow,
}: DesktopNavProps): ReactElement => {
  return (
    <nav
      className={
        shouldShow
          ? "w-full h-full absolute z-40 transform  translate-x-0 "
          : "w-full h-full absolute z-40 transform -translate-x-full"
      }
    >
      <div
        className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
        onClick={onClick}
      />
      <div className="w-64 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
        <div className="flex flex-col justify-between h-full">
          <div className="px-6 pt-4">
            <div className="flex items-center mb-6 justify-between">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    fill="#7b4bc4"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <p className="font-bold md:text2xl text-base pl-3 text-gray-800">
                    GitHub Commits
                  </p>
                </div>
              </Link>
              <div id="cross" className=" text-gray-800" onClick={onClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon cursor-pointer icon-tabler icon-tabler-x "
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
            <ul className="f-m-m">
              <li className="text-white pt-8">
                <Link href="/">
                  <div className="flex items-center">
                    <p className="text-purple-500 ml-3 text-lg">Home</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
