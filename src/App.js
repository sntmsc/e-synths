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
import ProductosDestacados from './components/home/ProductosDestacados';

function App() {
  const [maxWidth950] = useMediaQuery("(max-width: 950px)");
  return (
    <BrowserRouter>
      <div className="App" style={{maxWidth:'100%'}}>
        <ChakraProvider>
          <Navbar maxWidth950={maxWidth950}/>
          <Carrito/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/busquedas">
              <ProductosDestacados/>
            </Route>
            <Route
            key='sintetizadores'
            path='/sintetizadores' exact>
              <Productos
              maxWidth950={maxWidth950}
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
              maxWidth950={maxWidth950}
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
              maxWidth950={maxWidth950}
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

