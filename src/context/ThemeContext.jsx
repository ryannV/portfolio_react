import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

/**
 * @typedef {'dark' | 'light'} Theme
 * @typedef {Object} ThemeContextType
 * @property {Theme} theme
 * @property {() => void} toggleTheme
 * @property {(theme: Theme) => void} setTheme
 */

const ThemeContext = createContext(/** @type {ThemeContextType | undefined} */ (undefined));

const THEME_STORAGE_KEY = 'rv_portfolio_theme';

/**
 * Obtém tema inicial considerando localStorage ou preferência do sistema
 * @returns {Theme}
 */
const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';

  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
  } catch (err) {
    console.warn('Erro ao ler preferência de tema:', err);
  }

  return 'dark';
};

/**
 * Provider de Tema da Aplicação
 * @param {{ children: React.ReactNode }} props
 */
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);

  // Sincroniza atributo data-theme no <html> e meta tag para PWA
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (err) {
      console.warn('Erro ao persistir tema:', err);
    }

    // Atualiza cor da barra de endereço do navegador mobile
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? '#08090d' : '#f8fafc');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const setTheme = useCallback((newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setThemeState(newTheme);
    }
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme,
    setTheme,
  }), [theme, toggleTheme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook de acesso ao tema
 * @returns {ThemeContextType}
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser utilizado dentro de um ThemeProvider');
  }
  return context;
}
