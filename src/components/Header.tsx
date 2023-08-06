import { Button } from '../UI/Button';
import { LanSelect } from '../UI/LanSelect';
import { HeaderContainer } from '../UI/HeaderContainer';
import { FlexBox } from '../UI/Box';
import Icon from './Icon/Icon';
import { Wrapper } from '../UI/Wrapper';

function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <FlexBox justifyContent='space-between' alignItems='center'>
          <Icon
            name='logo'
            width='78px'
            height='39px'
            viewBox='0 0 75 31'
          ></Icon>
          <FlexBox>
            <LanSelect>English</LanSelect>
            <Button variant='secondary' width='157px' height='45px'>
              Sign up
            </Button>
            <Button variant='primary' width='262px' height='45px'>
              Enter to the chat
            </Button>
          </FlexBox>
        </FlexBox>
      </Wrapper>
    </HeaderContainer>
  );
}
export default Header;
