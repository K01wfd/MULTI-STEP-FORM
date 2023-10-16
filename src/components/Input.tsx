import { InputInterface } from '../interfaces/steps';
import styles from '../styles/step1.module.css';
interface InputProps {
  details: InputInterface;
}
function Input({ details }: InputProps) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={details.id}>{details.label}</label>
      <input
        type={details.type}
        placeholder={details.placeHolder}
        id={details.id}
      />
    </div>
  );
}

export default Input;
