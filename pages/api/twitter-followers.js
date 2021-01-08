
import {getFollowers} from "../../lib/twitter"

export default async (_, res) =>{

    const response = await getFollowers();
    
    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ hasFollowers: false });
      }
    
      followersList = response.json()
    console.log(followersList)
}