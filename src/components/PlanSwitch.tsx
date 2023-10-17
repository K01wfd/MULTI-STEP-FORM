interface Props {
  onPlanChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function PlanSwitch({ onPlanChange }: Props) {
  return (
    <div>
      <label htmlFor='switch'>Monthly</label>
      <input
        type='checkbox'
        id='switch'
        value='yearly'
        onChange={onPlanChange}
      />
      <label htmlFor='switch'>Yearly</label>
    </div>
  );
}

export default PlanSwitch;
