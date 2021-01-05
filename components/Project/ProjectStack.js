import Image from "next/image";

export default function ProjectStack({children, picture, alt}){
    return(
    <div className="mb-16">
         <h3 className="text-3xl mb-8">Stack Explanation</h3>
         <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="ml-4 w-3/4">
            {children}
        </div>
        {/* <div className="w-full h-full    relative"> */}
        <Image
            className=""
            src={picture}
            alt={alt}
            height={400}
            width={400}

          />
        {/* </div> */}
        </div>
    </div>
    )
}