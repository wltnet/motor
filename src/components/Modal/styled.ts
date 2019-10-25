import styled from "styled-components";

interface StyledProps {
  isOpen: boolean;
}

export const Wrapper = styled.div`
  display: ${({ isOpen }: StyledProps) => (isOpen ? `block` : `none`)};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const InnerWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
`;

export const Content = styled.div`
  background-color: #fefefe;
  padding: 30px;
  border: 1px solid #888;
`;

export const Close = styled.span`
  color: #aaaaaa;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
