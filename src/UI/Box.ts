import { styled } from 'styled-components';

export interface BoxProps {
  width?: string;
  height?: string;
  margin?: string;
  border?: string;
  padding?: string;
  background?: string;
  'max-width'?: string;
  'border-radius'?: string;
  'background-color'?: string;
}

export const Box = styled.div<BoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  max-width: ${(props) => props['max-width']};
  border-radius: ${(props) => props['border-radius']};
  background-color: ${(props) => props['background-color']};
`;

export interface PositionBoxProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zIndex?: number;
}

const PositionBox = styled(Box)<PositionBoxProps>`
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
`;

export const RelativeBox = styled(PositionBox)<PositionBoxProps>`
  position: relative;
`;

export const AbsoluteBox = styled(PositionBox)<PositionBoxProps>`
  position: absolute;
`;

export interface FixedBoxProps {
  display?: string;
  'align-items': string;
  'justify-content': string;
}

export const FixedBox = styled(PositionBox)<FixedBoxProps>`
  position: fixed;
  display: ${(props) => props.display};
  align-items: ${(props) => props['align-items']};
  justify-content: ${(props) => props['justify-content']};
`;

export interface FlexBoxProps {
  'align-items': string;
  'justify-content': string;
}

export const FlexBox = styled(Box)<FlexBoxProps>`
  display: flex;
  align-items: ${(props) => props['align-items']};
  justify-content: ${(props) => props['justify-content']};
`;

export interface HoveredFlexBoxProps {
  'hover-background-color'?: string;
}

export const HoveredFlexBox = styled(FlexBox)<HoveredFlexBoxProps>`
  transition: all 0.2s linear;

  &:hover {
    background: ${(props) => props['hover-background-color']};
  }
`;
