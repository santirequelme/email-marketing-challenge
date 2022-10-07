import styles from './Cards.module.css'
import { ButtonLearnMore } from './buttonLearnMore';
import item01 from '../assets/img/item01.png';
import item02 from '../assets/img/item02.png';
import item03 from '../assets/img/item03.png';

export function Cards() {
  return (
    <div className={styles.cards}>
      <div>
        <h1>Custom software solutioning to support high demanding businesses</h1>
      </div>
      <div className={styles.card}>
        <img src={item01} alt="" />
        <div className={styles.description}>
          <h2> Team & Staff Augmentation</h2>
          <p>We empower your work team & provide knowledgeable and scalable consultants.</p>
          <ButtonLearnMore />
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.description}>
          <h2> Product Development& UX</h2>
          <p>We cover all stages of consulting, design, development, testing and full journey
            life-cycle management for your idea.</p>
          <ButtonLearnMore />
        </div>
        <img src={item02} alt="" />
      </div>

      <div className={styles.card}>
        <img src={item03} alt="" />
        <div className={styles.description}>
          <h2> Government Solutions </h2>
          <p>Intelligence, Analytics and technology solutions to help governments become safer, efficient and more productive</p>
          <ButtonLearnMore />
        </div>
      </div>
    </div>
  );
}