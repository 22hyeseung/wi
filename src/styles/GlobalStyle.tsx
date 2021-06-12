import { createGlobalStyle, css } from 'styled-components';
import background from 'assets/background.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${background});
    background-color: ${(props) => props.theme.colors.background};
    background-repeat: repeat;
    background-size: cover;
    background-blend-mode: multiply;
    filter: blur(0.3px);

    font-family: ${(props) => props.theme.font.main};
    margin: 0;
    width: 100%;

    color: ${(props) => props.theme.colors.text}
  }
`;

export const cssHelper = css`
  border: 1px solid ${(props) => props.theme.borderRadius};
`;
