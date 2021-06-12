import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Root, addPrefetchExcludes } from 'react-static';
import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

// import './app.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme}>
          <div className='content'></div>
        </GlobalStyle>
      </ThemeProvider>
    </Root>
  );
}

export default App;
