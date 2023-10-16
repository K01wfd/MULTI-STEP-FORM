import { useState } from 'react';
import MainLayout from './components/MainLayout';
import SideBar from './components/SideBar';
import Form from './components/Form';
import Button from './components/Button';
import LinkButton from './components/LinkButton';
function App() {
  const [stepNum, setStepNum] = useState(1);

  const nextStep = () => {
    if (stepNum < 4) setStepNum(stepNum + 1);
  };
  const prevStep = () => {
    if (stepNum > 1) setStepNum(stepNum - 1);
  };
  return (
    <>
      <MainLayout>
        <SideBar formStepNum={stepNum} />
        <main>
          <div>
            <Form />
          </div>

          <div>
            <LinkButton onPrevStep={() => prevStep()} />
            <Button buttonText='next step' onNextStep={() => nextStep()} />
          </div>
        </main>
      </MainLayout>
    </>
  );
}

export default App;
