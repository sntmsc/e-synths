import React from 'react'
import {ChakraProvider,useMediaQuery, Flex} from "@chakra-ui/react" 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar'
import OpcionesCompras from "./components/home/OpcionesCompras"
import Home from './components/home/Home'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Productos from './components/productos/Productos'
import Producto from './components/productos/Producto'
import Footer from './components/Footer'
import Carrito from './components/Carrito';
function App() {
  const [minWidth900] = useMediaQuery("(max-width: 900px)")
  return (
    <BrowserRouter>
      <div className="App" style={{maxWidth:'100%'}}>
        <ChakraProvider>
          <Navbar  min minWidth900={minWidth900}/>
          <Carrito/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route
            key='sintetizadores'
            path='/sintetizadores' exact>
              <Productos
              titulo={'Sintetizadores'}
              categoria={'sintetizadores'}/>
            </Route>
            <Route
            path="/sintetizadores/:id">
              <Producto/>
            </Route>
            <Route
            path='/drums' exact
            key='drums'>
              <Productos
              titulo={'Drum Machines'}
              categoria={'drums'}/>
            </Route>
            <Route path="/drums/:id">
              <Producto/>
            </Route>
            <Route
            path='/groovebox' exact
            key='groovebox'>
              <Productos
              titulo={'Samplers & Groovebox'}
              categoria={'groovebox'}/>
            </Route>
            <Route path="/groovebox/:id">
              <Producto/>
            </Route>
            <Route path="/nosotros">
              <Nosotros/>
            </Route>
            <Route path="/contacto">
              <Contacto/>
            </Route>
          </Switch>
          <Flex
          position='relative'
          bottom='0'
          direction='column'>
            <OpcionesCompras />
            <Footer/>
          </Flex>
        </ChakraProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

