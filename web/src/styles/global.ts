import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/images/background.svg';
import theme from './theme';

export type ThemeProps = {
    theme: typeof theme;
};

export const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Open Sans', 'Arial', 'Helvetica', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
  /*BARRA DE ROLAGEM*/
::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 3px;
}
::-webkit-scrollbar-track-piece{
    background-color: transparent;
}
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

}

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: contain;
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    color: ${(props) => props.theme.colors.primary}
  }
  a.hover {
    text-decoration: underline;
  }

  body, input, p, a, button {
    color: ${(props) => props.theme.colors.textLight};
    text-decoration: none;
    outline: none;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  small {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
  
`;
