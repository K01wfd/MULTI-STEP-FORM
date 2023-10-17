import styles from '../styles/step2.module.css';
interface PlanProps {
  plane: string;
  icon: string;
  price: string;
  bonus?: string;
}
function Plans({ plane, icon, price, bonus }: PlanProps) {
  return (
    <div className={styles.plansGroup}>
      <input
        type='radio'
        checked={plane === plane}
        value={plane}
        name='plane'
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
