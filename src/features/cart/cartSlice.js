import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {product, attributes} = action.payload;
            debugger
            const itemInCart = state.items.find((item) => item.product.id === product.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.items.push({product, attributes, quantity: 1});
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.product.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.product.id === action.payload);
            if (item.quantity === 1) {
                const result = state.items.filter((element) => element.product.id !== action.payload)
                state.items = result
            } else {
                item.quantity--;
            }
        },
    }
})


export const selectCartItems = (state) => state.cart.items

export const selectTotalQuantity = (state) => {
    let total = 0
    state.cart.items.forEach(item => {
        total += item.quantity
    })
    return total
}

export const selectTotalPrice = state => {
    let total = 0;
    state.cart.items.forEach((item) => {
        total += item.product.currentPrice.amount * item.quantity
    })
    return `${state.currencies.currentCurrencySymbol}${total.toFixed(2)}`
}

export const selectTax = state => {
    let tax = 0;
    state.cart.items.forEach((item) => {
        tax += item.product.currentPrice.amount * item.quantity * 0.21
    })
    return `${state.currencies.currentCurrencySymbol}${tax.toFixed(2)}`
}

export const {addToCart, incrementQuantity, decrementQuantity} = cartSlice.actions
export default cartSlice.reducer