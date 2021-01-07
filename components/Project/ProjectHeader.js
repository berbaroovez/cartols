import Image from "next/image";

export default function ProjectHeader({title, description, children, picture, alt}){
    return(
        <div className="mb-16 text-white">
       
            <h1 className="text-4xl mb-8">{title}</h1>
           
      
        <div className="text-gray-300 sm:w-3/4 leading-8 ml-4 mb-16">
        {children}
        </div>
        {/* <div className="w-full h-64 relative"> */}
        <Image
            className=""
            src={picture}
            alt={alt}
            width={2000}
            height={700}
          />
        {/* </div> */}
        </div>
    )
}