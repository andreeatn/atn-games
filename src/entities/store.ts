export default interface Store{
    id: number,
    slug: string,
    name: string,
    domain: string,
    image_background:string
}

export interface StoreDetailsType{
    id: number,
    slug: string,
    games_count: number,
    description: string
}