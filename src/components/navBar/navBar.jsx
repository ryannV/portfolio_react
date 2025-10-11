import styles from './navBar.module.css'
import '../../App.css';

const navBar = () => {
  return (
    <header>
        <div className={styles.interface}>
            <div className={styles.logo}>
              <h1 className={styles.logo}>&lt;RV/&gt;</h1>
            </div>

            <nav>
                <ul>
                    <li><a href='/'>Início </a></li>
                    <li><a href='/sobre'>Sobre </a></li>
                    <li><a href='/ferramentas'>Ferramentas</a></li>
                    <li><a href='/projetos'>Projetos</a></li>
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