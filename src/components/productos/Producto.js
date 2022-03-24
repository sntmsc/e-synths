import React from 'react'
import { Flex, Text, Image, Button} from "@chakra-ui/react" 
import { useSelector,useDispatch } from 'react-redux';
import { agregarProducto } from '../../reducers/carrito/productosCarrito';

const Producto = () => {
    const infoProducto = useSelector((state) => state.productoSeleccionado);
    const prodCarrito = useSelector((state) => state.productosCarrito.productos)
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
            <Text
            w='40em'
            textAlign='center'>
                {descripcion}
            </Text>
            <Button
            mt='2em'
            variant='outline'
            colorScheme='black'
            onClick={()=>{
                if(prodCarrito.map(x=>x.id).includes(infoProducto.id) === false ){
                    dispatch(agregarProducto(infoProducto))
                }
            }}>
                Agregar al carrito
            </Button>
        </Flex>
    )
}



export default Producto