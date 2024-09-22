import React from "react";

import Button from "./button";
import { Container } from "react-bootstrap";
import colimg from "../assets/col2.webp"
function Textimg(){
return(
    <>
    <Container className="mt-5">
<div className="d-flex flex-column align-items-md-center flex-md-row" style={{gap:"20px"}}>
    <div className="col-12 col-md-6">
        <h5 className="light-blue">Excellence In Dentistry</h5>
    <h1 className="color">Brightening Smiles Through <br/>Better Dentistry</h1>
    <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus velit similique saepe, dolores ducimus est sint totam ipsam iure soluta eos rerum, nobis consectetur alias ad fugiat inventore. Hic, blanditiis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit quas velit obcaecati maxime nam eligendi quam voluptatem inventore qui voluptas vero quia, distinctio provident laudantium odio. Alias, quasi tempora.
    </p>
    <Button>Read More</Button>
    </div>
    <div className="col-12 col-md-6">
        <img className="img-fluid w-100 " src={colimg} alt="" />
    </div>
</div>
</Container>
    </>
)
}
export default Textimg