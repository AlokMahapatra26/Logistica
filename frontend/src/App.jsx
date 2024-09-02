import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { useState } from 'react'
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Nav from './components/Nav';
import About from './pages/About';
import Logout from './pages/Logout';
import B2B from './pages/B2B';
import B2C from './pages/B2C';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<About/>} />
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/b2c' element={<B2C/>}/>
          <Route path='/b2b' element={<B2B/>}/>
          <Route/>
        </Routes>
      </Router>
    
  )
}

export default App
