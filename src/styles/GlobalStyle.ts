import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }

  button {
    cursor: pointer;
    
    &:focus {
        outline: none;
    }
  }
`;

export default GlobalStyle;
