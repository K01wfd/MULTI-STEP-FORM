import MainLayout from './components/MainLayout';
import mainStyles from './styles/main.module.css';
import SideBar from './components/SideBar';
import footerStyles from './styles/footer.module.css';
import StepTwoInputs from './components/StepTwoInputs';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import { FieldValues, useForm } from 'react-hook-form';
import StepOneInputs from './components/StepOneInputs';
import { useState } from 'react';
import { StepsInterfaces } from './interface/formInterfaces';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  // type PersonalInfoType = z.infer<typeof PersonalInfoSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<StepsInterfaces>>();

  const next = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };
  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  // HANDLE SUBMIT
  const onSubmit = (data: FieldValues) => {
    next();
    console.log(data);
  };

  return (
    <>
      <MainLayout>
        <SideBar formStepNum={currentStep} />
        <main className={mainStyles.rightContainer}>
          <form id='primaryForm' onSubmit={handleSubmit(onSubmit)}>
            {currentStep === 1 && <StepOneInputs register={register} />}
            {currentStep === 2 && <StepTwoInputs register={register} />}
          </form>
        </main>
        <footer className={footerStyles.footer}>
          <div className={footerStyles.buttonsBox}>
            {currentStep > 1 && <button onClick={prev}>back</button>}

            <button type='submit' form='primaryForm'>
              next
            </button>
          </div>
        </footer>
      </MainLayout>
    </>
  );
}

export default App;
