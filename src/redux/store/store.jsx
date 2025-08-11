import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../cartSlice/cart.jsx'




export const store = configureStore({

    reducer: {
        cart:cartReducer,
        
    
    }
})



