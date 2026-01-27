import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
  const tabs = ["photos", "videos", "GIFs"]

  const dispatch = useDispatch()

  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className='flex gap-10 px-6 py-4'>
      {tabs.map(function (elem, idx) {
        return (
          <button key={idx} className={`${activeTab == elem ? 'bg-blue-600' : 'bg-gray-400'} px-3 py-2 rounded uppercase active:scale-98 transition-all`}
          onClick={() => {
            dispatch(setActiveTabs(elem))
          }}
          >
            {elem}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs