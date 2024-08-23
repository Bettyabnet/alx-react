import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
      <Notifications />
      <footer>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
