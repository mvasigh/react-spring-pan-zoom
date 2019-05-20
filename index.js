import React, { useState } from 'react';
import { render } from 'react-dom';
import { Panzoom } from './src/lib';
import './index.css';

const Box = () => (
  <div
    style={{
      width: '600px',
      height: '600px',
      display: 'flex',
      fontFamily: 'sans-serif',
      fontSize: '1.4rem',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'salmon',
      color: 'white',
      textAlign: 'center',
      userSelect: 'none'
    }}
  >
    Click and drag to pan me around! <br />
    Use your mouse wheel to zoom in and out.
  </div>
);

const App = props => {
  const [paused, setPaused] = useState(false);

  const togglePause = () => setPaused(!paused);

  return (
    <React.Fragment>
      <div>
        <button onClick={togglePause}>{paused ? 'Resume' : 'Pause'}</button>
      </div>
      <Panzoom paused={paused} maxZoom={2} minZoom={0.2}>
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box />
        </div>
      </Panzoom>
    </React.Fragment>
  );
};

render(<App />, document.getElementById('app'));
