import './App.css';
import holber from './holber.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holber} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
