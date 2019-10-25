import styled from "styled-components";

type StyledProps = {
  activeImage: number;
  index: number;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  flex: 1;
  opacity: ${({ activeImage, index }: StyledProps) =>
    activeImage === index ? `1` : `0.5`};
  transform: ${({ activeImage, index }: StyledProps) =>
    activeImage === index ? `scale(1)` : `scale(0.7)`};
  transition: opacity 300ms linear,
    transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export const Image = styled.img`
  width: 250px;
`;
