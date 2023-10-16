import { Step } from '../interfaces/steps';
import Input from './Input';

interface FormProps {
  formDetails: Step;
}

function Form({ formDetails }: FormProps) {
  return (
    <form id='primaryForm'>
      <h2>{formDetails.stepTitle}</h2>
      <p>{formDetails.stepSubTitle}</p>
      {formDetails.inputs.map((input) => (
        <Input key={input.id} details={input} />
      ))}
    </form>
  );
}

export default Form;
