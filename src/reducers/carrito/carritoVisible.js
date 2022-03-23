import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false
}


const carritoVisible = createSlice({
    name: "homeProductosSubtitulo",
    initialState,
    reducers: {
      toggleCarrito: (state,action) => {
        return !state;
      },
    }
})

export const { toggleCarrito } = carritoVisible.actions;
export default carritoVisible.reducer