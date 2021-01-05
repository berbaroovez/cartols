

 export default function ProjectLessons({children}){
    return(

        <div className="mb-16 text-right relative">
        <h3 className="text-3xl mb-8 text-right">Lessons</h3>
    <div className="w-3/4 mb-16 ml-auto ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute left-0 h-32 w-32">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
</svg>
    {children}
    </div>
        </div>
    )
}