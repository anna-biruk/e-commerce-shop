import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import client from "../../apollo";
import {getCategoriesName} from "../../apollo/queries";

const initialState = {
    categories: [],
    activeCategory: "all",
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
    }

})

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const {data} = await client.query({query: getCategoriesName})
    return data.categories
})

export const {setActiveCategory,} = categoriesSlice.actions

export const selectCategories = (state) => state.categories.categories

export const selectActiveCategory = (state) => state.categories.activeCategory


export default categoriesSlice.reducer