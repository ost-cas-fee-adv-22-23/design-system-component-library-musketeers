import React from 'react';
import { StorybookMeta } from '../components.config';
import { NavigationItem } from './navigation-item';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from '../avatar/avatar';
import { AvatarSize } from '../avatar/avatar.types';
import Settings from '../../components/icons/Settings';

export default {
  title: `${StorybookMeta.COMPONENTS}/NavigationItem`,
  component: NavigationItem,
} as ComponentMeta<typeof NavigationItem>;

const Template: ComponentStory<typeof NavigationItem> = (args) => {
  return (
    <div className="bg-violet-700 p-s">
      <NavigationItem {...args}></NavigationItem>
    </div>
  );
};

export const NavigationItemComponent: ComponentStory<typeof NavigationItem> = Template.bind({});
NavigationItemComponent.args = {
  label: 'Item Label',
};
NavigationItemComponent.parameters = {
  docs: {
    description: {
      component:
        'Basic usage with a label only<br>(Please note: The wrapping div is only there for presentational reasons.)',
    },
  },
};

const TemplateWithAvatar: ComponentStory<typeof NavigationItem> = (args) => {
  return (
    <div className="bg-violet-700 p-s">
      <NavigationItem {...args}>
        <Avatar
          src="https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg"
          alt="Avatar"
          size={AvatarSize.S}
          showBorder={false}
        ></Avatar>
      </NavigationItem>
    </div>
  );
};

export const NavigationItemWithAvatar: ComponentStory<typeof NavigationItem> = TemplateWithAvatar.bind({});
NavigationItemWithAvatar.args = {};
NavigationItemWithAvatar.parameters = {
  docs: {
    description: {
      story: 'Demo usage with an [Avatar](http://localhost:6006/?path=/docs/components-avatar--avatar-component)',
    },
  },
};

const TemplateWithIcon: ComponentStory<typeof NavigationItem> = (args) => {
  return (
    <div className="bg-violet-700 p-s">
      <NavigationItem {...args}>
        <Settings width="16" height="16" />
      </NavigationItem>
    </div>
  );
};

export const NavigationItemWithIcon: ComponentStory<typeof NavigationItem> = TemplateWithIcon.bind({});
NavigationItemWithIcon.args = {
  label: 'Item Label',
};
NavigationItemWithIcon.parameters = {
  docs: {
    description: {
      story: 'Demo usage with an [Icon](http://localhost:6006/?path=/docs/foundations-icons--page)',
    },
  },
};
