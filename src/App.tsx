import { useState } from 'react';
import MainLayout from './components/MainLayout';
import SideBar from './components/SideBar';
function App() {
  const [stepNum, setStepNum] = useState(1);
  return (
    <>
      <MainLayout>
        <SideBar formStepNum={stepNum} />
        <div>hello</div>
      </MainLayout>
    </>
  );
}

export default App;
