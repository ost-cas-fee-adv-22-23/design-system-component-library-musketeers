import React from 'react';
import { NavigationItemProps } from './navigation-item.types';

export const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const navigationItemBaseClasses =
    'transition-colors hover:bg-violet-600 h-xxl w-xxl rounded-default grid content-center text-white';

  return (
    <li className={navigationItemBaseClasses}>
      <button onClick={props.onClick} className="grid gap-xxs justify-items-center">
        {props.children}
        <span className="label-s text-white">{props.label}</span>
      </button>
    </li>
  );
};
