import { Button } from '../UI/Button';
import { LanSelect } from '../UI/LanSelect';
import { Logo } from '../UI/Logo';
import LogoImage from '../assets/logo.svg';

function Header() {
  return (
    <>
      <Logo src={LogoImage}></Logo>
      <LanSelect>English</LanSelect>
      <Button variant='secondary' width='157px' height='45px'>
        Sign up
      </Button>
      <Button variant='primary' width='262px' height='45px'>
        Enter to the chat
      </Button>
    </>
  );
}
export default Header;
