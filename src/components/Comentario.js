import React from 'react';
import {formatRelative} from 'date-fns';

import './Comentario.css';
import userImage from './user.png'
import { ptBR } from 'date-fns/locale';

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
                <p className='data'>{formatRelative(props.data, new Date(), {locale:ptBR})}</p>
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