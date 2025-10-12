import styles from './Sobre.module.css'

import Ryann from '../../assets/images/RV_rosto.jpg' 

const Sobre = () => {
  return (
    <section className={styles.sobre}>
        <div className={styles.interface}>
            {/* Sobre, Ryann Victor */}
            <h2>Sobre, <span>Ryann Victor.</span></h2>
            <p className={styles.destaque}>Estou finalizando minha graduação em <span>Engenharia de Software</span> pela Unileste, tenho 21 anos.</p>

            <div className={styles.flex}>
                <div>
                    <img className={styles.img_tag_sobre} src={Ryann} alt="Ryann Van"/>
                </div>
                <div>
                    <p className={styles.descricao}>
                        Atualmente atuo como <span>Analista de Suporte</span> em uma empresa de tecnologia, onde auxilio usuários, soluciono erros garantindo o funcionamento 
                        do sistema desktop. 
                        <br /><br />
                        Tenho experiência com <span>SQL, bancos de dados relacional e Power BI</span>, tendo desenvolvido 
                        dashboards para apoio à tomada de decisão, como redução de centros de custo e identificação de pontos críticos em processos 
                        industriais.
                        <br />
                    </p>
                        <br />
                    <p className={styles.descricao}>
                        Atualmente, venho me aprofundando no <span>desenvolvimento web com React e Node.js</span>, criando soluções que otimizam o dia a dia 
                        de analistas, centralizando arquivos e informações internas da empresa.
                        Sou uma pessoa proativa, com <span>boa comunicação</span> e foco em <span>trabalho em equipe</span>, sempre buscando entregar soluções práticas, eficientes e de impacto real.
                    </p>
                    <p className={styles.loc}><i class="bi bi-geo-alt-fill" style={{marginRight: '5px'}}></i> Ipatinga, Minas Gerais, Brasil</p>
                </div>
            </div>

            {/* Hards Skills */}
            <h2 className={styles.sub_title}>Hard Skills</h2>

            <div className={styles.grid_skills}>

                <div className={styles.grid_cards}>
                    <h4>&lt;/&gt; Front-End</h4>
                    <p><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>Bootstrap</span></p>
                </div>

                <div className={styles.grid_cards}>
                    <h4>&lt;/&gt; Back-End</h4>
                    <p><span>Java</span><span>C#</span><span>AppScript</span><span>NodeJS</span></p>
                </div>

            </div>

            <div className={styles.grid_skills}>

                <div className={styles.grid_cards}>
                    <h4>&lt;/&gt; Ferramentas</h4>
                    <p><span>Figma</span><span>Git</span><span>GitHub</span><span>PowerBI</span></p>
                </div>

                <div className={styles.grid_cards}>
                    <h4>&lt;/&gt; DataBase</h4>
                    <p><span>Firebird</span><span>MySQL</span><span>Oracle</span></p>
                </div>

            </div>

            {/* Soft Skills */}
            <h2 className={styles.sub_title}>Soft Skills</h2>

            <div className={styles.grid_skills}>

                <div className={styles.grid_cards}>
                    <h4>🤝 Comunicação & Colaboração</h4>
                    <p>
                        <span>Trabalho em equipe</span>
                        <span>Comunicação clara</span>
                        <span>Empatia</span>
                        <span>Escuta ativa</span>
                    </p>
                </div>

                <div className={styles.grid_cards}>
                    <h4>🚀 Proatividade & Responsabilidade</h4>
                    <p>
                        <span>Autonomia</span>
                        <span>Comprometimento</span>
                        <span>Gestão do tempo</span>
                        <span>Proatividade</span>
                    </p>
                </div>

                </div>

                <div className={styles.grid_skills}>

                <div className={styles.grid_cards}>
                    <h4>🧠 Pensamento Analítico</h4>
                    <p>
                        <span>Resolução de problemas</span>
                        <span>Pensamento lógico</span>
                        <span>Aprendizado contínuo</span>
                        <span>Curiosidade técnica</span>
                    </p>
                </div>

                <div className={styles.grid_cards}>
                    <h4>💡 Criatividade & Inovação</h4>
                    <p>
                        <span>Inovação</span>
                        <span>Flexibilidade</span>
                        <span>Resiliência</span>
                    </p>
                </div>

            </div>

            {/* Experiências */}
            <h2 className={styles.sub_title}>Experiências</h2>

            <div className={styles.grid}>
                <div className={styles.grid_exp}>
                    <h4>Analista de Suporte Técnico</h4>
                    <div className={styles.info_exp}>
                        <h5>Digifarma Sistemas LTDA</h5>
                        <p><i class="bi bi-calendar4-week" style={{marginRight: '10px'}}></i>Abril 2024 - Atualmente</p>
                    </div>

                    <p>Atendimento ao cliente via chat e telefone, prestando suporte especializado para auxiliar na utilização do sistema e na resolução de erros, manutenção e otimização do bancos de dados, garantindo a integridade e o funcionamento contínuo do sistema. 
                        Atuação na análise e acompanhamento de relatórios fiscais, oferecendo suporte proativo e assegurando a conformidade com as obrigações legais. 
                        Foco em oferecer um atendimento eficiente e de qualidade para os desafios enfrentados pelos clientes.
                        Criação de páginas web com React e Node.js, otimizando tempo na busca e gerenciamento de informações para equipe interna de Suporte.
                    </p>
                </div>

                <div className={styles.grid_exp}>
                    <h4>Estagiário de TI - BackEnd</h4>
                    <div className={styles.info_exp}>
                        <h5>Aperam South America</h5>
                        <p><i class="bi bi-calendar4-week" style={{marginRight: '10px'}}></i>Abril 2023 - Abril 2024</p>
                    </div>
                    

                    <p>Criação de dashboards/ETL/Modelagem em Power BI, no intuito de melhorar a tomada de decisão dos analistas.
                        Desenvolvi um projeto que permitiu a redução e controle de gastos, dos centros de custos interno da Logística Integrada. Controle e rastreabilidade dos recursos utilizados.
                        Extensão AppScript do Google Sheets, criei projetos para otimização de tarefas e filtragem dos dados necessários em planilhas google, reduzindo consideravelmente a manipulação manual dos dados por parte dos analistas.
                        Refinamento de base de dados com SQL Oracle utilizando ferramenta Dbeaver. E ajustes finais nos dados importados para o Power Query (Power BI) em linguagem M.</p>
                </div>

                <div className={styles.grid_exp}>
                    <h4>Atendente</h4>
                    <div className={styles.info_exp}>
                        <h5>Mercearia Bom Jesus</h5>
                        <p><i class="bi bi-calendar4-week" style={{marginRight: '10px'}}></i>Janeiro 2020 - Fevereiro 2022</p>
                    </div>

                    <p>Foco no atendimento ao público, auxiliando pessoas em dúvidas gerais. Repositor de mercadorias, realizando lançamento e conferência de notas fiscais, pagamento de contas, 
                        controle de estoque e organização do ambiente de trabalho. Realizava operação de caixa em alguns momentos. Essa experiência aprimorou minha atenção aos detalhes, 
                        responsabilidade e comunicação com o público.
                    </p>
                </div>
            </div>

            

            {/* Formação Acadêmica */}
            <h2 className={styles.sub_title}>Formação Acadêmica</h2>

            <div className={styles.grid}>
                <div className={styles.grid_exp}>
                    <h4>Engenharia de Software</h4>
                    <div className={styles.info_exp}>
                        <h5>Centro Universitário do Leste de Minas Gerais - Unileste</h5>
                        <p><i class="bi bi-mortarboard" style={{marginRight: '10px'}}></i>Fevereiro 2022 - Dezembro 2025</p>
                    </div>
                    <p>Estou no último ano do curso de Engenharia de Software, onde adquiri conhecimentos sólidos em desenvolvimento de software,
                        metodologias ágeis, análise de sistemas e gestão de projetos. O curso me proporcionou uma base técnica robusta e habilidades práticas para atuar na área de tecnologia.
                    </p>
                </div>

                <div className={styles.grid_exp}>
                    <h4>Ensino Médio</h4>
                    <div className={styles.info_exp}>
                        <h5>Escola Estadual Regina Pacis - MG</h5>
                        <p><i class="bi bi-mortarboard" style={{marginRight: '10px'}}></i>Fevereiro 2019 - Dezembro 2021</p>
                    </div>
                    <p> Conclusão do Ensino Médio.</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Sobre;