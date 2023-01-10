import React from 'react';
import { NavigationProps } from './navigation.types';
import { NavigationItem } from '../navigation-item/navigation-item';
import { Avatar } from '../avatar/avatar';
import { AvatarSize } from '../avatar/avatar.types';

import Settings from '../../components/icons/Settings';
import LogOut from '../../components/icons/LogOut';

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <ul className="flex items-center gap-m">
      <NavigationItem
        onClick={() => {
          alert('Avatar clicked!');
        }}
      >
        <Avatar
          src="https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg"
          alt="Avatar"
          size={AvatarSize.S}
          showBorder={false}
        ></Avatar>
      </NavigationItem>

      <NavigationItem
        label="Settings"
        onClick={() => {
          alert('Settings clicked!');
        }}
      >
        <Settings width="16" height="16" />
      </NavigationItem>
      <NavigationItem
        label="Logout"
        onClick={() => {
          alert('Logout clicked!');
        }}
      >
        <LogOut width="16" height="16" />
      </NavigationItem>
    </ul>
  );
};
