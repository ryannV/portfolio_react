import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // 1. Pega o hash da URL (ex: '#ferramentas')
    const hash = location.hash;

    if (hash) {
      // 2. Remove o '#' inicial para obter o ID ('ferramentas')
      const elementId = hash.substring(1); 
      
      // 3. Encontra o elemento na página
      const element = document.getElementById(elementId);

      // 4. Se o elemento existir, rola até ele
      if (element) {
        // Usa 'smooth' para uma rolagem suave
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
        // Opcional: Rola para o topo da página se estiver na home (/)
        window.scrollTo(0, 0);
    }
    
  }, [location]); // Re-executa sempre que a URL (location) mudar
}