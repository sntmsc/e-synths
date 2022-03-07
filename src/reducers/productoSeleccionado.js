import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoria: "",
    created_at: "",
    descripcion: "",
    destacado: false,
    id: 0,
    img: "",
    precio: 0,
    producto: ""
}
const productoSeleccionado = createSlice({
    name: "productoSeleccionado",
    initialState,
    reducers: {
      selectProduct: (state,action) => {
        return action.payload;
      },
      deselectProduct: () => {
        return initialState;
      },
    }
})

export const { selectProduct, deselectProduct } = productoSeleccionado.actions;
export default productoSeleccionado.reducer