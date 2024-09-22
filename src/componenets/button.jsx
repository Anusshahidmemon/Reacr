import React from "react";
 function Button(props){

const {children , style} = props

    return(

<buuton className="px-4 py-2 btn-border" style={style ? style: {background: "#012c70",color:"#fff",width:"fit-content"}} >{children}</buuton>
    )
 }
 export default Button