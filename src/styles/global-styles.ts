import Theme from './theme';
import { createGlobalStyle } from 'styled-components';

const { blackColors, whiteColor } = Theme.colors;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${whiteColor};
    font-family: 'Inter', sans-serif;
    background-color: ${blackColors[0]};
  }

  h1 {
    font-size: 64px;
    font-weight: 600;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
  }

  h3 {
    font-size: 32px;
    font-weight: 400;
  }

  h4 {
    font-size: 18px;
    font-weight: 400;
  }

  h5 {
    font-size: 14px;
    font-weight: 300;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
