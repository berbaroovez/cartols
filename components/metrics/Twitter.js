import { da } from "date-fns/locale";
import useSWR from "swr";
import fetcher from "../../lib/fetcher"


export default function FollowerCard(){

    const {data} = useSWR("/api/twitter-followers", fetcher)

    return(
        <div className="flex items-start border border-gray-300 dark:border-gray-800 rounded-lg w-72 p-2 mb-8">
            <p>
                Pog
            </p>

            {data? <p>Data</p> : <p>No data</p>}
        </div>
    )
}
