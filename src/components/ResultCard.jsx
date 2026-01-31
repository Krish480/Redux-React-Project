import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {
  const videoRf = useRef(null)
  const [play, setPlay] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (item.type !== "video") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true)
        } else {
          setPlay(false);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRf.current) observer.observe(videoRf.current);

    return () => observer.disconnect();
  }, [item.type])

  const addToCollection = (item) => {
    dispatch(addCollection(item))
    dispatch(addToast(item))
    console.log("Item added")
  }

  return (

    <div className=' w-full relative h-96 bg-white rounded-xl overflow-hidden'>
      <a href={item.url} target='_blank' rel='noreferrer'>
        <div className='h-full'>
          {item.type == "photo" ? <img
            loading='lazy'
            key={item.id}
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover object-center rounded"
          /> : ""}

          {item.type == "gif" ? <img
            key={item.id}
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover object-center rounded"
          /> : ""}

          {item.type == "video" ? <video
            ref={videoRf}
            autoPlay={play}
            loop
            muted
            playsInline
            key={item.id}
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover object-center rounded"
          /> : ""}

        </div>
      </a>

      <div className='absolute gap-3 bottom-0 flex justify-between items-center px-4 w-full py-6 bg-gradient-to-t from-black/90 to-transparent'>
        <h2 className='text-lg font-semibold capitalize'>{item.title}</h2>
        <button
          onClick={() => {
            addToCollection(item)
          }}
          className='text-lg bg-blue-600 px-3 py-1 active:scale-90 cursor-pointer rounded'><i class="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  )
}

export default ResultCard