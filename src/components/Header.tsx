import { Button } from '../UI/Button';
import { HeaderContainer } from '../UI/HeaderContainer';
import { FlexBox } from '../UI/Box';
import Icon from './Icon/Icon';
import { Wrapper } from '../UI/Wrapper';
import LanguageSelect from './Language Select/LanguageSelect';

function Header() {
  const handleChange = () => {
    console.log('change');
  };

  return (
    <HeaderContainer>
      <Wrapper>
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
      </Wrapper>
    </HeaderContainer>
  );
}
export default Header;
