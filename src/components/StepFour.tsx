import styles from '../styles/step4.module.css';
import formStyles from '../styles/form.module.css';
import { ReadyDataShape, FormData } from '../types/formData';

interface Props {
  data: FormData;
  onChangeRequest: () => void;
}
function StepFour({ data, onChangeRequest }: Props) {
  let readyData: ReadyDataShape = {
    personalInfo: { name: '', email: '', phone: '' },
    plan: { title: '', period: '', price: '' },
    adds: {
      monthly: [],
      yearly: [],
    },
    total: '',
  };
  if (data) {
    // SHAPING THE DATA TO MATCH THE STEP 4 DATA LAYOUT
    readyData.personalInfo = data.step1;
    //
    readyData.plan.title = data.step2.plan.split(' ')[0];
    readyData.plan.period = data.step2.plan.split(' ')[2];
    readyData.plan.price = data.step2.plan.split(' ')[1];
    //
    if (data.step3) {
      Object.values(data.step3).forEach((val) => {
        if (val.monthly) {
          readyData.adds.monthly.push({
            title: val.monthly.slice(0, -7),
            price: val.monthly.split(' ')[2],
          });
        }
        if (val.yearly) {
          readyData.adds.yearly.push({
            title: val.yearly.slice(0, -7),
            price: val.yearly.split(' ')[2],
          });
        }
      });
    }
    //
  }

  // calculate total price by extracting the values from the data
  const planPrice: any = readyData.plan.price.match(/\d+/g);
  let addsOnTotal = '';
  if (readyData.plan.period === 'monthly') {
    readyData.adds.monthly.forEach(
      (add) => (addsOnTotal += add.price.match(/\d+/g))
    );
  } else {
    readyData.adds.yearly.forEach(
      (add, i) => (addsOnTotal += add.price.match(/\d+/g)).split('')[i]
    );
  }
  let addTotal = addsOnTotal
    .split('')
    .reduce((acc, item) => acc + parseInt(item), 0);
  let total = addTotal + parseInt(planPrice);
  console.log(addTotal);
  console.log();
  return (
    <>
      <div className={formStyles.formHeader}>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <article className={styles.mainPlan}>
        <div className={styles.planPeriod}>
          <div className={styles.planHeader}>
            <h3>
              {readyData.plan.title}
              {readyData.plan.period}
            </h3>
            <button onClick={onChangeRequest}>Change</button>
          </div>
          <p>{readyData.plan.price}</p>
        </div>

        <div className={styles.planAdds}>
          {readyData.plan.period === 'monthly'
            ? readyData.adds.monthly.map((add) => (
                <div key={add.title} className={styles.addsContainer}>
                  <p>{add.title}</p>
                  <p>{add.price}</p>
                </div>
              ))
            : readyData.adds.yearly.map((add) => (
                <div key={add.title} className={styles.addsContainer}>
                  <p>{add.title}</p>
                  <p>{add.price}</p>
                </div>
              ))}
        </div>
      </article>
      <hr />
      <div className={styles.total}>
        <p className={styles.totalPeriod}>
          Total(per {readyData.plan.period === 'monthly' ? 'Month' : 'Year'})
        </p>
        <p className={styles.totalPrice}>
          +${total}/{readyData.plan.period === 'monthly' ? 'mo' : 'yr'}
        </p>
      </div>
    </>
  );
}

export default StepFour;
