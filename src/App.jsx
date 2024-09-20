import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar from './navbar';
import Home from "./pages/Home"
import Pricing from "./pages/pricing"
import About from "./pages/about"
import  Carousels  from './carousel';
import Card from "./card"
function App() {

  let component
  switch (window.location.pathname) {
  case "/":
  component = <Home />
  break
  case "/pricing":
  component = <Pricing />
  break
  case "/about":
  component = <About />
  break
  }
  return (
    <>
     <Navbar/>
     {component}
<Carousels/>
 <Card/>
    </>
  )
}

export default App
