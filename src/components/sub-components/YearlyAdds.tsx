import styles from '../../styles/step3.module.css';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from '../../types/formData';

type Props = {
  register: UseFormRegister<FormData>;
};
function YearlyAdds({ register }: Props) {
  return (
    <>
      <div>
        <input
          type='checkbox'
          id='onlineService'
          value='Online Service +$10/yr'
          {...register('step3.onlineService.yearly')}
        />
        <label htmlFor='onlineService' className={`${styles.addsGroup}`}>
          <div className={styles.addsDetails}>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p className={styles.addsPrice}>+$10/yr</p>
        </label>
      </div>
      <div>
        <input
          type='checkbox'
          id='cloudStorage'
          value='Cloud Storage +$20/yr'
          {...register('step3.largerStorage.yearly')}
        />
        <label htmlFor='cloudStorage' className={`${styles.addsGroup}`}>
          <div className={styles.addsDetails}>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p className={styles.addsPrice}>+$20/yr</p>
        </label>
      </div>
      <div>
        <input
          type='checkbox'
          id='customeProfile'
          value='Custome Profile +$20/yr'
          {...register('step3.customeProfile.yearly')}
        />
        <label htmlFor='customeProfile' className={`${styles.addsGroup}`}>
          <div className={styles.addsDetails}>
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <p className={styles.addsPrice}>+$20/yr</p>
        </label>
      </div>
    </>
  );
}

export default YearlyAdds;
