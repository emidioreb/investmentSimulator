import React from 'react';
import UseApi from '../hooks/UseApi';
import UseInfoRight from '../hooks/UseInfoRight';
import UseInfoLeft from '../hooks/UseInfoLeft';
import UseApiSimulation from '../hooks/UseApiSimulation';

function SimulatorColumnRight() {
  const { indexing, setIndexing } = UseInfoRight();
  const { monthContribution, setMonthContribution } = UseInfoRight();
  const { profitability, setProfitability } = UseInfoRight();
  const { indicators } = UseApi();
  const { CDI, setCDI } = UseInfoRight();
  const { changeColorBefore, setChangeColorBefore } = UseInfoRight();
  const { changeColorFix, setChangeColorFix } = UseInfoRight();
  const { changeColorAfter, setChangeColorAfter } = UseInfoRight();
  const { setTeste } = UseApiSimulation();
  // const [setChangeColorButtonSimulate] = useState(false);
  const { income } = UseInfoLeft();

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
      setTeste(false);
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
      setTeste(false);
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
      setTeste(false);
    } else {
      setChangeColorAfter(false);
      setIndexing('');
    }
  }

  function buttonSimulate() {
    setTeste(true);
  }

  return (
    <div>
      <div className="indexing-Types">
        <h4 className="sub-title title-indexing-Types">Indexação</h4>
        <div className="buttons-Indexing-Types">
          <button
            type="button"
            className={changeColorBefore ? 'button-change-color-left-indexing' : 'button-before'}
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
            className={changeColorFix ? 'button-change-color-right-indexing' : 'button-fix'}
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
            value={monthContribution}
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
            value={profitability}
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
        className={indexing !== '' && income !== '' ? 'button-simulate-change' : 'button-simulate'}
        onClick={buttonSimulate}
      >
        Simular
      </button>
    </div>
  );
}

export default SimulatorColumnRight;

// .button-simulate-change
