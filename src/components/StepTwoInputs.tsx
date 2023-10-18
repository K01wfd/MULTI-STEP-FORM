import Plans from './Plans';
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import PlanSwitch from './PlanSwitch';
import styles from '../styles/step2.module.css';
import formStyles from '../styles/form.module.css';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { StepsInterfaces } from '../interface/formInterfaces';

interface Props {
  register: UseFormRegister<Partial<StepsInterfaces>>;
}

const monthlyPlan = [
  { plan: 'arcade', price: '$9/mo', icon: arcade },
  { plan: 'advanced', price: '$12/mo', icon: advanced },
  { plan: 'pro', price: '$15/mo', icon: pro },
];
const yearlyPlan = [
  { plan: 'arcade', price: '$90/mo', icon: arcade, bonus: '2 months free' },
  {
    plan: 'advanced',
    price: '$120/mo',
    icon: advanced,
    bonus: '2 months free',
  },
  { plan: 'pro', price: '$150/mo', icon: pro, bonus: '2 months free' },
];
function StepTwoInputs({ register }: Props) {
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsYearly(!isYearly);
  };

  return (
    <>
      <div className={formStyles.formHeader}>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className={styles.plansWrapper}>
        {!isYearly
          ? monthlyPlan.map(({ plan, price, icon }) => (
              <Plans
                register={register}
                key={plan}
                icon={icon}
                plane={plan}
                price={price}
              />
            ))
          : yearlyPlan.map(({ plan, price, icon, bonus }) => (
              <Plans
                register={register}
                key={plan}
                icon={icon}
                plane={plan}
                price={price}
                bonus={bonus}
              />
            ))}
      </div>
      <div className={styles.planSwitch}>
        <PlanSwitch
          whichPlan={isYearly}
          onPlanChange={(event) => handlePlanChange(event)}
          activePlane={styles.activePlan}
        />
      </div>
    </>
  );
}

export default StepTwoInputs;
