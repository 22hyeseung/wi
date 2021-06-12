import { createGlobalStyle, css } from 'styled-components';
import background from 'assets/background.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${background});
    background-color: ${(props) => props.theme.colors.background};
    background-repeat: repeat;
    background-size: cover;
    background-blend-mode: multiply;

    font-family: ${(props) => props.theme.font.main};
  }
`;

export const cssHelper = css`
  border: 1px solid ${(props) => props.theme.borderRadius};
`;
