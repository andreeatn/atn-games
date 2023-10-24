export default interface Store{
    id: number,
    slug: string,
    name: string,
    domain: string,
    image_background:string
}

export interface StoreDetails{
    id: number,
    slug: string,
    games_count: number,
    description: string
}