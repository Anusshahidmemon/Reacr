import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar from './navbar';

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
