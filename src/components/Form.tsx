import StepOneInputs from './StepOneInputs';
import StepTwoInputs from './StepTwoInputs';
import formStyles from '../styles/form.module.css';
import StepThree from './StepThree';
import { useState } from 'react';

interface FormProps {
  stepNumber: number;
  stepTitle: string;
  stepSubTitle: string;
}
function Form({ stepNumber, stepTitle, stepSubTitle }: FormProps) {
  const [checkedAdds, setWhichAddActive] = useState<string[]>([]);
  const handleAddSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const originalAdds = [...checkedAdds];
    if (event.target.checked) {
      setWhichAddActive([...originalAdds, event.target.id]);
    } else {
      setWhichAddActive(originalAdds.filter((add) => add !== event.target.id));
    }
  };
  console.log(checkedAdds);
  return (
    <form id='primaryForm' className={formStyles.form}>
      <div className={formStyles.formHeader}>
        <h2>{stepTitle}</h2>
        <p>{stepSubTitle}</p>
      </div>
      {stepNumber === 1 && <StepOneInputs />}
      {stepNumber === 2 && <StepTwoInputs />}
      {stepNumber === 3 && (
        <StepThree onAddSelect={(event) => handleAddSelect(event)} />
      )}
    </form>
  );
}

export default Form;
