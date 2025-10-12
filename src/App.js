import './App.css';
// import { BrowserRouter } from 'react-router-dom';

// Usando HashRouter para deploy em GitHub Pages
import { HashRouter } from 'react-router-dom';

import AppContent from './hooks/AppContent.jsx'; 

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppContent /> 
      </HashRouter>
    </div>
  );  
}

export default App;