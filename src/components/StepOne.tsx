import styles from '../styles/step1.module.css';
import formStyles from '../styles/form.module.css';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormData } from '../types/formData';
type Props = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};
function StepOneInputs({ register, errors }: Props) {
  return (
    <>
      <div className={formStyles.formHeader}>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number</p>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.labelGroup}>
          <label htmlFor='name'>Name</label>
          {errors.step1?.name && (
            <p className={styles.errorText}>field is required</p>
          )}
        </div>
        <input
          className={errors.step1?.name && styles.errorField}
          autoFocus
          type='text'
          placeholder='e.g. Stephen King'
          {...register('step1.name', { required: true })}
        />
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.labelGroup}>
          <label htmlFor='email'>Email</label>
          {errors.step1?.email && (
            <p className={styles.errorText}>field is required</p>
          )}
        </div>
        <input
          className={errors.step1?.email && styles.errorField}
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          {...register('step1.email', { required: true })}
        />
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.labelGroup}>
          <label htmlFor='phone'>Phone Number</label>
          {errors.step1?.phone && (
            <p className={styles.errorText}>This field is required</p>
          )}
        </div>
        <input
          className={errors.step1?.phone && styles.errorField}
          type='text'
          placeholder='e.g. Stephen King'
          {...register('step1.phone', { required: true })}
        />
      </div>
    </>
  );
}

export default StepOneInputs;
