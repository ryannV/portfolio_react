import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';
import styles from './navBar.module.css';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const isDark = theme === 'dark';

  return (
    <header className={styles.header}>
      <div className={`interface ${styles.navContainer}`}>
        {/* 1. Logo RV Oficial à Esquerda */}
        <div className={styles.logoWrapper}>
          <NavLink to="/" className="logo" onClick={closeMobileMenu}>
            &lt;RV/&gt;
          </NavLink>
        </div>

        {/* 2. Atalhos Centralizados no Header com Espaçamento Igual */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
                onClick={closeMobileMenu}
              >
                Início
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
                onClick={closeMobileMenu}
              >
                Sobre
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/#ferramentas"
                className={styles.navLink}
                onClick={closeMobileMenu}
              >
                Ferramentas
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/projetos"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                }
                onClick={closeMobileMenu}
              >
                Projetos
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* 3. Ícone dos Temas à Direita (Equidistante) */}
        <div className={styles.desktopActions}>
          <button
            type="button"
            className={styles.desktopThemeBtn}
            onClick={toggleTheme}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
          >
            <i
              className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'} ${
                styles.themeIcon
              }`}
            ></i>
          </button>
        </div>

        {/* Grupo de Controles Mobile (Theme Toggle + Hamburger) */}
        <div className={styles.mobileActions}>
          <button
            type="button"
            className={styles.themeToggleBtn}
            onClick={toggleTheme}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
          >
            <i
              className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'} ${
                styles.themeIcon
              }`}
            ></i>
          </button>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;