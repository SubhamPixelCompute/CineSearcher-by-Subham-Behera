import useAxios from "../hooks/useAxios";

const movie = () => {
  const api = useAxios()

  const fetchMovie =<T extends paramsType> (params: paramsType): Promise<MovieResponse<T>> => {
    return api.get<MovieResponse<T>,any>("", {
      params
    })
  }

  

  return fetchMovie
}

export default movie


