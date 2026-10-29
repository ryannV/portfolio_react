import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './sobre.module.css';
import Ryann from '../../assets/images/eu_solo_cortado.webp';
import diplomaFrente from '../../assets/images/diploma_frente.webp';
import diplomaVerso from '../../assets/images/diploma_verso.webp';

const DIPLOMA_PAGES = [
  {
    id: 'frente',
    titulo: 'Frente Oficial',
    subtitulo: 'Concessão do Grau de Bacharel',
    src: diplomaFrente,
  },
  {
    id: 'verso',
    titulo: 'Verso & Registro MEC',
    subtitulo: 'Livro GP_2023 • Portaria e QR Code',
    src: diplomaVerso,
  },
];

const EXPERIENCIAS = [
  {
    id: 'digifarma',
    cargo: 'Analista de Suporte Técnico & Desenvolvedor Web',
    empresa: 'Digifarma Sistemas LTDA',
    periodo: 'Abril 2024 - Presente',
    statusBadge: 'Atuação Atual',
    descricao:
      'Atuo como Analista de Suporte, prestando atendimento técnico a clientes, realizando manutenção e otimização de bancos de dados e apoiando processos fiscais. Também desenvolvo ferramentas web internas com React e Node.js para centralizar informações e otimizar os processos da equipe de Suporte, aumentando a agilidade na consulta e no gerenciamento de dados.',
    metricas: [
      {
        icon: 'bi bi-lightning-charge-fill',
        label: 'Aplicações Web Internas',
        valor: 'React & Node.js',
        detalhe:
          'Desenvolvimento do DigiVPN e DigiFirebird, reduzindo o tempo de atendimento e centralizando auditorias técnicas da equipe.',
      },
      {
        icon: 'bi bi-database-check',
        label: 'Bancos Relacionais',
        valor: 'Firebird & MySQL',
        detalhe:
          'Diagnóstico de queries, manutenção preventiva e garantia da integridade contínua de bases de dados de clientes.',
      },
      {
        icon: 'bi bi-shield-check',
        label: 'Conformidade Fiscal',
        valor: 'Obrigações Fiscais',
        detalhe:
          'Acompanhamento e validação contínua de relatórios fiscais, assegurando alinhamento total com as exigências legais.',
      },
    ],
    tags: ['React', 'Node.js', 'Firebird SQL', 'MySQL', 'Suporte Técnico', 'Regras Fiscais'],
  },
  {
    id: 'aperam',
    cargo: 'Estagiário de TI (Back-End & Analytics)',
    empresa: 'Aperam South America',
    periodo: 'Abril 2023 - Abril 2024',
    statusBadge: '1 ano',
    descricao:
      'Atuação estratégica na área de Logística Integrada, desenvolvendo soluções de automação e inteligência de dados com foco em redução de desperdícios e apoio direto à tomada de decisão de gestores industriais.',
    metricas: [
      {
        icon: 'bi bi-graph-up-arrow',
        label: 'Gestão Orçamentária',
        valor: 'Redução de Custos',
        detalhe:
          'Modelagem e ETL de dashboards em Power BI para controle e rastreabilidade dos centros de custos da logística.',
      },
      {
        icon: 'bi bi-cpu-fill',
        label: 'Automação de Tarefas',
        valor: 'Google Apps Script',
        detalhe:
          'Desenvolvimento de scripts de automação para planilhas, eliminando processos manuais repetitivos de analistas.',
      },
      {
        icon: 'bi bi-search',
        label: 'Engenharia de Dados',
        valor: 'SQL Oracle & M',
        detalhe:
          'Refinamento de bases via DBeaver (Oracle SQL) e transformações de dados em escala com Linguagem M no Power Query.',
      },
    ],
    tags: ['Power BI', 'SQL Oracle', 'Google Apps Script', 'ETL / Modelagem', 'Linguagem M', 'DBeaver'],
  },
  {
    id: 'mercearia',
    cargo: 'Atendimento & Operações Comerciais',
    empresa: 'Mercearia Bom Jesus',
    periodo: 'Janeiro 2020 - Fevereiro 2022',
    statusBadge: '2 anos',
    descricao:
      'Atendimento diário ao público com ênfase em comunicação clara, resolução de problemas cotidianos e rotinas administrativas essenciais ao funcionamento do negócio.',
    metricas: [
      {
        icon: 'bi bi-cash-stack',
        label: 'Operações de Caixa',
        valor: 'Gestão Financeira',
        detalhe:
          'Lançamento de notas fiscais, conferência de pagamentos e conciliação de fluxo diário de caixa.',
      },
      {
        icon: 'bi bi-boxes',
        label: 'Controle de Estoque',
        valor: 'Organização Logística',
        detalhe:
          'Recebimento e conferência de inventário, organização do ambiente e controle de entrada/saída de mercadorias.',
      },
      {
        icon: 'bi bi-chat-heart-fill',
        label: 'Relacionamento',
        valor: 'Comunicação Clara',
        detalhe:
          'Atendimento humanizado, escuta ativa e agilidade no relacionamento e fidelização com o público.',
      },
    ],
    tags: ['Comunicação Interpessoal', 'Gestão Operacional', 'Organização', 'Trabalho em Equipe'],
  },
];

const FORMACAO = [
  {
    id: 'unileste',
    curso: 'Engenharia de Software',
    instituicao: 'Centro Universitário Católica do Leste de Minas Gerais (Unileste)',
    periodo: 'Fevereiro 2022 - Dezembro 2025',
    statusBadge: 'Concluído',
    temDiploma: true,
    descricao:
      'Formação sólida abrangendo o ciclo completo de engenharia de software: arquitetura, desenvolvimento web moderno, modelagem de banco de dados, metodologias ágeis e gestão de projetos tecnológicos.',
    destaques: [
      'Arquitetura de Software',
      'Metodologias Ágeis (Scrum/Kanban)',
      'Engenharia de Requisitos',
      'Estruturas de Dados & Algoritmos',
    ],
  },
  {
    id: 'ensino-medio',
    curso: 'Ensino Médio',
    instituicao: 'Escola Estadual Regina Pacis - MG',
    periodo: 'Fevereiro 2019 - Dezembro 2021',
    statusBadge: 'Concluído',
    temDiploma: false,
    descricao:
      'Conclusão da formação no ensino médio.',
    destaques: ['Formação Geral', 'Raciocínio Lógico', 'Comunicação'],
  },
];

/**
 * Modal de visualização de diploma com renderização protegida em HTML5 Canvas.
 * Bloqueia extração direta, download de arquivo original, print, context menu e atalhos de sistema.
 * @param {{ onClose: () => void }} props
 * @returns {JSX.Element}
 */
const DiplomaModal = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef(null);

  // Renderização protegida no Canvas
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const img = new Image();
    img.src = DIPLOMA_PAGES[currentPage].src;

    img.onload = () => {
      if (!isMounted) return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Marca d'água de proteção anti-tamper diagonal contínua
      ctx.save();
      ctx.font = '600 20px "Space Grotesk", sans-serif';
      ctx.fillStyle = 'rgba(239, 35, 60, 0.12)';
      ctx.rotate((-20 * Math.PI) / 180);

      const stepX = 480;
      const stepY = 160;
      for (let x = -canvas.width; x < canvas.width * 2; x += stepX) {
        for (let y = -canvas.height; y < canvas.height * 2; y += stepY) {
          ctx.fillText('PORTFÓLIO RYANN VICTOR • CÓPIA DE VISUALIZAÇÃO • UNILESTE', x, y);
        }
      }
      ctx.restore();

      // Faixa inferior informativa de segurança digital
      ctx.fillStyle = 'rgba(8, 9, 13, 0.92)';
      ctx.fillRect(0, canvas.height - 38, canvas.width, 38);
      ctx.font = '600 13px "JetBrains Mono", monospace';
      ctx.fillStyle = '#f8fafc';
      ctx.fillText(
        '🛡️ DOCUMENTO DIGITALIZADO COM PROTEÇÃO DE INTEGRIDADE • DIPLOMAX / MEC CÓDIGO: 878.878.c2b065c193a2',
        24,
        canvas.height - 14
      );

      setLoading(false);
    };

    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  // Intercepta atalhos de teclado (Save, Print, View-Source, DevTools, Esc, Setas)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'u'].includes(key)) {
        e.preventDefault();
        return;
      }
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowRight') {
        setCurrentPage((prev) => (prev + 1) % DIPLOMA_PAGES.length);
        return;
      }
      if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) => (prev - 1 + DIPLOMA_PAGES.length) % DIPLOMA_PAGES.length);
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const blockContext = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleZoomIn = () => setZoom((z) => Math.min(1.75, +(z + 0.25).toFixed(2)));
  const handleZoomOut = () => setZoom((z) => Math.max(0.75, +(z - 0.25).toFixed(2)));
  const handleResetZoom = () => setZoom(1);

  return (
    <div
      className={styles.diplomaOverlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onContextMenu={blockContext}
      role="dialog"
      aria-modal="true"
      aria-label="Visualização do Diploma de Engenharia de Software"
    >
      <div className={styles.diplomaModal}>
        {/* Cabeçalho do Modal */}
        <div className={styles.diplomaHeader}>
          <div className={styles.diplomaTitleGroup}>
            <span className={styles.diplomaIconWrapper}>
              <i className="bi bi-mortarboard-fill" />
            </span>
            <div>
              <h3 className={styles.diplomaTitle}>Diploma — Bacharel em Engenharia de Software</h3>
              <p className={styles.diplomaSubtitle}>
                Unileste • Conclusão em 2025 • Autenticidade Registrada MEC
              </p>
            </div>
          </div>
          <button
            type="button"
            className={styles.diplomaClose}
            onClick={onClose}
            aria-label="Fechar visualização do diploma"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {/* Barra de Ações & Navegação */}
        <div className={styles.diplomaToolbar}>
          {/* Seletor de Páginas (Frente / Verso) */}
          <div className={styles.pageTabs}>
            {DIPLOMA_PAGES.map((page, idx) => (
              <button
                key={page.id}
                type="button"
                className={`${styles.pageTab} ${currentPage === idx ? styles.pageTabActive : ''}`}
                onClick={() => setCurrentPage(idx)}
              >
                <i className={idx === 0 ? 'bi bi-file-earmark-text' : 'bi bi-file-earmark-check'} />
                <span>{page.titulo}</span>
                <span className={styles.pageTabBadge}>{idx + 1}/2</span>
              </button>
            ))}
          </div>

          {/* Controles de Zoom e Validação Oficial */}
          <div className={styles.toolbarControls}>
            <div className={styles.zoomControls}>
              <button
                type="button"
                className={styles.btnZoom}
                onClick={handleZoomOut}
                disabled={zoom <= 0.75}
                title="Reduzir zoom"
                aria-label="Reduzir zoom"
              >
                <i className="bi bi-dash" />
              </button>
              <button
                type="button"
                className={styles.btnZoomReset}
                onClick={handleResetZoom}
                title="Ajustar zoom para 100%"
                aria-label="Ajustar zoom para 100%"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                type="button"
                className={styles.btnZoom}
                onClick={handleZoomIn}
                disabled={zoom >= 1.75}
                title="Aumentar zoom"
                aria-label="Aumentar zoom"
              >
                <i className="bi bi-plus" />
              </button>
            </div>
          </div>
        </div>

        {/* Área do Canvas com Blindagem de Extração */}
        <div
          className={styles.diplomaCanvasViewport}
          onContextMenu={blockContext}
          onDragStart={blockContext}
        >
          {loading && (
            <div className={styles.canvasLoading}>
              <div className={styles.spinner} />
              <span>Carregando documento protegido...</span>
            </div>
          )}

          <div
            className={styles.canvasWrapper}
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'top center',
            }}
          >
            {/* Camada transparente anti-clique/inspeção direta sobre os pixels */}
            <div
              className={styles.canvasShield}
              onContextMenu={blockContext}
              onDragStart={blockContext}
              aria-hidden="true"
            />
            <canvas ref={canvasRef} className={styles.diplomaCanvasEl} />
          </div>
        </div>

        {/* Rodapé Informativo de Segurança */}
        <div className={styles.diplomaFooter}>
          <div className={styles.securityBadge}>
            <i className="bi bi-shield-lock-fill" />
            <span>
              <strong>Proteção Ativa:</strong> Extração e download vetorial bloqueados para integridade acadêmica.
            </span>
          </div>
          <span className={styles.diplomaPageInfo}>
            Página {currentPage + 1} de {DIPLOMA_PAGES.length}
          </span>
        </div>
      </div>
    </div>
  );
};

const Sobre = () => {
  const [diplomaOpen, setDiplomaOpen] = useState(false);

  const openDiploma = useCallback(() => {
    setDiplomaOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeDiploma = useCallback(() => {
    setDiplomaOpen(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      {diplomaOpen && <DiplomaModal onClose={closeDiploma} />}
      <section className={styles.sobre}>
        <div className="interface">
          {/* Badge HUD da Seção */}
          <div className={styles.badgeWrapper}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgePulse}></span>
              <span>BIOGRAFIA &amp; TRAJETÓRIA DE ENGENHARIA</span>
            </div>
          </div>

          {/* Sobre, Ryann Victor */}
          <h2 className={styles.titulo}>
            Sobre, <span>Ryann Victor.</span>
          </h2>
          <p className={styles.destaque}>
            Bacharel em <span>Engenharia de Software</span> pela Unileste • {new Date().getFullYear() - 2004} anos
          </p>

          {/* Bio Card */}
          <div className={styles.flex}>
            <div className={styles.img_wrapper}>
              <div className={styles.img_frame}>
                <img
                  className={styles.img_tag_sobre}
                  src={Ryann}
                  alt="Foto de perfil de Ryann Victor"
                  width="250"
                  height="250"
                  loading="eager"
                />
              </div>
            </div>
            <div className={styles.txt_sobre}>
              <p className={styles.descricao}>
                Desenvolvedor <span>Full Stack</span> com foco em <span>React, Node.js e ecossistema TypeScript/JavaScript</span>, graduado em <span>Engenharia de Software</span> pela Unileste (conclusão em 2025).
                <br />
                <br />
                Experiência prática na criação de aplicações completas, automação de rotinas e integração de dados corporativos (com atuação na <span>Digifarma</span> e <span>Aperam South America</span>), aliando código performático a interfaces focadas em usabilidade e resolução ágil de problemas.
              </p>
              <p className={styles.loc}>
                <i className="bi bi-geo-alt-fill" style={{ marginRight: '8px', color: 'var(--red-primary)' }}></i>
                Ipatinga, Minas Gerais, Brasil
              </p>
            </div>
          </div>

          {/* Hard Skills */}
          <h2 className={styles.sub_title}>Hard Skills</h2>

          <div className={styles.grid_skills}>
            <div className={styles.grid_cards}>
              <h4>&lt;/&gt; Front-End</h4>
              <p>
                <span>HTML5</span>
                <span>CSS3 Modules</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Vite</span>
                <span>Bootstrap</span>
              </p>
            </div>

            <div className={styles.grid_cards}>
              <h4>&lt;/&gt; Back-End</h4>
              <p>
                <span>Node.js</span>
                <span>Python</span>
                <span>REST APIs</span>
                <span>Java</span>
                <span>C#</span>
                <span>Google Apps Script</span>
              </p>
            </div>

            <div className={styles.grid_cards}>
              <h4>&lt;/&gt; DataBase &amp; Analytics</h4>
              <p>
                <span>Firebird</span>
                <span>MySQL</span>
                <span>Oracle SQL</span>
                <span>Power BI (DAX / M)</span>
                <span>DBeaver</span>
              </p>
            </div>

            <div className={styles.grid_cards}>
              <h4>&lt;/&gt; Ferramentas &amp; DevOps</h4>
              <p>
                <span>Git</span>
                <span>GitHub</span>
                <span>Figma</span>
                <span>PWA</span>
                <span>Postman</span>
                <span>Supabase</span>
              </p>
            </div>

            <div className={styles.grid_cards}>
              <h4>🤖 Inteligência Artificial</h4>
              <p>
                <span>Engenharia de Prompt</span>
                <span>Gemini</span>
                <span>ChatGPT</span>
                <span>Claude</span>
                <span>Copilot</span>
                <span>Cursor</span>
                <span>Antigravity</span>
              </p>
            </div>

            <div className={styles.grid_cards}>
              <h4>⚡ Metodologias &amp; Engenharia</h4>
              <p>
                <span>Scrum</span>
                <span>Kanban</span>
                <span>Integração Contínua</span>
                <span>XP</span>
                <span>Clean Code</span>
              </p>
            </div>
          </div>

          {/* Linha do Tempo de Experiências */}
          <h2 className={styles.sub_title}>Trajetória Profissional</h2>
          <p className={styles.sub_desc}>
            Histórico de atuações com resultados tangíveis em desenvolvimento, automação e gestão de dados.
          </p>

          <div className={styles.timelineContainer}>
            <div className={styles.timelineTrack}></div>

            {EXPERIENCIAS.map((exp) => (
              <div key={exp.id} className={styles.timelineItem}>
                <div className={styles.timelineNode} title={exp.periodo}>
                  <div className={styles.timelinePulse}></div>
                </div>

                <div className={styles.timelineCard}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.cardCargo}>{exp.cargo}</h3>
                      <div className={styles.cardCompanyRow}>
                        <span className={styles.cardEmpresa}>{exp.empresa}</span>
                        <span className={styles.cardPeriodo}>
                          <i className="bi bi-calendar4-week" style={{ marginRight: '6px' }}></i>
                          {exp.periodo}
                        </span>
                      </div>
                    </div>
                    <span className={styles.statusBadge}>{exp.statusBadge}</span>
                  </div>

                  <p className={styles.timelineDescricao}>{exp.descricao}</p>

                  {/* Métricas e Resultados Chave */}
                  <div className={styles.metricsGrid}>
                    {exp.metricas.map((m, idx) => (
                      <div key={idx} className={styles.metricCard}>
                        <div className={styles.metricHeader}>
                          <i className={m.icon}></i>
                          <span>{m.label}</span>
                        </div>
                        <span className={styles.metricValor}>{m.valor}</span>
                        <p className={styles.metricDetalhe}>{m.detalhe}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags da Experiência */}
                  <div className={styles.tagsRow}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className={styles.timelineTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Linha do Tempo de Formação Acadêmica */}
          <h2 className={styles.sub_title}>Formação Acadêmica</h2>

          <div className={styles.timelineContainer}>
            <div className={styles.timelineTrack}></div>

            {FORMACAO.map((form) => (
              <div key={form.id} className={styles.timelineItem}>
                <div className={styles.timelineNode} title={form.periodo}>
                  <div className={styles.timelinePulse}></div>
                </div>

                <div className={styles.timelineCard}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.cardCargo}>{form.curso}</h3>
                      <div className={styles.cardCompanyRow}>
                        <span className={styles.cardEmpresa}>{form.instituicao}</span>
                        <span className={styles.cardPeriodo}>
                          <i className="bi bi-mortarboard" style={{ marginRight: '6px' }}></i>
                          {form.periodo}
                        </span>
                        <span className={styles.statusBadge}>{form.statusBadge}</span>
                      </div>
                    </div>
                    {form.temDiploma && (
                      <div className={styles.cardHeaderRight}>
                        <button
                          type="button"
                          className={styles.btnDiploma}
                          onClick={openDiploma}
                          aria-label={`Visualizar diploma oficial de ${form.curso}`}
                        >
                          <i className="bi bi-award-fill" />
                          <span>Ver Diploma</span>
                          <span className={styles.btnDiplomaBadge}>Oficial</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <p className={styles.timelineDescricao}>{form.descricao}</p>

                  <div className={styles.tagsRow}>
                    {form.destaques.map((item) => (
                      <span key={item} className={styles.timelineTag}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;