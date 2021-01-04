
import Layout, { siteTitle } from "../components/layout";

import { getSortedPostsData } from "../lib/posts";
import { useState, useEffect } from "react";
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
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return (
    <Layout>
      <div className="grid grid-cols-1  justify-center items-start max-w-5xl mx-auto mb-16 relative">
        <div className={`ml-4 mb-16 font-semibold text-2xl sm:text-4xl transform ${
              mounted
                ? "translate-y-0 duration-1000 "
                : "translate-y-full "
            }`}>
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
       
        </div>
        <div>
        <h3 className="w-40 font-semibold text-3xl relative pb-2 md:ml-4 border-l-2 border-b-2 pl-2 mb-4">Who I Am</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white mb-16 ml-2 sm:ml-8">
          <p>
            Hello! My name is Carter welcome to my personal website. My journey
            to becoming a programmer started as I watched YouTube videos of
            people hacking Habbo Hotel and I’ve been intrigued ever since.
          </p>

          <p>
            I graduated from Loras College in 2019 with a degree in computer
            science. My main language at the time of graduation was python. I
            tried my hand at being a backend developer. I soon realized that I
            prefer to be on the front end side of development
          </p>
          <p>
            This leads me to current day after completing Srimbas Front End
            developer course, I’ve found my passion of making websites. Listed
            on my projects page are a few of my current projects! Take a look
            and don’t be shy to reach out about any questions.
          </p>
        </div>
        </div>
        <div className="mb-16">
          <h3 className="w-40 font-semibold text-3xl relative pb-2 md:ml-4 border-l-2 border-b-2 pl-2 mb-4">My Skills</h3>
          <p className=" ml-2 md:w-1/2 md:ml-4 mb-8 ">Over the years I've gained these skills through personal projects and schooling. My career goal is 
            to always be learning and to also share my knowledge with my co-workers. I'm grateful for everyone
            who has taught me something and I want to pass that down as long as I can.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <div className="grid grid-flow-row auto-rows-auto gap-2">
              <p>🌟 React</p>
              <p>🌟 Javascript</p>
            </div>
            <div className="grid grid-flow-row auto-rows-auto gap-2">
              <p>🌟 Styled-Components</p>
              <p>🌟 Tailwind</p>
            </div>
            <div className="grid grid-flow-row auto-rows-auto gap-2">
              <p>🌟 Firebase</p>
              <p>🌟 HTML & CSS</p>
            </div>
            <div className="grid grid-flow-row auto-rows-auto gap-2">
              <p>🌟 Python</p>
              <p>🌟 Git</p>
            </div>
          </div>
        </div>
        <section className="mt-10">
        <h3 className="w-40 font-semibold text-3xl relative pb-2 md:ml-4 border-l-2 border-b-2 pl-2 mb-4">Projects</h3>
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
