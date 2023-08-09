import React from 'react';
import { FlexBox, HoveredFlexBox } from '../../UI/Box';
import Theme from '../../styles/theme';
import { CardTitle } from '../../UI/Text';

interface CardProps {
  children: string | React.JSX.Element | React.JSX.Element[];
  hoverBg: string;
}

const Card: React.FC<CardProps> = ({ children, hoverBg }) => {
  const { main } = Theme.gradients;
  return (
    <FlexBox
      background={main}
      width='345px'
      height='150px'
      border-radius='10px'
      justify-content='center'
      background-color='black'
      align-items='center'
    >
      <HoveredFlexBox
        width='343px'
        height='148px'
        border-radius='10px'
        align-items='center'
        justify-content='center'
        background-color='black'
        hover-background-color={hoverBg}
      >
        <CardTitle>{children}</CardTitle>
      </HoveredFlexBox>
    </FlexBox>
  );
};

export default Card;
