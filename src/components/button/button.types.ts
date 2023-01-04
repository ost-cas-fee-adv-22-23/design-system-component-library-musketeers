import { ReactNode, MouseEvent } from 'react';

export enum ButtonType {
  DEFAULT = 'default',
  VIOLET = 'violet',
  GRADIENT = 'gradient',
  GREY = 'grey',
}

export enum ButtonSize {
  M = 'm',
  L = 'l',
  S = 's',
}

export type ButtonProps = {
  type?: ButtonType;
  size?: ButtonSize;
  label?: string;
  children?: ReactNode;
  isIconOnly?: boolean;
  showBorder?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
