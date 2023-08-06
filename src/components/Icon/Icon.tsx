import React from 'react';
import { IconContainer } from '../../UI/IconContainer';
import { icons } from './icons';

interface IconProps {
  name: string;
  size?: number;
  width?: string;
  height?: string;
  color?: string;
  handleClick?: () => void;
  viewBox?: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { name, size, color, handleClick, width, height, viewBox } = props;
  const iconPath: string = icons[name];

  return (
    <IconContainer onClick={handleClick}>
      <svg
        fill='none'
        viewBox={viewBox ?? '0 0 24 24'}
        width={width ?? size ?? '100%'}
        height={height ?? size ?? '100%'}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path fill={color ?? 'white'} d={iconPath} />
      </svg>
    </IconContainer>
  );
};

export default Icon;
