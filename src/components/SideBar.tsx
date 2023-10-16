import styles from '../styles/sideBar.module.css';
import NavItem from './NavItem';

function NavBar() {
  const stepDetails = [
    { stepNumber: 1, stepTitle: 'Your info' },
    { stepNumber: 2, stepTitle: 'Select plan' },
    { stepNumber: 3, stepTitle: 'Add-ons' },
    { stepNumber: 4, stepTitle: 'Summary' },
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <ul className={styles.navList}>
          {stepDetails.map((step) => (
            <NavItem
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              stepTitle={step.stepTitle}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
