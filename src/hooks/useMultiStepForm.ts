import { ReactElement, useState } from 'react';
import { FormData, ReadyDataShape } from '../types/formData';
let readyData: ReadyDataShape = {
  personalInfo: { name: '', email: '', phone: '' },
  plan: { title: '', period: '', price: '' },
  adds: {
    monthly: [],
    yearly: [],
  },
  total: '',
};
export const useMultiStepForm = (steps: ReactElement[], formData: FormData) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  const extractPlanDetails = () => {
    if (formData) {
      readyData.personalInfo = formData.step1;
      //
      readyData.plan.title = formData.step2.plan.split(' ')[0];
      readyData.plan.period = formData.step2.plan.split(' ')[2];
      readyData.plan.price = formData.step2.plan.split(' ')[1];
      //
      if (formData.step3) {
        Object.values(formData.step3).forEach((val) => {
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
  };
  console.log(readyData);
  extractPlanDetails();
  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };
  const prevStep = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };
  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };
  return {
    currentStep: currentStepIndex,
    step: steps[currentStepIndex],
    nextStep,
    prevStep,
    goTo,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    readyData,
  };
};
