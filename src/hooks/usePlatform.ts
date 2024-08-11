import useData from "./useData";

interface Platform{
    name: string,
    id: number;
    slug: string;
}

export const usePlatform =() => useData<Platform>('/platforms/lists/parents');