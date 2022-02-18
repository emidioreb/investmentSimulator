/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
// import SimulatorColumnLeft from '../components/SimulatorColumnLeft';
import { InfoProviderLeft } from '../hooks/UseInfoLeft';
import { InfoProviderRight } from '../hooks/UseInfoRight';
import { ApiSimulationProvider } from '../hooks/UseApiSimulation';
import { ApiProvider } from '../hooks/UseApi';
import Simulator from '../components/Simulator';
import InvestmentSimulator from '../components/InvestmentSimulator';

// describe('Coluna esquerda referente a área simulador', () => {
//   test('Verificando se existe o campo "Aporte Inicial" ', () => {
//     render(<SimulatorColumnLeft />);
//     const aporteInicial = screen.getByLabelText('Aporte Inicial');
//     expect(aporteInicial).toBeInTheDocument();
//     expect(aporteInicial).toHaveProperty('type', 'number');
//   });

describe('Coluna esquerda referente a área simulador', () => {
  test('Verificando se existe o campo "Prazo(em meses)" ', () => {
    render(
      <InfoProviderLeft>
        <InfoProviderRight>
          <ApiProvider>
            <ApiSimulationProvider>
              <Simulator />
              <InvestmentSimulator />
            </ApiSimulationProvider>
          </ApiProvider>
        </InfoProviderRight>
      </InfoProviderLeft>,
    );
    const prazo = screen.getByLabelText('Prazo(em meses)');
    expect(prazo).toBeInTheDocument();
    expect(prazo).toHaveProperty('type', 'number');
  });
});

//   test('Verificando se existe o campo "Aporte Inicial" ', () => {
//     render(<SimulatorColumnLeft />);
//     const aporteInicial = screen.getByLabelText('Aporte Inicial');
//     expect(aporteInicial).toBeInTheDocument();
//     expect(aporteInicial).toHaveProperty('type', 'number');
//   });
// });
