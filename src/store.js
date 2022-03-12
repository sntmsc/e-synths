import { configureStore } from "@reduxjs/toolkit";
import productoSeleccionado from "./reducers/productoSeleccionado";
import listadoProductos from "./reducers/listadoProductos";
import homeProductosSubtitulo from "./reducers/homeProductosSubtitulo";

const store = configureStore({
    reducer: {
      productoSeleccionado,
      listadoProductos,
      homeProductosSubtitulo
    },
  });

  export default store