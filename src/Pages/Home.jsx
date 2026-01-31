import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResusltGrid from '../components/ResusltGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {

    const { query } = useSelector((store) => store.search)

    return (
        <div>
            <SearchBar />
            {query != '' ? <div><Tabs />
                <ResusltGrid />
            </div> :
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <p className="text-lg font-medium">Start typing to search 🔍</p>
                    <p className="text-sm">Photos, Videos & GIFs</p>
                </div>}

        </div>
    )
}

export default Home