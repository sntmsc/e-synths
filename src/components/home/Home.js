import { useEffect } from 'react'
import { useDispatch } from 'react-redux' 
import { getDestacados } from '../../reducers/listadoProductos'
import ProductosDestacados from './ProductosDestacados'
import Categorias from './Categorias'


const Home = () =>{

    const dispatch = useDispatch();

    useEffect(async ()=>{
      dispatch(getDestacados());
    },[dispatch])

    return(
        <>
            <ProductosDestacados/>
            <Categorias/>
        </>
    )
}


export default Home