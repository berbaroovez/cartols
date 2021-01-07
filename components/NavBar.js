import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  function handleButtonClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div></div>
      <nav className="bg-purple-500 grid grid-cols-2 justify-between  items-center max-w-4xl w-full p-8 my-0 md:py-8 mx-auto  dark:bg-gray-800 bg-opacity-60 relative">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-600 rounded h-10 w-10"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && <>{theme === "dark" ? "🌇" : "🌃"}</>}
        </button>
        <button
          className="w-8 h-8 justify-self-end md:hidden z-20"
          onClick={handleButtonClick}
        >
          {isOpen ? (
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        {/* className="hidden md:block text-sm lg:text-base" */}
        <div
          className={`
            absolute border-l-4 border-purple-300 bg-purple-400 
            dark:bg-gray-700 dark:border-gray-300
            grid grid-flow-row z-10   right-0 top-0 
            px-10 pt-20 pb-96
            transform ${
              isOpen
                ? "translate-x-0 ease-in-out transition-transform"
                : "translate-x-full ease-in-out transition-transform"
            }
            md:relative
            md:border-l-0
            md:bg-transparent
            md:dark:bg-transparent
            md:grid-flow-col
            md:px-0
            md:pt-0
            md:pb-0
            md:translate-x-0
            md:left-0
            md:bottom-0
           md:text-sm
           lg:text-base
            `}
        >
          <Link href="/">
            <a className=" p-4 text-gray-200 rounded-md	hover:no-underline hover:bg-purple-300 dark:hover:bg-gray-500">
              💫Home
            </a>
          </Link>
          <Link href="/dashboard">
            <a className=" p-4 text-gray-200 rounded-md	hover:no-underline hover:bg-purple-300 dark:hover:bg-gray-500">
              📡Dashboard
            </a>
          </Link>
          <Link href="/projects">
            <a className=" p-4 text-gray-200 rounded-md	hover:no-underline hover:bg-purple-300 dark:hover:bg-gray-500">
              👨‍💻Portfolio
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}
