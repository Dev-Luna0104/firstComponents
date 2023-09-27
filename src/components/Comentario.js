import React from 'react';
import './Comentario.css';

const Comentario = props =>{
    

    return (
        <div className="Comentario">
            <h2>{props.nome}</h2>
            <p>{props.email}</p>
            <p>{props.children}</p>
            <p>{props.data.toString()}</p>
            <button onClick={props.onRemove} >X</button>
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