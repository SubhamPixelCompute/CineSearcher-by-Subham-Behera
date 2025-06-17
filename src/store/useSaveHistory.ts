import { useRef } from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface obj {
  Title: string,
  imdbID: string
}

interface SaveHistory {
  highlightedLink: obj,
  linkHistory: obj[],
  setSaveHistory: (linkHistoryEle: obj) => void
}


const useSaveHistory = create<SaveHistory>()(
  devtools(
    persist(
      (set) => ({
        highlightedLink: { Title: "", imdbID: "" },
        linkHistory: [],
        setSaveHistory: (linkHistoryEle: obj) => set((state) => {
          let found = false
          state.linkHistory.forEach((val) => {
            if (val.imdbID === linkHistoryEle.imdbID) {
              found = true
            }
          })
          
          let newLinkHistory = state.linkHistory;
          if (!found) {
            newLinkHistory = [...state.linkHistory, linkHistoryEle];
          }

          return {
            ...state,
            highlightedLink: linkHistoryEle,
            linkHistory: newLinkHistory,
          }
        }),
      }),
      { name: 'saveHistoryStore' },
    ),
  ),
)

export default useSaveHistory
