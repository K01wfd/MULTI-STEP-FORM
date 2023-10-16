import styles from '../styles/sideBar.module.css';
function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <span className={`${styles.navStepNumber} ${styles.active}`}>
              1
            </span>
            <div className={styles.navStepDetails}>
              <p>Step 1</p>
              <h2>Your info</h2>
            </div>
          </li>
          <li className={styles.navItem}>
            <span className={styles.navStepNumber}>1</span>
            <div className={styles.navStepDetails}>
              <p>Step 1</p>
              <h2>Your info</h2>
            </div>
          </li>
          <li className={styles.navItem}>
            <span className={styles.navStepNumber}>1</span>
            <div className={styles.navStepDetails}>
              <p>Step 1</p>
              <h2>Your info</h2>
            </div>
          </li>
          <li className={styles.navItem}>
            <span className={styles.navStepNumber}>1</span>
            <div className={styles.navStepDetails}>
              <p>Step 1</p>
              <h2>Your info</h2>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
