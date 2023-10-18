import { UseFormRegister } from 'react-hook-form';
import styles from '../styles/step2.module.css';
import { StepsInterfaces } from '../interface/formInterfaces';
interface PlanProps {
  plane: string;
  icon: string;
  price: string;
  bonus?: string;
  register: UseFormRegister<Partial<StepsInterfaces>>;
}

function Plans({ plane, icon, price, bonus, register }: PlanProps) {
  return (
    <div className={styles.plansGroup}>
      <input
        type='radio'
        value={plane}
        {...register('plan', { required: true })}
        id={plane}
      />
      <label htmlFor={plane} className={styles.plan}>
        <div className={styles.planDetails}>
          <img src={icon} alt={plane + 'icon'} />
          <div>
            <h3>{plane}</h3>
            <p>{price}</p>
            {bonus && <p className={styles.bonus}>{bonus}</p>}
          </div>
        </div>
      </label>
    </div>
  );
}

export default Plans;
