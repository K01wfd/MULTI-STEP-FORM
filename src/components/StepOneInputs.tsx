import styles from '../styles/step1.module.css';

function StepOneInputs() {
  return (
    <>
      <div className={styles.inputGroup}>
        <label htmlFor='name'>Name</label>
        <input type='text' placeholder='e.g. Stephen King' id='name' />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          id='email'
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='phone'>Phone Number</label>
        <input type='text' placeholder='e.g. Stephen King' id='phone' />
      </div>
    </>
  );
}

export default StepOneInputs;
