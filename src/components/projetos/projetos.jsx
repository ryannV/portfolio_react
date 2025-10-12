import styles from './Projetos.module.css';

import { useState } from 'react';
import ResumoProjetos from './resumoProjetos/ResumoProjetos';

import LandingPage from '../../assets/images/projeto01-landingpage.png';
import TrailerMario from '../../assets/images/projeto02-supermario.png';
import DigiVPN from '../../assets/images/DigiVPN.png';
import DigiFirebird from '../../assets/images/DigiFirebird.png';
import EmBreve from '../../assets/images/projeto03-embreve.png';

const Projetos = () => {
    const [showModal, setShowModal] = useState(false);
    const [resumoAtivo, setResumoAtivo] = useState('');

    const abrirResumo = (projeto) => {
        setResumoAtivo(projeto);
        setShowModal(true);
    }

    const fecharResumo = () => {
        setShowModal(false);
        setResumoAtivo('');
    }

  return (
    <section className={styles.projetos}>
        <div className={styles.interface}>

            <h2 className={styles.titulo}>Meus<span> Projetos</span></h2>

            <div className={styles.grid}>
                <div className={styles.flex}>
                    <div className={styles.img_port}  style={{backgroundImage: `url(${LandingPage})`}}>
                        <div className={styles.overlay}>L. Page - Newsletter</div>
                    </div>

                    <div className={styles.img_port} style={{backgroundImage: `url(${TrailerMario})`}}>
                        <div className={styles.overlay}>Trailer - Mario Bross</div>
                    </div>

                    <div className={styles.img_port} style={{backgroundImage: `url(${DigiVPN})`}}>
                        <div className={styles.overlay}>DigiVPN</div>
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
                        {/* <button>Visualizar</button> */}
                        <button onClick={() => abrirResumo("DigiVPN")}>Resumo</button>
                        {console.log('resumo ativo é ' + resumoAtivo)}
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.flex}>
                    <div className={styles.img_port}  style={{backgroundImage: `url(${DigiFirebird})`}}>
                        <div className={styles.overlay}>DigiFirebird</div>
                    </div>

                    <div className={styles.img_port} style={{backgroundImage: `url(${EmBreve})`}}>
                        <div className={styles.overlay}>EmBreve</div>
                    </div>

                    <div className={styles.img_port} style={{backgroundImage: `url(${EmBreve})`}}>
                        <div className={styles.overlay}>EmBreve</div>
                    </div>
                </div>

                <div className={styles.flex}>
                    <div className={styles.gap}>
                        {/* <button>Visualizar</button> */}
                        <button onClick={() => abrirResumo("DigiFirebird")}>Resumo</button>
                    </div>


                    <div className={styles.gap}>
                        <a><button>Visualizar</button></a>
                        <a><button>Repositório</button></a>
                    </div>

                    <div className={styles.gap}>
                        <button>Visualizar</button>
                        <button>Repositório</button>
                    </div>
                </div>
            </div>

        </div>

        {/* MODAL */}
        {showModal && (
            <div className={styles.modalFundo}>
                <div className={styles.modalConteudo}>
                    <button className={styles.fechar} onClick={fecharResumo}>✖</button>
                    <h3>Resumo do Projeto</h3>
                    {resumoAtivo && <ResumoProjetos titulo={resumoAtivo}/>}
                </div>
            </div>
        )}
    </section>
  )
}

export default Projetos;