import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { usePanzoom, transform } from './usePanzoom';

const Panzoom = ({ children, maxZoom = 8, minZoom = 0.2 }) => {
  const [spring, { pan, zoom, panzoom }] = usePanzoom({ minZoom, maxZoom });

  return (
    <div
      style={{
        overflow: 'hidden',
        height: '100vh',
        width: '100vw'
      }}
      {...panzoom()}
    >
      <animated.div
        style={{
          transform: transform(spring.xy, spring.scale)
        }}
      >
        {children}
      </animated.div>
    </div>
  );
};

Panzoom.propTypes = {
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number
};

export default Panzoom;
