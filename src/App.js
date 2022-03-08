import React from 'react'
import {ChakraProvider,useMediaQuery} from "@chakra-ui/react" 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar'
import OpcionesCompras from "./components/home/OpcionesCompras"
import Home from './components/home/Home'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Productos from './components/productos/Productos'
import Producto from './components/productos/Producto'
import Footer from './components/Footer'

function App() {
  const [isMobile] = useMediaQuery("(max-width: 750px)")

  return (
    <BrowserRouter>
      <div className="App" style={{maxWidth:'100%'}}>
        <ChakraProvider>
          <Navbar isMobile={isMobile}/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route
            key='sintetizadores'
            path='/sintetizadores'>
              <Productos
              titulo={'Sintetizadores'}
              categoria={'sintetizadores'}/>
            </Route>
            <Route
            path="/sintetizadores/:id">
              <Producto/>
            </Route>
            <Route
            path='/drums'
            key='drums'>
              <Productos
              titulo={'Drum Machines'}
              categoria={'drums'}/>
            </Route>
            <Route path="/drums/:id">
              <Producto/>
            </Route>
            <Route
            path='/groovebox'
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
          <OpcionesCompras />
          <Footer/>
        </ChakraProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

