import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import productSlice from "./productSlice"

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartSlice, // Set the cartSlice reducer under the "cart" key in the store's state
    products: productSlice, // Set the productSlice reducer under the "products" key in the store's state
  },
})

export default store
