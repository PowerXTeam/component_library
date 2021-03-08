import './_reset.css'
import Button from './Components/Button/Button';
import plug from './plug.png';


function App() {
  return (
    <div className="app">
      <Button type="button-danger" content="button danger" />
      <Button type="button-succes" content="buttun primary succes"/>
      <Button type="button-info" content="button-info"/>
      <Button type="button-info" isDisabled="true" icon={plug} content="button-info disabled plug"/>
    </div>
  );
}

export default App;
