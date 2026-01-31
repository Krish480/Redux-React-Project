import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='px-10 py-6 bg-(--c1) flex justify-between'>
            <h2 className='text-2xl font-medium'>Media Search</h2>
            <div className='flex items-center gap-4'>
                <Link className='text-base font-medium bg-(--c3) px-4 py-2 rounded cursor-pointer active:scale-96' to={"/"}>Search</Link>
                <Link className='text-base font-medium bg-(--c3) px-4 py-2 rounded cursor-pointer active:scale-96' to={"/collection"}>Collection</Link>
            </div>
        </div>
    )
}

export default Navbar