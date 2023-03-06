import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  itemsInCart: 0,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
      console.log('hi');
      state.itemsInCart = state.items.length;
    },
    removeItem: (state, action) => {
      const { payload } = action;
      const alreadyInCart = state.items.find((item) => item.id === payload);
      if (alreadyInCart) {
        alreadyInCart.quantity -= 1;
      }
      if (alreadyInCart.quantity == 0)
        state.items = state.items.filter((item) => item.id !== payload);
      state.itemsInCart -= 1;
    },
    addToCart: (state, action) => {
      const { payload } = action;
      const cartItems = state.items.find((item) => item.id === payload.id);
      cartItems
        ? cartItems.quantity++
        : state.items.push({ ...action.payload, quantity: 1 });
      state.itemsInCart += 1;
    },
  },
});

export const { clearCart, removeItem, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
