import { ReactNode, MouseEvent } from 'react';

export enum ModalSize {
  S = 'S',
  XL = 'XL',
}

export type ModalProps = {
  size: ModalSize;
  header?: ReactNode;
  children?: ReactNode;
  onClickCancel: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickSave: (e: MouseEvent<HTMLButtonElement>) => void;
};
