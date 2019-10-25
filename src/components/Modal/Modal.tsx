import * as React from "react";
import { Wrapper, Content, Close, InnerWrapper } from "./styled";
import { Props } from ".";

const Modal = ({ children, isOpen, closeModal }: Props): React.ReactElement => (
  <Wrapper isOpen={isOpen}>
    <InnerWrapper>
      <Close onClick={closeModal}>&times;</Close>
      <Content>{children}</Content>
    </InnerWrapper>
  </Wrapper>
);

export default Modal;
