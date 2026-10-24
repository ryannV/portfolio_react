import { useState } from 'react';
import styles from './ContactCTA.module.css';

/**
 * Componente ContactCTA - Chamada de alta conversão para recrutadores e gestores técnicos
 * @returns {JSX.Element}
 */
const ContactCTA = () => {
  const [copied, setCopied] = useState(false);

  const downloadCurriculo = () => {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/uc?export=download&id=1SKeTpXmwdRovHNqBdhSKa5MIV-z8EuIV';
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

  return (
    <section className={styles.ctaSection} aria-label="Chamada para Contato e Contratação">
      <div className="interface">
        <div className={styles.ctaCard}>
          <div className={styles.cardGlow} aria-hidden="true" />

          {/* Badge de Disponibilidade Ativa */}
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusText}>
              Disponível para Oportunidades • Full Stack / Front-End
            </span>
          </div>

          {/* Título de Impacto */}
          <h2 className={styles.title}>
            Buscando acelerar seu time com <span>engenharia de ponta?</span>
          </h2>

          <p className={styles.description}>
            Desenvolvedor experiente em criação de ecossistemas web escaláveis com React, Node.js,
            bancos relacionais e automação corporativa. Aberto a contratações CLT, PJ ou projetos de
            alto impacto.
          </p>

          {/* Grupo de Ações de Alta Conversão */}
          <div className={styles.actions}>
            <a
              href="https://wa.me/5533999277685?text=Ol%C3%A1%20Ryann!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20de%20desenvolvimento."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
              aria-label="Abrir conversa no WhatsApp sobre oportunidade profissional"
            >
              <i className="bi bi-whatsapp" aria-hidden="true"></i>
              Conversar no WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/ryann-victor-939b97240/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
              aria-label="Acessar perfil do LinkedIn de Ryann Victor"
            >
              <i className="bi bi-linkedin" aria-hidden="true"></i>
              Conectar no LinkedIn
            </a>

            <button
              type="button"
              className={styles.btnSecondary}
              onClick={downloadCurriculo}
              aria-label="Baixar currículo em formato PDF"
            >
              <i className="bi bi-file-earmark-arrow-down" aria-hidden="true"></i>
              Baixar Currículo (PDF)
            </button>
          </div>

          {/* Linha de Cópia Rápida de E-mail */}
          <div className={styles.emailRow}>
            <span>E-mail direto:</span>
            <span className={styles.emailText}>ryannvictor72@gmail.com</span>
            <button
              type="button"
              className={styles.btnCopyEmail}
              onClick={handleCopyEmail}
              aria-label="Copiar endereço de e-mail"
            >
              <i
                className={`bi ${copied ? 'bi-check2' : 'bi-clipboard'}`}
                aria-hidden="true"
              ></i>
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
