import { Box } from '../../UI/Box';
import { Button } from '../../UI/Button';

import { FooterStyle } from './style';

const Footer = () => {
  return (
    <FooterStyle>
      <Box padding='38px 240px'>
        <Button variant='secondary' width='238px' height='43px'>
          Cookies policy
        </Button>
      </Box>
    </FooterStyle>
  );
};

export default Footer;
