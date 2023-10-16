import styles from '../styles/sideBar.module.css';
interface Props {
  stepNumber: number;
  stepTitle: string;
}
function NavItem({ stepNumber, stepTitle }: Props) {
  return (
    <li className={styles.navItem}>
      <span className={`${styles.navStepNumber}`}>{stepNumber}</span>
      <div className={styles.navStepDetails}>
        <p>Step {stepNumber}</p>
        <h2>{stepTitle}</h2>
      </div>
    </li>
  );
}

export default NavItem;
