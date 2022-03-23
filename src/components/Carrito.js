import React from 'react'
import { Text, Flex, Button, Image } from "@chakra-ui/react" 
import { useSelector, useDispatch } from 'react-redux'

const ProductoCarrito = () =>{
    return(
        <Flex
        bg='orange.400'
        w='100%'
        h='7em'
        p='1em'
        align='center'
        border='1px black solid'>
            <Image
            src='./imgs/productos/drummachines/808.jpg'
            w='7em'
            border='1px black solid'/>
            <Text
            mx='1em'
            fontFamily=" 'Poppins', sans-serif;"
            fontWeight='600'
            maxW='6em'
            userSelect='none'>
                Roland TR-8
            </Text>
            <Flex
            direction='column'
            justify='center'
            align='center'>
                <Text
                fontSize='1em'
                fontFamily=" 'Poppins', sans-serif;"
                fontWeight='600'
                textAlign='center'
                userSelect='none'>
                    U$S 3500
                </Text>
                <Image
                src='./icons/delete.png'
                boxSize='1.7em'
                cursor='pointer'/>
            </Flex>
        </Flex>
    )
}
const Carrito = () => {
    const isVisible = useSelector(state => state.carritoVisible);
    return(
        <>
            {isVisible && 
            <Flex
            justify='center'
            w='20em'
            h='30em'
            bg='orange.200'
            border='1px black solid'
            borderRadius='15px'
            zIndex='100'
            position='fixed'
            right='0'
            top='.1em'
            boxShadow='lg'>
                <Text
                fontSize='1.5em'
                fontWeight='600'
                position='absolute'
                right='.5em'
                cursor='pointer'
                userSelect='none'>X</Text>
                <Flex
                position='absolute'
                w='100%'
                h='20.5em'
                top='2.5em'
                overflowY='scroll'
                overflowX='hidden'>
                    <ProductoCarrito/>
                </Flex>
                <Flex
                direction='column'
                position='absolute'
                bottom='.5em'
                justify='center'
                align='center'>
                    <Text
                    mb='.5em'
                    fontSize='1.3em'>
                        Total: U$S 100 
                    </Text>
                    <Button
                    colorScheme='black'
                    variant='outline'
                    w='7em'>
                        Comprar
                    </Button>
                </Flex>
            </Flex>
            }
        </>
    )
}

export default Carrito 