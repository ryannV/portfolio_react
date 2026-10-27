import { NavLink } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="interface">
        <div className={styles.line_footer}>
          <div className={styles.flex}>
            <div className={styles.brandBox}>
              <NavLink to="/" className="logo">
                &lt;RV/&gt;
              </NavLink>
              <p className={styles.tagline}>Bacharel em Engenharia de Software • Full Stack Web &amp; PWA</p>
            </div>

            <div className={styles.btn_social}>
              <a
                href="https://www.linkedin.com/in/ryann-victor-939b97240/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do LinkedIn"
                className={styles.socialLink}
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/ryannV"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do GitHub"
                className={styles.socialLink}
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.instagram.com/ryannvicttor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do Instagram"
                className={styles.socialLink}
                title="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Barra de Telemetria e Status */}
        <div className={styles.telemetryBar}>
          <div className={styles.statusIndicator}>
            <span className={styles.beaconDot}></span>
            <span className={styles.statusLabel}>STATUS OPERACIONAL:</span>
            <span className={styles.statusValue}>DISPONÍVEL</span>
          </div>
          <span className={styles.telemetryDivider}>•</span>
          <span className={styles.telemetryText}>Engenharia Full Stack</span>
          <span className={styles.telemetryDivider}>•</span>
          <span className={styles.telemetryLocation}>
            <i className="bi bi-geo-alt-fill" style={{ color: 'var(--red-primary)', marginRight: '4px' }}></i>
            Ipatinga, Minas Gerais, Brasil
          </span>
        </div>

        <div className={styles.down_footer}>
          <p>
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:ryannvictor72@gmail.com">ryannvictor72@gmail.com</a>
          </p>

          <p>
            <i className="bi bi-phone"></i>
            <a
              href="https://wa.me/5533999277685?text=Ol%C3%A1%21+Estou+aqui+pelo+seu+portf%C3%B3lio.+%F0%9F%9A%80%F0%9F%98%80"
              target="_blank"
              rel="noopener noreferrer"
            >
              (33) 9 9927-7685
            </a>
          </p>
        </div>

        <h4 className={styles.copy}>
          &copy; {new Date().getFullYear()} Todos os direitos reservados. <span>Ryann Victor Vieira Miranda</span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;