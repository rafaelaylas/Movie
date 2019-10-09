import React from 'react';
import logo from './header.jpg';
import './App.css';
import Barra from './components/BarraNavegacion';
import ContenedorGrupos from './components/ContenedorGrupos';
import MovieFinder from './controller/MovieFinder';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      tituloBuscar: '',
      pelis: []
    }
  }

  componentDidMount() 
  {
    MovieFinder.buscarEstrenos(this.okBusqueda.bind(this));
  }
  okBusqueda (estrenos)
  {
    this.setState({pelis : estrenos })
  }
  actualizarGrilla(titulo)
  {
    MovieFinder.buscarTitulo(titulo,this.okBusqueda.bind(this));
  }
  
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Barra actualizarGrilla= {this.actualizarGrilla.bind(this)}></Barra>
        <ContenedorGrupos peliculas= {this.state.pelis}></ContenedorGrupos>
      </div>
      );
    }
}

export default App;
