import React from 'react'
import {Stack,Flex,Image,Text} from "@chakra-ui/react" 



const Footer = () =>{
    const textoFooter = (arr) => arr.map((x, i) => 
        <Text
        key={i}
        fontFamily=" 'Poppins', sans-serif;">{x}</Text>
      )
   
      
    return(
      <Stack
      w='100%'
      maxW='100%'
      bg='gray.300'
      spacing={{base:2,md:40}}
      direction={{base:'column',md:'row'}}
      justify='center'
      boxShadow='dark-lg'
      borderTop='1px solid gray'
      p='1em'
      position='relative'
      bottom={{base:'-15em',md:'0'}}>
        <Flex
        direction='column'
        order={{base:'1',md:'0'}}
        mt={{base:'2em',md:0}}>
          <Stack
          direction='row'
          mb='1em'>
            <Image
            src='./icons/whatsapp.png'
            alt='whatsapp'
            objectFit='cover'
            boxSize='2em'/>
            <Image
            src='./icons/facebook.png'
            alt='facebook'
            objectFit='cover'
            boxSize='2em'/>
            <Image
            src='./icons/instagram-logo.png'
            alt='instagram'
            objectFit='cover'
            boxSize='2em'/>
            <Image/>
          </Stack>
          {textoFooter(['Copyright © 2020-2021 Soundmaster'])}
        </Flex>
        <Flex
        direction='column'>
        <Text
        fontFamily=" 'Poppins', sans-serif;"
        fontWeight="bolder">
          Atención al cliente:  
        </Text>
        {textoFooter(['(223) 1010101','ventas@soundmaster.com.ar'])}
        </Flex>
  
      </Stack>
    )
  }




  export default Footer 