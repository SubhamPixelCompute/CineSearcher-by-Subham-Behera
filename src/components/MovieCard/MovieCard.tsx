import { AddCircle, CheckCircle, IndeterminateCircle, UserCircle } from 'neetoicons'
import { Button, Typography } from 'neetoui'
import React, { FC } from 'react'
import useSaveHistory from 'src/store/useSaveHistory'
import { shallow } from 'zustand/shallow'


const MovieCard: React.FC<MoviereponseTitle> = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster
}) => {

  const {linkHistory,setSaveHistory} = useSaveHistory((state) => ({
    ...state
  }),shallow)


  return (
    <div
      className=" bg-white neeto-ui-rounded-xl flex w-full flex-col items-center justify-self-center border p-4  h-full"
    >
      <img alt={Title} className="h-3/4 w-3/4" src={Poster} />
      <div className='flex flex-col justify-center items-start w-full' >
        <Typography className="text-center" weight="semibold">
          {Title}
        </Typography>
        <Typography>{Type} &#9679; {Year}</Typography>
      </div>
      <Button onClick={(e) => {
        console.log(imdbID,Title,e.target)
        setSaveHistory({
          Title,
          imdbID
        })
      }} className='m-1'>View Details</Button>
    </div>
  )
}

export default MovieCard
