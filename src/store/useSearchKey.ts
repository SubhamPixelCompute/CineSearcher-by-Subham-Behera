import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SearchKey {
  searchKey: string,
  setSearchKey: (searchKey: string) => void
}

const useSearchKey = create<SearchKey>()(
  devtools(
    persist(
      (set) => ({
        searchKey: "",
        setSearchKey: (key: string) => set((state) => ({ ...state, searchKey: key })),
      }),
      { name: 'searchKeyStore' },
    ),
  ),
)

export default useSearchKey
