import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({

    name:"cart",
    initialState:{
        items: [],
        totalPrice: 0
    },
    reducers:{
      
            addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.items.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                existingProduct.quantity += 1; // quantity badhao
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
          removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

          incrementQuantity: (state, action) => {
            const product = state.items.find(item => item.id === action.payload);
            if (product) product.quantity += 1;
        },

           decrementQuantity: (state, action) => {
            const product = state.items.find(item => item.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        }

      

        
    }


})

export const selectCartItems = (state)=> state.cart.items
export const selectcartTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);


export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer