import React from 'react';

function SimulatorColumnRight() {
  return (
    <div>
      <div className="Indexing-Types">
        <h4>Tipos de Indexação</h4>
        <div className="buttons-Indexing-Types">
          <button
            type="button"
            className="button-before"
          >
            PRÉ
          </button>
          <button
            type="button"
            className="button-after"
          >
            PÓS
          </button>
          <button
            type="button"
            className="button-fix"
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
            // onChange={ ({ target }) => setInfo({ ...info, cep: target.value }) }
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
            // onChange={ ({ target }) => setInfo({ ...info, cep: target.value }) }
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
            // onChange={ ({ target }) => setInfo({ ...info, cep: target.value }) }
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
