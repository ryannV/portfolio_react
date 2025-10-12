import { useLocation, Routes, Route } from 'react-router-dom';
import { useScrollToHash } from './useScrollToHash.jsx';

import NavBar from '../components/navBar/NavBar.jsx';
import Main from '../components/main/Main.jsx';
import Sobre from '../components/sobre/Sobre.jsx';
import Ferramentas from '../components/ferramentas/Ferramentas.jsx';
import Projetos from '../components/projetos/Projetos.jsx';
import Footer from '../components/footer/Footer.jsx';

function AppContent() {
    const location = useLocation(); 
    const isHomePage = location.pathname === '/'; 

    useScrollToHash();

    return (
        <>
            <NavBar/> 
            
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/projetos' element={<Projetos/>}/>
            </Routes>
            
            {/* O componente Ferramentas só renderiza na home */}
            {isHomePage && <Ferramentas/>} 
            
            <Footer/>
        </>
    );
}

export default AppContent;