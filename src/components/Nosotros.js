import React from 'react'
import { Flex,Stack, Image, Text} from "@chakra-ui/react" 



const Nosotros = () =>{
    const descripcion= 'Esta imagen refleja muy bien nuestro emprendimiento. Él es Carlos Schuester, un amante de la música electrónica generada a partir de instrumentos autónomos sin la interacción con computadoras. Desde la cuna nos endulzó los oídos con sonidos de otro planeta, que lógicamente para nosotros ya es la música cotidiana (si, somos sus hijos y por ende se trata de un emprendimiento familiar). Fabián y Gustavo son nuestros nombres. Los tres nos encargamos de conseguir los mejores instrumentos/hardware de música electrónica que hay en el mercado y los vendemos al precio más conveniente para los consumidores. Poco a poco estamos siendo reconocidos a nivel nacional y estamos encantados de recibirte como cliente. Nuestra pasión se refleja en cada acción y estamos seguros que lo vas a notar. Te invitamos a que nos hagas cualquier tipo de consulta, sin compromiso. Estamos para guiarte y brindarte la información que necesites.'
    return(
      <Flex w='100%' my='3em'>
        <Stack w='100%' justify='center' align='center' spacing={10}>
          <Text
          fontSize={{base:'1.5em',md:'2em'}}
          mb='1em'
          fontFamily=" 'Poppins', sans-serif;"
          fontWeight="bolder">Carlos y sus secuaces</Text>
          <Image 
           boxSize={{base:'19em'}}
          objectFit='cover' 
          src='/imgs/nosotros1.jpg' 
          alt='foto de nuestro espacio con sintetizadores'
          border='1px solid'
          borderRadius='2px'/>
          <Flex w='90%'
          justify='center'>
            <Text
            w='40em'
            textAlign='center'
            fontFamily="'Hind Siliguri', sans-serif"
            fontSize={{base:'1.1em',lg:'1.2em',xl:'1.3em'}}
            mt='2em'
            mx={{base:'.5em',lg:'3em',xl:'5em'}}>{descripcion}</Text>
          </Flex>
        </Stack>
      </Flex>
    )
  }

  export default Nosotros 