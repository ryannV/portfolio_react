import { useState, useMemo } from 'react';
import styles from './ferramentas.module.css';

import HTML5 from '../../assets/icons/html.svg';
import CSS3 from '../../assets/icons/css3.svg';
import JS from '../../assets/icons/javascript.svg';
import Java from '../../assets/icons/java.svg';
import Appscript from '../../assets/icons/appscript.png';
import Git from '../../assets/icons/git.svg';
import MySQL from '../../assets/icons/mysql.svg';
import Oracle from '../../assets/icons/database.svg';
import PowerBI from '../../assets/icons/powerbi.svg';
import ReactIcon from '../../assets/icons/react.svg';
import NodeJS from '../../assets/icons/node.svg';
import Python from '../../assets/icons/python.svg';
import Figma from '../../assets/icons/figma.svg';
import Bootstrap from '../../assets/icons/bootstrap.svg';
import Csharp from '../../assets/icons/csharp.svg';
import Firebird from '../../assets/icons/firebird.svg';
import GitHub from '../../assets/icons/github.svg';
import Supabase from '../../assets/icons/supabase.svg';

/**
 * Definição dos pilares técnicos de engenharia e suas respectivas tecnologias
 */
const TECH_PILLARS = [
  {
    id: 'frontend',
    title: 'Front-End & Interfaces',
    icon: 'bi bi-window-fullscreen',
    description:
      'Aplicações reativas, componentização escalável, acessibilidade semântica e design tokens modernos.',
    items: [
      { name: 'React', type: 'image', icon: ReactIcon, tag: 'Principal Stack' },
      { name: 'JavaScript', type: 'image', icon: JS, tag: 'Linguagem Core' },
      { name: 'CSS', type: 'image', icon: CSS3, tag: 'Design System' },
      { name: 'HTML5', type: 'image', icon: HTML5, tag: 'SEO & Semântica' },
      { name: 'Vite & Mobile PWA', type: 'icon', icon: 'bi bi-lightning-charge-fill', tag: 'Build & PWA' },
      { name: 'Bootstrap', type: 'image', icon: Bootstrap, tag: 'Produtividade UI' },
      { name: 'Figma', type: 'image', icon: Figma, tag: 'Prototipagem UI' },
    ],
  },
  {
    id: 'backend',
    title: 'Back-End & Automação',
    icon: 'bi bi-server',
    description:
      'Construção de serviços, regras de negócio seguras, rotinas de integração assíncronas e scripts corporativos.',
    items: [
      { name: 'Node.js', type: 'image', icon: NodeJS, tag: 'APIs & Microserviços' },
      { name: 'Python', type: 'image', icon: Python, tag: 'Back-End & Scripts' },
      { name: 'REST APIs', type: 'icon', icon: 'bi bi-arrow-left-right', tag: 'Endpoints & JSON' },
      { name: 'Google Apps Script', type: 'image', icon: Appscript, tag: 'Automação Corporativa' },
      { name: 'Java', type: 'image', icon: Java, tag: 'Back-End & POO' },
      { name: 'C#', type: 'image', icon: Csharp, tag: 'Aplicações & Desktop' },
    ],
  },
  {
    id: 'database',
    title: 'Bancos de Dados & Analytics',
    icon: 'bi bi-database-fill-gear',
    description:
      'Modelagem relacional, otimização de consultas SQL, auditoria contínua e modelagem de indicadores.',
    items: [
      { name: 'Firebird SQL', type: 'image', icon: Firebird, tag: 'SQL Corporativas' },
      { name: 'MySQL', type: 'image', icon: MySQL, tag: 'Bases Relacionais' },
      { name: 'Oracle SQL', type: 'image', icon: Oracle, tag: 'SQL Corporativas' },
      { name: 'Power BI (DAX / M)', type: 'image', icon: PowerBI, tag: 'Gestão de Dados' },
      { name: 'Supabase', type: 'image', icon: Supabase, tag: 'BaaS & PostgreSQL' },
    ],
  },
  {
    id: 'devops',
    title: 'Engenharia, Qualidade & Tooling',
    icon: 'bi bi-terminal-split',
    description:
      'Fluxos de versionamento em equipe, testes de endpoints e diagnósticos avançados.',
    items: [
      { name: 'Git', type: 'image', icon: Git, tag: 'Controle de Versão' },
      { name: 'GitHub', type: 'image', icon: GitHub, tag: 'Deploy & CI/CD' },
      { name: 'DBeaver', type: 'icon', icon: 'bi bi-database-check', tag: 'Gestão Multibanco' },
      { name: 'Postman', type: 'icon', icon: 'bi bi-send-check-fill', tag: 'Testes de APIs' },
    ],
  },
  {
    id: 'ia',
    title: 'Inteligência Artificial',
    icon: 'bi bi-cpu-fill',
    description:
      'Uso prático de IA generativa para acelerar desenvolvimento, engenharia de prompt e automações cognitivas.',
    items: [
      { name: 'Engenharia de Prompt', type: 'icon', icon: 'bi bi-chat-square-dots-fill', tag: 'LLM & Workflows' },
      { name: 'Gemini', type: 'icon', icon: 'bi bi-stars', tag: 'Google AI' },
      { name: 'ChatGPT', type: 'icon', icon: 'bi bi-robot', tag: 'OpenAI' },
      { name: 'Claude', type: 'icon', icon: 'bi bi-lightning-fill', tag: 'Anthropic' },
      { name: 'GitHub Copilot', type: 'icon', icon: 'bi bi-git', tag: 'Code Assist' },
    ],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Todas as Áreas' },
  { id: 'frontend', label: 'Front-End' },
  { id: 'backend', label: 'Back-End & Automação' },
  { id: 'database', label: 'Bancos & Analytics' },
  { id: 'devops', label: 'Engenharia & Tooling' },
  { id: 'ia', label: 'Inteligência Artificial' },
];

/**
 * Componente Ferramentas - Apresentação estruturada por pilares técnicos
 * @returns {JSX.Element}
 */
const Ferramentas = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPillars = useMemo(() => {
    if (activeCategory === 'all') return TECH_PILLARS;
    return TECH_PILLARS.filter((pillar) => pillar.id === activeCategory);
  }, [activeCategory]);

  return (
    <section id="ferramentas" className={styles.ferramentas} aria-label="Stack Técnica e Ferramentas">
      <div className="interface">
        {/* Cabeçalho da Seção */}
        <header className={styles.header}>
          <h2 className={styles.titulo}>
            Stack Técnica &amp; <span>Arquitetura</span>
          </h2>
          <p className={styles.descricao}>
            Organização por competências da minha atuação prática — de interfaces reativas e APIs
            desacopladas até modelagem de bancos relacionais e inteligência de dados.
          </p>
        </header>

        {/* Abas de Filtro */}
        <div className={styles.filterTabs} role="tablist" aria-label="Filtro de competências">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? TECH_PILLARS.reduce((acc, p) => acc + p.items.length, 0)
                : TECH_PILLARS.find((p) => p.id === cat.id)?.items.length || 0;
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

        {/* Pilares Arquiteturais */}
        <div className={styles.pillarsContainer}>
          {filteredPillars.map((pillar) => (
            <article key={pillar.id} className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <div className={styles.pillarTitleRow}>
                  <div className={styles.pillarIconWrapper}>
                    <i className={pillar.icon} aria-hidden="true"></i>
                  </div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                </div>
                <p className={styles.pillarDescription}>{pillar.description}</p>
              </div>

              {/* Grid de Itens Técnicos */}
              <div className={styles.techGrid}>
                {pillar.items.map((tech) => (
                  <div key={tech.name} className={styles.techItem}>
                    <div className={styles.techIconBox}>
                      {tech.type === 'image' ? (
                        <img
                          src={tech.icon}
                          alt={`Ícone de ${tech.name}`}
                          className={styles.techImg}
                          loading="lazy"
                        />
                      ) : (
                        <i className={`${tech.icon} ${styles.techFontIcon}`} aria-hidden="true"></i>
                      )}
                    </div>

                    <div className={styles.techContent}>
                      <span className={styles.techName} title={tech.name}>
                        {tech.name}
                      </span>
                      <span className={styles.techTag} title={tech.tag}>
                        {tech.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ferramentas;