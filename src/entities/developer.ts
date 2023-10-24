export default interface Developer{
    id: number,
    slug: string,
    name: string,
    image_background: string,
    games:{id: number; name: string}[]
}