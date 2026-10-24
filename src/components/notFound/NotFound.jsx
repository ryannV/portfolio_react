import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.css';

/**
 * Componente NotFound - Tratamento de rotas inexistentes (404)
 * @returns {JSX.Element}
 */
const NotFound = () => {
  return (
    <section className={styles.notFoundSection} role="region" aria-labelledby="notfound-title">
      <div className={styles.card}>
        <div className={styles.cardGlow} aria-hidden="true" />

        <span className={styles.tagError}>Erro HTTP 404</span>
        <div className={styles.codeBadge}>&lt;404 /&gt;</div>

        <h1 id="notfound-title" className={styles.title}>
          Página não encontrada
        </h1>

        <p className={styles.description}>
          O endereço acessado não existe, foi movido ou você digitou uma rota incorreta.
          Retorne à base para continuar navegando.
        </p>

        <div className={styles.actions}>
          <NavLink to="/" className={styles.btnPrimary} aria-label="Retornar à página inicial">
            <i className="bi bi-house-door-fill" aria-hidden="true"></i>
            Voltar ao Início
          </NavLink>

          <NavLink to="/projetos" className={styles.btnSecondary} aria-label="Ir para a página de projetos">
            <i className="bi bi-grid-fill" aria-hidden="true"></i>
            Explorar Projetos
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
