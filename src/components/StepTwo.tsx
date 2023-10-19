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
};

function StepTwoInputs({ register }: Props) {
  // state for plan switch
  const [isYearly, setIsYearly] = useState(false);

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
          whichPlan={isYearly}
          onPlanChange={() => handlePlanChange()}
          activePlane={styles.activePlan}
        />
      </div>
    </>
  );
}

export default StepTwoInputs;
