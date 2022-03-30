import React from 'react'
import { useLocation } from 'react-router-dom'
import { CardProducto } from '../utils/CardProducto'
import { Flex, Text, Spinner} from "@chakra-ui/react"
import {  useSelector } from 'react-redux' 

const ProductosDestacados = () =>{



  const productosDestacados = useSelector((state) => state.listadoProductos.data);
  const isLoading = useSelector((state) => state.listadoProductos.loading);
  const pathname = useLocation().pathname;

  
  return(
    <>
      <Flex 
      w="100%"
      bg="gray.300"
      direction="column"
      my={{base:"1em",md:"3em"}}
      p='2em'
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
            >{pathname === '/busquedas' ? 'Resultados de la búsqueda realizada' : 'Publicaciones destacadas'}</Text>
        </Flex>

          <Flex
          w="100%"
          
          justify="center"
          alignItems="center"
          wrap="wrap">
            {isLoading ? 
            <>
            <Spinner
            size='xl'
            mb='2em'/>
            <Flex
            h='18em'>
            </Flex>
            </>              : 
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
      <Flex
      h='19em'>
      </Flex>
    </>
  )
}


export default ProductosDestacados 