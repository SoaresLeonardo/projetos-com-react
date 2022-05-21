import { Home } from "./pages/Home"
import { Contato } from "./pages/Contato"
import { Sobre } from "./pages/Sobre"

import { NavBar } from "./layout/NavBar"
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import './App.css'
import './layout/Container.styles.css'
function App() {
    return (
     <Router>
       <NavBar />
       <div className="Container"  >
          <Routes>
          
            <Route path='/' element={<Home/>} />
            <Route path='/sobre' element={<Sobre/>} />
            <Route path='/Contato' element={<Contato/>} />
              </Routes>
              </div>
       
     </Router>
    )
  
}

export default App
