import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const InfoContextLeft = createContext();

export function InfoProviderLeft({ children }) {
  const [income, setIncome] = useState('');
  const [inicialContribution, setInicialContribution] = useState('');
  const [timer, setTimer] = useState('');
  const [IPCA, setIPCA] = useState('');

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const globalInfo = {
    income,
    setIncome,
    inicialContribution,
    setInicialContribution,
    timer,
    setTimer,
    IPCA,
    setIPCA,
  };

  // const global = React.useMemo(() => ({
  //   income,
  //   setIncome,
  //   inicialContribution,
  //   setInicialContribution,
  //   timer,
  //   setTimer,
  //   IPCA,
  //   setIPCA,
  // })[income], [inicialContribution], [timer], [IPCA]);

  return (
    <InfoContextLeft.Provider value={globalInfo}>
      {children}
    </InfoContextLeft.Provider>
  );
}

InfoProviderLeft.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function UseInfoLeft() {
  return useContext(InfoContextLeft);
}
