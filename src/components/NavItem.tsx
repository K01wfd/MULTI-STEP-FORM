import styles from '../styles/sideBar.module.css';
interface Props {
  stepNumber: number;
  stepTitle: string;
  active: string;
}
function NavItem({ stepNumber, stepTitle, active }: Props) {
  return (
    <li className={styles.navItem}>
      <span className={`${styles.navStepNumber} ${styles[active]}`}>
        {stepNumber}
      </span>
      <div className={styles.navStepDetails}>
        <p>Step {stepNumber}</p>
        <h2>{stepTitle}</h2>
      </div>
    </li>
  );
}

export default NavItem;
