import { configureStore } from '@reduxjs/toolkit';
import cart from './cart.slice';


const Store = configureStore({
    reducer: {
        cart:cart,   
    }
});

export default Store;