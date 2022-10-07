import styles from './Footer.module.css';
import facebookIcon from '../assets/img/facebook.png';
import instaIcon from '../assets/img/insta.png';
import inIcon from '../assets/img/in.png';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Follow us</p>
      <div className={styles.social}>
      <img src={facebookIcon}></img>
      <img src={instaIcon}></img>
      <img src={inIcon}></img>
      </div>
      <span>© 2022 Minutentag. All right reserved.</span>
    </footer>
  );
}