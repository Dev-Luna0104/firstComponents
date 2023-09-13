import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import Comentario from './components/Comentario';

 
class App extends Component {

  state = {
    comentario: [

      {
        name:'matheus luna',
        email:'matheusluna@email.com',
        date:new Date(2004, 9, 18),
        mensagem:'bom dia'
      },

      {
        name:'maria eduarda',
        email:'mariaeduarda@email.com',
        date:new Date(2005, 4, 1),
        mensagem:'bom dia'
      },

    ]
  }

  addComment = () => {
    console.log ('novo comentario')

    const newComment = {
      name:'rafa',
      email:'rafa@email.com',
      date:new Date(),
      mensagem:'tarde'
    }

    //   //quel comtrola a atualizaçao do estado tem que ser o react, ele faz isso quando acha que tem que atualizar assim retornando um novo Dom
    //   //entao para atualizar o estado
    //   let lista = this.state.comentario
    //   lista.push(newComment)
    //   //setStation - ela é erdada de companents
    //   this.setState({Comentario: lista})

    //uma forma melhor de escrever

    this.setState({
      comentario:[ ...this.state.comentario, newComment ]
    })

  }

  render(){
    return (
      <div className="App">
          <h1>projeto</h1>
          {this.state.comentario.map((comentario,indice) =>(
            <Comentario 
              key={indice}
              name={comentario.name} 
              email={comentario.email} 
              date={comentario.date}
              >
                {comentario.mensagem}
            </Comentario>
            ))
          }
          <button onClick={this.addComment}>novo comentario</button>
      </div>
    );
    
  }
}



// function App() {
//     return (
//     <div className="App">
//         <h1>projeto</h1>
//         < Comentario name="Matheus" email="matheus@email.com" date={new Date(2004, 9, 18)}>
//           Ola tudo bem?
//         </Comentario>
//         < Comentario name="Maria Eduarda" email="mariaeduarda@email.com" date={new Date(2023, 4, 1)}>
//           Roi lorena né
//         </Comentario>
//     </div>
//   );
// }
export default App;
