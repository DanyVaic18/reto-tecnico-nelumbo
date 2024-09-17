import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'

function App() {
 
  return (
    <BrowserRouter basename='/reto-tecnico-nelumbo'>
      <Routes>
        <Route path='/' element={<h1>INICIO</h1>}/>
        <Route path='/two' element={<h2>twoooo</h2>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
