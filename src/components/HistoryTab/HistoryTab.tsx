import { Button } from 'neetoui'
import React, { useEffect, useRef } from 'react'
import useSaveHistory from 'src/store/useSaveHistory'

const HistoryTab = () => {
  const { linkHistory, highlightedLink: { imdbID: HimdbID, Title: HTitle } } = useSaveHistory((state) => ({ ...state }))
  const itemsRefs = useRef<Map<string, HTMLDivElement | null>>(new Map())

  // useEffect(() => {
  //   const arr = linkHistory.map(val => val.imdbID)
  //   itemsRefs.current = new Set(arr)
  // },[linkHistory.length])

  const scrollToSection = (id: string) => {
    const element = itemsRefs.current.get(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  useEffect(() => {
    scrollToSection(HimdbID)
  }, [HimdbID])

  return (
    <>
      <div className='text-center text-2xl font-bold w-1/3 mt-5'>View History</div>
      <div className='w-1/3 top-16  overflow-scroll  flex flex-col absolute right-0 pt-5 h-2/5 overflow-x-hidden gap-2 no-scrollbar ' >

        {linkHistory.map(({ Title, imdbID }) => {
          return <Button className={`w-full text-white   ${imdbID === HimdbID ? `bg-blue-600` : `bg-blue-200`}  `}
            key={imdbID}
            ref={(el) => itemsRefs.current.set(imdbID, el)}
          >
            {Title}
          </Button>
        })}
      </div>
    </>
  )
}

export default HistoryTab
