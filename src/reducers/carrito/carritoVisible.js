import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false
}


const carritoVisible = createSlice({
    name: "carritoVisible",
    initialState,
    reducers: {
      toggleCarrito: (state,action) => {
        const isVisible = state.visible;
        state.visible = !isVisible; 
      },
    }
})

export const { toggleCarrito } = carritoVisible.actions;
export default carritoVisible.reducer