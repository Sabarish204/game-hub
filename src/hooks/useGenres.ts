 
 

import  genres from "../data/genres";

export interface Genres {
  id: number; 
  name: string;    
  image_background: string;
} 

export default function useGeners() {
 

return {data:genres, error: null, isLoading: false};  
}
