import React from 'react';
import UseApi from '../hooks/UseApi';
// import UseApiSimulation from '../hooks/UseApiSimulation';
import UseInfoLeft from '../hooks/UseInfoLeft';
// import UseInfoRight from '../hooks/UseInfoRight';

function SimulatorColumnLeft() {
  const { setIncome } = UseInfoLeft();
  const { setInicialContribution } = UseInfoLeft();
  const { setTimer } = UseInfoLeft();
  const { IPCA, setIPCA } = UseInfoLeft();
  const { indicators } = UseApi();
  // const { simulations } = UseApiSimulation();
  // const { indexing } = UseInfoRight();

  // Atualizando os valores de IPCA quem vem da API.
  // Coloquei uma condicional para quando for undefined o código não quebrar
  if (indicators.length !== 0) {
    setIPCA(indicators[1].valor);
  }

  // if (simulations.length !== 0) {
  //   const verifyIncome = simulations.filter((item) => (item.tipoRendimento === income));
  //   const verifyIndexing = verifyIncome.filter((item) => (item.tipoIndexacao === indexing));
  //   console.log(verifyIndexing);
  // }

  return (
    <div className="simulatorColumnLeft">
      <div className="income">
        <h4 className="sub-title">Rendimento</h4>
        <div className="buttons-income">
          <button
            type="button"
            className="button-gross"
            onClick={() => setIncome('bruto')}
          >
            Bruto
          </button>
          <button
            type="button"
            className="button-equity"
            onClick={() => setIncome('liquido')}
          >
            Líquido
          </button>
        </div>
      </div>
      <div className="inputs-simulator">
        <label htmlFor="inicialContribution" className="inicialContribution sub-title">
          Aporte Inicial
          <br />
          <input
            type="number"
            name="inicialContribution"
            onChange={({ target }) => setInicialContribution(target.value)}
            // placeholder="R$0,00"
          />
        </label>
        <br />
        <label htmlFor="timer" className="timer sub-title">
          Prazo(em meses)
          <br />
          <input
            type="number"
            name="timer"
            onChange={({ target }) => setTimer(target.value)}
            // placeholder="R$0,00"
          />
        </label>
        <br />
        <label htmlFor="IPCA" className="IPCA sub-title">
          IPCA(ao ano)
          <br />
          <input
            type="number"
            name="IPCA"
            value={IPCA}
          />
        </label>
      </div>
      <button
        type="button"
        className="clear"
      >
        Limpar campos
      </button>
    </div>
  );
}

export default SimulatorColumnLeft;
