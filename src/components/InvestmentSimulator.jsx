import React from 'react';
import '../css/investmentSimulator.css';

function InvestmentSimulator() {
  // o que vem da API vai aonde esta os valores
  return (
    <div>
      <h3>Simulador de Investimento</h3>
      <div className="totalResults">
        <div className="resultsLeft">
          <div className="finalResults">
            <h4>Valor Final Bruto</h4>
            <p>R$15.509,27</p>
          </div>
          <div className="finalResults">
            <h4>Valor Final Líquido</h4>
            <p>R$15.509,27</p>
          </div>
          <div className="finalResults">
            <h4>Valor Total Investido</h4>
            <p>R$15.509,27</p>
          </div>
        </div>
        <div className="resultsRight">
          <div className="finalResults">
            <h4>Alíquota do IR</h4>
            <p>R$15.509,27</p>
          </div>
          <div className="finalResults">
            <h4>Valor Pago em IR</h4>
            <p>R$15.509,27</p>
          </div>
          <div className="finalResults">
            <h4>Ganho Líquido</h4>
            <p>R$15.509,27</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default InvestmentSimulator;
