import React from 'react';
import { NavigationItemProps } from './navigation-item.types';

export const NavigationItem: React.FC<NavigationItemProps> = ({ elementType: Component = 'button', ...props }) => {
  const navigationItemBaseClasses =
    'group transition-colors hover:bg-violet-600 h-xxl w-xxl rounded-default grid content-center text-white cursor-pointer';
  const buttonBaseClasses = 'grid gap-xxs justify-items-center';
  const labelBaseClasses = 'label-s text-white';

  if (props.href) {
    return (
      <li className={navigationItemBaseClasses}>
        <Component href={props.href} className={buttonBaseClasses} data-e2e={props.e2e}>
          {props.children}
          <span className={labelBaseClasses}>{props.label}</span>
        </Component>
      </li>
    );
  }

  return (
    <li className={navigationItemBaseClasses}>
      <Component onClick={props.onClick} className={buttonBaseClasses} data-e2e={props.e2e}>
        {props.children}
        <span className={labelBaseClasses}>{props.label}</span>
      </Component>
    </li>
  );
};
