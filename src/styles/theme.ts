import { DefaultTheme } from 'styled-components';

const size = {
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1920px',
};

const colors = {
  blueColors: ['#4000F4', '#5013FC'],
  pinkColor: '#D900A1',
  violetColor: '#C556CC',
  orangeColor: '#FF8436',
  blackColors: ['#030303', '#202329', '#03030399'],
  greyColor: '#909090',
  whiteColor: '#F9F9F9',
};

const gradients = {
  main: `linear-gradient(135deg, ${colors.blueColors[0]} 0%, ${colors.pinkColor} 50.26%, ${colors.orangeColor} 100%)`,
  secondary: `linear-gradient(135deg, ${colors.blueColors[1]} 0%, ${colors.violetColor} 100%)`,
};

const Theme: DefaultTheme = {
  colors,
  gradients,
  size,
};
export default Theme;
