import React from 'react';
import InvestmentSimulator from './components/InvestmentSimulator';
import InvestmentHeader from './components/InvestmentHeader';
import Simulator from './components/Simulator';

function App() {
  return (
    <div>
      <InvestmentHeader />
      <InvestmentSimulator />
      <Simulator />
    </div>
  );
}

export default App;
