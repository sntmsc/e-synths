import {useEffect} from 'react'
import { CardProducto } from '../utils/CardProducto'
import { Flex, Text, Spinner} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux' 
import { getDestacados } from '../../reducers/listadoProductos'
import { initSub } from '../../reducers/homeProductosSubtitulo'
const ProductosDestacados = () =>{

  const dispatch = useDispatch();
  useEffect(async ()=>{
    dispatch(getDestacados());
    dispatch(initSub())
  },[dispatch])

  const productosDestacados = useSelector((state) => state.listadoProductos.data);
  const isLoading = useSelector((state) => state.listadoProductos.loading);
  const subtitulo = useSelector((state) => state.homeProductosSubtitulo.subtitulo);
   

  return(
    <Flex 
    w="100%"
    bg="gray.300"
    direction="column"
    my={{base:"1em",md:"3em"}}
    >
    <Flex
    w="100%"
    textAlign={{base:'center',md:'left'}}
    justify='center'>
        <Text
        m="1em"
        fontFamily=" 'Poppins', sans-serif;"
        fontWeight="extrabold"
        fontSize="3xl"
        >{subtitulo}</Text>
    </Flex>
        <Flex
        w="100%"
        
        justify="center"
        alignItems="center"
        wrap="wrap">
          {isLoading ? 
          <Spinner
          size='xl'
          mb='2em'/> : 
          productosDestacados.map((x,i)=>
            <CardProducto 
            key={i}
            nombre={x.producto} 
            precio={x.precio} 
            img={x.img}
            producto={x}/>
            )}
        </Flex>
    </Flex>
  )
}


export default ProductosDestacados 