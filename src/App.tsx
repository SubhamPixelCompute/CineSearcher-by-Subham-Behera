import React from 'react'
import Header from './components/Header/Header'
import MovieCardList from 'components/MovieCardList/MovieCardList'
import HistoryTab from 'components/HistoryTab/HistoryTab'

const App = () => {
  console.log(process.env.REACT_APP_OMDB_API_KEY)
  return (
    <div className='box-border bg-gray-100 overflow-hidden '>
      <Header />
      <div className='flex relative'>
        <MovieCardList />
        <HistoryTab/>
      </div>
    </div>
  )
}

export default App
