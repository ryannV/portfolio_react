import styles from './Ferramentas.module.css';

import HTML5 from '../../assets/icons/html.png';
import CSS3 from '../../assets/icons/css3.svg';
import JS from '../../assets/icons/javascript.svg';
import Java from '../../assets/icons/java.png';
import Appscript from '../../assets/icons/appscript.png';
import Git from '../../assets/icons/git.svg';
import MySQL from '../../assets/icons/mysql.png';
import Oracle from '../../assets/icons/database.svg';
import PowerBI from '../../assets/icons/powerbi.svg';
import ReactIcon from '../../assets/icons/react.svg';
import NodeJS from '../../assets/icons/node.svg';
import Figma from '../../assets/icons/figma.svg';
import Bootstrap from '../../assets/icons/bootstrap.svg';
import Csharp from '../../assets/icons/csharp.png';
import Firebird from '../../assets/icons/firebird.svg';
import GitHub from '../../assets/icons/github.svg';

const Ferramentas = () => {

  return (
    <section id="ferramentas" className={styles.ferramentas}>
        <div className='interface'>

            <h2 className={styles.titulo}>Ferramentas & Tecnologias</h2>
            <p className={styles.descricao}>Esta seção apresenta o conjunto de tecnologias que domino e aplico no dia a dia para superar desafios 
                e entregar resultados que atendem às necessidades de cada cliente.
            </p>

            <div className={styles.grids}>
                {/* HTML5 */}
               <div className={styles.grids_cards}>
                    <img src={HTML5} alt="HMTL5" className={styles.img_tech} />
                    <p>HTML</p>
               </div>
                {/* CSS */}
               <div className={styles.grids_cards}>
                    <img src={CSS3} alt="CSS" className={styles.img_tech} />
                    <p>CSS</p>
               </div>
                {/* JS */}
               <div className={styles.grids_cards}>
                    <img src={JS} alt="JS" className={styles.img_tech} />
                    <p>JavaScript</p>
               </div>
                {/* REACT */}
               <div className={styles.grids_cards}>
                    <img src={ReactIcon} alt="REACT" className={styles.img_tech} />
                    <p>React</p>
               </div>
                {/* NODE */}
               <div className={styles.grids_cards}>
                    <img src={NodeJS} alt="NodeJS   " className={styles.img_tech} />
                    <p>NodeJS</p>
               </div>
            </div>  

            <div className={styles.grids}>
                {/* FIGMA */}
               <div className={styles.grids_cards}>
                    <img src={Figma} alt="Figma" className={styles.img_tech} />
                    <p>Figma</p>
               </div>
                {/* BOOTSTRAP */}
               <div className={styles.grids_cards}>
                    <img src={Bootstrap} alt="Bootstrap" className={styles.img_tech} />
                    <p>Bootstrap</p>
               </div>
                {/* JAVA */}
               <div className={styles.grids_cards}>
                    <img src={Java} alt="Java" className={styles.img_tech} />
                    <p>Java</p>
               </div>
                {/* C# */}
               <div className={styles.grids_cards}>
                    <img src={Csharp} alt="Csharp" className={styles.img_tech} />
                    <p>C#</p>
               </div>
                {/* APPSCRIPT */}
               <div className={styles.grids_cards}>
                    <img src={Appscript} alt="Appscript" className={styles.img_tech} />
                    <p>Appscript</p>
               </div>
            </div>  

            <div className={styles.grids}>
                {/* FIREBIRD */}
               <div className={styles.grids_cards}>
                    <img src={Firebird} alt="Firebird" className={styles.img_tech} />
                    <p>Firebird</p>
               </div>
                {/* MYSQL */}
               <div className={styles.grids_cards}>
                    <img src={MySQL} alt="MySQL" className={styles.img_tech} />
                    <p>MySQL</p>
               </div>
                {/* ORACLE */}
               <div className={styles.grids_cards}>
                    <img src={Oracle} alt="Oracle" className={styles.img_tech} />
                    <p>Oracle</p>
               </div>
                {/* POWER BI */}
               <div className={styles.grids_cards}>
                    <img src={PowerBI} alt="PowerBI" className={styles.img_tech} />
                    <p>Power BI</p>
               </div>
                {/* GIT */}
               <div className={styles.grids_cards}>
                    <img src={Git} alt="GIT" className={styles.img_tech} />
                    <p>GIT</p>
               </div>
                {/* GITHUB */}
               <div className={styles.grids_cards}>
                    <img src={GitHub} alt="GITHUB" className={styles.img_tech} />
                    <p>GitHub</p>
               </div>
            </div>  

        </div>
    </section>
  )
}

export default Ferramentas;