import React from 'react';
import './Comentario.css';
import userImage from './user.png'

const Comentario = props =>{

    // const estilo = {
    //     color: 'red',
    //     padding: '10px',
    // }
    

    return (
        <div className="Comentario">
            <img className='userImage' src={userImage} alt={props.nome} />

            <div className='contents'>
                {/* <h2 style={estilo}>{props.nome}</h2> */}
                <h2 className='nome' >{props.nome}</h2>
                <p className='email'>{props.email}</p>
                <p className='mensagem'>{props.children}</p>
                <p className='data'>{props.data.toString()}</p>
                <button className='b-lixo' onClick={props.onRemove} >X</button>
            </div>
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