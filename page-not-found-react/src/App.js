import React from 'react';
import PxHeader from './components/PxHeader';
import PxMain from './components/PxMain';
import PxFooter from './components/PxFooter';
import './Global.css';

function App() {
  return (
    <div className="App">
      <PxHeader />
      <PxMain />
      <PxFooter />
    </div>
  );
}

export default App;
