import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";



interface FavoritesState {
  items: Product[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find(
        item => item.id === action.payload.id
      );

      if (exists) {
        state.items = state.items.filter(
          item => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;