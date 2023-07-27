import { styled } from 'styled-components';

export interface BoxProps {
  width?: string;
  height?: string;
  background?: string;
  border?: string;
}

export const Box = styled.div<BoxProps>`
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
`;

export interface RelativeBoxProps {
  zIndex?: string;
}

export const RelativeBox = styled(Box)<RelativeBoxProps>`
  position: relative;
  z-index: ${(props) => props.zIndex};
`;

export interface AbsoluteBoxProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zIndex?: number;
  alignIitems?: string;
  justifyContent?: string;
}

export const AbsoluteBox = styled(Box)<AbsoluteBoxProps>`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
`;

export interface FlexBoxProps {
  alignIitems?: string;
  justifyContent?: string;
}

export const FlexBox = styled(Box)<FlexBoxProps>`
  display: flex;
  align-items: ${(props) => props.alignIitems};
  justify-content: ${(props) => props.justifyContent};
`;
