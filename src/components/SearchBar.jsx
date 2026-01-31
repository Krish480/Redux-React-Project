import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    console.log("Form submitted..!")
    console.log(text)
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
      <form onSubmit={submitHandler} className='flex px-14 py-10 bg-(--c2) gap-5' >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          type="text"
          placeholder='Search annything...'
          className='w-full px-6 py-2 outline-none border border-(--c3) rounded '
        />
        <button className='px-6 active:scale-96 py-2 outline-none cursor-pointer border border-(--c3) bg-(--c4) text-gray-700 rounded '>Submit</button>
      </form>
    </div>
  )
}

export default SearchBar