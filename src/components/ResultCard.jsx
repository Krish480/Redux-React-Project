import React, { useEffect, useRef, useState } from 'react'

const ResultCard = ({ item }) => {
  const videoRf = useRef(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if(item.type !== "video") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setPlay(true)
        } else {
          setPlay(false);
        }
      },
      {threshold: 0.5}
    );

    if(videoRf.current) observer.observe(videoRf.current);

    return () => observer.disconnect();
  },[item.type])

  return (

    <div className=' w-full relative h-80 bg-white rounded'>
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
            autoPlay = {play}
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

      <div id='title' className='absolute bottom-0 flex justify-between items-center p-4 w-full px-6 py-10'>
        <h2 className='text-lg font-semibold capitalize'>{item.title}</h2>
        <button className='text-lg bg-blue-600 px-3 py-2 cursor-pointer rounded'><i class="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  )
}

export default ResultCard