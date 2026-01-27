import React from 'react'

const ResultCard = ({ item }) => {
  return (
    <div>
      {item.type == "photo" ? <img
        key={item.id}
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-70 object-cover rounded-lg"
      /> : ""}

      {item.type == "gif" ? <img
        key={item.id}
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-64 object-cover rounded-lg"
      /> : ""}

      {item.type == "video" ? <video 
          autoPlay 
          loop
          muted
          key={item.id}
          src={item.src}
          alt={item.title}
          className="w-full h-64 object-cover rounded-lg"
        /> : ""}

    </div>
  )
}

export default ResultCard