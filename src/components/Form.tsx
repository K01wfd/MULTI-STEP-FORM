import { Step } from '../interfaces/steps';
import Input from './Input';
import formStyles from '../styles/form.module.css';
interface FormProps {
  formDetails: Step;
}

function Form({ formDetails }: FormProps) {
  return (
    <form id='primaryForm' className={formStyles.form}>
      <h2>{formDetails.stepTitle}</h2>
      <p>{formDetails.stepSubTitle}</p>
      {formDetails.inputs.map((input) => (
        <Input key={input.id} details={input} />
      ))}
    </form>
  );
}

export default Form;
