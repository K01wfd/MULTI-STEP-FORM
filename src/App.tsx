import { useState } from 'react';
import MainLayout from './components/MainLayout';
import SideBar from './components/SideBar';
import Form from './components/Form';
import Button from './components/Button';
import LinkButton from './components/LinkButton';
import { steps } from './data/steps';
import mainStyles from './styles/main.module.css';
import footerStyles from './styles/footer.module.css';
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
        <main className={mainStyles.rightContainer}>
          <div>
            {steps.map((step) =>
              step.stepNumber === currentStep ? (
                <Form key={step.stepNumber} formDetails={step} />
              ) : null
            )}
          </div>
        </main>
        <footer className={footerStyles.footer}>
          <div className={footerStyles.buttonsBox}>
            {currentStep > 1 && <LinkButton onPrevStep={() => prevStep()} />}
            <Button buttonText='next step' onNextStep={() => nextStep()} />
          </div>
        </footer>
      </MainLayout>
    </>
  );
}

export default App;
