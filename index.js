import React from 'react';
import { render } from 'react-dom';
import { Panzoom } from './src/lib';
import './index.css';

const Box = () => (
  <div
    style={{
      width: '600px',
      height: '600px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'salmon',
      color: 'white',
      textAlign: 'center'
    }}
  >
    Click and drag to pan me around! <br />
    Use your mouse wheel to zoom in and out.
  </div>
);

const App = props => {
  return (
    <Panzoom maxZoom={2} minZoom={0.2}>
      <Box />
    </Panzoom>
  );
};

render(<App />, document.getElementById('app'));
