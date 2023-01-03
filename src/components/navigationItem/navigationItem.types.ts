import { ReactNode, MouseEvent } from 'react';

export type NavigationItemProps = {
  children?: ReactNode;
  label?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
