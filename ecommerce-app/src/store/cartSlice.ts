import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types/cart";

const calTotal = (items: CartItem[]) :number => {
 return items.reduce((acc, itm) => acc + itm.price * itm.qty, 0);
};

const initialState: { items: CartItem[]; total: number } = {
  items: [],
  total: 0,
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
      state.total = state.items.reduce(
        (acc, itm) => acc + itm.price * itm.qty,
        0,
      );
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i: CartItem) => i.id !== id);
      state.total = calTotal(state.items)
    },
    increaseQty: (state, action) => {
      const id = action.payload;

      const item = state.items.find((i: CartItem) => i.id === id);
      if (item) item.qty += 1;
      state.total = calTotal(state.items)
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      console.log(id);
      const item = state.items.find((i: CartItem) => i.id === id);
      if (item && item.qty > 1) item.qty -= 1;
      state.total = calTotal(state.items)
    },
    removeAll: (state) => {
      state.items = [];
      state.total = calTotal(state.items)
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  removeAll,
} = cartSlice.actions;
export default cartSlice.reducer;
