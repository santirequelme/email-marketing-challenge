import styles from './Header.module.css'
import minTagLogo from '../assets/logoMT.svg';
import bannerImg from '../assets/01banner.png';
import bannerImg2 from '../assets/02banner.png'

export function Header() {
  return (
    <header className= {styles.header}>
        <img className={styles.img01} src={bannerImg} />
        <img className={styles.img02} src={bannerImg2} />
    <img className={styles.logo} src={minTagLogo} />
    <h1>Taking your ideas to the next level</h1>
    <button className={styles.btnLets}>
     <p> Let's work together!</p>
    </button>
    </header>
  );
}