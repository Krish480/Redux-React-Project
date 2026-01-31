import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CollectionPage from './Pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-(--c3) text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App