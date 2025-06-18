 
import { useMemo } from "react";
import useData from "./useData";
import type { Genres } from "./useGenres";

export interface Platform {
  id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number; 
  name: string; 
  background_image: string;
  parent_platforms: { platform: Platform}[];  
  metacritic:number;
}

interface useGamesProps {
  selectedGenre?: Genres | null;
  selectedPlatform?: Platform | null;
  sortOrder: string;
  searchText?: string;
}
 

export default function useGames(props:useGamesProps) {

 const requestConfig = useMemo(() => ({    params: { genres: props.selectedGenre?.id, platforms: props.selectedPlatform?.id,ordering: props.sortOrder, search: props.searchText }  }), [props.selectedGenre?.id, props.selectedPlatform?.id, props.sortOrder, props.searchText]);

   return useData<Game>("/games",requestConfig, [props.selectedGenre?.id, props.selectedPlatform?.id, props.sortOrder, props.searchText]); 
}
