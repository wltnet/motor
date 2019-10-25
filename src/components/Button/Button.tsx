import * as React from "react";
import { Wrapper } from "./styled";
import { Props } from ".";

const Button = ({ title, onClick, disabled }: Props): React.ReactElement => (
  <Wrapper onClick={onClick} disabled={disabled}>
    {title}
  </Wrapper>
);

export default Button;
