import { configureStore } from "@reduxjs/toolkit";
import productoSeleccionado from "./reducers/productoSeleccionado";
import listadoProductos from "./reducers/listadoProductos";
import homeProductosSubtitulo from "./reducers/homeProductosSubtitulo";
import carritoVisible from "./reducers/carrito/carritoVisible";
import productosCarrito from "./reducers/carrito/productosCarrito";
const store = configureStore({
    reducer: {
      productoSeleccionado,
      listadoProductos,
      homeProductosSubtitulo,
      carritoVisible,
      productosCarrito
    },
  });

  export default store