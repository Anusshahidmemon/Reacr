import React from "react";
import { Container } from "react-bootstrap";
import Image from "../assets/dental-footer.webp";
function Footer(){
    const navitem_foo = [
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
    return(
        <>
        <div style={{background:"#1f2632"}}>
        <Container>
            <div className="row py-5">
                <div className="col-5">
                    <img className="brand-logo" src={Image} alt="" />
                    <div className="para mt-2">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptas incidunt, similique non quod ducimus rem maxime perspiciatis velit nobis, consectetur amet doloribus voluptatibus repudiandae cumque quasi ex ipsum quos.
                        Sed libero odit.</p>
                    </div>
                </div>
                <div className="col">
                    <h5 className="light-blue">Quicks Link</h5>
                    <ul className="p-0">
                    {
navitem_foo.map((navlinks,index)=>
  <li href={navlinks.href} className="text-white">{navlinks.label}</li>
)
}  
                    </ul>
                </div>
                <div className="col">
                    <h5 className="light-blue">Quicks Link</h5>
                    <ul className="p-0">
                    {
navitem_foo.map((navlinks,index)=>
  <li href={navlinks.href} className="text-white">{navlinks.label}</li>
)
}  
                    </ul>
                </div>
                <div className="col">
                    <h5 className="light-blue">Quicks Link</h5>
                    <ul className="p-0">
                    {
navitem_foo.map((navlinks,index)=>
  <li href={navlinks.href} className="text-white">{navlinks.label}</li>
)
}  
                    </ul>
                </div>
            </div>
        </Container>
        </div>
        </>
    )
}
export default Footer