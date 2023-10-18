import styles from '../styles/step3.module.css';
import formStyles from '../styles/form.module.css';

function StepThree() {
  return (
    <>
      <div className={formStyles.formHeader}>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div>
        <input type='checkbox' id='onlineService' value='onlineService' />
        <label htmlFor='onlineService' className={`${styles.addsGroup}`}>
          <div className={styles.addsDetails}>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p className={styles.addsPrice}>+$1/mo</p>
        </label>
      </div>
      <div>
        <input type='checkbox' id='cloudStorage' value='cloudStorage' />
        <label htmlFor='cloudStorage' className={`${styles.addsGroup}`}>
          <div className={styles.addsDetails}>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p className={styles.addsPrice}>+$2/mo</p>
        </label>
      </div>
      <div>
        <input type='checkbox' id='customeProfile' value='customeProfile' />
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

export default StepThree;
