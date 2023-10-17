import styles from '../styles/step2.module.css';
interface Props {
  whichPlan: boolean;
  onPlanChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  activePlane?: string;
}
function PlanSwitch({ onPlanChange, whichPlan, activePlane }: Props) {
  return (
    <>
      <label className={!whichPlan ? activePlane : ''}>Monthly</label>
      <input
        type='checkbox'
        id='switch'
        value={whichPlan ? 'Monthly' : 'Yearly'}
        onChange={onPlanChange}
        checked={whichPlan}
      />
      <label htmlFor='switch' className={styles.switch}></label>
      <label className={whichPlan ? activePlane : ''}>Yearly</label>
    </>
  );
}

export default PlanSwitch;
