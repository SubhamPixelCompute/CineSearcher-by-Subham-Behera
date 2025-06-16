import MovieCard from 'components/MovieCard/MovieCard';
import { fetchMovie } from 'hooks/reactQuery/useFetchMovie';
import { useDebounceValue } from 'hooks/useDebounce.tsx';
import { Error } from 'neetoicons';
import { Spinner, Toastr, Typography } from 'neetoui';
import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query';
import useSearchKey from 'src/store/useSearchKey'
import { shallow } from "zustand/shallow";
const MovieCardList = () => {


  let { searchKey, setSearchKey } = useSearchKey((state) => ({
    searchKey: state.searchKey,
    setSearchKey: state.setSearchKey
  }),shallow)
  const debounceKey = useDebounceValue(searchKey)

  type obj = {
    s: string,
    apikey: string | undefined,
    page:number
  }

  const queryClient = useQueryClient();
  let { data, isLoading, isError, isFetching } = fetchMovie<obj>({
    s: debounceKey.trim(),
    apikey: process.env.REACT_APP_OMDB_API_KEY,
    page:1
  })

  console.log(data)


  if (isLoading || isFetching) {
    return <div className='flex justify-center items-center min-h-screen min-w-full'>
      <Spinner />
      <div className='text-4xl m-2'> Searching...</div>
    </div>
  }

  if (isError) {
    return <Error>something went wrong</Error>
  }

  if (searchKey.trim() === "") {
    return <div className='flex justify-center items-center min-h-screen min-w-full'>
      <Spinner />
      <div className='text-4xl'> Enter Something</div>
    </div>
  }

  if (!Array.isArray(data?.Search)) {
    return <div className='flex justify-center items-center min-h-screen min-w-full'>
      <Spinner />
      <div className='text-4xl'> No Movie Found</div>
    </div>
  }

  return (
    <div className='grid  grid-cols-4 w-full p-5  gap-3 justify-center   border-2 mt-5 min-h-screen'>
      {data?.Search.map((val) => {
        return (
          <MovieCard {...val} key={crypto.randomUUID()} />
        )
      })}
    </div>
  )
}

export default MovieCardList
