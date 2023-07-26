import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }
  
  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #FF1493;
    --secondary: #861453;
    --tertiary: #e0218a;
    --quaternary: #430a29;
    --quinary:#FFD1DC;
    --senary: #fff;
    --white: #fff;
    --gray: #FFB6C1;
    --chat-input: #FF4081;
    --symbol: #FFB6C1;

    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #FFB6C1;

    --link: #5d80d6;

    --rocketseat: #6633cc;
  }

  body {
    cursor: url('./c.png'), auto;
  }
`;
