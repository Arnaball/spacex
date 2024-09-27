import { type Doc , type APISpaceXReponse} from '../types/api'

export const getLaunchBy = async ({ id }: { id: string }) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  
    const launch = (await res.json()) as Doc;
  
    console.log(launch);
  
    return launch;
  };
  

export const getLatestLaunches = async () => {
// Api de SpaceX 
const res = await fetch('https://api.spacexdata.com/v5/launches/query' , {
    method: "POST",
    headers: {
        "Content-Type": "applications/json",
    },
    body: JSON.stringify({
        query:{},
        options: {
            sort:{
                date_unix: 'asc'
            },
            limit: 12,
        },
    }),
})

    const {docs: launches} = (await res.json()) as APISpaceXReponse
    return launches 
}