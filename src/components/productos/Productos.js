import { useEffect, useState } from 'react'
import {Flex, Text, HStack, Checkbox, Spinner} from "@chakra-ui/react"
import { CardProducto } from '../utils/CardProducto'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategory, getSubcategories } from '../../reducers/listadoProductos'

const LinkCategoria = ({categoria,select,setSelect,route}) =>{
  return(
    <Link to={route} style={{textDecoration: 'none'}}>
    <Text
    onClick={()=>setSelect(categoria)}
    my='1em'
    fontFamily=" 'Poppins', sans-serif;"
    bg={select === categoria ? 'orange.200' : 'transparent'}
    p='0.5em'
    borderRadius='5px'>
      {categoria}
    </Text>
    </Link>
  )
}
const Productos = ({categoria, titulo}) =>{
    const dispatch = useDispatch();
    const productos = useSelector((state) => state.listadoProductos.data);
    const isLoading = useSelector((state) => state.listadoProductos.loading);
    const [selectCategory, setSelectCategory] = useState('Sintetizadores')
    const tags = () => categoria === 'sintetizadores' ? 
                        ['monofónico','polifónico','vintage'] :
                        categoria === 'drums' ? 
                        ['analógica','digital','vintage'] :
                        categoria === 'groovebox' ?
                        ['sampler','sequencer','all-in-one']: []; 

    const [subcategorias, setSubcategorias] = useState(tags());

  const handleCheck = (event) =>{
    const filtroSubcategorias = () => event.target.checked ? 
                    subcategorias.concat(event.target.value) :
                    subcategorias.filter(x=> x !== event.target.value)

    setSubcategorias(filtroSubcategorias());
    
    const arr = [categoria, filtroSubcategorias()]
    dispatch(getSubcategories(arr));
  }

    useEffect(async ()=>{
      dispatch(getCategory(categoria));
    },[dispatch])

    
    return(
      <>
      <Flex
      w='100%'
      justify='center'
      align='center'
      direction='column'>
        <LinkCategoria
        select={selectCategory}
        setSelect={(category)=>setSelectCategory(category)}
        categoria={'Sintetizadores'}
        route={'/sintetizadores'}/>
        <LinkCategoria
        select={selectCategory}
        setSelect={(category)=>setSelectCategory(category)}
        categoria={'Drum Machines'}
        route={'/drums'}/>
        <LinkCategoria
        select={selectCategory}
        setSelect={(category)=>setSelectCategory(category)}
        categoria={'Samplers & Groovebox'}
        route={'/groovebox'}/>
      </Flex>
        <Flex 
        w="100%"
        bg="gray.300"
        direction="column"
        my={{base:"1em",md:"3em"}}
        >
        <Flex
        w="100%"
        textAlign={{base:'center',md:'left'}}
        justify='center'
        align='center'
        direction='column'>
            <Text
            m="1em"
            fontFamily=" 'Poppins', sans-serif;"
            fontWeight="extrabold"
            fontSize="3xl"
            >¡Bienvenidx a la juguetería intergaláctica!</Text>
                      <Text
            m="1em"
            fontFamily=" 'Poppins', sans-serif;"
            fontWeight="extrabold"
            fontSize="2xl"
            as='u'
            >{titulo}</Text>
        </Flex>
        <Flex
        w='100%'
        justify='center'
        mb='2em'>
              <HStack spacing={{base:'5',md:'10'}} direction="row" wrap='wrap' justify='center'>
                {tags().map((x,i) => 
                  <Checkbox
                  key={i}
                  size="lg"
                  colorScheme="orange"
                  defaultIsChecked
                  value={x}
                  onChange={handleCheck}>
                      {x}
                  </Checkbox>
                  )}
              </HStack>
          </Flex>
          <Flex
            w="100%"

            justify="center"
            alignItems="center"
            wrap="wrap">
              {isLoading ? 
              <Spinner
              size='xl'
              mb='2em'/> :  
              productos.map(x=>
                <CardProducto
                key={x.id}
                nombre={x.producto}
                precio={x.precio}
                img={x.img}
                producto={x}/> )}
            </Flex>
        </Flex>
      </>
    )
  }

  export default Productos