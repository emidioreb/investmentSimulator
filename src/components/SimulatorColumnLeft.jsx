import React from 'react';
import UseApi from '../hooks/UseApi';
import UseInfoLeft from '../hooks/UseInfoLeft';

function SimulatorColumnLeft() {
  const { setIncome } = UseInfoLeft();
  const { setInicialContribution } = UseInfoLeft();
  const { setTimer } = UseInfoLeft();
  const { IPCA, setIPCA } = UseInfoLeft();
  const { indicators } = UseApi();

  // Atualizando os valores de IPCA quem vem da API.
  // Coloquei uma condicional para quando for undefined o código não quebrar
  if (indicators.length !== 0) {
    setIPCA(indicators[1].valor);
  }

  return (
    <div>
      <div className="income">
        <h4>rendimentos</h4>
        <div className="buttons-income">
          <button
            type="button"
            className="button-gross"
            onClick={() => setIncome('gross')}
          >
            Bruto
          </button>
          <button
            type="button"
            className="button-equity"
            onClick={() => setIncome('equity')}
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
            onChange={({ target }) => setInicialContribution(target.value)}
            // placeholder="R$0,00"
          />
        </label>
        <br />
        <label htmlFor="timer" className="timer">
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
        <label htmlFor="IPCA" className="IPCA">
          IPCA
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
