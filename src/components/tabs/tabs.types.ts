import { ReactNode } from 'react';

export type TabsProps = {
  children?: ReactNode;
};

export type TabsItemProps = {
  active: boolean;
  label?: ReactNode;
  onClick?: () => void;
};

export type TabsState = {
  activeTab: string;
};
