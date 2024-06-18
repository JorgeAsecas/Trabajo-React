import { useState } from 'react'
import './App.css'
import { Header } from './componentes/Header'
import { Footer } from './componentes/Footer'
import { ListaDona } from './componentes/ListaDona'
import BotonDonacion from './componentes/Boton'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Carrito } from './componentes/Carrito'

import { CarritoTiendaProvider } from './componentes/CarritoTiendaContext'
import { CarritoTienda } from './componentes/CarritoTienda'
import { Inicio } from './componentes/Inicio'


function App() {
  return (
    <CarritoTiendaProvider>
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/donaciones" element={<><ListaDona /><Carrito /></>} />
          <Route path="/carrito" element={<CarritoTienda />} />


        </Routes>
        <Footer />
        <BotonDonacion />
      </>
    </Router>
    </CarritoTiendaProvider>
  )
}

export default App
