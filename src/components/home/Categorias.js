import React from 'react'
import {Flex,Stack,Text,Image} from "@chakra-ui/react" 
import {Link} from 'react-router-dom'


const Categorias = () =>{

    const infoCategorias = [
      {
      nombre:'Sintetizadores',
      img:'./imgs/productos/sintetizadores/microbrute.jpg',
      route:'/sintetizadores'
    },{
      nombre:'Drum machines',
      img:'./imgs/productos/drummachines/808.jpg',
      route:'/drums'
    },{
      nombre:'Samplers/Groovebox',
      img:'./imgs/productos/groovebox/mpc2000xl.jpg',
      route:'/groovebox'
    }]
  
    return(
      <Flex
      direction="column">
        <Flex 
        w="100%"
        justify="center"
        mb='2em'>
          <Text
          fontFamily=" 'Poppins', sans-serif;"
          fontSize="2em"
          fontWeight="bolder"
          >Categorías</Text>
        </Flex>
        <Stack 
        w="100%"
        
        spacing="5"
        align='center'
        justify='center'
        direction={{base:'column',md:'row'}}>
            {infoCategorias.map((x,i) =>
            <Link
            to={x.route}
            style={{textDecoration: 'none'}}
            key={i}>
              <Flex
              direction='column'
              alignItems='center'
              justify='center'
              boxSize='15em'
              position='relative'> 
    
                  <Image 
                  h='8em'
                  w='9em'
                  borderRadius='50%'
                  border='1px solid black'
                  borderColor='rgba(0,0,0,0.2)'
                  mb='1em'
                  src={x.img}
                  alt={`Categoría ${x.nombre}`}
                  objectFit='cover'
                  _hover={{h:'9em',w:'10em',cursor:'pointer'}}/>
                  
                <Text
                fontSize='1.5em'
                fontFamily=" 'Poppins', sans-serif;"
                position='absolute'
                bottom='0em'
                >{x.nombre}</Text>
              </Flex>
            </Link>)}
        </Stack>
      </Flex>
    )
  }

  export default Categorias 