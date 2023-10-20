import formStyles from '../styles/form.module.css';
import MonthlyAdds from './sub-components/MonthlyAdds';
import YearlyAdds from './sub-components/YearlyAdds';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from '../types/formData';
type Props = {
  isMonthly: number;
  register: UseFormRegister<FormData>;
};
function StepThree({ isMonthly, register }: Props) {
  return (
    <>
      <div className={formStyles.formHeader}>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      {isMonthly >= 0 ? (
        <MonthlyAdds register={register} />
      ) : (
        <YearlyAdds register={register} />
      )}
    </>
  );
}

export default StepThree;
