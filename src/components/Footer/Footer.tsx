import { Box } from '../../UI/Box';
import { Button } from '../../UI/Button';

import { FooterStyle } from './style';

const Footer = () => {
  return (
    <FooterStyle padding='38px 15px 0'>
      <Box max-width='1440px' margin='0 auto'>
        <Button variant='secondary' width='238px' height='43px'>
          Cookies policy
        </Button>
      </Box>
    </FooterStyle>
  );
};

export default Footer;
