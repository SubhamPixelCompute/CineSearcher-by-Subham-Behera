import { Typography } from 'neetoui'
import React, { FC } from 'react'


const MovieCard: React.FC<MoviereponseTitle> = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster
}) => {
  return (
    <div
      className=" bg-white neeto-ui-rounded-xl flex w-full flex-col items-center justify-self-center border p-4  h-full"
    >
      <img alt={Title} className="h-3/4 w-3/4" src={Poster} />
      <div className='flex flex-col justify-center items-start w-full' >
        <Typography className="text-center" weight="semibold">
          {Title}
        </Typography>
        <Typography>Movie {Year}</Typography>
      </div>
    </div>
  )
}

export default MovieCard
