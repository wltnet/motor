import styled from "styled-components";

interface StyledProps {
  activeImage: number;
  length: number;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  overflow-x: hidden;
`;

export const CardWrapper = styled.div`
  position: relative;
  max-width: 250px;
  margin: 0 auto;
`;

export const InnerWrapper = styled.div`
  display: flex;
  position: absolute;
  margin-left: -125px;
  transform: ${({ activeImage, length }: StyledProps) =>
    `translateX(-${activeImage * (100 / length)}%)`};
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
`;
