

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/home'
import Admin from './Component/admin/admin'
import User from './Component/user/user'
import './App.css'

function App() {
  

  return (
    <Router>
      <nav>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/user" element={<User />}/>
      </Routes>
    </Router>
  )
}

export default App
