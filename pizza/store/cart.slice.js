import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity:0,
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            console.log(action.payload);
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) => {
            state.products = [];
            state.total = 0;
        }
    }
})

export const { addProducts, reset } = cartSlice.actions

export default cartSlice.reducer;
