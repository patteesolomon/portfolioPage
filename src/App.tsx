import logo from './logo.svg';
import './App.css';
import './Contacts.tsx';
function App() {
  
  return (
    <div className="App">
      <header className = "App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>

      <body>
        <ul>Things im good at:</ul>
        <ul>C#</ul>
        <ul>        Ruby </ul>
        <ul>        Js</ul>
        <ul>        C++</ul>
        <ul>        Java</ul>
        <ul>And building programs of full stack</ul>
      </body>
      
      <footer>
        <a href="./Contacts.html">Contacts</a>
        </footer>
    </div>
  );
}

export default App;
