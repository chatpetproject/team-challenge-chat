import styled from 'styled-components';
import ArrowDownImg from '../assets/arrow-down.svg';

export const LanSelect = styled.div`
  color: ${(props) => props.theme.colors.whiteColor};
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  background: url(${ArrowDownImg}) no-repeat;
  background-position: right;
  width: 110px;
  height: 30px;
`;
