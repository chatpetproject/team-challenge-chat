import React from 'react';
import { Button } from '../UI/Button';
import { HeaderContainer } from '../UI/HeaderContainer';
import { Box, FlexBox } from '../UI/Box';
import Icon from './Icon/Icon';
import LanguageSelect from './Language Select/LanguageSelect';

function Header() {
  const handleChange = () => {
    console.log('change');
  };

  return (
    <HeaderContainer>
      <Box max-width='1440px' margin='0 auto'>
        <FlexBox justify-content='space-between' align-items='center'>
          <Icon
            name='logo'
            width='78px'
            height='39px'
            viewBox='0 0 75 31'
          ></Icon>
          <FlexBox>
            <LanguageSelect
              label='English'
              options={['English']}
              onChange={handleChange}
            />
            <Button variant='secondary' width='157px' height='45px'>
              Sign up
            </Button>
            <Button variant='primary' width='262px' height='45px'>
              Enter to the chat
            </Button>
          </FlexBox>
        </FlexBox>
      </Box>
    </HeaderContainer>
  );
}
export default Header;
