import styles from './PageLoader.module.css';

/**
 * Fallback de carregamento para rotas assíncronas (React.lazy / Suspense)
 * @returns {JSX.Element}
 */
const PageLoader = () => {
  return (
    <div className={styles.loaderContainer} role="status" aria-live="polite">
      <div className={styles.spinner} aria-hidden="true" />
      <span className={styles.text}>Carregando...</span>
    </div>
  );
};

export default PageLoader;
