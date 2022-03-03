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
            <Route path="/sintetizadores">
              <Productos prod={'Sintetizadores'}/>
            </Route>
            <Route path="/drums">
              <Productos prod={'Drum Machines'}/>
            </Route>
            <Route path="/groovebox">
              <Productos prod={'Samplers & Groovebox'}/>
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

