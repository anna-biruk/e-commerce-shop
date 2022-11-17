import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import categoriesReducer from '../features/categories/categoriesSlice'
import currenciesReducer from '../features/currencies/currenciesSlice'
import cartSlice from '../features/cart/cartSlice'

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    currencies: currenciesReducer,
    cart: cartSlice
})
export const store = configureStore({reducer: rootReducer});
