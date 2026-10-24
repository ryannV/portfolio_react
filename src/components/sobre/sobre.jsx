import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './sobre.module.css';
import Ryann from '../../assets/images/eu_legendarios.jpeg';

const EXPERIENCIAS = [
  {
    id: 'digifarma',
    cargo: 'Analista de Suporte Técnico & Desenvolvedor Web',
    empresa: 'Digifarma Sistemas LTDA',
    periodo: 'Abril 2024 - Presente',
    statusBadge: 'Atuação Atual',
    descricao:
      'Atendimento especializado consultivo e técnico a clientes corporativos em sistemas desktop, com foco em estabilidade, otimização de bancos relacionais e conformidade fiscal. Paralelamente, desenvolvimento de aplicações web internas para ganho de escala operacional.',
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
    instituicao: 'Centro Universitário do Leste de Minas Gerais (Unileste)',
    periodo: 'Fevereiro 2022 - Dezembro 2025',
    statusBadge: 'Concluído',
    diploma: '/assets/ryann_victor_vieira_miranda_engenharia_de_software.pdf',
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
    descricao:
      'Conclusão da formação básica com base em ciências exatas, raciocínio lógico e resolução de problemas.',
    destaques: ['Formação Geral', 'Raciocínio Lógico', 'Comunicação'],
  },
];

/**
 * Modal de visualização de diploma via PDF.js canvas.
 * Bloqueia download, context menu e atalhos de teclado.
 * @param {{ url: string, onClose: () => void }} props
 * @returns {JSX.Element}
 */
const DiplomaModal = ({ url, onClose }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const loadPdf = async () => {
      // Carrega PDF.js via CDN dinamicamente
      if (!window.pdfjsLib) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      }

      if (cancelled) return;

      const pdf = await window.pdfjsLib.getDocument({ url, withCredentials: false }).promise;
      if (cancelled) return;

      const page = await pdf.getPage(1);
      if (cancelled) return;

      const viewport = page.getViewport({ scale: 1.6 });
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
    };

    loadPdf();
    return () => { cancelled = true; };
  }, [url]);

  // Bloqueia atalhos de teclado de save/print
  useEffect(() => {
    const block = (e) => {
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'u'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', block);
    return () => window.removeEventListener('keydown', block);
  }, [onClose]);

  // Bloqueia context menu no modal
  const blockContext = useCallback((e) => e.preventDefault(), []);

  return (
    <div
      className={styles.diplomaOverlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onContextMenu={blockContext}
    >
      <div className={styles.diplomaModal} ref={containerRef}>
        <div className={styles.diplomaHeader}>
          <span className={styles.diplomaTitle}>
            <i className="bi bi-mortarboard-fill" /> Diploma — Engenharia de Software
          </span>
          <button
            type="button"
            className={styles.diplomaClose}
            onClick={onClose}
            aria-label="Fechar visualização do diploma"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>
        <div
          className={styles.diplomaCanvas}
          onContextMenu={blockContext}
          onDragStart={(e) => e.preventDefault()}
        >
          <canvas ref={canvasRef} className={styles.diplomaCanvasEl} />
        </div>
      </div>
    </div>
  );
};

const Sobre = () => {
  const [diplomaOpen, setDiplomaOpen] = useState(false);
  const [diplomaUrl, setDiplomaUrl] = useState('');

  const openDiploma = useCallback((url) => {
    setDiplomaUrl(url);
    setDiplomaOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeDiploma = useCallback(() => {
    setDiplomaOpen(false);
    setDiplomaUrl('');
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      {diplomaOpen && <DiplomaModal url={diplomaUrl} onClose={closeDiploma} />}
      <section className={styles.sobre}>
      <div className="interface">
        {/* Sobre, Ryann Victor */}
        <h2 className={styles.titulo}>
          Sobre, <span>Ryann Victor.</span>
        </h2>
        <p className={styles.destaque}>
          Finalizando graduação em <span>Engenharia de Software</span> pela Unileste • 21 anos
        </p>

        {/* Bio Card */}
        <div className={styles.flex}>
          <div className={styles.img_wrapper}>
            <img className={styles.img_tag_sobre} src={Ryann} alt="Foto de perfil de Ryann Victor" />
          </div>
          <div className={styles.txt_sobre}>
            <p className={styles.descricao}>
              Desenvolvedor <span>FullStack</span> com experiência em <span>React e Node.js</span>,
              graduando em <span>Engenharia de Software</span> pela Unileste (conclusão em 2025).
              <br />
              <br />
              Atuo no desenvolvimento de aplicações web completas — do back-end ao front-end — e aplico
              esse conhecimento em projetos reais, incluindo um{' '}
              <span>sistema de gerenciamento de usuários FullStack</span> que desenvolvi de forma independente.
              <br />
              <br />
              Profissionalmente, trabalho na <span>Digifarma</span> onde, além do suporte técnico, criei
              páginas web internas com React e Node.js que reduziram o tempo de busca de informações da
              equipe de Suporte. Anteriormente, na <span>Aperam South America</span>, desenvolvi dashboards
              com <span>Power BI</span> e automações com <span>SQL Oracle e Google AppScript</span> que
              otimizaram processos e contribuíram para a redução de custos da Logística Integrada.
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
              <span>REST APIs</span>
              <span>Java</span>
              <span>C#</span>
              <span>Google Apps Script</span>
            </p>
          </div>
        </div>

        <div className={styles.grid_skills}>
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
        </div>

        <div className={styles.grid_skills}>
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
            <h4>⚡ Metodologias</h4>
            <p>
              <span>Scrum</span>
              <span>Kanban</span>
              <span>Integração Contínua</span>
              <span>XP</span>
            </p>
          </div>
        </div>

        {/* Soft Skills */}
        <h2 className={styles.sub_title}>Soft Skills</h2>

        <div className={styles.grid_skills}>
          <div className={styles.grid_cards}>
            <h4>🤝 Comunicação &amp; Colaboração</h4>
            <p>
              <span>Trabalho em equipe</span>
              <span>Comunicação clara</span>
              <span>Empatia</span>
              <span>Escuta ativa</span>
            </p>
          </div>

          <div className={styles.grid_cards}>
            <h4>🚀 Foco em Resultados</h4>
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
              <span>Raciocínio lógico</span>
              <span>Aprendizado contínuo</span>
              <span>Atenção a detalhes</span>
            </p>
          </div>

          <div className={styles.grid_cards}>
            <h4>💡 Engenharia &amp; Inovação</h4>
            <p>
              <span>Visão de produto</span>
              <span>Flexibilidade</span>
              <span>Resiliência</span>
              <span>Orientação a dados</span>
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
                  {/* <div className={styles.cardHeaderRight}>
                    {form.diploma && (
                      <button
                        type="button"
                        className={styles.btnDiploma}
                        onClick={() => openDiploma(form.diploma)}
                        aria-label={`Ver diploma de ${form.curso}`}
                      >
                        <i className="bi bi-award-fill" />
                        Ver Diploma
                      </button>
                    )}
                  </div> */}
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