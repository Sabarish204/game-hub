 


import  platforms from "../data/platforms"

export interface Platform {
  id: number; 
  name: string;    
  slug: string;
} 

export default function usePlatforms() {
// return useData<Platform>("/platforms/lists/parents"); 

  // const { data: platforms, error } = usePlatforms();

  return {data:platforms};
}
