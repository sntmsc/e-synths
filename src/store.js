import { configureStore } from "@reduxjs/toolkit";
import productoSeleccionado from "./reducers/productoSeleccionado";
import listadoProductos from "./reducers/listadoProductos";

const store = configureStore({
    reducer: {
      productoSeleccionado,
      listadoProductos
    },
  });

  export default store