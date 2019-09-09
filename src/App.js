import React from 'react';
import logo from './logo.svg';
import './App.css';


function NavBar(){
  return(
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark ">
    <div class="container">
      {/* <a class="navbar-brand" href="#"><img src="assets/img/logo.png" alt="logo de olivia ros"></a> */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">Acerca de mí </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#work">Trabajos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contacto</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>

  );
}





function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavBar/>

      <p className="text-danger">fjdkfgsdkjf</p>

    </div>
  );
}

export default App;
