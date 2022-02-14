import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const InfoContextRight = createContext();

export function InfoProviderRight({ children }) {
  const [indexing, setIndexing] = useState('');
  const [monthContribution, setMonthContribution] = useState('');
  const [profitability, setProfitability] = useState('');
  const [CDI, setCDI] = useState('');
  const [changeColorBefore, setChangeColorBefore] = useState(false);
  const [changeColorFix, setChangeColorFix] = useState(false);
  const [changeColorAfter, setChangeColorAfter] = useState(false);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const globalInfo = {
    indexing,
    setIndexing,
    monthContribution,
    setMonthContribution,
    profitability,
    setProfitability,
    CDI,
    setCDI,
    changeColorBefore,
    setChangeColorBefore,
    changeColorFix,
    setChangeColorFix,
    changeColorAfter,
    setChangeColorAfter,
  };

  return (
    <InfoContextRight.Provider value={globalInfo}>
      {children}
    </InfoContextRight.Provider>
  );
}

InfoProviderRight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function UseInfoRight() {
  return useContext(InfoContextRight);
}
