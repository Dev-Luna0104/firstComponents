// import logo from './logo.svg';'
import './App.css';
import React, { Component } from 'react';
 
import Comentario from './components/Comentario';

 
class App extends Component {

  state = {
    
    comentarios: [

      {
        nome:'matheus luna',
        email:'matheusluna@email.com',
        data:new Date(2004, 9, 18),
        mensagem:'bom dia'
      },


    ],
    adicionarComentario:{
      
      nome:'',
      email:'',
      mensagem:'',
      data: new Date()

    }
  }

  adicionarComentario = evento => {
    evento.preventDefault() //anulando um evento
    console.log ('novo comentarios')

    // const novoComentario = {
    //   nome:'rafa',
    //   email:'rafa@email.com',
    //   data:new Date(),
    //   mensagem:'tarde'
    // }

    
    const adicionarComentario =  this.state.adicionarComentario
    
    //   //quel comtrola a atualizaçao do estado tem que ser o react, ele faz isso quando acha que tem que atualizar assim retornando um novo Dom
    //   //entao para atualizar o estado
    //   let lista = this.state.comentarios
    //   lista.push(adicionarComentario)
    //   //setStation - ela é erdada de companents
    //   this.setState({Comentario: lista})
    
    //uma forma melhor de escrever
     
    this.setState({
      comentarios: [...this.state.comentarios, adicionarComentario ],
      adicionarComentario: {nome:"", email:"", mensagem:""},
      
    })

  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter( c => c !== comentario)

    this.setState({ comentarios: lista })
  }

  digitaForm = (evento, indice) => {
    const {name, value} = evento.target;

//ou assim

    // const value = evento.target.value;
    // const nome = evento.target.nome;
    
    this.setState({adicionarComentario: {...this.state.adicionarComentario , [name]: value }})
  }

  render(){
    return (
      <div className='App'>
        <h1>Comentarios</h1>
        {this.state.comentarios.map((comentarios,indice) => (
          <Comentario 
            key={indice}
            nome={comentarios.nome} 
            email={comentarios.email} 
            data={comentarios.data}
            onRemove={this.removerComentario.bind(this, comentarios)}>
            {comentarios.mensagem}
            
          </Comentario>
          ))
        }

        <form method='post' onSubmit={this.adicionarComentario} className='novo-comentario'>
          <h2>Adicionar comentário</h2>
          <div>
            <label>Nome:</label>
            <input 
              type='text'   
              id='nome'   
              onChange={this.digitaForm}
              value={this.state.adicionarComentario.nome}
              name='nome' 
              placeholder='Seu nome'>
            </input>
          </div>


          <div>
            <label>Email:</label>
            <input 
              type='email' 
              onChange={this.digitaForm}
              id='email' 
              value={this.state.adicionarComentario.email}
              name='email' 
              placeholder='Seu email'>
            </input>
          </div>

          <div>
            <textarea 
              name='mensagem'   
              onChange={this.digitaForm}
              id='mensagem' 
              value={this.state.adicionarComentario.mensagem}
              rows='4'
              placeholder='\...'/>
          </div>

          <button type='submit'>enviar</button>
          
        </form>

      </div>
    );
    
  }
}



// function App() {
//     return (
//     <div className="App">
//         <h1>projeto</h1>
//         < Comentario nome="Matheus" email="matheus@email.com" data={new Date(2004, 9, 18)}>
//           Ola tudo bem?
//         </Comentario>
//         < Comentario nome="Maria Eduarda" email="mariaeduarda@email.com" data={new Date(2023, 4, 1)}>
//           Roi lorena né
//         </Comentario>
//     </div>
//   );
// }
export default App;
