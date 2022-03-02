import React from 'react';
import PropTypes from 'prop-types';
import { InfoProviderLeft } from './UseInfoLeft';
import { InfoProviderRight } from './UseInfoRight';
import { ApiSimulationProvider } from './UseApiSimulation';
import { ApiProvider } from './UseApi';

export default function Providers({ children }) {
  return (
    <InfoProviderLeft>
      <InfoProviderRight>
        <ApiProvider>
          <ApiSimulationProvider>
            {children}
          </ApiSimulationProvider>
        </ApiProvider>
      </InfoProviderRight>
    </InfoProviderLeft>
  );
}

Providers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
