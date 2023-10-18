import styles from '../styles/step1.module.css';
import formStyles from '../styles/form.module.css';

type PersonalData = {
  name: string;
  email: string;
  phone: string;
};
type PersonalProps = PersonalData & {
  updatePersonalData: (fields: Partial<PersonalData>) => void;
};
function StepOneInputs({
  name,
  email,
  phone,
  updatePersonalData,
}: PersonalProps) {
  return (
    <>
      <div className={formStyles.formHeader}>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number</p>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='name'>Name</label>
        <input
          autoFocus
          type='text'
          placeholder='e.g. Stephen King'
          id='name'
          required
          value={name}
          onChange={(e) => updatePersonalData({ name: e.target.value })}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          id='email'
          value={email}
          required
          onChange={(e) => updatePersonalData({ email: e.target.value })}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='text'
          placeholder='e.g. Stephen King'
          id='phone'
          required
          value={phone}
          onChange={(e) => updatePersonalData({ phone: e.target.value })}
        />
      </div>
    </>
  );
}

export default StepOneInputs;
