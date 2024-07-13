import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Archi's Academy Github kursuna hoşgeldiniz! Begum & Alperen </p>
        <p>HOŞGELDİNİZ</p>
        <p>özellik eklendi.</p>
        <p>2. özellik eklendi</p>
        <h2>logo bu alana gelecek</h2>
        <h2>Detaylar bu satıra yazılacak</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
