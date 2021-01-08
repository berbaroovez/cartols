import ProjectGoals from "../../components/Project/ProjectGoals";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectPage from "../../components/ProjectPage";
// import ProjectStack from "../../components/ProjectStack"
import ProjectStack from "../../components/Project/ProjectStack";
import ProjectProblems from "../../components/Project/ProjectProblems";
import ProjectLessons from "../../components/Project/ProjectLessons";
import { NextSeo } from 'next-seo';
export default function NuzlockeTracker(){

    return(
        <ProjectPage>
            <NextSeo
        title="Nuzlocke Tracker – Carter Olson"
        canonical="https://cartols/p/NuzlockeTracker"
        openGraph={{
          url: 'https://cartols/p/NuzlockeTracker',
          title: 'Nuzlocke Tracker – Carter Olson'
        }}
      />
            <ProjectHeader
            title = "Nuzlocke Tracker"
            picture = "/images/NuzlockeTracker.jpg"
            alt="A picture of my nuzlocke tracking website"
            >
            The Nuzlocke Tracker idea came to me while watching one of my favorite streamers attempt his own Nuzlocke. 
            He was doing a version were for every pokemon caught he named it after someone it chat and then when he finished the
            run he would give away prizes to anyone that had a pokemon. This was a good idea but it was very hard to keep track which run
            he was on or if your pokemon was still alive. So I came up with the idea of creating a website to make easy to check on all of those things.
            <p className="text-xl"> <span className="text-green-400">Stack:</span> React, Firebase, Material Design</p>

            </ProjectHeader>

            <ProjectGoals>
                The major goal this project was to allow users to login with their twitch account. This was a fun goal because since starting 
                my journey to a frontend developer I had yet to touch any backend stuff. Another goal was to allow streamers to add a "editor"
                to their account so that "editor" could also help track pokemon.
            </ProjectGoals>
            <ProjectStack
            picture="/images/NuzlockeTrackerStack.png"
            alt="A picture of react, firebase, and material ui logos"
            >
                As this would be my second project I ever made I wanted to start exploring some open source packages. This lead me to trying 
                out the google inspired material design UI library. It awesome getting to work with these wonderfully designed components that you could plug and play.
                Next I needed a database provider. At the time I had looked at AWS a little but it seemed too complex for me at the time. I went with 
                Google's Firebase which was surprisingly very easy to get up and going and had a incredible free tier. Overall, I'm happy with this stack
                for the project.
            </ProjectStack>
            <ProjectProblems>
                Authentication was a major problem I ran into. I had never attempted to use a 3rd party account for OAuth which I had to use to get access to twitch.
                I had to syphon through numerous threads to finally figure out how to use a 3rd party account with firebase. I had to figure also how to add "editors" to accounts.
                There was few paths I could take... Do I create a whole new table for editors and list which channels they edit for or do I just add them onto the owners table. 
                I very much enjoyed this problem because it allowed me to go down a few paths to figure out which was ultimately the best. Also I had never deployed backend services
                so I was nervous about putting this project out to to real world in fear I would mess up securing my backend services.
            </ProjectProblems>
            <ProjectLessons>
                All of those problems just mean more learning for me as a developer. The idea behind deploying backend services was freighting so I never
                deployed this project. Yet, it lead me to want to learn ho deploy these services safely and now Im confident that when I redo this project it will go
                public. Along with that problem, I'm now confident in how add a 3rd party provider to firebase authentication services using Firebase's custom token system.
                Overall, this project might been too much for my point in my career but it pushed me into many of the paths I used to my newer projects and Im thankful for that.
            </ProjectLessons>
        </ProjectPage>

    )
}