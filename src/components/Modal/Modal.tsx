import React from 'react';
import { ModalContent, ModalOverlay } from './Modal.style';
import Icon from '../Icon/Icon';
import { AbsoluteBox, RelativeBox } from '../../UI/Box';
import { ModalTitle } from '../../UI/Text';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: string | React.JSX.Element | React.JSX.Element[];
  titleText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  titleText,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <RelativeBox>
          <AbsoluteBox top='0px' right='0px'>
            <Icon name='cross' size={24} handleClick={onClose} />
          </AbsoluteBox>
          {titleText && <ModalTitle color='whiteColor'>{titleText}</ModalTitle>}
          {children}
        </RelativeBox>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
