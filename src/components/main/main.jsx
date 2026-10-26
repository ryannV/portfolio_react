import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './main.module.css';
import Ryann from '../../assets/images/eu_legendarios.jpeg';

const TECH_BADGES = [
  { name: 'React', icon: 'bi bi-code-slash' },
  { name: 'Node.js', icon: 'bi bi-server' },
  { name: 'SQL & Relacional', icon: 'bi bi-database' },
  { name: 'JavaScript', icon: 'bi bi-filetype-js' },
  { name: 'Power BI / Analytics', icon: 'bi bi-bar-chart-line' },
  { name: 'Inteligência Artificial', icon: 'bi bi-cpu-fill' },
];

const Main = () => {
  const [copied, setCopied] = useState(false);

  const downloadCurriculo = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1SKeTpXmwdRovHNqBdhSKa5MIV-z8EuIV';
    link.download = 'Curriculo Ryann Victor.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyEmail = async () => {
    const email = 'ryannvictor72@gmail.com';
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  const scrollToFerramentas = () => {
    const ferramentasSection = document.getElementById('ferramentas');
    if (ferramentasSection) {
      ferramentasSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.main}>
      <div className={`interface ${styles.mainInterface}`}>
        <div className={styles.flex}>
          {/* Avatar com Borda Gradiente e Status Pulsante */}
          <div className={styles.perfil_container}>
            <img className={styles.perfil_img} src={Ryann} alt="Foto de perfil de Ryann Victor" />
            <div className={styles.status_online} title="Status: Online"></div>
          </div>

          {/* Textos Principais com Copy Sênior */}
          <div className={styles.txt_main}>
            <h1>Ryann Victor</h1>
            <h2>Desenvolvedor Full Stack</h2>
            <p className={styles.heroSummary}>
              Crio aplicações web para <strong>resolver dores reais</strong> de usuários e{' '}
              <strong>otimizar a gestão</strong> do seu negócio.
            </p>
          </div>

          {/* Badges de Tecnologias Chave */}
          <div className={styles.techBadgesList}>
            {TECH_BADGES.map((tech) => (
              <span key={tech.name} className={styles.techBadge}>
                <i className={tech.icon}></i>
                {tech.name}
              </span>
            ))}
          </div>

          {/* Ações Rápidas (Download CV + Quick Copy Email + Ver Projetos) */}
          <div className={styles.actionsGroup}>
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={downloadCurriculo}
              aria-label="Baixar Currículo em PDF"
            >
              <i className="bi bi-file-earmark-arrow-down"></i>
              Download CV
            </button>

            <button
              type="button"
              className={`${styles.btnSecondary} ${copied ? styles.btnCopied : ''}`}
              onClick={handleCopyEmail}
              aria-label="Copiar endereço de e-mail de contato"
            >
              <i className={copied ? 'bi bi-check2-circle' : 'bi bi-clipboard'}></i>
              {copied ? 'E-mail copiado!' : 'Copiar E-mail'}
            </button>

            <NavLink
              to="/projetos"
              className={styles.btnOutline}
              aria-label="Navegar para a página de projetos"
            >
              <i className="bi bi-grid-fill"></i>
              Ver Projetos
            </NavLink>
          </div>

          {/* Redes Sociais */}
          <div className={styles.btn_social}>
            <a
              href="https://www.linkedin.com/in/ryann-victor-939b97240/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil do LinkedIn"
              className={styles.socialLink}
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/ryannV"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil do GitHub"
              className={styles.socialLink}
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://wa.me/5533999277685?text=Ol%C3%A1%21+Estou+aqui+pelo+seu+portf%C3%B3lio.+%F0%9F%9A%80"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contato direto pelo WhatsApp"
              className={styles.socialLink}
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/ryannvicttor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil do Instagram"
              className={styles.socialLink}
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Indicador de rolagem para a próxima seção */}
        <button
          type="button"
          className={styles.scrollDownIndicator}
          onClick={scrollToFerramentas}
          aria-label="Rolar para a seção de ferramentas"
        >
          <span className={styles.scrollText}>Ferramentas</span>
          <i className={`bi bi-chevron-down ${styles.scrollChevron}`}></i>
        </button>
      </div>
    </section>
  );
};

export default Main;