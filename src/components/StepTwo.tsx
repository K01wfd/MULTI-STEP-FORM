import PlanSwitch from './PlanSwitch';
import styles from '../styles/step2.module.css';
import formStyles from '../styles/form.module.css';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from '../types/formData';
import MonthlyPlans from './sub-components/MonthlyPlans';
import YearlyPlans from './sub-components/YearlyPlans';
type Props = {
  register: UseFormRegister<FormData>;
  isMonthly: number;
};

function StepTwoInputs({ register, isMonthly }: Props) {
  let yearlyPlan: boolean = isMonthly >= 0 ? true : false; // false at the begining

  const [isYearly, setIsYearly] = useState(!yearlyPlan);
  const handlePlanChange = () => {
    setIsYearly(!isYearly);
  };

  return (
    <>
      <div className={formStyles.formHeader}>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      {!isYearly && <MonthlyPlans register={register} />}
      {isYearly && <YearlyPlans register={register} />}
      <div className={styles.planSwitch}>
        <PlanSwitch
          isYearly={isYearly}
          onPlanChange={() => handlePlanChange()}
          activePlane={styles.activePlan}
        />
      </div>
    </>
  );
}

export default StepTwoInputs;
