import React from 'react';
import { AbsoluteBox, Box, RelativeBox } from '../../UI/Box';
import Icon from '../Icon/Icon';
import Theme from '../../styles/theme';
import { useState } from 'react';
import { SelectText } from '../../UI/Text';

interface LanguageSelectProps {
  label?: string;
  options?: string[];
  onChange?: () => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = (props) => {
  const { label, options, onChange } = props;
  const { whiteColor } = Theme.colors;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleArrowIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <RelativeBox>
      <Box margin='15px 48px' width='110px' height='30px' color={whiteColor}>
        <SelectText>{label}</SelectText>
      </Box>
      <AbsoluteBox top='35%' right='20%'>
        {!isOpen ? (
          <Icon
            name='arrowDown'
            size={20}
            viewBox='0 0 20 20'
            handleClick={handleArrowIconClick}
          />
        ) : (
          <Icon
            name='arrowUp'
            width='17px'
            height='10px'
            viewBox='0 0 17 10'
            handleClick={handleArrowIconClick}
          />
        )}
      </AbsoluteBox>
      {isOpen ? (
        <AbsoluteBox right='34%'>
          {options?.map((option) => (
            <Box
              onChange={onChange}
              key={option}
              padding='5px'
              border-bottom={`1px solid ${whiteColor}`}
            >
              <SelectText>{option}</SelectText>
            </Box>
          ))}
        </AbsoluteBox>
      ) : null}
    </RelativeBox>
  );
};
export default LanguageSelect;
