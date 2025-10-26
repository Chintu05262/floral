import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Home from './pages/Home/Home'
import Footer from './component/Footer/Footer'
import Product from './pages/Product/Product'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/ProductDetails' element={<ProductDetails />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
