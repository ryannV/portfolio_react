import { useState } from 'react'
import styles from './ferramentas.module.css'

import HTML5 from '../../assets/icons/html.png'
import CSS3 from '../../assets/icons/css3.svg'
import JS from '../../assets/icons/javascript.svg'
import Java from '../../assets/icons/java.png'
import Appscript from '../../assets/icons/appscript.png'
import Git from '../../assets/icons/git.svg'
import MySQL from '../../assets/icons/mysql.png'
import Oracle from '../../assets/icons/database.svg'
import PowerBI from '../../assets/icons/powerbi.svg'
import ReactIcon from '../../assets/icons/react.svg'
import NodeJS from '../../assets/icons/node.svg'
import Figma from '../../assets/icons/figma.svg'
import Bootstrap from '../../assets/icons/bootstrap.svg'
import Csharp from '../../assets/icons/csharp.png'
import Firebird from '../../assets/icons/firebird.svg'
import GitHub from '../../assets/icons/github.svg'

const Ferramentas = () => {
    
    const [desc, setDesc] = useState([
        // HTML
        "Base das minhas aplicações web. Utilizo há 4 anos em projetos acadêmicos, pessoais e corporativos, criando estruturas sólidas e acessíveis integradas a React e Node.js.",

        // CSS
        "Responsável por dar vida e estilo ao código. Há 4 anos utilizo CSS para criar interfaces modernas, responsivas e funcionais em projetos web e internos da empresa.",

        // JS
        "Motor da interatividade nas minhas aplicações. Com 4 anos de experiência, utilizo JS tanto para automação de processos quanto no desenvolvimento web com React e Node.js.",

        // JAVA
        "Uma base sólida em programação orientada a objetos. Trabalho com Java há 4 anos em projetos acadêmicos e há mais de 1 ano em um sistema real para uma transportadora, aplicando boas práticas e arquiteturas de software. 🚛💻",

        // MYSQL
        "Utilizo MySQL há 4 anos, tanto em projetos acadêmicos quanto no meu projeto extensionista para uma transportadora. Tenho experiência em modelagem de banco de dados, consultas complexas (queries) e gerenciamento de dados utilizando o MySQL Workbench.",

        // ORACLE
        "Experiência prática com Oracle Database em estágio há 1 ano, realizando consultas (queries) para extração de dados e criação de relatórios para projetos e dashboards no Power BI.",

        // POWERBI
        "Atuei na criação de dashboards no Power BI, contribuindo com um time de analistas para gerar insights que apoiam decisões estratégicas. Desenvolvi relatórios voltados para redução de custos, rastreabilidade e identificação de pontos críticos na produção industrial.",

        // GIT
        "Sou certificado pelo curso de Versionamento de Código com Git e GitHub pela Dio. Tenho experiência em controle de versões e colaboração em projetos pessoais, com conhecimento em boas práticas de versionamento.",

        // APPSCRIPT
        "Utilizei AppScript, linguagem baseada em JavaScript, para automatizar e otimizar planilhas do Google Sheets. Desenvolvi scripts que melhoraram em 50% o tempo de processos manuais, incluindo manutenção de códigos, criação de novas funções e processos ETL, otimizando o trabalho diário da equipe."
    
    ]);

    const [actived, setActived] = useState(false);

    const showMessage = (id) =>{
        if (actived === id){
            setActived(null);
        } else {
            setActived(id);
        }
    }

  return (
    <section className={styles.ferramentas}>
        <div className={styles.interface}>

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