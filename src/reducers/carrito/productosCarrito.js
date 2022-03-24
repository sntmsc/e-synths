import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productos: []
};

const productosCarrito = createSlice({
    name: "productosCarrito",
    initialState,
    reducers: {
      agregarProducto: (state,action) => {
        state.productos.push(action.payload)
      },
      eliminarProducto: (state,action) => {
        const productosFiltrados = state.productos.filter(x=>x.id !== action.payload);
        state.productos = productosFiltrados;
      },
    }
})

export const { agregarProducto, eliminarProducto } = productosCarrito.actions;
export default productosCarrito.reducer