import genres from "../data/genres";

export interface Genres{
    id: number;
    image_background: string;
    name: string;
}


const useGenres =()=> ({data:genres,loading:false,error:null});
export default useGenres

