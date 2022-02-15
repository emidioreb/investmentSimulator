import React, { useState } from 'react';
import UseApi from '../hooks/UseApi';
import UseApiSimulation from '../hooks/UseApiSimulation';
import UseInfoLeft from '../hooks/UseInfoLeft';
import UseInfoRight from '../hooks/UseInfoRight';

function SimulatorColumnLeft() {
  const { setIncome } = UseInfoLeft();
  const { inicialContribution, setInicialContribution } = UseInfoLeft();
  const { timer, setTimer } = UseInfoLeft();
  const { IPCA, setIPCA } = UseInfoLeft();
  const { setMonthContribution } = UseInfoRight();
  const {
    setProfitability,
    setIndexing,
    setChangeColorBefore, setChangeColorFix, setChangeColorAfter,
  } = UseInfoRight();
  const { indicators } = UseApi();
  const [changeColorGross, setChangeColorGross] = useState(false);
  const [changeColorEquity, setChangeColorEquity] = useState(false);
  const { setTeste } = UseApiSimulation();

  if (indicators.length !== 0) {
    setIPCA(indicators[1].valor);
  }

  function onClickButtonGross() {
    if (changeColorGross === false) {
      setChangeColorGross(true);
      setIncome('bruto');
      setChangeColorEquity(false);
      setTeste(false);
    } else {
      setChangeColorGross(false);
      setIncome('');
    }
  }

  function onClickButtonEquity() {
    if (changeColorEquity === false) {
      setChangeColorEquity(true);
      setIncome('liquido');
      setChangeColorGross(false);
      setTeste(false);
    } else {
      setChangeColorEquity(false);
      setIncome('');
    }
  }

  function clearInput() {
    setTimer('');
    setInicialContribution('');
    setChangeColorEquity(false);
    setChangeColorGross(false);
    setIncome('');
    setMonthContribution('');
    setProfitability('');
    setIndexing('');
    setChangeColorBefore(false);
    setChangeColorFix(false);
    setChangeColorAfter(false);
  }
  // console.log(inicialContribution);
  // const xablau = `R$ ${(+inicialContribution).toFixed(2).replace('.', ',')}`;
  // console.log(xablau);

  return (
    <div className="simulatorColumnLeft">
      <div className="income">
        <h4 className="sub-title">Rendimento</h4>
        <div className="buttons-income">
          <button
            type="button"
            className={changeColorGross ? 'button-change-color-left' : 'button-gross'}
            onClick={onClickButtonGross}
          >
            Bruto
          </button>
          <button
            type="button"
            className={changeColorEquity ? 'button-change-color-right' : 'button-equity'}
            onClick={onClickButtonEquity}
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
            type="text"
            name="inicialContribution"
            value={inicialContribution}
            onChange={({ target }) => setInicialContribution(target.value)}
            placeholder="Ex.:R$0,00"
          />
        </label>
        <br />
        <label htmlFor="timer" className="timer sub-title">
          Prazo(em meses)
          <br />
          <input
            type="number"
            name="timer"
            value={timer}
            onChange={({ target }) => setTimer(target.value)}
            placeholder="Ex.: 12"
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
        onClick={clearInput}
      >
        Limpar campos
      </button>
    </div>
  );
}

export default SimulatorColumnLeft;
