import React from 'react'

import LogoRV from '../../assets/images/LOGO RV RV.png'
import styles from './navBar.module.css'
import '../../App.css';

const navBar = () => {
  return (
    <header>
        <div className={styles.interface}>
            <div className={styles.logo}>
              <img className={styles.imagem_logo} src={LogoRV} alt="logo"/>
            </div>

            <nav>
                <ul>
                    <li><a href='#'>Início </a></li>
                    <li><a href='#'>Sobre </a></li>
                    <li><a href='#'>Especialidades</a></li>
                    <li><a href='#'>Projetos</a></li>
                </ul>
            </nav>

            <div className={styles.btn_download}>
              <a href="curriculo/CV Ryann 2024 Atualizado.pdf" download="CV Ryann 2024 Atualizado.pdf"><button>Dowload CV</button></a>
            </div>
        </div>
    </header>
  )
}

export default navBar;