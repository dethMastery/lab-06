import { respClient } from "./interceptor";

interface githubInterface {
  id?: number,
  username?: string,
  name?: string,
  avatar?: string,
  link?: string,
  bio?: string,
  duration?: number
}

respClient.get('dethMastery').then((result: any) => {
  let returnData: githubInterface = {
    id: result.data.id,
    username: result.data.login,
    name: result.data.name,
    avatar: result.data.avatar_url,
    link: result.data.blog,
    bio: result.data.bio,
    duration: result.durationInMs
  }

  console.log("github Info : ", returnData);
  
})