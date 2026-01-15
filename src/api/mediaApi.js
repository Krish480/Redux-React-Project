import axios from "axios";
import axiox from "axios";

const UNPLASH_API_KEY = import.meta.env.VITE_UNPLASH_KEY
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_KEY
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_KEY

export const fetchPhotos = async (query, page = 1, per_page = 10) => {
    let response = await axiox.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page },
        headers: { Authorization: `Client-ID ${UNPLASH_API_KEY}` }
    })
    return response.data
}

export const fetchVideos = async (query, page = 1, per_page = 10) => {
    let response = await axios.get('https://api.pexels.com/videos/search', {
        params: { query, page, per_page },
        headers: { Authorization: PEXELS_API_KEY }
    })

    return response.data
}

export const fetchGIF = async (query, limit = 10) => {
    const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
        params: {
            q: query,
            api_key: GIPHY_API_KEY,
            limit,
        }
    })

    return response
}