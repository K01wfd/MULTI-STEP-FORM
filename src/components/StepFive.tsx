import styles from '../styles/step5.module.css';
import thankyou from '../assets/images/icon-thank-you.svg';
function StepFive() {
  return (
    <div className={styles.thankyouContainer}>
      <img src={thankyou} alt='thank you icon' />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default StepFive;
