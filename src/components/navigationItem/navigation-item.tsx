import React from 'react';
import { NavigationItemProps } from './navigation-item.types';

export const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const navigationItemBaseClasses =
    'group transition-colors hover:bg-violet-600 h-xxl w-xxl rounded-default grid content-center text-white';
  const buttonBaseClasses = 'grid gap-xxs justify-items-center';
  const labelBaseClasses = 'label-s text-white';

  return (
    <li className={navigationItemBaseClasses}>
      <button onClick={props.onClick} className={buttonBaseClasses}>
        {props.children}
        <span className={labelBaseClasses}>{props.label}</span>
      </button>
    </li>
  );
};
