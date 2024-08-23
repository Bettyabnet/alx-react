import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
      <Notifications />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
      <footer>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
