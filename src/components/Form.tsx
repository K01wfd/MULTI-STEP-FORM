import StepOneInputs from './StepOneInputs';
import StepTwoInputs from './StepTwoInputs';
import formStyles from '../styles/form.module.css';

interface FormProps {
  stepNumber: number;
  stepTitle: string;
  stepSubTitle: string;
}
function Form({ stepNumber, stepTitle, stepSubTitle }: FormProps) {
  return (
    <form id='primaryForm' className={formStyles.form}>
      <h2>{stepTitle}</h2>
      <p>{stepSubTitle}</p>
      {stepNumber === 1 && <StepOneInputs />}
      {stepNumber === 2 && <StepTwoInputs />}
    </form>
  );
}

export default Form;
