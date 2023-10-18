import { ReactElement, useState } from 'react';

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

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
  };
};
