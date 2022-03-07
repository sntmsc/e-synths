import {useState, useEffect} from 'react'
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
import { getAll } from './reducers/listadoProductos';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [isMobile] = useMediaQuery("(max-width: 750px)")

  const dispatch = useDispatch();

  const listadoProductos = useSelector((state) => state.listadoProductos.data);
  useEffect(async ()=>{
    dispatch(getAll());
  },[])
 
  const productosCategoria = (categoria) => listadoProductos.filter(x=>x.categoria === categoria)
  
  return (
    <BrowserRouter>
      <div className="App" style={{maxWidth:'100%'}}>
        <ChakraProvider>
          <Navbar isMobile={isMobile}/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/sintetizadores">
              <Productos
              categoria={'Sintetizadores'}
              productos={productosCategoria('sintetizador')}/>
            </Route>
            <Route path="/sintetizadores/:id">
              <Producto/>
            </Route>
            <Route path="/drums">
              <Productos
              categoria={'Drum Machines'}
              productos={productosCategoria('drum')}
              />
            </Route>
            <Route path="/drums/:id">
              <Producto/>
            </Route>
            <Route path="/groovebox">
              <Productos
              categoria={'Samplers & Groovebox'}
              productos={productosCategoria('groovebox')}/>
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

