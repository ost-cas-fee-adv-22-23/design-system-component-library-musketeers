import React from 'react';
import { StorybookMeta } from '../components.config';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './header';

import { Navigation } from '../navigation/navigation';
import { NavigationItem } from '../navigationItem/navigation-item';
import { Avatar } from '../avatar/avatar';
import { AvatarSize } from '../avatar/avatar.types';

import Settings from '../../components/icons/Settings';
import LogOut from '../../components/icons/LogOut';

export default {
  title: `${StorybookMeta.COMPONENTS}/Header`,
  component: Header,
  parameters: {
    componentSubtitle: `Renders a Header component, including the Mumble Logo and click handler. Children are used for filling the navigation area to the right. Usually, the NavigationItem component is used here. (See examples below)`,
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args}></Header>;
};

export const HeaderComponent: ComponentStory<typeof Header> = Template.bind({});
HeaderComponent.args = {
  iconLinkUrl: '#',
};

export const HeaderWithNavigation: ComponentStory<typeof Header> = (args) => {
  return (
    <Header {...args}>
      <Navigation>
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
            alert('LogOut clicked!');
          }}
        >
          <span className="animation-svg-logout">
            <LogOut width="16" height="16" />
          </span>
        </NavigationItem>
      </Navigation>
    </Header>
  );
};
HeaderWithNavigation.parameters = {
  docs: {
    description: {
      story:
        'Full example with [Navigation](http://localhost:6006/?path=/docs/components-navigation--navigation-component) and [NavigationItem](http://localhost:6006/?path=/docs/components-navigationitem--navigation-item-component) components.)',
    },
  },
};
