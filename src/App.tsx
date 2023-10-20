import MainLayout from './components/MainLayout';
import mainStyles from './styles/main.module.css';
import SideBar from './components/SideBar';
import footerStyles from './styles/footer.module.css';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepOne from './components/StepOne';
import { useForm } from 'react-hook-form';
import { FormData } from './types/formData';
import { useEffect, useState } from 'react';

const INITIAL_FORM_DATA = {
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
  const [currentStep, setCurrentStep] = useState(2);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  let planPeriod = 0;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    setFormData((prev) => {
      return { ...prev, ...data };
    });
    nextStep();
  };
  if (formData.step2.plan) {
    planPeriod = formData.step2.plan.indexOf('monthly');
  }
  useEffect(() => {
    if (currentStep === 4) {
      // Check if the current step is 4
      const newFormData = formData;
      setFormData(newFormData);
      console.log(formData);
    }
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handlePlanChangeReq = () => {
    setCurrentStep(2);
  };
  return (
    <>
      <MainLayout>
        <SideBar formStepNum={currentStep} />
        <main className={mainStyles.rightContainer}>
          <form id='primaryForm' onSubmit={handleSubmit(onSubmit)}>
            {currentStep === 1 && (
              <StepOne register={register} errors={errors} />
            )}
            {currentStep === 2 && (
              <StepTwo register={register} isMonthly={planPeriod} />
            )}
            {currentStep === 3 && (
              <StepThree register={register} isMonthly={planPeriod} />
            )}
            {currentStep === 4 && (
              <StepFour
                data={formData}
                onChangeRequest={() => handlePlanChangeReq()}
              />
            )}
          </form>
        </main>
        <footer className={footerStyles.footer}>
          <div className={footerStyles.buttonsBox}>
            {currentStep > 1 && (
              <button onClick={() => prevStep()}>Back</button>
            )}
            <button form='primaryForm'>
              {currentStep === 4 ? 'Confirm' : 'Next'}
            </button>
          </div>
        </footer>
      </MainLayout>
    </>
  );
}

export default App;
