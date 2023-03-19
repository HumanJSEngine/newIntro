/** @format */

import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'TheJamsil5Bold';
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
    transition: all 0.7s;
}
`;
