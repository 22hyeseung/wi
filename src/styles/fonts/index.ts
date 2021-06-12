
import { createGlobalStyle } from 'styled-components';
import SPWoff from './DXmuSPStd-L.woff';
import SPOtf from './DXmuSPStd-L.otf';


const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'SPMJ';
    src: local('DXmuSPStd-L'), url(${SPWoff}) format('woff'), url(${SPOtf}) format('otf');
    font-weight: 300;
    font-style: normal;
  }
`;

export default GlobalFont;