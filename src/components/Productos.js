import React from 'react'
import {Flex, Text, HStack, Checkbox} from "@chakra-ui/react" 
import {ProductoIndividual} from './home/ProductosDestacados'

const Productos = ({prod}) =>{


   

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
          >{prod}</Text>
      </Flex>
      <Flex
      w='100%'
      justify='center'
      mb='2em'>
            <HStack spacing={{base:'5',md:'10'}} direction="row" wrap='wrap' justify='center'>
                <Checkbox size="lg" colorScheme="orange" defaultIsChecked >
                    Vintage
                </Checkbox>
                <Checkbox size="lg" colorScheme="orange" defaultIsChecked >
                    Polifónicos
                </Checkbox>
                <Checkbox size="lg" colorScheme="orange" defaultIsChecked >
                    Monofónicos
                </Checkbox>
            </HStack>
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

  export default Productos