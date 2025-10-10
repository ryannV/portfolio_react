import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'

import NavBar from './components/navBar/navBar.jsx';
import Main from './components/main/main.jsx';
import Sobre from './components/sobre/sobre.jsx';
import Espec from './components/espec/espec.jsx';
import Projetos from './components/projetos/projetos.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Sobre/>
      <Espec/>
      <Projetos/>
      {/* <Footer/> */}
    </div>
  );  
}

export default App;
