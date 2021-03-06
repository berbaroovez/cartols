import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";
import { NextSeo } from 'next-seo';
export default function Projects() {
  return (
    <Layout>

            <NextSeo
        title="Portfolio – Carter Olson"
        canonical="https://cartols/projects"
        openGraph={{
          url: 'https://cartols/projects',
          title: 'Portfolio – Carter Olson'
        }}
      />
      <div>
        <h1 className="w-48 font-semibold font-sans text-3xl relative pb-2 md:ml-4 border-l-2 border-b-2 pl-2 mb-4">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          <ProjectCard
            title="CookieCrumbs"
            description="A SaaS product that allows cookie makers to track their orders"
            href="/p/CookieCrumbs"
            picture="/images/CookieCrumbs.png"
            alt="A picture of my cookie crumbs project"
          />

       
          <ProjectCard
            title="Nuzlocke Tracker"
            description="A website to that allows streamers to publicly track their nuzlocke runs"
            href="/p/NuzlockeTracker"
            picture="/images/NuzlockeTrackerCard.png"
            alt="A picture of a nuzlocke tracker"
          />
             <ProjectCard
            title="EmoteFinder"
            description="A website to find emotes for twitch streamers"
            href="/p/EmoteFinder"
            picture="/images/EmoteFinderCard.png"
            alt="A picture of emotefinder.com project"
          />
        </div>
      </div>
    </Layout>
  );
}
