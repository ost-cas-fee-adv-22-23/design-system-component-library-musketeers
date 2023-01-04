import React from 'react';
import { TabsProps } from './tabs.types';

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  return (
    <div className={'bg-slate-200 rounded-default p-1 w-fit'}>
      <ul className={'flex flex-row'}>{children}</ul>
    </div>
  );
};
