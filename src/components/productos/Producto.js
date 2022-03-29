import React from 'react'
import { Flex, Text, Image, Button} from "@chakra-ui/react" 
import { useSelector,useDispatch } from 'react-redux';
import { agregarProducto } from '../../reducers/carrito/productosCarrito';
import { toggleCarrito } from '../../reducers/carrito/carritoVisible';
const Producto = () => {
    const infoProducto = useSelector((state) => state.productoSeleccionado);
    const prodCarrito = useSelector((state) => state.productosCarrito.productos)
    const carritoVisible = useSelector((state) => state.carritoVisible.visible)
    const {img, descripcion, producto} = infoProducto;
    const dispatch = useDispatch();
    return(
        <Flex
        w='100%'
        justify='center'
        align='center'
        direction='column'>
            <Image
            src={`/.${img}`}
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
            <Flex
            w='90%'
            justify='center'>
                <Text
                w='40em'
                fontSize={{base:'1.1em',lg:'1.2em',xl:'1.3em'}}
                mt='2em'
                mx={{base:'.5em',lg:'3em',xl:'5em'}}
                textAlign='center'>
                    {descripcion}
                </Text>
            </Flex>
            <Button
            mt='2em'
            variant='outline'
            colorScheme='black'
            onClick={()=>{
                if(prodCarrito.map(x=>x.id).includes(infoProducto.id) === false ){
                    dispatch(agregarProducto(infoProducto));
                    if(!carritoVisible) dispatch(toggleCarrito());
                }
            }}>
                Agregar al carrito
            </Button>
        </Flex>
    )
}



export default Producto