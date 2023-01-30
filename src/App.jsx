import React from 'react'
import Coins from './Coins';
import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';
import Exchanges from './Exchanges';
import DrawerWeb from './Drawer';
import { ChakraProvider } from '@chakra-ui/react'
import Example from './ToggleMode';
const App = () => {
  return (
    <Router>
      
      <ChakraProvider>
        <Example />
        <main style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'10px',fontSize:'30px',fontWeight:'900',gap:'25px'}}>
        <Link to ='/'>coins</Link>
        <Link to ='/exchanges'>exchanges</Link>
        <DrawerWeb />
        </main>
        <Routes>
            <Route path='/' element={<Coins />} />
            <Route path='/exchanges' element={<Exchanges />} />
        </Routes>
        </ChakraProvider>
    </Router>
  )
}

export default App