import './App.css';

function App() {
  return (
    <div className="App">
      <Amount name="Euros" />
    </div>
  );
}

function Amount({ name = 'Oh this field has no name :(' }) {
  return (
    <div className="Amount">
      <label>{name}</label>
      <p></p>
      <input
        type="number"
      />
    </div>
  );
}

export default App;
