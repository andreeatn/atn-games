export default interface Game{
    id: number,
    slug: string,
    name: string,
    background_image: string,
    rating: number,
    parent_platforms:{
        id: number,
        slug: string,
        name: string
    }[],
    platforms:{
        platform:{
            id: number,
            slug: string,
            name: string
        }
    }[]
}