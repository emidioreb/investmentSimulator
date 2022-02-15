import React from 'react';
import '../css/investmentSimulator.css';
import UseInfoLeft from '../hooks/UseInfoLeft';
import UseInfoRight from '../hooks/UseInfoRight';
import UseApiSimulation from '../hooks/UseApiSimulation';
import eqiImage from '../image/eqi.png';

function InvestmentSimulator() {
  const { simulations } = UseApiSimulation();
  const { indexing, renderResults } = UseInfoRight();
  const { income } = UseInfoLeft();
  const { teste } = UseApiSimulation();

  console.log(renderResults);
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

  if (renderResults === false) {
    return (
      <img className="eqi-imagem" src={eqiImage} alt="logo" id="logoCenter-login" width="300px" height="300px" />
    );
  }

  return (
    <div className="investiment-simulator">
      <h3>Resultado da simulação</h3>
      <div className="totalResults">
        <div className="resultsLeft">
          <div className="finalResults">
            <h4 className="titleResults">Valor Final Bruto</h4>
            <p className="text-result">{teste && (objVerify.length !== 0 && objVerify.valorFinalBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}</p>
          </div>
          <div className="finalResults">
            <h4 className="titleResults">Valor Final Líquido</h4>
            <p className="text-result">{teste && (objVerify.length !== 0 && objVerify.valorFinalLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}</p>
          </div>
        </div>
        <div className="resultsCenter">
          <div className="finalResults">
            <h4 className="titleResults">Valor Total Investido</h4>
            <p className="text-result">{teste && (objVerify.length !== 0 && objVerify.valorTotalInvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}</p>
          </div>
          <div className="finalResults">
            <h4 className="titleResults">Alíquota do IR</h4>
            <p className="text-result">
              {teste && (objVerify.length !== 0 && `${objVerify.aliquotaIR}%`)}
            </p>
          </div>
        </div>
        <div className="resultsRight">
          <div className="finalResults">
            <h4 className="titleResults">Valor Pago em IR</h4>
            <p className="text-result">{teste && (objVerify.length !== 0 && objVerify.valorPagoIR.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}</p>
          </div>
          <div className="finalResults">
            <h4 className="titleResults">Ganho Líquido</h4>
            <p className="text-result">{teste && (objVerify.length !== 0 && objVerify.ganhoLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default InvestmentSimulator;
