import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
const store = configureStore({
  reducer: {
    // reducers here
    cart: cartReducer,
  },
});

export default store;
