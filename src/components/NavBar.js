import React from 'react'
import {Link} from 'react-router-dom'

import {Flex,
      Stack,
      Image,
      Text,
      Menu,
      MenuButton,
      MenuList,
      MenuItem,
      IconButton,
      Input
 } from "@chakra-ui/react" 
 import {HamburgerIcon, SearchIcon} from "@chakra-ui/icons" 


const Navbar = ({isMobile}) => {
   

    const Logo = () => { 
      return(
        <Link to={'/'} style={{textDecoration: 'none'}}>
        <Flex 
        width="30%"
        height="100%"
        align="center"
        >
          <Image
          boxSize={{base:"2.5em",lg:"3.5em"}}
          objectFit="cover"
          src="/icons/logo-principal.png"
          alt="Logo principal"
          ml="1em" 
          />
          <Text
          ml="1em"
          fontFamily=" 'Rampart One', cursive;"
          fontSize={{base:"1.5em",lg:"2em"}}
         >
            Soundmaster
          </Text>
          </Flex>
          </Link>
      )
    }
      const Buscador = () =>{
        return(
          <Flex 
          m={{base:"1em",md:"1.5em",lg:"2em"}}
          w={{base:"85%",md:"40%"}}
          justify="center" 
          position="relative" 
          left='1%'>
          <Input 
          mr=".5em"
          boxShadow="md"
          maxW="25em"/>
          <IconButton aria-label="buscador" icon={<SearchIcon/>}/>
          </Flex>
        )
      }
  
      const Session = ({descripcion, link}) =>{
          const productosCategorias = [{
            categoria:'Sintetizadores',
            link:'/sintetizadores'},{
            categoria:'Drum Machines',
            link:'/drums'},{
            categoria:'Samplers/Groovebox',
            link:'/groovebox'}]
        return(
          <Stack spacing={5} ml={{md:'8',lg:'5'}}>
          {descripcion!=='Productos' && 
                  <Link to={link} style={{textDecoration: 'none', margin:'0'}}>
                    <Flex 
                    w="20%"
                    h="100%"
                    p=".5em"
                    align="center"
                    >
                      <Text
                      fontSize={{md:"1em",lg:"1.5em", xl:'2em'}}
                      fontFamily="'Patrick Hand', cursive;"
                      _hover={{cursor:"pointer",color:'gray.600'}}>
                        {descripcion}
                      </Text>
                    </Flex>
                  </Link>
          }
          {descripcion === 'Productos' && 
              <Menu w='20%'> 
                <Flex
                w="20%">
                  <MenuButton 
                  as={Flex}
                  
                  
                  align="center"
                  _hover={{cursor:"pointer",color:'gray.600'}}>
                      <Text
                        fontSize={{md:"1em",lg:"1.5em", xl:'2em'}}
                        fontFamily="'Patrick Hand', cursive;"
                        >
                          {descripcion}
                      </Text>
                  </MenuButton>
                </Flex>
                <MenuList>
                  {productosCategorias.map((x,i) => 
                  <Link key={i} to={x.link} style={{textDecoration: 'none'}}>
                  <MenuItem 
                  fontFamily="'Patrick Hand', cursive;"
                  fontSize="1.2em"
                  h="4em">{x.categoria}</MenuItem>
                  </Link>
                  )}
                </MenuList>
              </Menu>
              }

          </Stack>
        )
      }

    const MenuMobile = () => {
        const Item = ({descripcion}) => {
            return(
            <>
                <Text
                    fontSize="1.5em"
                    fontFamily="'Patrick Hand', cursive;"
                   >
                    {descripcion}
                </Text>
            </>
            )
        }
        return(
            <Menu >
                
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon boxSize="1.7em"/>}
                    variant="ghost"
                    position="relative"
                    left={{base:"73%", sm:'78%', md:'87%', lg:'95%'}}
                />
                <MenuList w="20em" h="10em" bg="gray.200">
                  <Link to={'/groovebox'} style={{textDecoration: 'none'}}>
                    <MenuItem h="33.33%" justifyContent="center">
                    <Item descripcion="Productos"/>
                    </MenuItem >
                  </Link>
                  <Link to={'/nosotros'} style={{textDecoration: 'none'}}>
                    <MenuItem h="33.33%" justifyContent="center">
                    <Item descripcion="Nosotros"/>
                    </MenuItem>
                  </Link>

                  <Link to={'/contacto'} style={{textDecoration: 'none'}}>
                    <MenuItem h="33.33%" justifyContent="center">
                    <Item descripcion="Contactos"/>
                    </MenuItem>
                  </Link>
                </MenuList>
            </Menu>
        )
    }
  
  
  return(
    <>
    <Flex 
    as="nav"
    w="100%"
    h="5em"
    align="center" 
    justify="space-between"
    borderBottom="1px solid black"
    >
      <Logo/>
      <Flex 
      w="65%"
      h="100%"
      align="center"
      >
        {!isMobile && 
        <>
        <Session descripcion={'Productos'}/>
        <Session descripcion={'Nosotros'} link={'/nosotros'}/>
        <Session descripcion={'Contactanos'} link={'/contacto'}/>
        <Buscador/>
        <Image
        src='/icons/carrito.png'
        alt='carrito de compras' 
        objectFit='cover'
        boxSize='2em'
        mr='.5em'
        cursor='pointer'/>
        </>
        }
        {isMobile && 
        <>

          <MenuMobile/>
          <Image
              src='/icons/carrito.png'
              alt='carrito de compras' 
              objectFit='cover'
              boxSize='2em'
              position='relative'
              left={{base:'30%',sm:'45%',md:'50%', lg:'70%',xl:'80%'}}
              m='0'
              cursor='pointer'/>
        </>
        }
      </Flex>
    </Flex>
    {isMobile &&
    
      <Buscador/>}
  </>
  )
  }

  export default Navbar 