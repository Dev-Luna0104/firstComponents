import logo from './logo.svg';
import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
        <h1>projeto</h1>
        < Comentario name="Matheus" email="matheus@email.com" date={new Date(2004, 9, 18)}>
          Ola tudo bem?
        </Comentario>
        < Comentario name="Maria Eduarda" email="mariaeduarda@email.com" date={new Date(2023, 4, 1)}>
          Roi lorena né
        </Comentario>
    </div>
  );
}

export default App;
