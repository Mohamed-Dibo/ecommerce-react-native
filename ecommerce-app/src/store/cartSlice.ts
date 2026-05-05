import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types/cart";

const initialState : { items: CartItem[] } = {
  items: [
    { id: 1, name: "Headphones", price: 299, qty: 1, color: "#D946EF", icon: "🎧" },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existing = state.items.find((i: CartItem) => i.id === item.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i: CartItem) => i.id !== id);
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      
      const item = state.items.find((i: CartItem) => i.id === id);
      if (item) item.qty += 1;
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
    console.log(id)
      const item = state.items.find((i: CartItem) => i.id === id);
      if (item && item.qty > 1) item.qty -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;