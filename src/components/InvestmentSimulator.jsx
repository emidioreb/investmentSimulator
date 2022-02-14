import React from 'react';
import '../css/investmentSimulator.css';
import UseInfoLeft from '../hooks/UseInfoLeft';
import UseInfoRight from '../hooks/UseInfoRight';
import UseApiSimulation from '../hooks/UseApiSimulation';

function InvestmentSimulator() {
  const { simulations } = UseApiSimulation();
  const { indexing } = UseInfoRight();
  const { income } = UseInfoLeft();
  const { teste } = UseApiSimulation();

  let verify = '';
  let objVerify = '';
  if (simulations.length !== 0) {
    const verifyIncome = simulations.filter((item) => (item.tipoRendimento === income));
    const verifyIndexing = verifyIncome.filter((item) => (item.tipoIndexacao === indexing));
    verify = verifyIndexing;
    if (verify.length !== 0) {
      // eslint-disable-next-line prefer-destructuring
      objVerify = verify[0];
    }
  }

  return (
    <div className="investiment-simulator">
      <h3>Simulador de Investimento</h3>
      <div className="totalResults">
        <div className="resultsLeft">
          <div className="finalResults">
            <h4>Valor Final Bruto</h4>
            <p>{teste && objVerify.valorFinalBruto}</p>
          </div>
          <div className="finalResults">
            <h4>Valor Final Líquido</h4>
            <p>{teste && objVerify.valorFinalLiquido}</p>
          </div>
        </div>
        <div className="resultsCenter">
          <div className="finalResults">
            <h4>Valor Total Investido</h4>
            <p>{teste && objVerify.valorTotalInvestido}</p>
          </div>
          <div className="finalResults">
            <h4>Alíquota do IR</h4>
            <p>{teste && objVerify.aliquotaIR}</p>
          </div>
        </div>
        <div className="resultsRight">
          <div className="finalResults">
            <h4>Valor Pago em IR</h4>
            <p>{teste && objVerify.valorPagoIR}</p>
          </div>
          <div className="finalResults">
            <h4>Ganho Líquido</h4>
            <p>{teste && objVerify.ganhoLiquido}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default InvestmentSimulator;
