export interface IColorShape {
  default: string;
  dark?: string;
  medium?: string;
  light?: string;
}

export interface IColors {
  primary: IColorShape;
  secondary: IColorShape;
  tertiary: IColorShape;
  background: IColorShape;
  misc: {
    [key: string]: string;
  };
}

export interface ISpacing {
  '0': number;
  '2': number;
  '4': number;
  '8': number;
  '12': number;
  '14': number;
  '16': number;
  '18': number;
  '20': number;
  '24': number;
  '32': number;
  '36': number;
  '38': number;
  '40': number;
  '42': number;
  '48': number;
  '56': number;
  '64': number;
}

export interface ITheme {
  colors: IColors;
  spacing: ISpacing;
}