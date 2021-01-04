import NavBar from "./NavBar";

const name = "Carter Olson";
export const siteTitle = "Carter Olson's Blog";

export default function Layout({ children, home }) {
  return (
    <div className="bg-purple-500 dark:bg-gray-800">
      <NavBar />
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
