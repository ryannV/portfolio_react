import React from 'react'
import styles from './footer.module.css'

const footer = () => {
  return (
    <footer>
            <div className={styles.interface}>

                <div className={styles.line_footer}>
                    <div className={styles.flex}>
                        <div className={styles.logo_footer}>
                            {/* <img className={styles.imagem-logo" src="images/LOGO RV RV.png" alt="Logo RV Agency"> */}
                        </div>

                        <div className={styles.btn_social}>
                            {/* <a href="https://www.instagram.com/ryannvicttor/"><button><i className={styles.bi bi-instagram}></i></button></a>
                            <a href="https://www.linkedin.com/in/ryann-victor-939b97240/"><button><i className={styles.bi bi-linkedin}></i></button></a>
                            <a href="https://github.com/ryannV"><button><i className={styles.bi bi-github}></i></button></a> */}
                        </div>
                    </div>
                </div>

                <div className={styles.down_footer}>
                    <p>
                        {/* <i className={styles.bi bi-envelope-fill}></i>  */}
                        {/* <a href="mailto:ryannvictor72@gmail.com">ryannvictor72@gmail.com</a> */}
                    </p>
                    <p>
                        {/* <i className={styles.bi bi-phone}></i>  */}
                        {/* <a href="https://wa.me/5533999277685?text=Ol%C3%A1%21+Estou+aqui+pelo+seu+portf%C3%B3lio.+%F0%9F%9A%80%F0%9F%98%80">(33) 9 9927-7685</a> */}
                    </p>
                </div>

            </div>
    </footer>
  )
}

export default footer