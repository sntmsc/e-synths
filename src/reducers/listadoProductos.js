import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getAll = createAsyncThunk("products/getAll", ()=>{
   return axios.get('https://yosoohtkackqwpmtagee.supabase.co/rest/v1/productos?select=*', {
        headers:{
            'apikey': process.env.REACT_APP_API_KEY}
        }).then(response =>response.data).catch(error=> {throw Error(error)});
});

const initialState = {
    loading: false,
    error: null,
    data:[]
}

const listadoProductos = createSlice({
    name: "listadoProductos",
    initialState,
    extraReducers: {
        [getAll.pending]: (state) => {
            state.loading = true;
            state.error = null;
          },
          [getAll.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
          },
          [getAll.rejected]: (state, action) => {
              state.loading = false;
              state.error = action.error.message;
          },
    }
})

export default listadoProductos.reducer