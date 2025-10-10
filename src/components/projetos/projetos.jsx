import React from 'react'
import styles from './projetos.module.css'

const projetos = () => {
  return (
    <section className={styles.portfolio}>
        <div className={styles.interface}>

            <h2 className={styles.titulo}>MEUS <span>PROJETOS.</span></h2>

            <div className={styles.flex}>
                <div className={styles.img_port} 
                    style={{backgroundImage: `url('../../assets/images/projeto 01 - landing page.png)`}}
                >
                    <div className={styles.overlay}>Landing Page - Newsletter</div>
                </div>

                <div className={styles.img_port} 
                    // style="background-image: url(images/projeto\ 02\ -\ super\ mario.png);"
                >
                    <div className={styles.overlay}>Trailer - Mario Bross</div>
                </div>

                <div className={styles.img_port} 
                    // style="background-image: url(images/projeto\ 03\ -\ em\ breve.png);"
                >
                    <div className={styles.overlay}>Em Breve</div>
                </div>
            </div>

            <div className={styles.flex}>
                <div className={styles.buttons_port}>
                    <a href="https://ryannv.github.io/landingPageNewsletter/"><button>View</button></a>
                    <a href="https://github.com/ryannV/landingPageNewsletter"><button>Repository</button></a>
                </div>


                <div className={styles.buttons_port}>
                    <a href="https://ryannv.github.io/trailer-super-mario/"><button>View</button></a>
                    <a href="https://github.com/ryannV/trailer-super-mario"><button>Repository</button></a>
                </div>

                <div className={styles.buttons_port}>
                    <button>View</button>
                    <button>Repository</button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default projetos