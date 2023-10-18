import styles from '../styles/step1.module.css';
import formStyles from '../styles/form.module.css';
import { UseFormRegister } from 'react-hook-form';
import { StepsInterfaces } from '../interface/formInterfaces';

interface Props {
  register: UseFormRegister<Partial<StepsInterfaces>>;
}
function StepOneInputs({ register }: Props) {
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
          {...register('name')}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          id='email'
          {...register('email')}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='text'
          placeholder='e.g. Stephen King'
          id='phone'
          {...register('phone')}
        />
      </div>
    </>
  );
}

export default StepOneInputs;
