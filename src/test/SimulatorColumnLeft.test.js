/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import SimulatorColumnLeft from '../components/SimulatorColumnLeft';
import Providers from '../hooks/Providers';

describe('Coluna esquerda referente a área simulador', () => {
  test('Verificando se existe o campo "Aporte Inicial" ', () => {
    render(
      <Providers>
        <SimulatorColumnLeft />
      </Providers>,
    );
    const aporteInicial = screen.getByText('Aporte Inicial');
    expect(aporteInicial).toBeInTheDocument();
  });
  test('Verificando se existe o campo "Prazo(em meses)" ', () => {
    render(
      <Providers>
        <SimulatorColumnLeft />
      </Providers>,
    );
    const prazo = screen.getByText('Prazo(em meses)');
    expect(prazo).toBeInTheDocument();
  });
});
