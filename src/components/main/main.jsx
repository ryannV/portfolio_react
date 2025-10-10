import React from 'react';
import styles from './main.module.css';

import Ryann from '../../assets/images/ryann11.png'

const main = () => {
  return (
    <section className={styles.main}>
        <div className={styles.interface}>

            <div className={styles.flex}>
                <div className={styles.txt_main}>
                    <h1>OLÁ, BEM-VINDOS<span>EM MEU PORTFÓLIO.</span></h1>
                    <h3>Desenvolvedor Front-End</h3>

                    <div className={styles.btn_contato}>
                        <a href="https://www.linkedin.com/in/ryann-victor-939b97240/"><button>LinkedIn</button></a>
                        <a href="https://github.com/ryannV"><button>GitHub</button></a>
                    </div>

                </div>

                <div className={styles.img_main}>
                    <img class="img_pessoa" src={Ryann} alt="pessoa"/>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default main