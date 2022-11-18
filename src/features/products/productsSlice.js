import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import client from "../../apollo";
import {getAllCategoriesWithProducts, getProductByIdQuery} from "../../apollo/queries";
import {selectCurrentCurrencySymbol} from "../currencies/currenciesSlice";

const initialState = {
    items: [],
    isLoading: false,
    selectedProduct: null,
    attributes: {},
    currentImageIndex: 0
};


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAttributes: (state, action) => {
            state.attributes[action.payload.name] = action.payload.value;
        },
        setCurrentImageIndex: (state, action) => {
            state.currentImageIndex = action.payload.index
        }


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.items = action.payload
                state.isLoading = false
            })
            .addCase(fetchData.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(getProductById.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.attributes = {}
                state.selectedProduct = action.payload;
                state.currentImageIndex = 0
                state.isLoading = false
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.isLoading = false
            })

    }
})


export const fetchData = createAsyncThunk("products/fetchData", async () => {
    const {data} = await client.query({query: getAllCategoriesWithProducts})
    return data.categories
})

export const getProductById = createAsyncThunk("products/getProductsById", async (id) => {
    const {data: {product}} = await client.query({query: getProductByIdQuery, variables: {id}})
    return product
})

export const selectProducts = (state) => {
    const filteredCategories = state.products.items.filter((category) => category.name === state.categories.activeCategory)
    const categoriesWithProducts = filteredCategories.map((category) => {
        const products = category.products.map(product => {
            const currentPrice = product.prices.find(element => element.currency.symbol === selectCurrentCurrencySymbol(state))
            return {...product, currentPrice}
        })
        const name = `${category.name[0].toUpperCase()}${category.name.substring(1)}`
        return {...category, name, products}
    })
    return categoriesWithProducts
}


export const selectProductById = state => {
    const currentProduct = state.products.selectedProduct
    if (currentProduct === null) {
        return currentProduct
    } else {
        const currentPrice = currentProduct.prices.find(element => element.currency.symbol === selectCurrentCurrencySymbol(state))
        return {...currentProduct, currentPrice}
    }

}

export const selectCurrentAttributes = state => state.products.attributes;
export const selectIsProductLoading = state => state.products.isLoading;

export const selectCurrentImageIndex = state => state.products.currentImageIndex

export const {setAttributes, setCurrentImageIndex} = productsSlice.actions


export default productsSlice.reducer;

