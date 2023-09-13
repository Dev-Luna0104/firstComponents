import React from "react";
import './Comentario.css';

const Comentario = (props) =>{
    

    return (
        <div className="Container-comentario">
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <p>{props.children}</p>
            <p>{props.date.toString()}</p>
        </div>

    )
}

export default Comentario 



// const Comentario = (props) =>(
//     <div className="Container-comentario">
//         <h2>{props.name}</h2>
//         <p>{props.email}</p>
//         <p>{props.children}</p>
//         <p>{props.date.toString()}</p>
//     </div>
// )