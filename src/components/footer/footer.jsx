import styles from './Footer.module.css'

import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
            <div className='interface'>

                <div className={styles.line_footer}>
                    <div className={styles.flex}>
                        <div>
                            <h1><NavLink to='' className='logo'>&lt;RV/&gt;</NavLink></h1>
                        </div>

                        <div className={styles.btn_social}>
                            <a href="https://www.instagram.com/ryannvicttor/">
                                <button><i class="bi bi-instagram" style={{ color: '#fff'}}></i></button>
                            </a>
                            <a href="https://www.linkedin.com/in/ryann-victor-939b97240/">
                                <button><i class="bi bi-linkedin" style={{ color: '#fff'}}></i></button>
                            </a>
                            <a href="https://github.com/ryannV">
                                <button><i class="bi bi-github" style={{ color: '#fff'}}></i></button>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className={styles.down_footer}>
                    <p>
                        <i class="bi bi-envelope-fill"></i> 
                        <a href="mailto:ryannvictor72@gmail.com">ryannvictor72@gmail.com</a>
                    </p>

                    <p>
                        <i class="bi bi-phone"></i> 
                        <a href="https://wa.me/5533999277685?text=Ol%C3%A1%21+Estou+aqui+pelo+seu+portf%C3%B3lio.+%F0%9F%9A%80%F0%9F%98%80">(33) 9 9927-7685</a>
                    </p>
                </div>
                

                <h4 className={styles.copy}>&copy; 2025 Todos os direitos reservados. <span>Feito por Ryann Victor Vieira Miranda</span></h4>

            </div>
    </footer>
  )
}

export default Footer;