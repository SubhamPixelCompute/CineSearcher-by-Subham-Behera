import { useQuery } from "react-query";
import movie from "../../api/movie";

const fetchMovie = <T extends paramsType,>(params: T) => {
  const queryKey = Boolean(params?.i)
    ? { i: params.i  }
    : { s: params.s  }

  const fetchMovieApi = movie()

  const res = useQuery<MovieResponse<T>,Error>({
    queryKey:["movie",queryKey],
    queryFn:() => fetchMovieApi<T>(params),
    enabled:(params.i!==null) || (params.s!==null),
  })

  return res
}

export {
  fetchMovie
}
