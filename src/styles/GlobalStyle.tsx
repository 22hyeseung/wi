import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const cssHelper = css`
  border: 1px solid ${(props) => props.theme.borderRadius};
`;

export const FancyDiv = styled.div``;
