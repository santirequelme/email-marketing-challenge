import styles from './Insights.module.css'
import { ButtonLearnMore } from './buttonLearnMore';
import imgIntegrity from '../assets/img/001-integrity.png';
import imgOwnership from '../assets/img/002-ownership.png';
import imgFlex from '../assets/img/003-flex.png';
import imgInnovation from '../assets/img/004-Innovation.png';

export function Insights() {
  return (
    <div className={styles.insights}>
    <h1>People are the key to success</h1>
      <section className={styles.wrapper}>
        <div className={styles.item}>
          <img src={imgIntegrity} alt="" />
          <h2>Integrity</h2>
          <p>
            <span>‘Always do the right thing’ </span>
            Customer relationship is our greatest asset. We know that working ethically, responsibly and respectfully.
          </p>
          <ButtonLearnMore />
        </div>
        <div className={styles.item}>
          <img src={imgOwnership} alt="" />
          <h2>Ownership</h2>
          <p>
          We are accountable during every step of the process. We devote our complete dedication and knowledge to arrive at consistent efficient end to end solutions.
          </p>
          <ButtonLearnMore />
        </div>
        <div className={styles.item}>
          <img src={imgFlex} alt="" />
          <h2>Flexibility</h2>
          <p>
          We provide customized solutions. Each project has its own features. Adapting to schedules, objectives and people is the key to achieving success.
          </p>
          <ButtonLearnMore />
        </div>
        <div className={styles.item}>
          <img src={imgInnovation} alt="" />
          <h2>Innovation</h2>
          <p>
            ‘Always do the right thing’
            Customer relationship is our greatest asset. We know that working ethically, responsibly and respectfully.
          </p>
          <ButtonLearnMore />
        </div>
      </section>
    </div>
  );
}