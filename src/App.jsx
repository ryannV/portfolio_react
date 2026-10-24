import './App.css';
import './styles/global.css';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import AppContent from './hooks/AppContent.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <HashRouter>
          <AppContent />
        </HashRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;