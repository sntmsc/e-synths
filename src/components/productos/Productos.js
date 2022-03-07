import React from 'react'
import {Flex, Text, HStack, Checkbox} from "@chakra-ui/react" 
import { CardProducto } from '../utils/CardProducto'

const Productos = ({prod,instrumentsDB}) =>{

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
            {instrumentsDB.map(x=>
               <CardProducto
               key={x.id}
               nombre={x.producto}
               precio={x.precio}
               img={x.img}/> )}
          </Flex>
      </Flex>
    )
  }

  export default Productos