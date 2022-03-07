import React from 'react'
import { useDispatch } from 'react-redux'
import { selectProduct } from '../../reducers/productoSeleccionado'
import {Flex,
        Box,
        Image,
        Text
} from "@chakra-ui/react" 



export const CardProducto = ({nombre,precio,img,id, listadoProductos}) => {
    const dispatch = useDispatch();

    const productoFiltrado = listadoProductos.filter(x => x.id === id);

    const handleClick = () =>{
        dispatch(selectProduct(
            productoFiltrado[0]
        ))
    }
    return(
        <Box 
        onClick={handleClick}
        bg="white" 
        w={{base:"13em",md:"11em"}} 
        h="15em" 
        mx="2em"  
        mb="3em"
        boxShadow="lg"
        _hover={{boxShadow:"dark-lg", cursor:"pointer"}}>
            <Box
            w="100%"
            h="65%"
            borderBottom="1px solid"
            borderColor="gray.500"
            pb="2em"
            >
                <Image src={img} objectFit="contain" boxSize="100%"/>
            </Box>
            <Flex
            w="100%"
            h="35%"
            direction="column"
            justify="center"
            alignItems="center"
            p="1em"
            >
                <Text
                my=".5em"
                fontWeight="extrabold"
                fontSize="1.2em">
                    {nombre} 
                </Text>
                <Text
                fontWeight="bold"
                color="gray.600">
                    U$S {precio} 
                </Text>

            </Flex>

        </Box>
    )
}