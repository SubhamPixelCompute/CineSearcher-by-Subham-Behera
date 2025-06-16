import React from 'react'
import Header from './components/Header/Header'
import MovieCard from 'components/MovieCard/MovieCard'
import MovieCardList from 'components/MovieCardList/MovieCardList'
import HistoryTab from 'components/HistoryTab/HistoryTab'

const App = () => {
  console.log(process.env.REACT_APP_OMDB_API_KEY)
  return (
    <div className='box-border bg-gray-100'>
      <Header />
      <div className='flex'>
        <MovieCardList />
        <HistoryTab/>
      </div>
    </div>
  )
}

export default App
