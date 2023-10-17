import { Step } from '../interfaces/steps';
import StepOneInputs from './StepOneInputs';
import StepTwoInputs from './StepTwoInputs';
import formStyles from '../styles/form.module.css';
interface FormProps {
  formDetails: Step;
}

function Form({ formDetails }: FormProps) {
  return (
    <form id='primaryForm' className={formStyles.form}>
      <h2>{formDetails.stepTitle}</h2>
      <p>{formDetails.stepSubTitle}</p>
      {formDetails.stepNumber === 1 && <StepOneInputs />}
      {formDetails.stepNumber === 2 && <StepTwoInputs />}
    </form>
  );
}

export default Form;
