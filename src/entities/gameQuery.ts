export default interface GameQuery{
    genreId?: string,
    genreName?: string,
    platformId?: string,
    platformName?:string,
    ordering?: string,
    search?:string,
    resultsNo: number
}