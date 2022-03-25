import React from 'react'
import { Text, Flex, Button, Image } from "@chakra-ui/react" 
import { useSelector, useDispatch } from 'react-redux'
import { toggleCarrito } from '../reducers/carrito/carritoVisible'
import { eliminarProducto } from '../reducers/carrito/productosCarrito'
const ProductoCarrito = ({precio,producto,img,id}) =>{
    const dispatch = useDispatch();
    const handleDelete = () =>{
        dispatch(eliminarProducto(id))
    }
    return(
        <Flex
        bg='orange.400'
        w='100%'
        h='7em'
        p='1em'
        align='center'
        border='1px black solid'>
            <Image
            src={img}
            w='7em'
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
        </Flex>
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
                userSelect='none'
                onClick={()=>dispatch(toggleCarrito())}>X</Text>
                <Flex
                position='absolute'
                direction='column'
                w='100%'
                h='20.5em'
                top='2.5em'
                overflowY='scroll'
                overflowX='hidden'>
                    {prodCarrito.map(x =>
                    <Flex
                    key={x.id}>
                        <ProductoCarrito
                        id={x.id}
                        producto={x.producto}
                        img={x.img}
                        precio={x.precio}/>
                    </Flex>
                    )}
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
        </>
    )
}

export default Carrito 