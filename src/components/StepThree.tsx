import formStyles from '../styles/form.module.css';
import MonthlyAdds from './sub-components/MonthlyAdds';
type Props = {
  isMonthly: number | undefined;
};
function StepThree({ isMonthly }: Props) {
  return (
    <>
      <div className={formStyles.formHeader}>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      {isMonthly && <MonthlyAdds />}
    </>
  );
}

export default StepThree;
