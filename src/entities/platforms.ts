export default interface Platform{
    id: number,
    slug: string,
    name: string,
    image_background: string,
    games_count: number,
    games:{id: number, slug:string, name: string, added: number}[]
}

export interface PlatformDetailsType{
    id: number,
    slug: string,
    description: string
}