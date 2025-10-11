import styles from './projetos.module.css'

import LandingPage   from '../../assets/images/projeto01-landingpage.png'
import TrailerMario  from '../../assets/images/projeto02-supermario.png'
import EmBreve       from '../../assets/images/projeto03-embreve.png'

const projetos = () => {
  return (
    <section className={styles.projetos}>
        <div className={styles.interface}>

            <h2 className={styles.titulo}>Meus<span> Projetos</span></h2>

            <div className={styles.flex}>
                <div className={styles.img_port}  style={{backgroundImage: `url(${LandingPage})`}}>
                    <div className={styles.overlay}>L. Page - Newsletter</div>
                </div>

                <div className={styles.img_port} style={{backgroundImage: `url(${TrailerMario})`}}>
                    <div className={styles.overlay}>Trailer - Mario Bross</div>
                </div>

                <div className={styles.img_port} style={{backgroundImage: `url(${EmBreve})`}}>
                    <div className={styles.overlay}>Em Breve</div>
                </div>
            </div>

            <div className={styles.flex}>
                <div className={styles.gap}>
                    <a href="https://ryannv.github.io/landingPageNewsletter/"><button>Visualizar</button></a>
                    <a href="https://github.com/ryannV/landingPageNewsletter"><button>Repositório</button></a>
                </div>


                <div className={styles.gap}>
                    <a href="https://ryannv.github.io/trailer-super-mario/"><button>Visualizar</button></a>
                    <a href="https://github.com/ryannV/trailer-super-mario"><button>Repositório</button></a>
                </div>

                <div className={styles.gap}>
                    <button>Visualizar</button>
                    <button>Repositório</button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default projetos