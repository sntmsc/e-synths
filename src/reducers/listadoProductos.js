import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../client";

export const getCategory = createAsyncThunk("products/getCategory", async(categoria)=>{
    let { data: productos, error } = await supabase
    .from('productos')
    .select('*')
    .ilike('categoria', categoria)
    if(!error){
        return productos
    }
    else{
        throw Error(error.message);
        }
    }
);

export const getSubcategories = createAsyncThunk("products/getSubcategories", async(array)=>{
    const [categoria, subcategorias] = array;
    let { data: productos, error } = await supabase
    .from('productos')
    .select('*')
    .ilike('categoria', categoria)
    .textSearch('tag', `${subcategorias.join(' or ')}`, {
        type: 'websearch',
    })
    if(!error){
        return productos
    }
    else{
        throw Error(error.message);
        }
    }
);

export const getDestacados = createAsyncThunk("products/getDestacados", async()=>{
    let { data: productos, error } = await supabase
    .from('productos')
    .select('*')
    .eq('destacado', 'true')
    if(!error){
        return productos
    }
    else{
        throw Error(error.message);
        }
    }
);

export const getBusqueda = createAsyncThunk("products/getBusqueda", async(busqueda)=>{
    let { data: productos, error } = await supabase
    .from('productos')
    .select('*')
    .textSearch('producto', `${busqueda}`, {
        type: 'websearch',
    })
    if(!error){
        return productos
    }
    else{
        throw Error(error.message);
        }
    }
);


const initialState = {
    loading: false,
    error: null,
    data:[]
}

const listadoProductos = createSlice({
    name: "listadoProductos",
    initialState,
    extraReducers: {
        [getCategory.pending]: (state) => {
            state.data = [];
            state.loading = true;
            state.error = null;
        },
        [getCategory.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
        },
        [getCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getSubcategories.pending]: (state) => {
            state.data = [];
            state.loading = true;
            state.error = null;
        },
        [getSubcategories.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
        },
        [getSubcategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getDestacados.pending]: (state) => {
        state.data = [];
        state.loading = true;
        state.error = null;
        },
        [getDestacados.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
        },
        [getDestacados.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getBusqueda.pending]: (state) => {
            state.data = [];
            state.loading = true;
            state.error = null;
            },
        [getBusqueda.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
        },
        [getBusqueda.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    }
})

export default listadoProductos.reducer