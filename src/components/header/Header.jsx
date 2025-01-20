import styles from './Header.module.css';
import resumeHeaderImage from '../../assets/undraw_resume_jrgi.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles['header-left']}>
                <h1>Make your Awesome <span>Resume</span></h1>
            </div>

            <div className={styles['header-image']}>
                <img src={resumeHeaderImage} alt="resume image" />
            </div>

        </div>

    )
}

export default Header
