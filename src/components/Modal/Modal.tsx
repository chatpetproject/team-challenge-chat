import React from 'react';
import Icon from '../Icon/Icon';
import Theme from '../../styles/theme';
import { ModalTitle } from '../../UI/Text';
import { AbsoluteBox, Box, FixedBox, RelativeBox } from '../../UI/Box';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: string | React.JSX.Element | React.JSX.Element[];
  titleText?: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, children, titleText } = props;
  const { blackColors, whiteColor } = Theme.colors;

  if (!isOpen) return null;

  return (
    <FixedBox
      top='0px'
      width='100%'
      height='100%'
      display='flex'
      align-items='center'
      justify-content='center'
      background-color={blackColors[2]}
      onClick={onClose}
    >
      <Box
        width='50%'
        height='50%'
        padding='30px'
        border-radius='10px'
        background-color={blackColors[0]}
        border={`1px solid ${whiteColor}`}
      >
        <RelativeBox>
          <AbsoluteBox top='0px' right='0px'>
            <Icon name='cross' size={24} handleClick={onClose} />
          </AbsoluteBox>
          {titleText && <ModalTitle>{titleText}</ModalTitle>}
          {children}
        </RelativeBox>
      </Box>
    </FixedBox>
  );
};

export default Modal;
