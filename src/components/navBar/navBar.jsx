import styles from './navBar.module.css'
import '../../App.css';

import { NavLink } from 'react-router-dom';

const navBar = () => {
  return (
    <header>
        <div className={styles.interface}>
            <div className={styles.logo}>
              <h1 className={styles.logo}>&lt;RV/&gt;</h1>
            </div>

            <nav>
                <ul>
                    <li><NavLink to=''>Inicio</NavLink></li>
                    <li><NavLink to='/sobre'>Sobre</NavLink></li>
                    <li><NavLink to='/#ferramentas'>Ferramentas</NavLink></li>
                    <li><NavLink to='/projetos'>Projetos</NavLink></li>
                </ul>
            </nav>

            <div className={styles.icon_theme}>
              <a><i class="bi bi-sun" style={{ color: '#c79d16'}}></i></a>
            </div>
        </div>
    </header>
  )
}

export default navBar;