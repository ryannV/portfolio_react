import styles from './ResumoProjetos.module.css';

/**
 * Banco de dados estruturado dos Case Studies Técnicos
 */
const RESUMOS_DATA = {
  DigiVPN: {
    titulo: 'DigiVPN - Centralizador & Gestor de VPNs',
    badge: 'Aplicação Corporativa • Rede & Segurança',
    status: 'Em Produção na Digifarma Sistemas',
    problema:
      'A distribuição de arquivos de configuração OpenVPN entre equipes técnicas ocorria de forma descentralizada, gerando lentidão no atendimento remoto, perda de arquivos e risco de acessos duplicados sem rastreabilidade.',
    arquitetura: [
      {
        num: '01',
        title: 'Front-End React',
        desc: 'Busca indexada por ID de cliente, validação instantânea de arquivo existente e formulário de requisição.',
      },
      {
        num: '02',
        title: 'Serviço Node.js & SMTP',
        desc: 'Roteamento seguro na rede local, despacho de dados e disparo automático de alertas por e-mail para líderes.',
      },
      {
        num: '03',
        title: 'Armazenamento & Rede',
        desc: 'Organização em diretórios estruturados por tipo de conexão com download restrito à intranet corporativa.',
      },
    ],
    desafios:
      'Padronizar nomenclaturas de chaves de VPN, automatizar a esteira de aprovação com envio assíncrono de notificações de liderança e garantir auditoria de solicitações sem onerar a rede da empresa.',
    resultados: [
      'Redução de aproximadamente 70% no tempo médio de emissão e disponibilização de VPNs.',
      'Centralização de 100% dos arquivos de conexão corporativa em repositório único e auditável.',
      'Eliminação de erros de configuração de VPN em atendimentos a clientes.',
    ],
    stack: 'React, Node.js, Express, CSS Modules, SMTP Mailer',
    padrao: 'Single Page Application (SPA) & Microsserviço Interno',
    disponibilidade: 'Acesso restrito à rede corporativa da Digifarma Sistemas LTDA',
    repoUrl: null,
    deployUrl: null,
  },

  DigiFirebird: {
    titulo: 'DigiFirebird - Gestor de Versões de Banco',
    badge: 'Automação Corporativa • Serverless & Dados',
    status: 'Em Produção na Digifarma Sistemas',
    problema:
      'Dificuldade técnica para verificar remotamente quais versões do gerenciador de banco de dados Firebird estavam instaladas nos servidores de clientes, acarretando incompatibilidades em atualizações de software desktop.',
    arquitetura: [
      {
        num: '01',
        title: 'Interface de Suporte',
        desc: 'Consulta em tempo real pelo ID do cliente, exibindo histórico de atualizações, técnico e notas.',
      },
      {
        num: '02',
        title: 'Google Apps Script API',
        desc: 'Camada de middleware serverless atuando como endpoint REST para recepção e validação de payloads.',
      },
      {
        num: '03',
        title: 'Sheets & Auditoria',
        desc: 'Persistência estruturada em planilha corporativa atuando como banco leve sem custo de infraestrutura.',
      },
    ],
    desafios:
      'Projetar uma API serverless de custo zero e alta disponibilidade para analistas de suporte em campo, tratando concorrência de escritas e validações de integridade dos dados cadastrados.',
    resultados: [
      'Consulta instantânea de versões ativas em menos de 1 segundo pelos técnicos.',
      'Rastreabilidade total das atualizações de bancos realizadas em clientes.',
      'Redução a zero de chamados decorrentes de versões divergentes de Firebird.',
    ],
    stack: 'React, Google Apps Script (REST API), Google Sheets API, CSS Modules',
    padrao: 'Serverless API & Client-Side Rendering',
    disponibilidade: 'Acesso restrito à equipe técnica da Digifarma Sistemas LTDA',
    repoUrl: null,
    deployUrl: null,
  },

  CRUDUsuarios: {
    titulo: 'CRUD de Usuários - Gestão Cadastral Completa',
    badge: 'Full Stack • Arquitetura REST',
    status: 'Código Aberto no GitHub',
    problema:
      'Necessidade de um fluxo robusto para criação, leitura, atualização e remoção de dados cadastrais com validações síncronas/assíncronas e tratamento refinado de estados de rede.',
    arquitetura: [
      {
        num: '01',
        title: 'Front-End Reativo',
        desc: 'Componentização modular em React com estados de loading, feedback de sucesso/erro e validação de campos.',
      },
      {
        num: '02',
        title: 'API REST Node.js',
        desc: 'Servidor Express com endpoints desacoplados (GET, POST, PUT, DELETE) e tratamento centralizado de erros.',
      },
      {
        num: '03',
        title: 'Camada de Persistência',
        desc: 'Controle de integridade referencial, sanitização de payloads e proteção contra duplicidade de registros.',
      },
    ],
    desafios:
      'Manter sincronização determinística entre o estado local do cliente e o backend após operações concorrentes, além de implementar validações de esquema e mensagens de erro legíveis.',
    resultados: [
      'Separação estrita de responsabilidades entre cliente e servidor seguindo boas práticas de REST.',
      'Tratamento preventivo de falhas de conexão com feedback visual intuitivo.',
      'Repositório estruturado com commits semânticos e documentação completa.',
    ],
    stack: 'React, Node.js, Express, JavaScript (ES2024), CSS Modules, REST API',
    padrao: 'Client-Server Architecture & RESTful Principles',
    disponibilidade: 'Disponível publicamente para auditoria de código',
    repoUrl: 'https://github.com/ryannV/crud_cadastro_usuario',
    deployUrl: null,
  },

  MiniBlog: {
    titulo: 'MiniBlog - Plataforma Interativa de Publicações',
    badge: 'Full Stack • SPA & Cloud BaaS',
    status: 'Online & Deploy Ativo no GitHub Pages',
    problema:
      'Criação de uma plataforma de compartilhamento de conteúdos com autenticação segura, alimentação dinâmica de feed e busca eficiente por palavras-chave.',
    arquitetura: [
      {
        num: '01',
        title: 'React Router v7 SPA',
        desc: 'Rotas protegidas para criação de posts e rotas públicas para leitura, com lazy loading.',
      },
      {
        num: '02',
        title: 'Firebase Auth & Context',
        desc: 'Gerenciamento global de autenticação de sessão, logout seguro e controle de autoria de postagens.',
      },
      {
        num: '03',
        title: 'Cloud Firestore NoSQL',
        desc: 'Banco NoSQL em nuvem com indexação por tags, ordenação temporal e listeners em tempo real.',
      },
    ],
    desafios:
      'Garantir proteção efetiva de rotas privadas contra acessos não autorizados, gerenciar ciclo de vida de autenticação sem vazamento de memória e otimizar queries por tags no Firestore.',
    resultados: [
      'Autenticação de usuários resiliente com persistência segura de tokens.',
      'Feed responsivo com filtros instantâneos por tags.',
      'Deploy em produção acessível online via GitHub Pages.',
    ],
    stack: 'React 19, Firebase Auth, Cloud Firestore (NoSQL), React Router v7, CSS Modules',
    padrao: 'Serverless BaaS & Single Page Application',
    disponibilidade: 'Aplicação online e código-fonte auditável',
    repoUrl: 'https://github.com/ryannV/mini_blog',
    deployUrl: 'https://ryannv.github.io/mini_blog/#/',
  },
};

/**
 * Componente ResumoProjetos - Exibe detalhamento técnico com diagrama de arquitetura
 * @param {{ titulo: string }} props
 * @returns {JSX.Element|null}
 */
const ResumoProjetos = ({ titulo }) => {
  const data = RESUMOS_DATA[titulo];
  if (!data) return null;

  return (
    <div className={styles.resumoContainer}>
      {/* Cabeçalho do Case Study */}
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h2 className={styles.resumoTitulo}>{data.titulo}</h2>
          <div className={styles.badgesRow}>
            <span className={styles.badge}>{data.badge}</span>
            <span className={styles.statusBadge}>{data.status}</span>
          </div>
        </div>
      </div>

      {/* 1. Contexto & Problema */}
      <div className={styles.sectionBlock}>
        <h4 className={styles.sectionHeading}>
          <i className="bi bi-lightbulb-fill" aria-hidden="true"></i>
          Contexto &amp; Desafio de Negócio
        </h4>
        <p className={styles.paragraph}>{data.problema}</p>
      </div>

      {/* 2. Diagrama de Arquitetura da Solução */}
      <div className={styles.sectionBlock}>
        <h4 className={styles.sectionHeading}>
          <i className="bi bi-diagram-3-fill" aria-hidden="true"></i>
          Arquitetura da Solução
        </h4>
        <div className={styles.flowContainer}>
          {data.arquitetura.map((step, idx) => (
            <div key={step.num} style={{ display: 'contents' }}>
              <div className={styles.flowStep}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>{step.num}</span>
                  <span className={styles.stepTitle}>{step.title}</span>
                </div>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              {idx < data.arquitetura.length - 1 && (
                <div className={styles.flowArrow} aria-hidden="true">
                  <i className="bi bi-chevron-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Desafios de Engenharia */}
      <div className={styles.sectionBlock}>
        <h4 className={styles.sectionHeading}>
          <i className="bi bi-cpu-fill" aria-hidden="true"></i>
          Desafios Técnicos Superados
        </h4>
        <p className={styles.paragraph}>{data.desafios}</p>
      </div>

      {/* 4. Métricas & Resultados */}
      <div className={styles.sectionBlock}>
        <h4 className={styles.sectionHeading}>
          <i className="bi bi-graph-up-arrow" aria-hidden="true"></i>
          Impacto &amp; Resultados Tangíveis
        </h4>
        <div className={styles.metricsList}>
          {data.resultados.map((resultado, idx) => (
            <div key={idx} className={styles.metricItem}>
              <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
              <span>{resultado}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Ficha Técnica */}
      <div className={styles.metaBox}>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Tecnologias:</span>
          <span className={styles.metaVal}>{data.stack}</span>
        </div>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Padrão Arquitetural:</span>
          <span className={styles.metaVal}>{data.padrao}</span>
        </div>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Acesso:</span>
          <span className={styles.metaVal}>{data.disponibilidade}</span>
        </div>
      </div>

      {/* Ações e Links */}
      <div className={styles.modalActions}>
        {data.deployUrl && (
          <a
            href={data.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnModalPrimary}
          >
            <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
            Abrir Aplicação Online
          </a>
        )}

        {data.repoUrl && (
          <a
            href={data.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnModalSecondary}
          >
            <i className="bi bi-github" aria-hidden="true"></i>
            Código no GitHub
          </a>
        )}

        {!data.repoUrl && !data.deployUrl && (
          <span className={styles.restrictedNotice}>
            <i className="bi bi-shield-lock-fill" aria-hidden="true"></i>
            Código confidencial protegido por políticas de segurança interna.
          </span>
        )}
      </div>
    </div>
  );
};

export default ResumoProjetos;
