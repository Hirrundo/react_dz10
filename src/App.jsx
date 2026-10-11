import './App.css';

function ButtonWithCallback({ onButtonClick }) {
  function handleClick() {
    onButtonClick('Кнопка была нажата!');
  }

  return (
    <button onClick={handleClick}>
      Нажми меня
    </button>
  );
}

function App() {
  function handleClick(message) {
    console.log(message);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Callback через props</h1>

      <ButtonWithCallback onButtonClick={handleClick} />
    </div>
  );
}

export default App;