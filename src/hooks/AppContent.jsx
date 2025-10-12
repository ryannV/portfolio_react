import { useLocation, Routes, Route } from 'react-router-dom';
import { useScrollToHash } from './useScrollToHash.jsx';

import NavBar from '../components/navBar/navBar.jsx';
import Main from '../components/main/main.jsx';
import Sobre from '../components/sobre/sobre.jsx';
import Ferramentas from '../components/ferramentas/ferramentas.jsx';
import Projetos from '../components/projetos/projetos.jsx';
import Footer from '../components/footer/footer.jsx';

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