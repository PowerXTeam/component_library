import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import plug from './plug.png';


function App() {
  return (
    <div className="app">
      <Input label="Имя:" options="Можт быть не ваше" placeholder="Введите имя" />
      <Input options="Пароль сюда. Быстро!" type="password" placeholder="Введите пароль" />
      <Button type="button-danger" icon={plug} content="submit" />
    </div>
  );
}

export default App;
