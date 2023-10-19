import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images/icon-pro.svg';
import styles from '../../styles/step2.module.css';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from '../../types/formData';
type Props = {
  register: UseFormRegister<FormData>;
};
function YearlyPlans({ register }: Props) {
  return (
    <div className={styles.plansWrapper}>
      <div className={styles.plansGroup}>
        <input
          type='radio'
          value='arcade $90/yr yearly'
          id='arcade'
          {...register('step2.plan')}
        />
        <label htmlFor='arcade' className={styles.plan}>
          <div className={styles.planDetails}>
            <img src={arcade} alt='arcade icon' />
            <div>
              <h3>Arcade</h3>
              <p>$90/yr</p>
              <p className={styles.bonus}>2 months free</p>
            </div>
          </div>
        </label>
      </div>
      {/*  */}
      <div className={styles.plansGroup}>
        <input
          type='radio'
          value='advanced $120/yr yearly'
          id='advanced'
          {...register('step2.plan')}
        />
        <label htmlFor='advanced' className={styles.plan}>
          <div className={styles.planDetails}>
            <img src={advanced} alt='adavanced icon' />
            <div>
              <h3>Advanced</h3>
              <p>$120/yr</p>
              <p className={styles.bonus}>2 months free</p>
            </div>
          </div>
        </label>
      </div>
      {/*  */}
      <div className={styles.plansGroup}>
        <input
          type='radio'
          value='pro $150/yr yearly'
          id='pro'
          {...register('step2.plan')}
        />
        <label htmlFor='pro' className={styles.plan}>
          <div className={styles.planDetails}>
            <img src={pro} alt='pro icon' />
            <div>
              <h3>Pro</h3>
              <p>$150/yr</p>
              <p className={styles.bonus}>2 months free</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default YearlyPlans;
