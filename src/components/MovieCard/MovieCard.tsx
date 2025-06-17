import { AddCircle, CheckCircle, IndeterminateCircle, UserCircle } from 'neetoicons'
import { Button, Typography } from 'neetoui'
import React, { FC, useState } from 'react'
import useSaveHistory from 'src/store/useSaveHistory'
import { shallow } from 'zustand/shallow'
import { Modal } from "@bigbinary/neetoui";

const MovieCard: React.FC<MoviereponseTitle> = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster
}) => {

  const { linkHistory, setSaveHistory } = useSaveHistory((state) => ({
    ...state
  }), shallow)
  const [isModalOpen,setIsModalOpen] = useState<boolean>(false)

  return (
    <div
      className=" bg-white neeto-ui-rounded-xl flex w-full flex-col items-center justify-evenly justify-self-center border p-4  h-full"
    >
      <img alt={Title} className="h-4/6 w-3/4" src={Poster} />
      <div className='flex flex-col justify-center items-start w-full mt-3' >
        <Typography className="text-left text-sm" weight="semibold">
          {Title}
        </Typography>
        <Typography>{Type} &#9679; {Year}</Typography>
      </div>
      <Button
        type='button'

        onClick={(e) => {
          console.log(imdbID, Title, e.target)
          setIsModalOpen(true)
          setSaveHistory({
            Title,
            imdbID
          })
        }} className='m-1 bg-white text-blue-600 focus:text-blue-600'>View Details</Button>
      <Modal isOpen={isModalOpen} closeButton={true} className='h-1/2 w-1/5 p-5'>
        <h1 className='text-xl font-bold'>{Title}</h1>
      </Modal>
    </div>
  )
}

export default MovieCard
