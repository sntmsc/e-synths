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
import axios from 'axios'
import { supabase } from './client';

function App() {
  const [isMobile] = useMediaQuery("(max-width: 750px)")
  const [listadoProductos, setListadoProductos] = useState([])
  const [loading, setLoading] = useState(false);


  useEffect(async ()=>{
    const { data: productos, error } = await supabase
    .from('productos')
    .select('*');
    setListadoProductos(productos);
  },[])

  
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
              <Productos prod={'Sintetizadores'}/>
            </Route>
            <Route path="/sintetizadores/:id">
              <Producto/>
            </Route>
            <Route path="/drums">
              <Productos prod={'Drum Machines'}/>
            </Route>
            <Route path="/drums/:id">
              <Producto/>
            </Route>
            <Route path="/groovebox">
              <Productos prod={'Samplers & Groovebox'}/>
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

