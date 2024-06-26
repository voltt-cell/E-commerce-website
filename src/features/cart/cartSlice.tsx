'use client'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state:any, action:any) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item:any) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
