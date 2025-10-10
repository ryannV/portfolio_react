import React from 'react'
import styles from './espec.module.css'

import HTML5 from '../../assets/icons/html.png'
import CSS3 from '../../assets/icons/css.png'
import JS from '../../assets/icons/js.png'
import Java from '../../assets/icons/java.png'
import Appscript from '../../assets/icons/appscript.png'
import Git from '../../assets/icons/git.png'
import MySQL from '../../assets/icons/mysql.png'
import Oracle from '../../assets/icons/oracle.png'
import PowerBI from '../../assets/icons/powerbi.png'

const espec = () => {
  return (
    <section className={styles.especialidades}>
        <div className={styles.interface}>

            <h2 className={styles.titulo}>MINHAS <span>ESPECIALIDADES.</span></h2>

            <div className={styles.container}>
                <div className={styles.flex}>

                    <div>
                        <div className={styles.especialidades_box} onclick="exibirDesc(0)">
                            {/* <i class='bi bi-code-square'></i> */}
                            <img className={styles.icons} src={HTML5} alt="html5"/>
                            <h3>HTML5</h3>
                        </div>

                        <div className={styles.especialidades_box} onclick="exibirDesc(3)">
                            {/* <i class='bi bi-code-square'></i> */}
                            <img className={styles.icons} src={Java} alt="java"/>
                            <h3>Java</h3>
                        </div>
                        
                        <div className={styles.especialidades_box} onclick="exibirDesc(6)">
                            {/* <i class='bi bi-wordpress'></i> */}
                            <img className={styles.icons} src={PowerBI} alt="powerbi"/>
                            <h3>Power BI</h3>
                        </div>
                    </div>

                    <div>
                        <div className={styles.especialidades_box} onclick="exibirDesc(1)">
                            {/* <i class='bi bi-cart'></i> */}
                            <img className={styles.icons} src={CSS3} alt="css3"/>
                            <h3>CSS3</h3>
                        </div>

                        <div className={styles.especialidades_box} onclick="exibirDesc(4)">
                            {/* <i class='bi bi-cart'></i> */}
                            <img className={styles.icons} src={MySQL} alt="mysql"/>
                            <h3>MySQL</h3>
                        </div>

                        <div className={styles.especialidades_box} onclick="exibirDesc(7)">
                            {/* <i class='bi bi-wordpress'></i> */}
                            <img className={styles.icons} src={Git} alt="git"/>
                            <h3>Git</h3>
                        </div>
                    </div>

                    <div>
                        <div className={styles.especialidades_box} onclick="exibirDesc(2)">
                            {/* <i class='bi bi-wordpress'></i> */}
                            <img className={styles.icons} src={JS} alt="js"/>
                            <h3>JavaScript</h3>
                        </div>

                        <div className={styles.especialidades_box} onclick="exibirDesc(5)">
                            {/* <i class='bi bi-code-square'></i> */}
                            <img className={styles.icons} src={Oracle} alt="oracle"/>
                            <h3>Oracle</h3>
                        </div>

                        <div className={styles.especialidades_box} onclick="exibirDesc(8)">
                            {/* <i class='bi bi-cart'></i> */}
                            <img className={styles.icons} src={Appscript} alt="appscript"/>
                            <h3>Appscript</h3> 
                        </div>
                    </div>
                </div>

                <div className={styles.txt_especialidades}>
                    <h4>Clique sobre o ícone desejado</h4>

                    <p id="desc" className={styles.txt_descricao}></p>
                </div>

            </div>  

        </div>
    </section>
  )
}

export default espec