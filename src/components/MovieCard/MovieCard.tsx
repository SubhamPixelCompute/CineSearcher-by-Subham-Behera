import { AddCircle, CheckCircle, IndeterminateCircle, Rating, UserCircle } from 'neetoicons'
import { Button, Spinner, Typography } from 'neetoui'
import React, { FC, useState } from 'react'
import useSaveHistory from 'src/store/useSaveHistory'
import { shallow } from 'zustand/shallow'
import { Modal } from "@bigbinary/neetoui";
import { fetchMovie } from 'hooks/reactQuery/useFetchMovie'

type obj = {
  i: string,
  apikey: string | undefined
}

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

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [ResquestData, setData] = useState<obj>({
    i: "",
    apikey: process.env.REACT_APP_OMDB_API_KEY
  })

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const { data, isError, isFetching, isLoading, isFetched } = fetchMovie<obj>(ResquestData)

  const {
    Writer = "",
    Actors = "",
    Plot = "",
    Language = "",
    imdbRating = "",
    Genre = "",
    RunTime = "" } = data || {}
  if (isFetched) {
    if (ResquestData.i !== "") {
      console.log(data)
    }
  }
  const fetchData = (_imdbID: string) => {
    setData({
      i: _imdbID,
      apikey: process.env.REACT_APP_OMDB_API_KEY,
    })
  }

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
          fetchData(imdbID)
          setIsModalOpen(true)
          setSaveHistory({
            Title,
            imdbID
          })
        }} className='m-1 bg-white text-blue-600 focus:text-blue-600'>View Details</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} className='p-5'>
        {isFetching && <Spinner/>}
        {!isFetching &&
          <>
            <h1 className='text-xl font-bold'>{Title}</h1>
            <h1 className='text-sm '>{Genre.split(",").map((val) => {
              return <span className="bg-gray-400  text-gray-800 text-xs font-medium m-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">{val}</span>
            })}</h1>
            <div className='flex flex-row '>
              <div className='flex-1 mt-4'>
                <img src={Poster} className='w-full h-full' />
              </div>
              <div className='flex-1 m-5'>
                <p>{Plot}</p>
                <div><span className='font-bold'>Director</span> {Writer}</div>
                <div><span className='font-bold'>Actors</span> {Actors}</div>
                <div><span className='font-bold'>Box Office</span> {Actors}</div>
                <div><span className='font-bold'>Run Time</span> {RunTime}</div>
                <div><span className='font-bold'>Language</span> {Language}</div>
                <div><span className='font-bold'>Rating</span> {imdbRating}</div>
              </div>

            </div>
          </>
        }
      </Modal>
    </div>
  )
}

export default MovieCard
