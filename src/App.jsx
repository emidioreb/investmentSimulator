import React from 'react';
import InvestmentSimulator from './components/InvestmentSimulator';
import InvestmentHeader from './components/InvestmentHeader';
import Simulator from './components/Simulator';
import { InfoProviderLeft } from './hooks/UseInfoLeft';
import { InfoProviderRight } from './hooks/UseInfoRight';
import './App.css';

function App() {
  return (
    <InfoProviderLeft>
      <InfoProviderRight>
        <div>
          <InvestmentHeader />
          <div className="simulator-invest">
            <Simulator />
            <InvestmentSimulator />
          </div>
        </div>
      </InfoProviderRight>
    </InfoProviderLeft>
  );
}

export default App;
