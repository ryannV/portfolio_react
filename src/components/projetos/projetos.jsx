import { useState, useEffect, useMemo } from 'react';
import styles from './projetos.module.css';
import ResumoProjetos from './resumoProjetos/ResumoProjetos';

import LandingPage from '../../assets/images/projeto01-landingpage.webp';
import TrailerMario from '../../assets/images/projeto02-supermario.webp';
import DigiVPN from '../../assets/images/DigiVPN.webp';
import DigiFirebird from '../../assets/images/DigiFirebird.webp';
import CRUDUsuarios from '../../assets/images/CRUD_USUARIOS.webp';
import MINIBLOG from '../../assets/images/MINI_BLOG.webp';

const CATEGORIES = [
  { id: 'all', label: 'Todos os Projetos' },
  { id: 'corporate', label: 'Case Studies Corporativos' },
  { id: 'fullstack', label: 'Full Stack & APIs' },
  { id: 'frontend', label: 'Frontend & UI Labs' },
];

const PROJETOS_DATA = [
  {
    id: 'digivpn',
    title: 'DigiVPN',
    categories: ['corporate', 'fullstack'],
    badge: 'Corporativo • Rede & Automação',
    description:
      'Solução interna corporativa para centralização, auditoria e automação de solicitações de arquivos de VPN com disparo de e-mails.',
    tags: ['React', 'Node.js', 'Rede Interna', 'Automação', 'Email Service'],
    image: DigiVPN,
    repoUrl: null,
    deployUrl: null,
    resumoKey: 'DigiVPN',
  },
  {
    id: 'digifirebird',
    title: 'DigiFirebird',
    categories: ['corporate', 'fullstack'],
    badge: 'Corporativo • Dados & Serverless',
    description:
      'Painel de controle de versões do banco de dados Firebird integrado à API do Google Apps Script para suporte técnico.',
    tags: ['React', 'Google Apps Script', 'Firebird', 'Sheets API', 'Auditoria'],
    image: DigiFirebird,
    repoUrl: null,
    deployUrl: null,
    resumoKey: 'DigiFirebird',
  },
  {
    id: 'crud-usuarios',
    title: 'CRUD de Usuários',
    categories: ['fullstack'],
    badge: 'Full Stack • REST API',
    description:
      'Sistema full stack para gestão cadastral com operações assíncronas, validações em tempo real e arquitetura desacoplada.',
    tags: ['React', 'Node.js', 'Express', 'REST API', 'CSS Modules'],
    image: CRUDUsuarios,
    repoUrl: 'https://github.com/ryannV/crud_cadastro_usuario',
    deployUrl: null,
    resumoKey: 'CRUDUsuarios',
  },
  {
    id: 'miniblog',
    title: 'MiniBlog',
    categories: ['fullstack', 'frontend'],
    badge: 'Full Stack • SPA & Cloud',
    description:
      'Plataforma interativa para criação e leitura de publicações, com autenticação Firebase, busca por tags e feed dinâmico.',
    tags: ['React 19', 'Firebase Auth', 'Firestore NoSQL', 'SPA', 'Router v7'],
    image: MINIBLOG,
    repoUrl: 'https://github.com/ryannV/mini_blog',
    deployUrl: 'https://ryannv.github.io/mini_blog/#/',
    resumoKey: 'MiniBlog',
  },
  {
    id: 'landingpage',
    title: 'Landing Page Newsletter',
    categories: ['frontend'],
    badge: 'Frontend & UI Lab',
    description:
      'Página promocional de alta conversão estruturada com design responsivo, tipografia elegante e foco em captação de leads.',
    tags: ['HTML5 Semântico', 'CSS3 Moderno', 'JavaScript', 'Mobile-First', 'UI/UX'],
    image: LandingPage,
    repoUrl: 'https://github.com/ryannV/landingPageNewsletter',
    deployUrl: 'https://ryannv.github.io/landingPageNewsletter/',
    resumoKey: null,
  },
  {
    id: 'supermario',
    title: 'Trailer Super Mario',
    categories: ['frontend'],
    badge: 'Frontend & Mídia Lab',
    description:
      'Experiência web temática com reprodução de vídeo promocional, modal controlado por DOM e animações em CSS.',
    tags: ['JavaScript ES6+', 'HTML5 Video', 'CSS Animations', 'DOM API'],
    image: TrailerMario,
    repoUrl: 'https://github.com/ryannV/trailer-super-mario',
    deployUrl: 'https://ryannv.github.io/trailer-super-mario/',
    resumoKey: null,
  },
];

const Projetos = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [resumoAtivo, setResumoAtivo] = useState('');

  const abrirResumo = (projetoKey) => {
    setResumoAtivo(projetoKey);
    setShowModal(true);
  };

  const fecharResumo = () => {
    setShowModal(false);
    setResumoAtivo('');
  };

  // Fechar modal ao pressionar ESC e travar scroll do body
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') fecharResumo();
    };

    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [showModal]);

  // Efeito Spotlight: atualiza variáveis CSS do cursor relativas ao card
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJETOS_DATA;
    return PROJETOS_DATA.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section className={styles.projetos} aria-label="Projetos e Estudos de Caso">
      <div className="interface">
        <header className={styles.header}>
          <h2 className={styles.titulo}>
            Projetos &amp; <span>Case Studies</span>
          </h2>
          <p className={styles.subtitulo}>
            Sistemas corporativos em produção e aplicações full stack desenvolvidas com foco em
            arquitetura limpa, segurança, escalabilidade e resolução de problemas reais.
          </p>
        </header>

        {/* Filtros por Categoria */}
        <div className={styles.filterTabs} role="tablist" aria-label="Filtro de projetos">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? PROJETOS_DATA.length
                : PROJETOS_DATA.filter((p) => p.categories.includes(cat.id)).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterTab} ${isActive ? styles.filterTabActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className={styles.counterBadge}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Grid de Projetos com Spotlight */}
        <div className={styles.grid}>
          {filteredProjects.map((projeto) => (
            <article
              key={projeto.id}
              className={styles.card}
              onMouseMove={handleMouseMove}
              aria-label={`Projeto ${projeto.title}`}
            >
              {/* Preview da Imagem com Scroll Suave no Hover */}
              <div className={styles.cardImageContainer}>
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${projeto.image})` }}
                  role="img"
                  aria-label={`Prévia visual de ${projeto.title}`}
                />
                <span className={styles.cardBadgeOverlay}>{projeto.badge}</span>
              </div>

              {/* Informações Técnicas e Conteúdo */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{projeto.title}</h3>
                <p className={styles.cardDescription}>{projeto.description}</p>

                {/* Tags de Tecnologias */}
                <div className={styles.tagsList}>
                  {projeto.tags.map((tag) => (
                    <span key={tag} className={styles.tagPill}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botões de Ação com Hierarquia Sênior */}
                <div className={styles.cardActions}>
                  {projeto.resumoKey && (
                    <button
                      type="button"
                      className={styles.btnActionPrimary}
                      onClick={() => abrirResumo(projeto.resumoKey)}
                      aria-label={`Ver case study e arquitetura técnica do projeto ${projeto.title}`}
                    >
                      <i className="bi bi-diagram-3-fill" aria-hidden="true"></i>
                      Case Study
                    </button>
                  )}

                  {projeto.deployUrl && (
                    <a
                      href={projeto.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={projeto.resumoKey ? styles.btnActionSecondary : styles.btnActionPrimary}
                      aria-label={`Abrir aplicação online de ${projeto.title}`}
                    >
                      <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                      Visualizar
                    </a>
                  )}

                  {projeto.repoUrl && (
                    <a
                      href={projeto.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnActionSecondary}
                      aria-label={`Acessar código-fonte de ${projeto.title} no GitHub`}
                    >
                      <i className="bi bi-github" aria-hidden="true"></i>
                      Repositório
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL DE CASE STUDY & ARQUITETURA */}
      {showModal && (
        <div className={styles.modalFundo} onClick={fecharResumo}>
          <div
            className={styles.modalConteudo}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
          >
            <button
              className={styles.fechar}
              onClick={fecharResumo}
              aria-label="Fechar modal de case study"
            >
              <i className="bi bi-x-lg" aria-hidden="true"></i>
            </button>
            <h3 id="modal-titulo" className={styles.modalTituloHeader}>
              Estudo de Caso &amp; Arquitetura Técnica
            </h3>
            {resumoAtivo && <ResumoProjetos titulo={resumoAtivo} />}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projetos;