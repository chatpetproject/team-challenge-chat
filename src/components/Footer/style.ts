import { styled } from 'styled-components';

export interface FooterProps {
  padding?: string;
}

export const FooterStyle = styled.footer<FooterProps>`
  width: 100%;
  height: 120px;
  padding: ${(props) => props.padding};
  border-top: ${(props) => `1px solid ${props.theme.colors.greyColor}`};
`;
