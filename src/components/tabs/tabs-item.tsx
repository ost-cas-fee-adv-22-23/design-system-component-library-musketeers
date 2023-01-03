import React from 'react';
import { TabsItemProps } from './tabs.types';

export const TabsItem: React.FC<TabsItemProps> = (props) => {
  const baseClasses = ['rounded-default p-xs cursor-pointer label-l transition'];

  if (props.active) {
    baseClasses.push('bg-white text-violet-600 hover:text-violet-600');
  } else {
    baseClasses.push('text-slate-600 hover:text-slate-800');
  }

  return (
    <li onClick={props.onClick} className={baseClasses.join(' ')}>
      {props.label}
    </li>
  );
};
