import React from 'react'
import {Stack,Flex,Image,Text} from "@chakra-ui/react" 



const Footer = () =>{
    const textoFooter = (arr) => arr.map((x, i) => 
        <Text
        key={i}
        fontFamily=" 'Poppins', sans-serif;">{x}</Text>
      )
   
      const Contacto = ({link, img, socialMedia}) =>{
        return(
          <a
          href={link}
          target="_blank"
          style={{textDecoration: 'none',
          WebkitTapHighlightColor:'transparent'}}>
            <Image
            src={img}
            alt={socialMedia}
            objectFit='cover'
            boxSize='2em'/>
          </a>
        )
      }
      
    return(
      <footer>
      <Stack
      w='100%'
      maxW='100%'
      bg='gray.300'
      spacing={{base:2,md:40}}
      direction={{base:'column',md:'row'}}
      justify='center'
      boxShadow='dark-lg'
      borderTop='1px solid gray'
      p='1em'>
        <Flex
        direction='column'
        order={{base:'1',md:'0'}}
        mt={{base:'2em',md:0}}>
          <Stack
          direction='row'
          mb='1em'>
          <Contacto
          link={'https://wa.me/111111111'}
          img={'/icons/whatsapp.png'}
          socialMedia={'whatsapp'}/>
          <Contacto
          link={'https://www.facebook.com/'}
          img={'/icons/facebook.png'}
          socialMedia={'facebook'}/>
          <Contacto
          link={'https://www.instagram.com/'}
          img={'/icons/instagram-logo.png'}
          socialMedia={'instagram'}/>
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
      </footer>
    )
  }




  export default Footer 