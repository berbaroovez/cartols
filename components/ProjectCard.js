import Image from "next/image";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-sm text-gray-500 dark:text-black hover:text-gray-600 transition dark:hover:text-white"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function ProjectCard({ title, description, href, picture, alt }) {
  return (
    <div className=" w-full p-4 relative">
        <div className="w-full h-64 mx-auto  relative">
        <Image
            className="rounded-md"
            src={picture}
            alt={alt}
            layout="fill" // required
            objectFit="cover"
          />
        </div>
        <p className="text-2xl">{title}</p>
        <p className="ml-2 mb-2 text-sm text-gray-300">{description}</p>
        <p className="text-green-400">Read More →</p>
    </div>
  );
}


{/* <div className="w-64 h-64 relative mb-16">
          <Image
            className=""
            src="/images/CookieCrumbs.png"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover"
          />
       
        </div> */}