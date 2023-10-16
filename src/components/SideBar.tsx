import styles from '../styles/sideBar.module.css';
import NavItem from './NavItem';
interface Props {
  formStepNum: number;
}
function NavBar({ formStepNum }: Props) {
  const stepDetails = [
    { stepNumber: 1, stepTitle: 'Your info' },
    { stepNumber: 2, stepTitle: 'Select plan' },
    { stepNumber: 3, stepTitle: 'Add-ons' },
    { stepNumber: 4, stepTitle: 'Summary' },
  ];
  return (
    <aside className={styles.navWrapper}>
      <nav>
        <ul className={styles.navList}>
          {stepDetails.map(({ stepNumber, stepTitle }) =>
            formStepNum === stepNumber ? (
              <NavItem
                active={'active'}
                key={stepNumber}
                stepNumber={stepNumber}
                stepTitle={stepTitle}
              />
            ) : (
              <NavItem
                active=''
                key={stepNumber}
                stepNumber={stepNumber}
                stepTitle={stepTitle}
              />
            )
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default NavBar;
