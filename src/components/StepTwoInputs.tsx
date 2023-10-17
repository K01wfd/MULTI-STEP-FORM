import Plans from './Plans';
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import PlanSwitch from './PlanSwitch';
import styles from '../styles/step2.module.css';
import { useState } from 'react';
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
function StepTwoInputs() {
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsYearly(!isYearly);
    console.log(event.target.value);
  };

  return (
    <>
      <div className={styles.plansWrapper}>
        {!isYearly
          ? monthlyPlan.map(({ plan, price, icon }) => (
              <Plans key={plan} icon={icon} plane={plan} price={price} />
            ))
          : yearlyPlan.map(({ plan, price, icon, bonus }) => (
              <Plans
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
        />
      </div>
    </>
  );
}

export default StepTwoInputs;
