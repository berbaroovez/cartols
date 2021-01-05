

 export default function ProjectProblems({children}){
        return(

            <div className="mb-16 text-center">
            <h3 className="text-3xl mb-8">Problems and Solutions</h3>
        <div className="w-3/4 mb-16 mx-auto">
        {children}
        </div>
            </div>
        )
}