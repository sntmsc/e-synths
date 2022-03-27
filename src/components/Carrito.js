import React from 'react'
import { Text, Flex, Grid, Button, Image } from "@chakra-ui/react" 
import { useSelector, useDispatch } from 'react-redux'
import { toggleCarrito } from '../reducers/carrito/carritoVisible'
import { eliminarProducto } from '../reducers/carrito/productosCarrito'
import { motion, AnimatePresence } from 'framer-motion'

const ProductoCarrito = ({precio,producto,img, id}) =>{
    const dispatch = useDispatch();
    const handleDelete = () =>{
        dispatch(eliminarProducto(id))
    }
    return(
        <Grid
        bg='orange.400'
        w='100%'
        h='7em'
        p='1em'
        alignItems='center'
        gridTemplateColumns='2fr 2fr 1fr'
        border='1px black solid'>
            <Image
            src={img}
            w='7em'
            h='5em'
            border='1px black solid'/>
            <Text
            mx='1em'
            fontFamily=" 'Poppins', sans-serif;"
            fontWeight='600'
            maxW='6em'
            userSelect='none'
            textAlign='center'>
                {producto}
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
                    U$S {precio}
                </Text>
                <Image
                onClick={handleDelete}
                src='/icons/delete.png'
                boxSize='1.7em'
                cursor='pointer'/>
            </Flex>
        </Grid>
    )
}
const Carrito = () => {
    const isVisible = useSelector(state => state.carritoVisible.visible);
    const prodCarrito = useSelector((state) => state.productosCarrito.productos);

    const precioTotal = (productos) => {
        if(productos.length > 0){
        return productos.reduce((acumulador, producto) => acumulador + parseInt(producto.precio),0);
        }
        else{
            return 0;
        }
    }
    const dispatch = useDispatch();
    return(
        <>
        <AnimatePresence>
            {isVisible && 

            <Flex
            as={motion.div}
            key='cart'
            initial={{
                opacity: 0,
            right:-100}}
            animate={{
                opacity: 1,
                right:0,
                scale:1,
                transition: {duration: .3 }}}
            exit={{
                opacity: 0,
                right:-100,
                transition: {duration: .2 }
            }}

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
                userSelect='none'
                onClick={()=>dispatch(toggleCarrito())}>X</Text>
                <Flex
                align='center'
                position='absolute'
                direction='column'
                w='100%'
                h='20.5em'
                top='2.5em'
                overflowY={prodCarrito.length >= 3 ? 'scroll' : 'hidden'}>
                    {prodCarrito.length > 0             ? 
                    <AnimatePresence>
                   { prodCarrito.map((x,{i}) =>
                    <Flex
                    as={motion.div}
                    initial={{
                        opacity: 0,
                        scale:0.9}}
                    animate={{
                        opacity: 1,
                        scale:1,
                        transition: {duration: .3 }}}
                    exit={{
                        opacity: 0,
                        scale:0.9,
                        transition: {duration: .2 }}}
                    key={i}
                    w='100%'>
                        <ProductoCarrito
                        id={x.id}
                        producto={x.producto}
                        img={x.img}
                        precio={x.precio}/>
                    </Flex>
                    )  }
                    </AnimatePresence>                             :
                    <Flex
                    w='100%'
                    justify='center'
                    align='center'
                    p='1em'
                    bg='orange.300'
                    borderRadius='2px'>
                        <Text
                        textAlign='center'
                        fontFamily="'Poppins', sans-serif"
                        fontSize='1.1em'
                        fontStyle='italic'>
                            El carrito de compras se encuentra vacío
                        </Text>
                    </Flex>}
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
                        Total: U$S {precioTotal(prodCarrito)}
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
        </AnimatePresence>
        </>
    )
}

export default Carrito 