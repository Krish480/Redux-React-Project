import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from "react-toastify"

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            );

            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem("collection", JSON.stringify(state.items));
            }
            console.log("Haha")
        },

        removeColletion: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },

        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addToast: (state) => {
            toast.success('Item added ✅!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        },

        removeToast: () => {
            toast.error('Removed from Collection...', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
})

export const { addCollection, removeColletion, clearCollection, addToast } = collectionSlice.actions;
export default collectionSlice.reducer