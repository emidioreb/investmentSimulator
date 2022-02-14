import PropTypes from 'prop-types';
import React, {
  createContext, useContext, useState, useEffect,
} from 'react';

const apiSimulationContext = createContext();

export function ApiSimulationProvider({ children }) {
  const [simulations, setSimulations] = useState('');
  const [verify, setVerify] = useState('');
  const [teste, setTeste] = useState('');
  // const [simulationRender, setSimulationRender] = useState(false);

  const url = 'http://localhost:3000/simulacoes';
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(url).then((response) => response.json())
      .then((data) => setSimulations(data));
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const global = {
    simulations,
    verify,
    setVerify,
    setTeste,
    teste,
    // simulationRender,
    // setSimulationRender,
  };

  return (
    <apiSimulationContext.Provider value={global}>
      {children}
    </apiSimulationContext.Provider>
  );
}

ApiSimulationProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function UseSimulationApi() {
  return useContext(apiSimulationContext);
}
