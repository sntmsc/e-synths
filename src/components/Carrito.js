import React from 'react'
import { Text, Flex, Button, Image } from "@chakra-ui/react" 

const ProductoCarrito = () =>{
    return(
        <Flex
        w='100%'
        h='7em'
        bg='green'
        p='1em'
        align='center'>
            <Image
            src='./imgs/productos/drummachines/808.jpg'
            w='7em'
            border='1px black solid'/>
            <Text
            mx='1em'>
                Roland TR-8
            </Text>

        </Flex>
    )
}
const Carrito = () => {
    return(
        <Flex
        justify='center'
        w='20em'
        h='30em'
        bg='orange.200'
        opacity='0.9'
        borderRadius='15px'
        position='fixed'
        right='0'
        top='.1em'>
            <Text
            fontSize='1.5em'
            fontWeight='600'
            position='absolute'
            right='.5em'>X</Text>
            <Flex
            position='absolute'
            w='100%'
            h='23.5em'
            bg='blue'
            top='2.5em'
            overflowY='scroll'>
                <ProductoCarrito/>
            </Flex>
            <Button
            colorScheme='black'
            variant='outline'
            position='absolute'
            bottom='1em'>
                Comprar
            </Button>
        </Flex>
    )
}

export default Carrito 