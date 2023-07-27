import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.blackColors[2]};
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.blackColors[0]};
  padding: 30px;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  border: 1px solid ${(props) => props.theme.colors.whiteColor};
`;
