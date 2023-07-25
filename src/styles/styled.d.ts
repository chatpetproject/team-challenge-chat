import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blueColor: string[];
      pinkColor: string;
      orangeColor: string;
      violetColor: string;
      blackColor: string[];
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
