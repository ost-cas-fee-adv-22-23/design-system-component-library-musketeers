import React from 'react';
import { StorybookMeta } from '../components.config';
import { Navigation } from './navigation';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavigationItem } from '../navigationItem/navigation-item';
import { Avatar } from '../avatar/avatar';
import { AvatarSize } from '../avatar/avatar.types';

import Settings from '../../components/icons/Settings';
import LogOut from '../../components/icons/LogOut';

export default {
  title: `${StorybookMeta.COMPONENTS}/Navigation`,
  component: Navigation,
  parameters: {
    componentSubtitle: `Renders a Navigation Component.`,
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
  return (
    <div className="bg-violet-700 p-s">
      <Navigation {...args}>
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
          <span className="animation-svg-settings">
            <Settings width="16" height="16" />
          </span>
        </NavigationItem>
        <NavigationItem
          label="Logout"
          onClick={() => {
            alert('Logout clicked!');
          }}
        >
          <span className="animation-svg-logout">
            <LogOut width="16" height="16" />
          </span>
        </NavigationItem>
      </Navigation>
    </div>
  );
};

export const NavigationComponent: ComponentStory<typeof Navigation> = Template.bind({});
NavigationComponent.parameters = {
  docs: {
    description: {
      component:
        "The Navigation component is basically just a wrapper for the navigation's UL element and provides some styling.<br> Displayed in use here with some [NavigationItem](http://localhost:6006/?path=/docs/components-navigationitem--navigation-item-component) components. See the [Header](http://localhost:6006/?path=/docs/components-header--header-with-navigation) component for full use.",
    },
  },
};
