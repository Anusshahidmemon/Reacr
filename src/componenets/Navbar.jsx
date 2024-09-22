import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandimg from "../assets/logo.webp"
import Button  from "./button";
import search from "../assets/search.webp"
import Phone from "../assets/maile.webp"
import mail from "../assets/phone.webp"
function BasicExample() {
const navitem = [
    {
     label:"Services",
     href:"Services",
    },
    {
     label:"Dental Implants",
      href:"Dental Implants",
    },
    {
      label:"Cosmetic Makeover",
      href:"Cosmetic Makeover",
   },
    {
    label:"Teeth Whitening",
    href:"Teeth Whitening",
  } ,
  {
  label:"Nervous Patients",
  href:"Nervous Patients",
  }, 
  {
    label:"Dental Offers",
  href:"Dental Offers",
  }, 
  {
    label:"Smile Gallery",
  href:"Smile Gallery",
  }, 
  {
    label:"Dental Videos",
  href:"Dental Videos",
  }
]

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary main-nav py-0">
      <Container>

        <Navbar.Brand href="#home">
          <img className="brand-logo" src={brandimg} alt="" />
        </Navbar.Brand>
        <div className="btn-div ms-auto me-4 d-flex align-items-center g-5"> 
       <a href="#" className="d-none d-lg-block"><Button>BookNow</Button></a>
       <a href="#" className="d-lg-none"><img  height="20px" src={Phone} alt="" /></a>
       <a href="#" className="d-none d-lg-block"><Button  style={{background:"#6ec1e4",color:"#fff"}}>Enquire Now</Button></a>
       <a href="#" className="d-none d-lg-block"><Button>Callus</Button></a>
       <a href="#" className="d-lg-none"><img  height="20px" src={mail} alt="" /></a>
      <img height="20px" src={search} alt="" />
       </div>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Container fluid className="py-lg-3" style={{background: "#012c70"}}>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
{
navitem.map((navlinks,index)=>
  <Nav.Link href={navlinks.href} className="text-white">{navlinks.label}</Nav.Link>
)
}  
        </Nav>
        </Navbar.Collapse>
        </Container >
    </Navbar>
    </>
  );
}

export default BasicExample;