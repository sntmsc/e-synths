import React from 'react'
import {Flex,
        Box,
        Image,
        Text
} from "@chakra-ui/react" 



export const ProductoIndividual = ({nombre,precio,img}) => {

    return(
        <Box 
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
            <ProductoIndividual 
            nombre={'Cobalt 8'} 
            precio={'1500'} 
            img={'./imgs/productos/cobalt.jpg'}/>
            <ProductoIndividual 
            nombre={'Juno 60'} 
            precio={'2500'} 
            img={'./imgs/productos/juno.jpg'}/>
            <ProductoIndividual 
            nombre={'Microkorg'} 
            precio={'350'} 
            img={'./imgs/productos/mk.jpg'}/>
        </Flex>
    </Flex>
  )
}


export default ProductosDestacados 