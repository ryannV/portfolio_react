import styles from './Projetos.module.css';

import { useState } from 'react';
import ResumoProjetos from './resumoProjetos/ResumoProjetos';

import LandingPage from '../../assets/images/projeto01-landingpage.png';
import TrailerMario from '../../assets/images/projeto02-supermario.png';
import DigiVPN from '../../assets/images/DigiVPN.png';
import DigiFirebird from '../../assets/images/DigiFirebird.png';
import EmBreve from '../../assets/images/projeto03-embreve.png';
import CRUDUsuarios from '../../assets/images/CRUD_USUARIOS.png';
import MINIBLOG from '../../assets/images/MINI_BLOG.png';

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
        <div className='interface'>

            <h2 className={styles.titulo}>Meus<span> Projetos</span></h2>

            {/* 1° Grid */}
            <div className={styles.grid}>

                <div className={styles.flex}>
                    {/* Image Overlay */}
                    <div className={styles.img_port} style={{backgroundImage: `url(${CRUDUsuarios})`}}>
                        <div className={styles.overlay}>CRUD Usuarios</div>
                    </div>

                    {/* Botões */}
                    <div className={styles.gap}>
                        <a><button>Visualizar</button></a>
                        <a href='https://github.com/ryannV/crud_cadastro_usuario'><button>Repositório</button></a>
                    </div>
                </div>

                <div className={styles.flex}>
                    {/* Image Overlay */}
                    <div className={styles.img_port} style={{backgroundImage: `url(${MINIBLOG})`}}>
                        <div className={styles.overlay}>MiniBlog</div>
                    </div>

                    {/* Botões */}
                    <div className={styles.gap}>
                        <a href='https://ryannv.github.io/mini_blog/#/'><button>Visualizar</button></a>
                        <a href='https://github.com/ryannV/mini_blog'><button>Repositório</button></a>
                    </div>
                </div>

                <div className={styles.flex}>
                    {/* Image Overlay */}
                    <div className={styles.img_port} style={{backgroundImage: `url(${DigiVPN})`}}>
                        <div className={styles.overlay}>DigiVPN</div>
                    </div>

                    {/* Botões */}
                    <div className={styles.gap}>
                        <button onClick={() => abrirResumo("DigiVPN")}>Resumo</button>
                        {console.log('resumo ativo é ' + resumoAtivo)}
                    </div>
                </div>
                
             </div>

            {/* 2° Grid */}
            <div className={styles.grid}>
                <div className={styles.flex}>

                    {/* Image Overlay */}
                    <div className={styles.img_port}  style={{backgroundImage: `url(${DigiFirebird})`}}>
                        <div className={styles.overlay}>DigiFirebird</div>
                    </div>

                    {/* Botões */}
                    <div className={styles.gap}>
                        <button onClick={() => abrirResumo("DigiFirebird")}>Resumo</button>
                    </div>
                </div>

                <div className={styles.flex}>

                    {/* Image Overlay */}
                    <div className={styles.img_port}  style={{backgroundImage: `url(${LandingPage})`}}>
                        <div className={styles.overlay}>L. Page - Newsletter</div>
                    </div>

                    {/* Botões */}
                    <div className={styles.gap}>
                        <a href="https://ryannv.github.io/landingPageNewsletter/"><button>Visualizar</button></a>
                        <a href="https://github.com/ryannV/landingPageNewsletter"><button>Repositório</button></a>
                    </div>
                </div>

                <div className={styles.flex}>

                    {/* Image Overlay */}
                    <div className={styles.img_port} style={{backgroundImage: `url(${TrailerMario})`}}>
                        <div className={styles.overlay}>Trailer - Mario Bross</div>
                    </div>

                    {/* Botões */}
                    <div className={styles.gap}>
                        <a href="https://ryannv.github.io/trailer-super-mario/"><button>Visualizar</button></a>
                        <a href="https://github.com/ryannV/trailer-super-mario"><button>Repositório</button></a>
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