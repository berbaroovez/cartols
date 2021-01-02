import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import NowPlaying from "../components/NowPlayingCard";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div className="grid grid-cols-1  justify-center items-start max-w-2xl mx-auto mb-16">
        <section className="grid grid-cols-1 sm:grid-cols-2 items-center">
          <div className="h-48 w-48 relative  mx-auto sm:mx-0">
            <Image
              className="rounded-md"
              src="/images/profile.png"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover"
            />
          </div>

          {/* <img src="/images/profile.png" className="h-32 w-32" /> */}

          <p className="text-xl">
            Hello, Im Carter a fullstack web developer. This is my current
            website for 2021! My stack for the forseeable future will be
            Next.JS, Firbase, and Tailwind. I hope to write some fun programming
            blogs.
          </p>
        </section>
        <section className="mt-10">
          <h3 className="text-xl font-bold">Current Projects</h3>
          {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 just bg-gray-800 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center mt-2">
            <ProjectCard
              title="CookieCrumbs"
              description="A SaaS product that allows cookie makers to track their orders"
              href="https://www.twitter.com/berbaroovez"
            />
            <ProjectCard
              title="CookieCrumbs"
              description="A SaaS product that allows cookie makers to track their orders A SaaS product that allows cookie makers to track their orders"
            />
            <ProjectCard
              title="CookieCrumbs"
              description="A SaaS product that allows cookie makers to track their orders A SaaS product that allows cookie makers to track their orders"
            />
            <ProjectCard
              title="CookieCrumbs"
              description="A SaaS product that allows cookie makers to track their orders A SaaS product that allows cookie makers to track their orders"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
