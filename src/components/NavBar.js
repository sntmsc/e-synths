import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getBusqueda } from '../reducers/listadoProductos'
import { toggleCarrito } from '../reducers/carrito/carritoVisible'
import {Flex,
      Stack,
      Image,
      Text,
      Menu,
      MenuButton,
      MenuList,
      MenuItem,
      IconButton,
      Input,
 } from "@chakra-ui/react" 
 import {HamburgerIcon, SearchIcon} from "@chakra-ui/icons" 


const Navbar = ({maxWidth950}) => {
   const dispatch = useDispatch();

    const Logo = () => { 
      return(
        <Link to={'/'} style={{textDecoration: 'none'}}>
        <Flex 
        width="5em"
        height="100%"
        align="center"
        >
          <Image
          boxSize={{base:"2.5em",xl:"3.5em"}}
          objectFit="cover"
          src="/icons/logo-principal.png"
          alt="Logo principal"
          ml="1em" 
          />
          <Text
          ml="1em"
          fontFamily=" 'Rampart One', cursive;"
          fontSize={{base:"1.4em",md:'1.5em',xl:'1.7em','2xl':'1.9em'}}
         >
            Soundmaster
          </Text>
        </Flex>
        </Link>
      )
    }

      const Buscador = () =>{
        const dispatch = useDispatch();
        const history = useHistory();
          const handleSearch = (e) =>{
            e.preventDefault();
            dispatch(getBusqueda(e.target.text.value));
            e.target.text.value = "";
            history.push('/busquedas')
          }
        return(

          <Flex 
          m={{base:"1em",md:"1.5em",lg:"2em"}}
          w={{base:"85%"}}
          justify="center"
          align='center'>
            <Flex
            as='form'
            w='100%'
            onSubmit={handleSearch}
            style={{display: 'flex'}}
            justify='center'>
              <Input
              mr=".5em"
              name="text"
              boxShadow="md"
              width='100%'
              maxW='30em'/>
              <IconButton type="submit" aria-label="buscador" icon={<SearchIcon/>}/>
            </Flex>
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
                      fontSize={{md:"1em",lg:"1.1em", xl:'1.2em', '2xl':'1.3em'}}
                      fontFamily="'Hind Siliguri', sans-serif"
                      _hover={{cursor:"pointer",color:'gray.600'}}>
                        {descripcion}
                      </Text>
                    </Flex>
                  </Link>
          }
          {descripcion === 'Productos' && 
              <Menu w='20%'> 
                <Flex
                w="20%"
                align='center'>
                  <MenuButton 
                  as={Flex}
                  
                  
                  align="center"
                  _hover={{cursor:"pointer",color:'gray.600'}}>
                      <Text
                        fontSize={{md:"1em",lg:"1.1em", xl:'1.2em', '2xl':'1.3em'}}
                        fontFamily="'Hind Siliguri', sans-serif"
                        >
                          {descripcion}
                      </Text>
                  </MenuButton>
                </Flex>
                <MenuList>
                  {productosCategorias.map((x,i) => 
                  <Link key={i} to={x.link} style={{textDecoration: 'none'}}>
                  <MenuItem 
                  fontFamily="'Hind Siliguri', sans-serif"
                  fontSize="1em"
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
                />
                <MenuList w="20em" h="10em" bg="gray.200">
                  <Link to={'/sintetizadores'} style={{textDecoration: 'none'}}>
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
      h="100%"
      align="center"
      justify='space-between'
      >
        {!maxWidth950 && 
        <>
        <Flex
        justify='flex-start'
        align='center'>
          <Session descripcion={'Productos'}/>
          <Session descripcion={'Nosotros'} link={'/nosotros'}/>
          <Session descripcion={'Contactanos'} link={'/contacto'}/>
        </Flex>
        <Flex
        justify='flex-end'
        align='center'>
          <Buscador/>
          <Image
          src='/icons/carrito.png'
          alt='carrito de compras' 
          objectFit='cover'
          boxSize='2em'
          mr='.5em'
          cursor='pointer'
          onClick={()=>dispatch(toggleCarrito())}/>
        </Flex>
        </>
        }
        {maxWidth950 && 
        <>
          <Flex>
            <MenuMobile/>
            <Image
                src='/icons/carrito.png'
                alt='carrito de compras' 
                objectFit='cover'
                boxSize='2em'
                mr='1em'
                ml='.5em'
                cursor='pointer'
                onClick={()=>dispatch(toggleCarrito())}/>
            </Flex>
        </>
        }
      </Flex>
    </Flex>
    {maxWidth950 &&
    <Flex w='100%' justify='center'>
      <Buscador/>
    </Flex>}
  </>
  )
  }

  export default Navbar 