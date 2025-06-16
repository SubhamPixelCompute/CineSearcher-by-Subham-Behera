import React, { useEffect } from 'react'
import useSaveHistory from 'src/store/useSaveHistory'

const HistoryTab = () => {
  const { linkHistory, highlightedLink: { imdbID: HimdbID, Title: HTitle } } = useSaveHistory((state) => ({ ...state }))


  return (
    <div className='w-1/2 h-20  mt-5 overflow-scroll' >
      {linkHistory.map(({ Title, imdbID }) => {
        return <div className={`w-full text-white ${imdbID === HimdbID ? `bg-blue-600` :`bg-blue-200`}`} key={imdbID}>
          {Title}
        </div>
      })}
    </div>
  )
}

export default HistoryTab
