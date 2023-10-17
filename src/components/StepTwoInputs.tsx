import Plan from './Plan';
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import PlanSwitch from './PlanSwitch';

function StepTwoInputs() {
  const monthlyPlan = [
    { plan: 'arcade', price: '$9/mo', icon: arcade },
    { plan: 'advanced', price: '$12/mo', icon: advanced },
    { plan: 'pro', price: '$15/mo', icon: pro },
  ];

  const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      console.log(event.target.value);
    }
  };
  return (
    <div>
      {monthlyPlan.map(({ plan, price, icon }) => (
        <Plan key={plan} icon={icon} plane={plan} price={price} />
      ))}
      <PlanSwitch onPlanChange={(event) => handlePlanChange(event)} />
    </div>
  );
}

export default StepTwoInputs;
