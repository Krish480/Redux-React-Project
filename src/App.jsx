import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResusltGrid from './components/ResusltGrid'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <SearchBar />
      <Tabs />
      <ResusltGrid/>
    </div>
  )
}

export default App