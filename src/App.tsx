import { useMultiStepForm } from './hooks/useMultiStepForm';
import MainLayout from './components/MainLayout';
import mainStyles from './styles/main.module.css';
import SideBar from './components/SideBar';
import footerStyles from './styles/footer.module.css';
import StepOneInputs from './components/StepOneInputs';
import StepTwoInputs from './components/StepTwoInputs';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import { FormEvent, useState } from 'react';
import { StepsDataInterface } from './interface/formData';
import { INITIAL_DATA } from './interface/formData';

function App() {
  // FORM STEPS DATA STATE
  const [data, setData] = useState<StepsDataInterface>(INITIAL_DATA);

  const updatePersonalData = (fields: Partial<StepsDataInterface>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  // USE FORM HOOK
  const { currentStep, nextStep, prevStep, step, isFirstStep, isLastStep } =
    useMultiStepForm([
      <StepOneInputs {...data} updatePersonalData={updatePersonalData} />,
      <StepTwoInputs />,
      <StepThree />,
      <StepFour
        periodPrice=''
        planTitle=''
        planPeriod=''
        planAddsOn={[]}
        totalPrice=''
      />,
    ]);

  // HANDLE SUBMIT
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    nextStep();
    console.log(e);
  };
  return (
    <>
      <MainLayout>
        <SideBar formStepNum={currentStep + 1} />
        <main className={mainStyles.rightContainer}>
          <form id='primaryForm' onSubmit={onSubmit}>
            {step}
          </form>
        </main>
        <footer className={footerStyles.footer}>
          <div className={footerStyles.buttonsBox}>
            {!isFirstStep && <button onClick={prevStep}>back</button>}
            <button type='submit' form='primaryForm'>
              {isLastStep ? 'Confirm' : 'Next'}
            </button>
          </div>
        </footer>
      </MainLayout>
    </>
  );
}

export default App;
