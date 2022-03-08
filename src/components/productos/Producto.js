import React from 'react'
import { Flex, Text, Image} from "@chakra-ui/react" 
import { useSelector } from 'react-redux';

const Producto = () => {
    const infoProducto = useSelector((state) => state.listadoProductos.data);
    const {img, descripcion, producto} = infoProducto;
    return(

        <Flex
        w='100%'
        justify='center'
        align='center'>
            <Image
            src={img}
            alt={producto}
            boxSize='5em'/>
            <Text
            fontSize='xl'>
                {producto}
            </Text>
            <Text>
                {descripcion}
            </Text>
        </Flex>
    )
}



export default Producto