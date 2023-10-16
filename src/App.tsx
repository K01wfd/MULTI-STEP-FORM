import { useState } from 'react';
import MainLayout from './components/MainLayout';
import SideBar from './components/SideBar';
import Form from './components/Form';
import Button from './components/Button';
import LinkButton from './components/LinkButton';
import { steps } from './data/steps';
import styles from './styles/main.module.css';
function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  return (
    <>
      <MainLayout>
        <SideBar formStepNum={currentStep} />
        <main className={styles.rightContainer}>
          <div>
            {steps.map((step) =>
              step.stepNumber === currentStep ? (
                <Form key={step.stepNumber} formDetails={step} />
              ) : null
            )}
          </div>

          <div>
            {currentStep > 1 && <LinkButton onPrevStep={() => prevStep()} />}
            <Button buttonText='next step' onNextStep={() => nextStep()} />
          </div>
        </main>
      </MainLayout>
    </>
  );
}

export default App;
