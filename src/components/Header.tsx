import { Button } from '../UI/Button';
import { LanSelect } from '../UI/LanSelect';
import { Logo } from '../UI/Logo';
import LogoImage from '../assets/logo.svg';
import { HeaderContainer } from '../UI/HeaderContainer';
import { Wrapper } from '../UI/Wrapper';
import { NavMenu } from '../UI/NavMenu';
import { NavList } from '../UI/NavList';

function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <NavMenu>
          <Logo src={LogoImage}></Logo>
          <nav>
            <NavList>
              <li>
                <LanSelect>English</LanSelect>
              </li>
              <li>
                <Button variant='secondary' width='157px' height='45px'>
                  Sign up
                </Button>
              </li>
              <li>
                <Button variant='primary' width='262px' height='45px'>
                  Enter to the chat
                </Button>
              </li>
            </NavList>
          </nav>
        </NavMenu>
      </Wrapper>
    </HeaderContainer>
  );
}
export default Header;
