import { useState } from 'react'
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

const Espec = () => {
    
    const [desc, setDesc] = useState([
        // HTML
        "Minha jornada com HTML tem em média 1 ano e 3 meses de usabilidade. Ainda não tive grandes usous de HTML no mercado de trabalho, mas já utilizei. Meu maior uso dessa tecnologia foram em projetos acadêmicos e pessoais",

        // CSS
        "Minha experiência com CSS, está diretamente ligada com o HTML, 1 ano e 3 meses de usabilidade. Utilizei CSS em projetos acadêmicos e pessoais",

        // JS
        "A linguagem JavaScript, tenho mais experiência, utilizo atualmente em meu estágio. Há 1 ano que utilizo JavaScript todos os dias, mas não voltado para Desenvolvimento Web, utilizo para manipulação de planilhas Google Sheets, em uma extensão do Google",

        // JAVA
        "A linguagem Java, utilizo no meu projeto extensionista da minha faculdade (um sistema para uma transportadora), são 1 ano e 6 meses, com algumas pausas, utilizando Java, aplicando sua propriedade de Orientação a Objeto",

        // MYSQL
        "A linguagem MySQL para banco de dados, faz parte do meu projeto extensionista (um sistema para uma transportadora), Há 1 ano utilizo",

        // ORACLE
        "Banco de dados Oracle, utilizo atualmente em meu estágio, Há 1 ano, para fazer consultas (querys) para extrair informações que me interessam, para ser utilizadas em projetos/dashboards no PowerBI",

        // POWERBI
        "Utilizo esta ferramenta há 1 ano em meu estágio, contribuindo junto com um time de analistas, buscando melhores caminhos, obtendo insights, para melhorar as tomadas de decisões das gerências",

        // GIT
        "Sou certificado pelo Dio em um curso de Versionamento de Código com Git e GitHub, ainda não coloquei em prática meus conhecimentos no mercado de trabalho, somente em projetos pessoais",

        // APPSCRIPT
        "Utilizo esta linguaguem, que é inspirada em JavaScript, há 1 ano em meu estágio. É uma extensão do Google Sheets, que permite manipular 100% uma planilha. Com ela faço manutenções em códigos, atualizo funcionalidades para melhorar performance, crio novas funções, documentações e outras manipulações"
    
    ]);

    const [actived, setActived] = useState(false);
    // const [index, setIndex] = useState(null);

    const showMessage = (id) =>{
        if (actived === id){
            setActived(null);
        } else {
            setActived(id);
        }
    }

  return (
    <section className={styles.especialidades}>
        <div className={styles.interface}>

            <h2 className={styles.titulo}>MINHAS <span>ESPECIALIDADES.</span></h2>

            <div className={styles.container}>
                <div className={styles.flex}>

                    <div>
                        <div className={styles.especialidades_box}  onClick={() => showMessage(0)}>
                            <img className={styles.icons} src={HTML5} alt="html5"/>
                            {/* <h3>HTML5</h3> */}
                        </div>

                        <div className={styles.especialidades_box} onClick={() => showMessage(3)}>
                            <img className={styles.icons} src={Java} alt="java"/>
                            {/* <h3>Java</h3> */}
                        </div>
                        
                        <div className={styles.especialidades_box} onClick={() => showMessage(6)}>
                            <img className={styles.icons} src={PowerBI} alt="powerbi"/>
                            {/* <h3>Power BI</h3> */}
                        </div>
                    </div>

                    <div>
                        <div className={styles.especialidades_box} onClick={() => showMessage(1)}>
                            <img className={styles.icons} src={CSS3} alt="css3"/>
                            {/* <h3>CSS3</h3> */}
                        </div>

                        <div className={styles.especialidades_box} onClick={() => showMessage(4)}>
                            <img className={styles.icons} src={MySQL} alt="mysql"/>
                            {/* <h3>MySQL</h3> */}
                        </div>

                        <div className={styles.especialidades_box} onClick={() => showMessage(7)}>
                            <img className={styles.icons} src={Git} alt="git"/>
                            {/* <h3>Git</h3> */}
                        </div>
                    </div>

                    <div>
                        <div className={styles.especialidades_box} onClick={() => showMessage(2)}>
                            <img className={styles.icons} src={JS} alt="js"/>
                            {/* <h3>JavaScript</h3> */}
                        </div>

                        <div className={styles.especialidades_box} onClick={() => showMessage(5)}>
                            <img className={styles.icons} src={Oracle} alt="oracle"/>
                            {/* <h3>Oracle</h3> */}
                        </div>

                        <div className={styles.especialidades_box} onClick={() => showMessage(8)}>
                            <img className={styles.icons} src={Appscript} alt="appscript"/>
                            {/* <h3>Appscript</h3>  */}
                        </div>
                    </div>
                </div>

                <div className={styles.txt_especialidades}>
                    <h4>Clique sobre o ícone desejado</h4>
                    {actived !== null && 
                        <p className={styles.txt_descricao}>{desc[actived]}</p>
                    }
                </div>

            </div>  

        </div>
    </section>
  )
}

export default Espec;