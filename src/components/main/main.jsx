import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './main.module.css';
import Ryann from '../../assets/images/eu_legendarios.jpeg';

const CODE_SNIPPET = `// developer.profile.ts
export const developer: FullStackEngineer = {
  name: "Ryann Victor",
  role: "Full Stack Developer",
  education: "Engenharia de Software (Unileste)",
  status: "Disponível para novas oportunidades ⚡",
  coreStack: {
    frontend: ["React 19", "JavaScript (ESM)", "CSS Modules", "Vite"],
    backend: ["Node.js", "Python", "REST APIs", "C#"],
    databases: ["PostgreSQL", "Supabase", "Firebird", "MySQL"],
  },
  principles: ["Código Limpo", "Alta Performance", "UX Orientada a Negócio"]
};`;

const TERMINAL_LOGS = [
  { cmd: 'ryann --status', out: 'Online • Aberto a projetos e contratação' },
  { cmd: 'ryann stack --primary', out: 'React 19, Node.js, Python, Supabase, SQL' },
  { cmd: 'ryann build --target', out: '✔ Web & Mobile PWA prontos para produção (0 erros)' },
];

const Main = () => {
  const [copied, setCopied] = useState(false);
  const [snippetCopied, setSnippetCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('config'); // 'config' | 'terminal'

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

  const handleCopySnippet = useCallback(async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(CODE_SNIPPET);
      }
      setSnippetCopied(true);
      setTimeout(() => setSnippetCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar código:', err);
    }
  }, []);

  const scrollToFerramentas = () => {
    const ferramentasSection = document.getElementById('ferramentas');
    if (ferramentasSection) {
      ferramentasSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.main}>
      <div className={`interface ${styles.mainInterface}`}>
        {/* Badge Flutuante de Disponibilidade */}
        <div className={styles.statusPillWrapper}>
          <div className={styles.statusPill}>
            <span className={styles.pulseDot}></span>
            <span className={styles.statusTextDesktop}>Disponível para novos projetos &amp; contratação</span>
            <span className={styles.statusTextMobile}>Disponível para projetos</span>
          </div>
        </div>

        {/* Hero Grid Asimétrico: Perfil + Terminal Interativo */}
        <div className={styles.heroGrid}>
          {/* Coluna Esquerda: Apresentação e CTA */}
          <div className={styles.heroLeft}>
            {/* Header com Avatar Cyber e Metadados */}
            <div className={styles.profileBadge}>
              <div className={styles.avatarFrame}>
                <img className={styles.avatarImg} src={Ryann} alt="Foto de perfil de Ryann Victor" />
                <span className={styles.avatarStatusDot} title="Online"></span>
              </div>
              <div className={styles.profileMeta}>
                <span className={styles.profileTitle}>Bacharel em Engenharia de Software</span>
                <span className={styles.profileLoc}>
                  <i className="bi bi-geo-alt-fill"></i> Ipatinga, MG • Brasil
                </span>
              </div>
            </div>

            {/* Tipografia de Impacto */}
            <div className={styles.txt_main}>
              <h1 className={styles.heroName}>Ryann Victor</h1>
              <h2 className={styles.heroRole}>
                Desenvolvedor <span>Full Stack</span>
              </h2>
              <p className={styles.heroSummary}>
                Desenvolvo aplicações completas — do banco ao front-end interativo — unindo{' '}
                <strong>React, Node.js, Python e bancos relacionais</strong> a código limpo e arquitetura escalável.
              </p>
            </div>

            {/* Telemetria de Métricas Rápidas */}
            <div className={styles.telemetryBar}>
              <div className={styles.telemetryItem}>
                <span className={styles.telemetryNum}>+3</span>
                <span className={styles.telemetryLabel}>Anos Prática</span>
              </div>
              <div className={styles.telemetryDivider}></div>
              <div className={styles.telemetryItem}>
                <span className={styles.telemetryNum}>Full Stack</span>
                <span className={styles.telemetryLabel}>Web &amp; PWA</span>
              </div>
              <div className={styles.telemetryDivider}></div>
              <div className={styles.telemetryItem}>
                <span className={styles.telemetryNum}>SQL &amp; BaaS</span>
                <span className={styles.telemetryLabel}>Bancos &amp; APIs</span>
              </div>
            </div>

            {/* Ações Primárias */}
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

          {/* Coluna Direita: Console / Terminal HUD Interativo */}
          <div className={styles.heroRight}>
            <div className={styles.terminalWindow}>
              {/* Top Chrome do Terminal */}
              <div className={styles.terminalHeader}>
                <div className={styles.terminalControls}>
                  <span className={`${styles.controlDot} ${styles.dotClose}`}></span>
                  <span className={`${styles.controlDot} ${styles.dotMin}`}></span>
                  <span className={`${styles.controlDot} ${styles.dotMax}`}></span>
                </div>

                <div className={styles.terminalTabs}>
                  <button
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === 'config' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('config')}
                  >
                    <i className="bi bi-filetype-tsx"></i>
                    <span>ryann.config.ts</span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.tabBtn} ${activeTab === 'terminal' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('terminal')}
                  >
                    <i className="bi bi-terminal-fill"></i>
                    <span>terminal.sh</span>
                  </button>
                </div>

                <button
                  type="button"
                  className={styles.btnCopyCode}
                  onClick={handleCopySnippet}
                  title="Copiar snippet de código"
                  aria-label="Copiar snippet de código"
                >
                  <i className={snippetCopied ? 'bi bi-check2' : 'bi bi-clipboard'}></i>
                  <span>{snippetCopied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              {/* Corpo do Terminal */}
              <div className={styles.terminalBody}>
                {activeTab === 'config' ? (
                  <pre className={styles.codeBlock}>
                    <code>
                      <span className={styles.cComment}>// developer.profile.ts</span>
                      {'\n'}
                      <span className={styles.cKeyword}>export const</span>{' '}
                      <span className={styles.cConst}>developer</span>:{' '}
                      <span className={styles.cType}>FullStackEngineer</span> = {'{'}
                      {'\n  '}
                      <span className={styles.cKey}>name</span>:{' '}
                      <span className={styles.cString}>"Ryann Victor"</span>,
                      {'\n  '}
                      <span className={styles.cKey}>role</span>:{' '}
                      <span className={styles.cString}>"Full Stack Developer"</span>,
                      {'\n  '}
                      <span className={styles.cKey}>education</span>:{' '}
                      <span className={styles.cString}>"Engenharia de Software (Unileste)"</span>,
                      {'\n  '}
                      <span className={styles.cKey}>status</span>:{' '}
                      <span className={styles.cString}>"Disponível para novos desafios ⚡"</span>,
                      {'\n  '}
                      <span className={styles.cKey}>coreStack</span>: {'{'}
                      {'\n    '}
                      <span className={styles.cKey}>frontend</span>: [
                      <span className={styles.cString}>"React 19"</span>,{' '}
                      <span className={styles.cString}>"JavaScript"</span>,{' '}
                      <span className={styles.cString}>"CSS Modules"</span>,{' '}
                      <span className={styles.cString}>"Vite"</span>],
                      {'\n    '}
                      <span className={styles.cKey}>backend</span>: [
                      <span className={styles.cString}>"Node.js"</span>,{' '}
                      <span className={styles.cString}>"Python"</span>,{' '}
                      <span className={styles.cString}>"REST APIs"</span>],
                      {'\n    '}
                      <span className={styles.cKey}>databases</span>: [
                      <span className={styles.cString}>"PostgreSQL"</span>,{' '}
                      <span className={styles.cString}>"Supabase"</span>,{' '}
                      <span className={styles.cString}>"Firebird"</span>,{' '}
                      <span className={styles.cString}>"MySQL"</span>],
                      {'\n  }'},
                      {'\n  '}
                      <span className={styles.cKey}>principles</span>: [
                      <span className={styles.cString}>"Código Limpo"</span>,{' '}
                      <span className={styles.cString}>"Alta Performance"</span>,{' '}
                      <span className={styles.cString}>"UX Intuitiva"</span>]
                      {'\n}'};
                    </code>
                  </pre>
                ) : (
                  <div className={styles.shellTerminal}>
                    {TERMINAL_LOGS.map((log, idx) => (
                      <div key={idx} className={styles.shellLine}>
                        <div className={styles.shellPrompt}>
                          <span className={styles.shellUser}>ryann@portfolio</span>
                          <span className={styles.shellSep}>:</span>
                          <span className={styles.shellPath}>~</span>
                          <span className={styles.shellDollar}>$</span>
                          <span className={styles.shellCmd}>{log.cmd}</span>
                        </div>
                        <div className={styles.shellOutput}>{log.out}</div>
                      </div>
                    ))}
                    <div className={styles.shellPromptActive}>
                      <span className={styles.shellUser}>ryann@portfolio</span>
                      <span className={styles.shellSep}>:</span>
                      <span className={styles.shellPath}>~</span>
                      <span className={styles.shellDollar}>$</span>
                      <span className={styles.cursorBlink}>█</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de rolagem */}
        <button
          type="button"
          className={styles.scrollDownIndicator}
          onClick={scrollToFerramentas}
          aria-label="Rolar para a seção de ferramentas"
        >
          <span className={styles.scrollText}>Explorar Stack</span>
          <i className={`bi bi-chevron-down ${styles.scrollChevron}`}></i>
        </button>
      </div>
    </section>
  );
};

export default Main;