import React from 'react';
import UseInfoRight from '../hooks/UseInfoRight';

function SimulatorColumnRight() {
  const { setIndexing } = UseInfoRight();
  const { setMonthContribution } = UseInfoRight();
  const { setProfitability } = UseInfoRight();
  const { setCDI } = UseInfoRight();
  return (
    <div>
      <div className="indexing-Types">
        <h4>Tipos de Indexação</h4>
        <div className="buttons-Indexing-Types">
          <button
            type="button"
            className="button-before"
            onClick={() => setIndexing('before')}
          >
            PRÉ
          </button>
          <button
            type="button"
            className="button-after"
            onClick={() => setIndexing('after')}
          >
            PÓS
          </button>
          <button
            type="button"
            className="button-fix"
            onClick={() => setIndexing('fix')}
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
            onChange={({ target }) => setCDI(target.value)}
            // placeholder="R$0,00"
          />
        </label>
      </div>
      <button
        type="button"
        className="button-simulate"
      >
        Simular
      </button>
    </div>
  );
}

export default SimulatorColumnRight;
