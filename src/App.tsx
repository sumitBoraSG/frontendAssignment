import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './features/Home/Home.tsx'
import Products from './features/Products/Products.tsx'
import Footer from './features/Footer/Footer.tsx'
import './App.css'

function App() {
  return <>
  <Home />
  <Products />
  <Footer />
  </>
}

export default App;

