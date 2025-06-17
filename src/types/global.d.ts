
export { };
declare global {
  type paramsType =
    | { i: string; s?: null | undefined; apikey: string | undefined }
    | { i?: null | undefined; s: string; apikey: string | undefined; page?:number };


  type MoviereponseTitle = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
  }

  type MovieresponseId = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    imdbRating: string,
    Genre:string,
    [key: string]: string;
  }
  type MovieResponse<P extends paramsType> = P['s'] extends string ? { Search: MoviereponseTitle[], totalResults:Number,Response:"True"|"False" } : MovieresponseId;

  interface Window {
    gtag: (...args: any[]) => void;
  }
}

