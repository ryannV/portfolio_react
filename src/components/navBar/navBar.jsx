import styles from './NavBar.module.css'
import '../../App.css';
import '../../styles/global.css';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
        <div className='interface'>
            <div>
              <h1><NavLink to='' className='logo'>&lt;RV/&gt;</NavLink></h1>
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

export default NavBar;