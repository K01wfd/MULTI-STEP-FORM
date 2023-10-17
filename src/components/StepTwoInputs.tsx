import Plan from './Plan';
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import PlanSwitch from './PlanSwitch';
import { useState } from 'react';

function StepTwoInputs() {
  const [isYearly, setIsYearly] = useState(false);
  const monthlyPlan = [
    { plan: 'arcade', price: '$9/mo', icon: arcade },
    { plan: 'advanced', price: '$12/mo', icon: advanced },
    { plan: 'pro', price: '$15/mo', icon: pro },
  ];

  const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsYearly(!isYearly);
    console.log(event.target.value);
  };

  return (
    <>
      <div>
        {monthlyPlan.map(({ plan, price, icon }) => (
          <Plan key={plan} icon={icon} plane={plan} price={price} />
        ))}
      </div>
      <PlanSwitch
        whichPlan={isYearly}
        onPlanChange={(event) => handlePlanChange(event)}
      />
    </>
  );
}

export default StepTwoInputs;
