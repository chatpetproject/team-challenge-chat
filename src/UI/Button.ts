import styled from 'styled-components';
interface ButtonProps {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  width: string;
  height: string;
  margin?: string;
}

export const Button = styled.button<ButtonProps>`
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  border-radius: 10px;
  transition: all 0.2s linear;
  margin: ${(props) => props.margin};
  color: ${(props) => props.theme.colors.whiteColor};

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${(props) =>
    props.variant === 'primary' &&
    `
    border: 3px;
    background: ${props.theme.gradients.main};
    `}

  &:hover {
    ${(props) => props.variant === 'primary' && `border: solid #fff;`}
  }

  ${(props) =>
    props.variant === 'secondary' &&
    `
    background: transparent;
    border: 1px solid ${props.theme.colors.whiteColor};
    `}

  &:hover {
    ${(props) =>
      props.variant === 'secondary' &&
      `
        border: 0;
        color: ${props.theme.colors.blackColors[1]};
        background: ${props.theme.colors.whiteColor};
    `}
  }

  &:active {
    opacity: 0.7;
  }
`;
