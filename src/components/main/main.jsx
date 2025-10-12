import styles from './Main.module.css';

import Ryann from '../../assets/images/RV.jpg'

const Main = () => {
    const downloadCurriculo = () => {
        const link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=18NHONNjg6Y1OHsQm4juN7t3SPbc_vAVp";
        link.download = "CV Ryann Victor.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <section className={styles.main}>
        <div className={styles.interface}>

            <div className={styles.flex}>
                <div className={styles.perfil_container}>
                    <img className={styles.perfil_img} src={Ryann} alt="pessoa"/>
                    <div className={styles.status_online}></div>
                </div>

                <div className={styles.txt_main}>
                    <h1>Ryann Victor</h1>
                    <h3>Bem-Vindos ao meu portfolio! </h3>
                    <h4>Aqui você verá minhas experiências, projetos e habilidades.</h4>

                    <div className={styles.btn_contato}>
                        <button onClick={downloadCurriculo}>Download CV</button>
                    </div>
                </div>

                <div className={styles.btn_social}>
                    <a href="https://www.instagram.com/ryannvicttor/"><button><i class="bi bi-instagram" style={{ color: '#fff'}}></i></button></a>
                    <a href="https://www.linkedin.com/in/ryann-victor-939b97240/"><button><i class="bi bi-linkedin" style={{ color: '#fff'}}></i></button></a>
                    <a href="https://github.com/ryannV"><button><i class="bi bi-github" style={{ color: '#fff'}}></i></button></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main;