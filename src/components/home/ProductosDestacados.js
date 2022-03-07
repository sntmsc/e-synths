import React from 'react'
import { CardProducto } from '../utils/CardProducto'
import { Flex, Text } from "@chakra-ui/react"
import { useSelector } from 'react-redux' 

const ProductosDestacados = () =>{

  const listadoProductos = useSelector((state) => state.listadoProductos.data);
  const productosDestacados = listadoProductos.filter(x => x.destacado);
   

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
        >Publicaciones destacadas</Text>
    </Flex>
        <Flex
        w="100%"
        
        justify="center"
        alignItems="center"
        wrap="wrap">
          {productosDestacados.map((x,i)=>
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