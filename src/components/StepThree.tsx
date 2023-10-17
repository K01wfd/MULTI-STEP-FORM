import styles from '../styles/step3.module.css';
interface Props {
  whichActiveAdd: string[];
  onAddSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function StepThree({ onAddSelect, whichActiveAdd }: Props) {
  return (
    <>
      <div>
        <input
          type='checkbox'
          onChange={onAddSelect}
          id='onlineService'
          value='onlineService'
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
          onChange={onAddSelect}
          value='cloudStorage'
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
          onChange={onAddSelect}
          value='customeProfile'
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

export default StepThree;
