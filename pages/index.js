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
      <div className="grid grid-cols-1  justify-center items-start max-w-5xl mx-auto mb-16 relative">
        <div className="ml-4 mb-16 font-semibold text-2xl sm:text-4xl ">
          <h1 className="mb-2">Hello! I'm Carter</h1>
          <h1 className=" mb-2 text-green-400 dark:text-indigo-500 ">
            A Front End Developer
          </h1>
          <h1 className="">Currently Seeking a Job/Internship</h1>
        </div>
        <div className="w-full h-80 relative mb-16">
          <Image
            className=""
            src="/images/living.png"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover"
          />
          <p className="invisible">
            YOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLOYOLO
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 mb-16">
          <p>
            Hello! My name is Carter welcome to my personal website. My journey
            to becoming a programmer started as I watched YouTube videos of
            people hacking Habbo Hotel and I’ve been intrigued ever since.
          </p>

          <p>
            I graduated from Loras College in 2019 with a degree in computer
            science. My main language at the time of graduation was python. I
            tried to be a backend developer before I realized I love to make
            visual projects.{" "}
          </p>
          <p>
            This leads me to current day after completing Srimbas Front End
            developer course, I’ve found my passion of making websites. Listed
            on my projects page are a few of my current projects! Take a look
            and don’t be shy to reach out about any questions.{" "}
          </p>
        </div>
        <div className="mb-16">
          <h3 className="font-semibold text-3xl relative pb-4">My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="grid grid-flow-row auto-rows-auto gap-2">
              <p>🌟 React</p>
              <p>🌟 Javascript</p>
            </div>
            <div className="grid grid-flow-row auto-rows-auto gap-2">
              <p>🌟 Styled-Components & Tailwind</p>
              <p>🌟 HTML & CSS</p>
            </div>
            <div className="grid grid-flow-row auto-rows-auto gap-2">
              <p>🌟 Python</p>
              <p>🌟 Git</p>
            </div>
          </div>
        </div>
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
              title="catJam Club"
              description="A website that allows discord communities to create community playlists"
              href="https://catjam.club"
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
