import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subtitulo: 'Publicaciones destacadas'
}

const deleteObj = {
    subtitulo: ''
}

const homeProductosSubtitulo = createSlice({
    name: "homeProductosSubtitulo",
    initialState,
    reducers: {
      deleteSub: (state,action) => {
        return deleteObj;
      },
      initSub: (state,action) =>{
          return initialState;
      }
    }
})

export const { deleteSub, initSub } = homeProductosSubtitulo.actions;
export default homeProductosSubtitulo.reducer