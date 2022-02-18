/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import SimulatorColumnRight from '../components/SimulatorColumnRight';

describe('Coluna esquerda referente a área simulador', () => {
  test('Verificando se existe o campo "Aporte Inicial" ', () => {
    render(<SimulatorColumnRight />);
    const aporteMensal = screen.getByLabelText('Aporte Mensal');
    expect(aporteMensal).toBeInTheDocument();
    expect(aporteMensal).toHaveProperty('type', 'number');
  });
});
