import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blueColors: string[];
      pinkColor: string;
      orangeColor: string;
      violetColor: string;
      blackColors: string[];
      greyColor: string;
      whiteColor: string;
    };
    gradients: {
      main: string;
      secondary: string;
      header: string;
    };
  }
}
