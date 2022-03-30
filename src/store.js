import { configureStore } from "@reduxjs/toolkit";
import productoSeleccionado from "./reducers/productoSeleccionado";
import listadoProductos from "./reducers/listadoProductos";
import carritoVisible from "./reducers/carrito/carritoVisible";
import productosCarrito from "./reducers/carrito/productosCarrito";
const store = configureStore({
    reducer: {
      productoSeleccionado,
      listadoProductos,
      carritoVisible,
      productosCarrito
    },
  });

  export default store