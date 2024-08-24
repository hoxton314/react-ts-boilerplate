export interface Theme {
  colors: {
    text: string
    background: string
    primary: string
    secondary: string
    accent: string
  }
  breakpoints: {
    mobile: number
    tablet: number
    desktop: number
  }
}

export declare const lightTheme: Theme

export declare const darkTheme: Theme
