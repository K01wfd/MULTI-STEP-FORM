import styles from '../styles/step4.module.css';
interface Add {
  addTitle: string;
  addPrice: string;
}
interface Props {
  planTitle: string;
  planPeriod: string;
  periodPrice: string;
  planAddsOn: Add[];
  totalPrice: string;
}
function StepFour({
  planTitle,
  planPeriod,
  periodPrice,
  planAddsOn,
  totalPrice,
}: Props) {
  return (
    <>
      <article className={styles.mainPlan}>
        <div className={styles.planPeriod}>
          <title className={styles.planHeader}>
            <h3>
              {planTitle}({planPeriod})
            </h3>
            <button>Change</button>
          </title>
          <p>{periodPrice}</p>
        </div>

        <div className={styles.planAdds}>
          {planAddsOn.map((add) => (
            <div className={styles.addsContainer}>
              <p>{add.addTitle}</p>
              <p>{add.addPrice}</p>
            </div>
          ))}
        </div>
      </article>
      <hr />
      <div className={styles.total}>
        <p className={styles.totalPeriod}>Total(per {planPeriod})</p>
        <p className={styles.totalPrice}>{totalPrice}</p>
      </div>
    </>
  );
}

export default StepFour;
