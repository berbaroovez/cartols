import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const name = "Carter Olson";
export const siteTitle = "Carter Olson's Blog";

export default function Layout({ children, home }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-purple-500 dark:bg-gray-800">
      <nav className="bg-purple-500 grid grid-cols-2 justify-between  items-center max-w-4xl w-full p-8 my-0 md:py-8 mx-auto  dark:bg-gray-800 bg-opacity-60">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-600 rounded h-10 w-10"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && <>{theme === "dark" ? "🌇" : "🌃"}</>}
        </button>
        <div>
          <Link href="/ Dashboard ">
            <a className=" p-1  sm:p-4 text-gray-200 rounded-md	hover:no-underline hover:bg-purple-300 dark:hover:bg-gray-500">
              💫Dashboard
            </a>
          </Link>
          <Link href="/ Dashboard">
            <a className=" p-1  sm:p-4 text-gray-200 rounded-md	hover:no-underline hover:bg-purple-300 dark:hover:bg-gray-500">
              📓Blog
            </a>
          </Link>
          <Link href="/ Dashboard">
            <a className=" p-1  sm:p-4 text-gray-200 rounded-md	hover:no-underline hover:bg-purple-300 dark:hover:bg-gray-500">
              👨‍💻Portfolio
            </a>
          </Link>
        </div>
      </nav>
      <main className="grid grid-cols-1 justify-center bg-purple-500 dark:bg-gray-800 px-8">
        {children}
      </main>
    </div>
  );
}

// <Head>
// <link rel="icon" href="/favicon.ico" />
// <meta
//   name="description"
//   content="Learn how to build a personal website using Next.js"
// />
// <meta
//   property="og:image"
//   content={`https://og-image.now.sh/${encodeURI(
//     siteTitle
//   )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
// />
// <meta name="og:title" content={siteTitle} />
// <meta name="twitter:card" content="summary_large_image" />
// </Head>
// <header cla
