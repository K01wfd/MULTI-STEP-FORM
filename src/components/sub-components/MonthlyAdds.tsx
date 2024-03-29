import styles from '../../styles/step3.module.css';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from '../../types/formData';

type Props = {
  register: UseFormRegister<FormData>;
};
function MonthlyAdds({ register }: Props) {
  return (
    <>
      <div>
        <input
          type='checkbox'
          id='onlineService'
          value='Online Service +$1/m'
          {...register('step3.onlineService.monthly')}
        />
        <label htmlFor='onlineService' className={`${styles.addsGroup}`}>
          <div className={styles.addsDetails}>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p className={styles.addsPrice}>+$1/mo</p>
        </label>
      </div>
      <div>
        <input
          type='checkbox'
          id='cloudStorage'
          value='Cloud Storage +$2/mo'
          {...register('step3.largerStorage.monthly')}
        />
        <label htmlFor='cloudStorage' className={`${styles.addsGroup}`}>
          <div className={styles.addsDetails}>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p className={styles.addsPrice}>+$2/mo</p>
        </label>
      </div>
      <div>
        <input
          type='checkbox'
          id='customeProfile'
          value='Custome Profile +$2/mo'
          {...register('step3.customeProfile.monthly')}
        />
        <label htmlFor='customeProfile' className={`${styles.addsGroup}`}>
          <div className={styles.addsDetails}>
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <p className={styles.addsPrice}>+$2/mo</p>
        </label>
      </div>
    </>
  );
}

export default MonthlyAdds;
