import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Root, addPrefetchExcludes } from 'react-static';
import { GlobalStyle } from 'styles/GlobalStyle';
import GlobalFonts from 'styles/fonts'; //4-1
import { theme } from 'styles/theme';
import Main from 'components/Main';

// import './app.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <GlobalStyle theme={theme} />
        <Main />
      </ThemeProvider>
    </Root>
  );
}

export default App;
