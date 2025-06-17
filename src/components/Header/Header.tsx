import { Input } from '@bigbinary/neetoui'
import { Search } from "@bigbinary/neeto-icons";
import React from 'react'
import useSearchKey from "../../store/useSearchKey";

const Header = () => {

  const { searchKey, setSearchKey } = useSearchKey((state) => ({
    searchKey: state.searchKey,
    setSearchKey: state.setSearchKey
  }))

  return (
    <div className=' p-10 w-full flex pb-0' >
      <Search />
      <Input
        name='movieName'
        unlimitedChars={true}
        placeholder='Enter Movie Name'
        onChange={(e) => setSearchKey(e.target.value)}
        value={searchKey}
      />
    </div>
  )
}

export default Header

