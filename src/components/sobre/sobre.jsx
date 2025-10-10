import React from 'react'
import styles from './sobre.module.css'

import RyannVan from '../../assets/images/ryann_van.jpg' 

const sobre = () => {
  return (
    <section className={styles.sobre}>
        <div className={styles.interface}>

            <div className={styles.flex}>
                <div className={styles.img_sobre}>
                    <img className={styles.img_tag_sobre} src={RyannVan} alt="Ryann Van"/>
                </div>
            
                <div className={styles.txt_sobre}>
                    <h2>MUITO PRAZER, <span>SOU RYANN VICTOR.</span></h2>
                    <p>
                        Tenho 19 anos, estou graduando Sistemas de Informação, atualmente no 5° período. Estagio na Aperam
                        South America na área de TI da Logística Integrada.
                    </p>

                    <p>
                        Sou totalmente apaixonado por tecnologia, busco diariamente aprender algo mais. Resolver problemas
                        é meu exercício diário, ja faz parte da minha vida. Almejo ser Desenvolvedor e corro atrás de oportunidades.
                    </p>

                    <div className={styles.btn_social}>
                        <a href="https://www.instagram.com/ryannvicttor/"><button><i class="bi bi-instagram"></i></button></a>
                        <a href="https://www.linkedin.com/in/ryann-victor-939b97240/"><button><i class="bi bi-linkedin"></i></button></a>
                        <a href="https://github.com/ryannV"><button><i class="bi bi-github"></i></button></a>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default sobre