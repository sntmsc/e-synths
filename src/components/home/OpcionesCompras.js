import React from 'react'
import { Flex, Text, Image} from "@chakra-ui/react" 

const OpcionesCompras = () => {

    const Item = ({icon,primary,secondary}) => {
      return(
          <Flex 
          w={{base:"90%",sm:'40%',md:"30%"}} 
          h={{base:"60%",sm:'70%',md:"100%"}} 
          alignItems="center" ml={{base:'0',sm:'.5em',md:"1em"}}
          position="relative" 
          >
            <Flex w="20%" height="60%">
              <Image src={icon} objectFit="contain" />
            </Flex>
            <Flex ml="1em" w="80%" h="100%" alignItems="flex-start" justify="center" direction="column">
              <Text fontSize={{base:'md',sm:'lg',md:"xl"}} fontWeight="extrabold">
                {primary}
              </Text>
              <Text fontSize={{base:'sm',sm:'md',md:"lg"}} h="2em">
                {secondary}
              </Text>
            </Flex>
  
          </Flex>
      )
    }
    return(
      <Flex w="100%" justifyContent="center" my="2em" top="40em">
        <Flex w="95%" pt="1em" pb={{md:"4em",lg:'2em'}} bg={{base:"white",md:"orange.200"}} borderTop={{base:"1px solid black",md:"none"}} wrap="wrap">
          <Item 
          icon={'/icons/camion.png'}
          primary={'Enviamos tu compra'} 
          secondary={'Entregas a todo el país'}
          />
          
          <Item 
          icon={'/icons/tarjeta-de-credito.png'}
          primary={'Pagá como quieras'} 
          secondary={'Tarjetas, efectivo y transferencia bancaria'}
          />
          <Item 
          icon={'/icons/whatsapp.png'}
          primary={'Elegí tu producto online'} 
          secondary={'¡Nosotros te ayudamos con la decisión!'}
          />
        </Flex>
      </Flex>
    )
  }

  export default OpcionesCompras 