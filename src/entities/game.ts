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

export interface GameScreenshots{
    id: number,
    image:string
}
export interface GameMovies{
    id: number,
    name:string,
    preview: string,
    data:{
        480: string,
        max:string
    }
}

export interface GameDetails{
    id: number,
    slug: string,
    name: string,
    description: string,
    esrb_rating:{id: number,slug:string, name: string},
    genres: {id: number, slug: string, name: string}[],
    background_image: string,
    parent_platforms:{platform:{id: number, slug: string, name: string}}[],
    playtime: number,
    publishers:{id: number, slug: string, name: string}[],
    rating:number,
    ratings:{id: number, title: string, percent:number }[],
    ratings_count: number,
    website: string,
}