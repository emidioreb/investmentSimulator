import React, { useState } from 'react';
import UseApi from '../hooks/UseApi';
import UseInfoRight from '../hooks/UseInfoRight';
// import UseApiSimulation from '../hooks/UseApiSimulation';

function SimulatorColumnRight() {
  const { setIndexing } = UseInfoRight();
  const { setMonthContribution } = UseInfoRight();
  const { setProfitability } = UseInfoRight();
  const { indicators } = UseApi();
  const { CDI, setCDI } = UseInfoRight();
  const [changeColorBefore, setChangeColorBefore] = useState(false);
  const [changeColorFix, setChangeColorFix] = useState(false);
  const [changeColorAfter, setChangeColorAfter] = useState(false);
  // const { simulations, setTeste } = UseApiSimulation();

  // Atualizando os valores de cdi quem vem da API.
  // Coloquei uma condicional para quando for undefined o código não quebrar
  if (indicators.length !== 0) {
    setCDI(indicators[0].valor);
  }

  function onClickButtonBefore() {
    if (changeColorBefore === false) {
      setChangeColorBefore(true);
      setIndexing('pre');
      setChangeColorFix(false);
      setChangeColorAfter(false);
    } else {
      setChangeColorBefore(false);
      setIndexing('');
    }
  }

  function onClickButtonFix() {
    if (changeColorFix === false) {
      setChangeColorFix(true);
      setIndexing('ipca');
      setChangeColorBefore(false);
      setChangeColorAfter(false);
    } else {
      setChangeColorFix(false);
      setIndexing('');
    }
  }

  function onClickButtonAfter() {
    if (changeColorAfter === false) {
      setChangeColorAfter(true);
      setIndexing('pos');
      setChangeColorBefore(false);
      setChangeColorFix(false);
    } else {
      setChangeColorAfter(false);
      setIndexing('');
    }
  }

  return (
    <div>
      <div className="indexing-Types">
        <h4 className="sub-title title-indexing-Types">Indexação</h4>
        <div className="buttons-Indexing-Types">
          <button
            type="button"
            className={changeColorBefore ? 'button-change-color-left' : 'button-before'}
            onClick={onClickButtonBefore}
          >
            PRÉ
          </button>
          <button
            type="button"
            className={changeColorAfter ? 'button-change-color-center' : 'button-after'}
            onClick={onClickButtonAfter}
          >
            PÓS
          </button>
          <button
            type="button"
            className={changeColorFix ? 'button-change-color-right' : 'button-fix'}
            onClick={onClickButtonFix}
          >
            FIXADO
          </button>
        </div>
      </div>
      <div className="inputs-simulator">
        <label htmlFor="monthContribution" className="monthContribution sub-title">
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
        <label htmlFor="profitability" className="profitability sub-title">
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
        <label htmlFor="CDI" className="CDI sub-title">
          CDI(ao ano)
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
