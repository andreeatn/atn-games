export default interface Creator{
    id: number,
    slug: string,
    name: string,
    image: string,
    games:{id: number; name: string}[]
    positions:{id: number; name: string}[]
}

export interface CreatorDetailsType{
    id: number,
    slug: string,
    description: string,
    rating: string,
    reviews_count: number,
    ratings:{
        id: number;
        title: string;
        count: number;
        percent: number;
    }[]
}