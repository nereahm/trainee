import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import Inicio from './pages/Inicio'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Galeria from './components/Galeria'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router>

<Routes>

<Route path='/' element={<Inicio/>}/>
<Route path='/galeria' element={<Galeria/>}/>

</Routes>
</Router>

  </>
)
