import React from 'react'
import {Flex, Stack, Image, Text} from "@chakra-ui/react" 



const Contacto = () =>{
    const Cards = ({desc, icon,alts,link}) =>{
      return(
        <a
        href={link}
        target="_blank"
        style={{textDecoration: 'none',
        WebkitTapHighlightColor:'transparent'}}>
          <Flex direction='column'
          boxSize='10em'
          bg='transparent'
          borderRadius='2%'
          justify='center'
          align='center'
          my='1em'
          mx={{base:'.5em',lg:'1em', xl:'2em'}} 
          _hover={{bg:'gray.400', cursor:"pointer"}}>
              <Image 
              src={`/${icon}`}
              alt= {alts}
              boxSize='5em'
              objectFit='cover'/>
              <Text
              mt='2em'
              fontFamily=" 'Poppins', sans-serif;"
              fontWeight="bolder"
              fontSize='1em'>{desc}</Text>
            </Flex>
          </a>
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
        mb='1em'
        fontWeight="bolder"
        fontSize={{base:'1.5em',md:'2em'}}>Comunicate sin compromiso</Text>
        <Image 
        boxSize={{base:'19em'}}
        objectFit='cover'
        border='1px solid black'
        src='/imgs/llamar.jpg'
        alt='imagen de referencia para llamarnos por telefono' />
      </Stack>
      <Flex w='100%' justify='center'>
          <Text
            w='40em'
            textAlign='center'
            fontFamily="'Hind Siliguri', sans-serif"
            fontSize={{base:'1.1em',lg:'1.2em',xl:'1.3em'}}
            mt='2em'
            mx={{base:'.5em',lg:'3em',xl:'5em'}}>
            Priorizamos informar antes que garantizar una venta, vamos a guiarte lo mejor posible para que sepas cual es tu instrumento ideal. Nuestro horario de atención es de 9 a 20 hrs, todos los días de la semana.  
          </Text>
        </Flex>
        <Flex
        direction={{base:'column',md:'row'}} 
        wrap='wrap' 
        justify='center' 
        align='center' 
        my='2em'>
          <Cards desc={'Whatsapp'} icon={'./icons/contactoWspp.png'} alts={'Whatsapp'} link={'https://wa.me/111111111'}/> 
          <Cards desc={'Facebook'} icon={'./icons/contactFb.png'} alts={'Facebook'} link={'https://www.facebook.com/'}/> 
          <Cards desc={'Instagram'} icon={'./icons/contactoIg.png'} alts={'Instagram'} link={'https://www.instagram.com/'}/> 
          <Cards desc={'+54 011 9356 0394'} icon={'./icons/contactoPhone.png'} alts={'telefono'} link={'tel:0111111111111'}/> 
        </Flex>
      </>
    )
  }


  export default Contacto