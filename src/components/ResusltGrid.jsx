import React, { useEffect } from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setResults, setLoading, setError } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import MediaSkeleton from './MediaSkeleton'
import ResultCard from './ResultCard'

const ResusltGrid = () => {

  const { query, loading, error, activeTab, results } = useSelector((store) => store.search)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!query) return
    const getData = async () => {
      try {
        dispatch(setLoading())
        let data = []
        if (activeTab === 'photos') {
          let response = await fetchPhotos(query)
          // Normalization
          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html
          }))
        }
        else if (activeTab === 'videos') {
          let response = await fetchVideos(query)
          console.log(response.videos)
          // Normalization
          data = response.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url
          }))
        }
        else if (activeTab === "GIFs") {
          let response = await fetchGIF(query)
          
          // Normalization
          data = response.data.data.map((item) => ({
            id: item.id,
            type: 'gif',
            title: item.title || 'GIF',
            thumbnail: item.images.fixed_height.url,
            src: item.images.original.url,
            url: item.url
          }))
        }
        dispatch(setResults(data))
        console.log(data)
      } catch (error) {
        dispatch(setError(error.message))
      }
    }
    getData()
  }, [query, activeTab])

  if (error) return <h1 className='text-red-400 text-lg flex mt-10 justify-center'>Something went wrong..!</h1>
  if (!query) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <p className="text-lg font-medium">Start typing to search 🔍</p>
        <p className="text-sm">Photos, Videos & GIFs</p>
      </div>
    )
  }
  if (loading) {
    return (
      <MediaSkeleton />
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {results.map((item, idx) => {
        return <div key={idx}>
          <ResultCard item={item} />
        </div>
      })}
    </div>
  )

}

export default ResusltGrid