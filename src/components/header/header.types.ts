import { ReactNode, MouseEvent } from 'react';

export type HeaderProps = {
  children?: ReactNode;
  onClickLogo: (e: MouseEvent<HTMLAnchorElement>) => void;
};
