import MainLayout from './components/MainLayout';
import mainStyles from './styles/main.module.css';
import SideBar from './components/SideBar';
import footerStyles from './styles/footer.module.css';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepOne from './components/StepOne';
import { useMultiStepForm } from './hooks/useMultiStepForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from './types/formData';
import { useState } from 'react';
const INITIAL_DATA = {
  step1: {
    name: '',
    email: '',
    phone: '',
  },
  step2: {
    plan: '',
  },
  step3: {
    onlineService: {
      monthly: '',
      yearly: '',
    },
    largerStorage: {
      monthly: '',
      yearly: '',
    },
    customeProfile: {
      monthly: '',
      yearly: '',
    },
  },
};
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  const onSubmit = (data: FormData) => {
    setFormData(data);
    nextStep();
  };
  const planPeriod: number = formData.step2.plan.indexOf('monthly');
  const { currentStep, isFirstStep, isLastStep, nextStep, step, prevStep } =
    useMultiStepForm(
      [
        <StepOne register={register} errors={errors} />,
        <StepTwo register={register} isMonthly={planPeriod} />,
        <StepThree register={register} isMonthly={planPeriod} />,
      ],
      formData
    );

  return (
    <>
      <MainLayout>
        <SideBar formStepNum={currentStep + 1} />
        <main className={mainStyles.rightContainer}>
          <form id='primaryForm' onSubmit={handleSubmit(onSubmit)}>
            {step}
          </form>
        </main>
        <footer className={footerStyles.footer}>
          <div className={footerStyles.buttonsBox}>
            {!isFirstStep && <button onClick={() => prevStep()}>Back</button>}
            <button form='primaryForm'>
              {isLastStep ? 'Confirm' : 'Next'}
            </button>
          </div>
        </footer>
      </MainLayout>
    </>
  );
}

export default App;
