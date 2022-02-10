import React from 'react';
// import InvestmentSimulator from './components/InvestmentSimulator';
import InvestmentHeader from './components/InvestmentHeader';
import Simulator from './components/Simulator';
import { InfoProviderLeft } from './hooks/UseInfoLeft';
import { InfoProviderRight } from './hooks/UseInfoRight';

function App() {
  return (
    <InfoProviderLeft>
      <InfoProviderRight>
        <div>
          <InvestmentHeader />
          {/* <InvestmentSimulator /> */}
          <Simulator />
        </div>
      </InfoProviderRight>
    </InfoProviderLeft>
  );
}

export default App;
