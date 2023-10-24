export default interface Publisher{
    id: number,
    slug: string,
    name: string,
    image_background: string,
    games_count: number,
    games:{id: number, name: string}[]
}

export interface PublisherDetailsType{
    id: number,
    slug: string,
    description: string
}