import React from 'react';
import { IconContainer } from '../../UI/IconContainer';
import { icons } from './icons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  handleClick?: () => void;
}

const Icon: React.FC<IconProps> = (props) => {
  const { name, size, color, handleClick } = props;
  const iconPath: string = icons[name];

  return (
    <IconContainer onClick={handleClick}>
      <svg
        fill='none'
        viewBox='0 0 24 24'
        width={size ?? '100%'}
        height={size ?? '100%'}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path fill={color ?? 'white'} d={iconPath} />
      </svg>
    </IconContainer>
  );
};

export default Icon;
