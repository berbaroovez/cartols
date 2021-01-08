import ProjectGoals from "../../components/Project/ProjectGoals";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectLessons from "../../components/Project/ProjectLessons";
import ProjectPage from "../../components/ProjectPage";
import { NextSeo } from 'next-seo';

export default function EmoteFinder(){
    return(

        <ProjectPage>
            <NextSeo
        title="Emote Finder – Carter Olson"
        canonical="https://cartols/p/EmoteFinder"
        openGraph={{
          url: 'https://cartols/p/EmoteFinder',
          title: 'Emote Finder – Carter Olson'
        }}
      />
            <ProjectHeader
                title="Emote Finder"
                picture="/images/EmoteFinder.png"
                alt="A picture of emotefinder.com"
            >
                <p>
                This was my first project I created with React. It was a simple way to mess around with calling external APIs but also simple enough were I wouldn't 
                get lost in making a bunch of components. The site was not my original idea and I actually just remade a site I personally was using a lot which can be found {" "}
                <a className="text-green-400"href="https://astrid.slmn.io/twitch/">here</a>. This doesn't mean I didn't learn a thing or two from building it. The main idea behind the website is to list out
                all available emotes for a twitch streamer. There are two external emote providers FrankerfaceZ and BetterTwitchTV which allow streamer to have more emotes for their chats.
                Its hard to find a list of all those emotes so this website fetches those two sites and also twitch to show all emotes.</p>

                <p className="text-xl"> <span className="text-green-400 mt-8">Stack: </span> React and Vercel</p>

                <p className="text-xl"> <span className="text-green-400 mt-8">Live View: </span> <a className="text-white" href="https://emotefinder.com">https://emotefinder.com</a></p>
            </ProjectHeader>

            <ProjectGoals>
                The goals were very simple, build a react app that uses APIs and deploy it for public use. This was done using just normal react create app. 
            </ProjectGoals>

            <ProjectLessons>
                I learned first how to build a react app with out hooks. Later the site was upgrade to use react hooks which made the code a bit cleaner. 
                One of the things I wanted was for people to be able to type in a user directly into the url and take them to the right page. React router allowed me to do and it was 
                very simple to implement.
            </ProjectLessons>
        </ProjectPage>
    )
}