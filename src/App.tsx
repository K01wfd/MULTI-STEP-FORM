import { useState } from 'react';
import MainLayout from './components/MainLayout';
import SideBar from './components/SideBar';
import FormsContent from './components/FormsContent';
import Form from './components/Form';
import ButtonsBox from './components/ButtonsBox';
import Button from './components/Button';
function App() {
  const [stepNum, setStepNum] = useState(1);
  return (
    <>
      <MainLayout>
        <SideBar formStepNum={stepNum} />
        <FormsContent>
          <Form />
        </FormsContent>
        <ButtonsBox>
          <Button
            buttonText='next step'
            onNextStep={() => console.log('next step')}
          />
        </ButtonsBox>
      </MainLayout>
    </>
  );
}

export default App;
