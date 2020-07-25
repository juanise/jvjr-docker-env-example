import React from 'react';
import logo from './logo.svg';
import './App.css';
import EnvProvider from 'jvjr-docker-env'

function App() {
  const first = process.env.REACT_APP_FIRST;
  const first2 = EnvProvider.value('FIRST');
  const second = EnvProvider.value('SECOND');
  const third = EnvProvider.value('THIRD');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          REACT_APP_FIRST env var: {first}
        </p>
        <p>
          FIRTS EnvProvider: {first2}
        </p>
        <p>
          SECOND EnvProvider changing default: {second}
        </p>
        <p>
          This one do not start with REACT_APP so do not have default value: {third}
        </p>
      </header>
    </div>
  );
}

export default App;
