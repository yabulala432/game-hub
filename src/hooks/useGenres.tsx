import useData from "./useData";

export interface Genres{
    id: number;
    image_background: string;
    name: string;
}


const useGenres = () => useData<Genres>('/genres');
export default useGenres

