import { styled } from 'styled-components';

interface IconContainerProps {}

export const IconContainer = styled.span<IconContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
