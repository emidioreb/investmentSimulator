import PropTypes from 'prop-types';
import React, {
  createContext, useContext, useState, useEffect,
} from 'react';

const apiContext = createContext();

export function ApiProvider({ children }) {
  const [indicators, setIndicators] = useState('');

  const url = 'http://localhost:3000/indicadores?';
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(url).then((response) => response.json())
      .then((data) => setIndicators(data));
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const global = {
    indicators,
  };

  return (
    <apiContext.Provider value={global}>
      {children}
    </apiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function UseApi() {
  return useContext(apiContext);
}
