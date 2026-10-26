import { lazy, Suspense } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { useScrollToHash } from './useScrollToHash.jsx';

import NavBar from '../components/navBar/navBar.jsx';
import Main from '../components/main/main.jsx';
import Ferramentas from '../components/ferramentas/ferramentas.jsx';
import ContactCTA from '../components/contactCTA/ContactCTA.jsx';
import Footer from '../components/footer/footer.jsx';
import PageLoader from '../components/loader/PageLoader.jsx';

// Code Splitting das rotas secundárias para otimização de bundle inicial
const Sobre = lazy(() => import('../components/sobre/sobre.jsx'));
const Projetos = lazy(() => import('../components/projetos/projetos.jsx'));
const NotFound = lazy(() => import('../components/notFound/NotFound.jsx'));

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMainRoute = ['/', '/sobre', '/projetos'].includes(location.pathname);

  useScrollToHash();

  return (
    <>
      <NavBar />

      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* O componente Ferramentas renderiza na home com divisor laser */}
        {isHomePage && (
          <>
            <div className="laserDivider" aria-hidden="true" />
            <Ferramentas />
          </>
        )}

        {/* Card CTA de Contratação - temporariamente desativado */}
        {/* {isMainRoute && <ContactCTA />} */}
      </main>

      <div className="laserDivider" aria-hidden="true" />
      <Footer />
    </>
  );
}

export default AppContent;