import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface obj {
  Title:string,
  imbdID:string
}

interface SaveHistory {
  linkHistory: obj[]|[],
  setSaveHistory: (linkHistoryEle: obj) => void
}


const useSaveHistory = create<SaveHistory>()(
  devtools(
    persist(
      (set) => ({
        linkHistory: [],
        setSaveHistory: (linkHistoryEle: obj) => set((state) => ({ ...state, linkHistoryEle })),
      }),
      { name: 'saveHistoryStore' },
    ),
  ),
)

export default useSaveHistory
