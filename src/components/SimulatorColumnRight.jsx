import React from 'react';
import UseApi from '../hooks/UseApi';
import UseInfoRight from '../hooks/UseInfoRight';
// import UseApiSimulation from '../hooks/UseApiSimulation';

function SimulatorColumnRight() {
  const { setIndexing } = UseInfoRight();
  const { setMonthContribution } = UseInfoRight();
  const { setProfitability } = UseInfoRight();
  const { indicators } = UseApi();
  const { CDI, setCDI } = UseInfoRight();
  // const { simulations, setTeste } = UseApiSimulation();

  // Atualizando os valores de cdi quem vem da API.
  // Coloquei uma condicional para quando for undefined o código não quebrar
  if (indicators.length !== 0) {
    setCDI(indicators[0].valor);
  }

  return (
    <div>
      <div className="indexing-Types">
        <h4>Tipos de Indexação</h4>
        <div className="buttons-Indexing-Types">
          <button
            type="button"
            className="button-before"
            onClick={() => setIndexing('pre')}
          >
            PRÉ
          </button>
          <button
            type="button"
            className="button-after"
            onClick={() => setIndexing('pos')}
          >
            PÓS
          </button>
          <button
            type="button"
            className="button-fix"
            onClick={() => setIndexing('ipca')}
          >
            FIXADO
          </button>
        </div>
      </div>
      <div className="inputs-simulator">
        <label htmlFor="monthContribution" className="monthContribution">
          Aporte Mensal
          <br />
          <input
            type="number"
            name="monthContribution"
            onChange={({ target }) => setMonthContribution(target.value)}
            // placeholder="R$0,00"
          />
        </label>
        <br />
        <label htmlFor="profitability" className="profitability">
          Rentabilidade
          <br />
          <input
            type="number"
            name="profitability"
            onChange={({ target }) => setProfitability(target.value)}
            // placeholder="R$0,00"
          />
        </label>
        <br />
        <label htmlFor="CDI" className="CDI">
          CDI
          <br />
          <input
            type="number"
            name="CDI"
            value={CDI}
            // onChange={({ target }) => setCDI(target.value)}
            // placeholder="R$0,00"
          />
        </label>
      </div>
      <button
        type="button"
        className="button-simulate"
        // onClick={() => setTeste(simulations)}
      >
        Simular
      </button>
    </div>
  );
}

export default SimulatorColumnRight;
