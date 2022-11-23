import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import client from "../../apollo";
import {getCurrencies} from "../../apollo/queries";

const initialState = {
    items: [],
    currentCurrencySymbol: ''
}
const currenciesSlice = createSlice({
    name: "currencies",
    initialState,
    reducers: {
        setCurrentCurrency: (state, action) => {
            state.currentCurrencySymbol = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrencies.fulfilled, (state, action) => {
                state.currentCurrencySymbol = action.payload[0].symbol
                state.items = action.payload
            })
    }

})

export const fetchCurrencies = createAsyncThunk("currencies/fetchCurrencies", async () => {
    const {data} = await client.query({query: getCurrencies})
    return data.currencies
})

export const selectCurrencies = (state) => {
    return state.currencies.items
}

export const selectCurrentCurrencySymbol = state => state.currencies.currentCurrencySymbol

export const {setCurrentCurrency} = currenciesSlice.actions
export default currenciesSlice.reducer