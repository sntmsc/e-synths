import React from 'react'
import {Flex, Stack, Image, Text} from "@chakra-ui/react" 



const Contacto = () =>{
    const Cards = ({desc, icon,alts}) =>{
      return(
        <Flex direction='column' 
        w='15em' 
        h='15em' 
        bg='gray'
        borderRadius='2%'
        justify='center'
        align='center'
        my='1em'
        mx={{base:'.5em',lg:'1em', xl:'2em'}} 
        _hover={{bg:'gray.400', cursor:"pointer"}}>
            <Image 
            src={`/${icon}`}
            alt= {alts}
            boxSize='8em'
            objectFit='cover'/>
            <Text
            mt='2em'
            fontFamily=" 'Poppins', sans-serif;"
            fontWeight="bolder"
            fontSize='1.5em'>{desc}</Text>
          </Flex>
      )
  
    }
    return(
      <>
      <Stack w='100%'
      justify='center'
      direction='column'
      my='3em'
      spacing={10}
      align='center'
      textAlign='center'>
        <Text
        fontFamily=" 'Poppins', sans-serif;"
        fontSize={{base:'1.8em', lg:'2.5em',xl:'3em'}}
        fontWeight='extrabold'
        color='gray.500'
        textShadow='1px 1px #000000'>Comunicate sin compromiso</Text>
        <Image 
        boxSize={{base:'20em',lg:'25em',xl:'30em' }}
        objectFit='cover'
        border='1px solid black'
        src='/imgs/llamar.jpg'
        alt='imagen de referencia para llamarnos por telefono' />
      </Stack>
        <Flex
        direction={{base:'column',md:'row'}} 
        wrap='wrap' 
        justify='center' 
        align='center' 
        my='2em'>
          <Cards desc={'Whatsapp'} icon={'./icons/contactoWspp.png'} alts={'Whatsapp'}/> 
          <Cards desc={'Facebook'} icon={'./icons/contactFb.png'} alts={'Facebook'}/> 
          <Cards desc={'Instagram'} icon={'./icons/contactoIg.png'} alts={'Instagram'}/> 
          <Cards desc={'+54 011 9356 0394'} icon={'./icons/contactoPhone.png'} alts={'teléfono'}/> 
        </Flex>
        <Flex w='100%' justify='center'>
          <Text
            fontFamily="'Patrick Hand', cursive;"
            fontSize='1.5em'
            mx={{base:'2em',lg:'3em',xl:'5em'}}>
            Priorizamos informar antes que garantizar una venta, vamos a guiarte lo mejor posible para que sepas cual es tu instrumento ideal. Nuestro horario de atención es de 9 a 20 hrs, todos los días de la semana.  
          </Text>
        </Flex>
      </>
    )
  }


  export default Contacto