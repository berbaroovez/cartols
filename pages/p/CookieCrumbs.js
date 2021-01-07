
import ProjectGoals from "../../components/Project/ProjectGoals";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectLessons from "../../components/Project/ProjectLessons";
import ProjectProblems from "../../components/Project/ProjectProblems";
import ProjectStack from "../../components/Project/ProjectStack";
import ProjectPage from "../../components/ProjectPage";

import { NextSeo } from 'next-seo';
export default function CookieCrumbs(){
return(
    <ProjectPage>
       
         <NextSeo
        title="CookieCrumbs – Carter Olson"
        canonical="https://cartols/p/CookieCrumbs"
        openGraph={{
          url: 'https://cartols/p/CookieCrumbs',
          title: 'CookieCrumbs – Carter Olson'
        }}
      />
        <ProjectHeader
            title="Cookie Crumbs"
            picture="/images/CookieDashboard.png"
            alt="The cookie crumbs dashboard"
        >   
            <p>A SaaS that is built for custom sugar cookie makers. It allows them
            to add a order form to their site so they can get rid of using google forms. On the dashboard
            it currently allows for them to see new orders and search all orders. This is a on going product
            that started from a idea from my mom, a cookie maker.   </p>
            <p className="text-xl"> <span className="text-green-400">Stack:</span> React, AWS Amplify, Ant Design</p>
        </ProjectHeader>
        
        <ProjectGoals>
            This project was the main reason I even started the Web Development career path. After getting laid off
            do to corona I needed a project to work on. I started with a pure Django website before realizing I need better
            tools. The current goals of the project our to launch a SaaS product that can make thousands of peoples lives easier.
            I want cookie makers to have two options for order forms. The order form will either be served through a iFrame on their own
            personal site or they can just link the order form to the CookieCrumbs website. I also wanted to create a stylish
            product that I could be proud of which lead me to using Ant Design for the current UI of the project.
        </ProjectGoals>
       
       <ProjectStack
       picture="/images/CookieStack.png"
       alt="a picture of the react, AWS, and ant design logos"
       >
           This stack was chosen because I wanted to learn some new technologies. I'm using pure react because I didn't see 
           the need for server side rendering because this is dashboard page that doesn't need any SEO. I'll be using
           Next.js for the official website thought so I can take advantage of SEO. AWS Amplify was chosen because I had only
           used Firebase and I wanted to mess around with AWS after they announced their new Amplify dashboard. Ant Design was
           chosen because of their incredible components especially their calenders that have so many customizable options.
       </ProjectStack>
        <ProjectProblems>
            I ran into problems with AWS Amplify a few times. Their CLI tool would mess up on my PC and would not allow me to push new
            database updates to their servers. The current fix for this is switching over project development to my macbook which didn't have the problem.
            Another problem was deciding how I would go about providing order forms for each customer. I was trying to decide if would just offer
            a full website package where I build a site and give them access to the order form that way. Then one day I was watching a tutorial from
            Lee Robinson and he was hosting his product in Iframes on other peoples websites it just clicked that I could use IFrames as well. 
        </ProjectProblems>

<ProjectLessons>
So far I've learned a ton from this project and I will continue to learn. Their are a few major lessons learned though. Learning more about AWS 
services has been incredible. The services amazon provide make it incredibly easy to push out new websites. Using Figma to design layouts was also 
incredible. As a programmer I always want to just hop into coding but, designing first in Figma actually lead to a lot less frustration. And finally being able 
to work with an actual future user of my product, aka my mom, has allowed me to expand my collaboration skills and learn how to iterate designs.
    
</ProjectLessons>
    </ProjectPage>
)
}