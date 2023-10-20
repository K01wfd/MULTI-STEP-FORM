import styles from '../styles/step2.module.css';
interface Props {
  isYearly: boolean;
  onPlanChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  activePlane?: string;
}
function PlanSwitch({ onPlanChange, isYearly, activePlane }: Props) {
  return (
    <>
      <label className={!isYearly ? activePlane : ''}>Monthly</label>
      <input
        type='checkbox'
        id='switch'
        value={isYearly ? 'Monthly' : 'Yearly'}
        onChange={onPlanChange}
        checked={isYearly}
      />
      <label htmlFor='switch' className={styles.switch}></label>
      <label className={isYearly ? activePlane : ''}>Yearly</label>
    </>
  );
}

export default PlanSwitch;
