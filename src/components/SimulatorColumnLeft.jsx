import React from 'react';

function SimulatorColumnLeft() {
  return (
    <div>
      <div className="return">
        <h4>rendimentos</h4>
        <div className="buttons-return">
          <button
            type="button"
            className="button-gross"
          >
            Bruto
          </button>
          <button
            type="button"
            className="button-equity"
          >
            Líquido
          </button>
        </div>
      </div>
      <div className="inputs-simulator">
        <label htmlFor="inicialContribution" className="inicialContribution">
          Aporte Inicial
          <br />
          <input
            type="number"
            name="inicialContribution"
            // onChange={ ({ target }) => setInfo({ ...info, cep: target.value }) }
            // placeholder="R$0,00"
          />
        </label>
        <br />
        <label htmlFor="time" className="timer">
          Prazo(em meses)
          <br />
          <input
            type="number"
            name="timer"
            // onChange={ ({ target }) => setInfo({ ...info, cep: target.value }) }
            // placeholder="R$0,00"
          />
        </label>
        <br />
        <label htmlFor="IPCA" className="IPCA">
          Aporte Inicial
          <br />
          <input
            type="number"
            name="IPCA"
            // onChange={ ({ target }) => setInfo({ ...info, cep: target.value }) }
            // placeholder="R$0,00"
          />
        </label>
      </div>
    </div>
  );
}

export default SimulatorColumnLeft;
