import React from 'react'
import { Flex, Text, Image} from "@chakra-ui/react" 
import { useSelector } from 'react-redux';

const Producto = () => {
    const infoProducto = useSelector((state) => state.productoSeleccionado);
    const {img, descripcion, producto} = infoProducto;

    return(

        <Flex
        w='100%'
        justify='center'
        align='center'
        direction='column'>
            <Image
            src={`/${img}`}
            alt={producto}
            h='20em'
            w='25em'/>
            <Text
            fontSize='2em'
            mb='1em'
            fontFamily=" 'Poppins', sans-serif;"
            fontWeight="bolder">
                {producto}
            </Text>
            <Text
            w='40em'
            textAlign='center'>
                {descripcion}
            </Text>
        </Flex>
    )
}



export default Producto