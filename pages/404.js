import Link from 'next/link'
import Layout from "../components/layout"
import { NextSeo } from 'next-seo';

export default function FourOhFour() {
  return <>

    <Layout>
    <NextSeo
title="404 – Carter Olson"
canonical="https://cartols.com/404"
openGraph={{
url: 'https://cartols.com/404',
title: '404 – Carter Olson'
}}
      />
    <h1 className="text-base md:text-4xl text-center">404 - Page Not Found</h1>
    <Link href="/" >
      <a className='text-center text-green-400 text-xl' >
        Go back home
      </a>
    </Link>
    </Layout>
  </>
}