import Layout from "../components/layout";
import FollowerCard from "../components/metrics/Twitter";

import { NextSeo } from 'next-seo';

export default function Dashboard(){


    return(
        <Layout>
            <NextSeo
        title="Dashboard – Carter Olson"
        canonical="https://cartols/dashboard"
        openGraph={{
          url: 'https://cartols/dashboard',
          title: 'Dashboard – Carter Olson'
        }}
      />
             <div className=" justify-center text-sm md:text-4xl items-start max-w-2xl mx-auto mb-16">
                <h1>Dashboard is being built currently!</h1>
        </div>
        </Layout>
    )
}