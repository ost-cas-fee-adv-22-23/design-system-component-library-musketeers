import { ReactNode } from 'react';

export type TabsProps = {
  children?: ReactNode;
};

export type TabsItemProps = {
  active: boolean;
  label: string;
  onClick?: () => void;
};
