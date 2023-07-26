import React from 'react';

import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import Confetti from 'react-confetti';

function App() {
  return (
    <>
      <Layout />
      <Confetti
        colors={[
          '#FF69B4',
          '#FFD1DC',
          '#FF007F',
          '#FFB6C1',
          '#FF1493',
          '#FFC0CB',
          '#FF4081',
          '#FFA8A8',
          '#FFD4E5',
          '#FF69A4',
          '#861453',
          '#e0218a',
          '#430a29',
          '#fff',
        ]}
        numberOfPieces={1000}
        gravity={0.001}
      />
      <GlobalStyles />
    </>
  );
}

export default App;
