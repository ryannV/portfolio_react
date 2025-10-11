import './App.css';
import { BrowserRouter } from 'react-router-dom';

import AppContent from './hooks/AppContent.jsx'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent /> 
      </BrowserRouter>
    </div>
  );  
}

export default App;