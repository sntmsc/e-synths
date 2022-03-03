import React from 'react'
import { Flex, Text, Image} from "@chakra-ui/react" 

const Producto = ({producto, img, desc})=> {
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
                {desc}
            </Text>
        </Flex>
    )
}



export default Producto