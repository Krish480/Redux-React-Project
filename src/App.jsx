import React from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <h1>Hello</h1>
      <button className='bg-orange-400 m-5 px-2 py-2 rounded' onClick={ async () => {
        const photos = await fetchPhotos('cat')
        console.log(photos.results);
        
      }}>Get Photos</button>
      <button className='bg-orange-400 m-5 px-2 py-2 rounded' onClick={async () => {
        const videos = await fetchVideos('dog')
        console.log(videos.videos);
      }}>Get Videos</button>

      <button className='bg-orange-400 m-5 px-2 py-2 rounded' onClick={ async () => {
        const giphy = await fetchGIF('cat')
        console.log(giphy.data.data);
      }} >Get Giphy</button>
    </div>
  )
}

export default App