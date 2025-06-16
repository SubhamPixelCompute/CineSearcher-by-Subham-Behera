import React from 'react'

const HistoryTab = () => {

  return (
    <div className='w-1/2 h-screen  mt-5 overflow-scroll' >
      {Array.from({length:1000},()=>0).map((val,i) => {
        return <div className='w-full mb-2 bg-blue-500'>
          asdfsdf af sdaf
        </div>
      })}
    </div>
  )
}

export default HistoryTab
