import React from 'react';
import SimulatorColumnLeft from './SimulatorColumnLeft';
import SimulatorColumnRight from './SimulatorColumnRight';
import '../css/simulator.css';

function simulator() {
  return (
    <div className="simulator">
      <h3>Simulador</h3>
      <div className="columns-simulator">
        <SimulatorColumnLeft />
        <SimulatorColumnRight />
      </div>
    </div>
  );
}

export default simulator;
