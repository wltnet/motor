import React from "react";
import ImagesDisplay from "./pages/ImagesDisplay";
import { Wrapper } from "./styled";
import { GlobalStyle } from "./styles";

const App: React.FC = () => (
  <Wrapper>
    <GlobalStyle />
    <ImagesDisplay />
  </Wrapper>
);

export default App;
