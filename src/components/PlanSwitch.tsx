interface Props {
  whichPlan: boolean;
  onPlanChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function PlanSwitch({ onPlanChange, whichPlan }: Props) {
  return (
    <>
      <label>Monthly</label>
      <input
        type='checkbox'
        id='monthly'
        value={whichPlan ? 'Monthly' : 'Yearly'}
        onChange={onPlanChange}
        checked={whichPlan}
      />
      <label>Yearly</label>
    </>
  );
}

export default PlanSwitch;
