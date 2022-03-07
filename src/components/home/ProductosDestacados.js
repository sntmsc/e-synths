import React from 'react'
import { CardProducto } from '../utils/CardProducto'
import {Flex,
        Text
} from "@chakra-ui/react" 

const ProductosDestacados = () =>{


   

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
            <CardProducto 
            nombre={'Cobalt 8'} 
            precio={'1500'} 
            img={'./imgs/productos/cobalt.jpg'}/>
            <CardProducto
            nombre={'Juno 60'} 
            precio={'2500'} 
            img={'./imgs/productos/juno.jpg'}/>
            <CardProducto
            nombre={'Microkorg'} 
            precio={'350'} 
            img={'./imgs/productos/mk.jpg'}/>
        </Flex>
    </Flex>
  )
}


export default ProductosDestacados 