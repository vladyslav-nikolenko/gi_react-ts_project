import React from 'react';
import TestComponent from './components/testComponent';

function App(): JSX.Element {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h3>gi_react-ts_project</h3>
        <TestComponent />
      </div>
    </div>
  );
}

export default App;
