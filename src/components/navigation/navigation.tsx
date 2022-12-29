import React from 'react';
import { NavigationProps } from './navigation.types';
import { Avatar } from '../avatar/avatar';
import { AvatarSize } from '../avatar/avatar.types';

import Settings from '../../assets/icons/Settings.svg';
import LogOut from '../../assets/icons/Log Out.svg';

export const Navigation: React.FC<NavigationProps> = () => {
  const navigationItemBaseClasses =
    'transition-colors hover:bg-violet-600 h-xxl w-xxl rounded-default grid content-center text-white';

  return (
    <ul className="flex items-center gap-m">
      <li className={navigationItemBaseClasses}>
        <a href="" className="grid gap-xxs justify-items-center">
          <Avatar
            src="https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg"
            alt="Avatar"
            size={AvatarSize.S}
            showBorder={false}
          ></Avatar>
        </a>
      </li>
      <li className={navigationItemBaseClasses}>
        <a href="" className="grid gap-xxs justify-items-center">
          <Settings width="16" height="16" />
          <span className="label-s text-white">Settings</span>
        </a>
      </li>
      <li className={navigationItemBaseClasses}>
        <a href="" className="grid gap-xxs justify-items-center">
          <LogOut width="16" height="16" />
          <span className="label-s text-white">Logout</span>
        </a>
      </li>
    </ul>
  );
};
