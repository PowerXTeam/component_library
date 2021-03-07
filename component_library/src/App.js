import './_reset.css'
import PrimarySuccessButton from './Components/Buttons/PrimaryButton/SuccessButton/SuccessButton';
import PrimaryDangerButton from './Components/Buttons/PrimaryButton/DangerButton/DangerButton';
import PrimaryInfoButton from './Components/Buttons/PrimaryButton/InfoButton/InfoButton';

function App() {
  return (
    <div className="app">
      <p>Success Button</p>
      <PrimarySuccessButton content="SuccessButton"/>
      <PrimarySuccessButton content="SuccessButton active" modif="active"/>
      <PrimarySuccessButton content="SuccessButton disabled" modif="disabled"/>
      <p>Danger Button</p>
      <PrimaryDangerButton content="PrimaryDangerButton"/>
      <PrimaryDangerButton content="PrimaryDangerButton active" modif="active"/>
      <PrimaryDangerButton content="PrimaryDangerButton disabled" modif="disabled"/>
      <p>Info Button</p>
      <PrimaryInfoButton content="PrimaryInfoButton"/>
      <PrimaryInfoButton content="PrimaryInfoButton active" modif="active"/>
      <PrimaryInfoButton content="PrimaryInfoButton disabled" modif="disabled"/>
    </div>
  );
}

export default App;
