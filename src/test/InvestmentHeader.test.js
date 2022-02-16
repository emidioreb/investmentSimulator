/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import InvestmentHeader from '../components/InvestmentHeader';

describe('Header da aplicação', () => {
  test('Deve existir um título "Simulador de Investimento" ', () => {
    render(<InvestmentHeader />);
    const title = screen.getByText('Simulador de Investimento');
    expect(title).toBeInTheDocument();
  });
});
