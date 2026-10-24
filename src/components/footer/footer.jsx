import { NavLink } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="interface">
        <div className={styles.line_footer}>
          <div className={styles.flex}>
            <div>
              <NavLink to="/" className="logo">
                &lt;RV/&gt;
              </NavLink>
            </div>

            <div className={styles.btn_social}>
              <a
                href="https://www.instagram.com/ryannvicttor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do Instagram"
              >
                <button type="button">
                  <i className="bi bi-instagram"></i>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/ryann-victor-939b97240/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do LinkedIn"
              >
                <button type="button">
                  <i className="bi bi-linkedin"></i>
                </button>
              </a>
              <a
                href="https://github.com/ryannV"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do GitHub"
              >
                <button type="button">
                  <i className="bi bi-github"></i>
                </button>
              </a>
            </div>
          </div>
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
          &copy; 2026 Todos os direitos reservados. <span>Feito por Ryann Victor Vieira Miranda</span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;